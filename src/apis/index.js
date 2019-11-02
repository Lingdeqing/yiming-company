// import { Message } from "element-ui"
import axios from "./axios"
import apis from "./apis"
import { login } from "common/login"

const defaultOptions = {
  method: "post",
  defaultData: {},
  defaultHeaders: {},
  auth: true,
  gatewayEnable: true,
  showErrorToast: true,
  axios
}

function isArray(a) {
  return Object.prototype.toString.call(a) === "[object Array]"
}

function createApi() {
  const $http = {}
  Object.keys(apis).forEach(fname => {
    $http[fname] = function(data, options = {}) {
      data = data || {}
      let config = apis[fname]
      if (typeof config === "string") {
        config = {
          ...defaultOptions,
          url: config
        }
      } else if (isArray(config)) {
        // 合并接口调用
        if (isArray(data)) {
          return Promise.all(
            config.map((config, i) => {
              if (typeof config === "string" && $http[config]) {
                const params = data[i] || {}
                return $http[config](params.data || {}, {
                  ...(params.options || {}),
                  showErrorToast: false
                }).catch(result => {
                  return {
                    code: result.code || -500,
                    message: result.message || "未知错误",
                    error: result
                  }
                })
              } else {
                throw new Error(`Function ${config} is not exist!`)
              }
            })
          )
        } else {
          throw new Error(`Params for $http.${fname} must be array!`)
        }
      } else if (typeof config === "object") {
        config = {
          ...defaultOptions,
          ...config
        }
      } else {
        throw new Error(
          `Config for api ${fname} must be a url string or object or array!`
        )
      }

      options = {
        ...config,
        ...options,
        headers: { ...config.defaultHeaders, ...options.headers }
      }

      data = {
        ...options.defaultData,
        ...data
      }

      //   if (options.auth) {
      //   }

      if (options.gatewayEnable) {
        data = [
          {
            enabled: true
          },
          data
        ]
      }

      if (options.method === "post") {
        // post
        options.data = data
      } else {
        // get
        options.params = data
      }

      return options
        .axios(options)
        .then(response => {
          const result = response.data
          if (result.code === 401) {
            // 未登录 跳转登录
            return login()
          }
          if (options.showErrorToast && result.code !== 0) {
            return Promise.reject(result)
          }
          return result
        })
        .catch(error => {
          if (error && error.response && error.response.status === 401) {
            // 未登录 跳转登录
            return login()
          }
          if (options.showErrorToast) {
            // Message({
            //   message: error.message || "未知错误",
            //   type: "error",
            //   duration: 5 * 1000
            // })
          }
          return Promise.reject(error)
        })
    }
  })
  return $http
}

const $http = createApi()
export default $http

window.apiFuncs = $http
