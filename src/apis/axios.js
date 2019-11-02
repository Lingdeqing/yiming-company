import axios from "axios"
import { BASE_URL } from "common/config"

function netError(error) {
  if (error.message === "Network Error") {
    error.message = "网络错误，请检查您的网络状况后重试!!!"
  }
  return Promise.reject(error)
}
const defaultAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
})

// request拦截器
defaultAxios.interceptors.request.use(
  function(config) {
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// respone拦截器
defaultAxios.interceptors.response.use(function(response) {
  return response
}, netError)

export default defaultAxios
