// 配置参数
/**
 * {
        url: '/xxx',
        baseURL: '/xxx',
        method: 'post',
        defaultData: {},
        headers: {},
        auth: true,
        gatewayEnable: true,
        showErrorToast: true,
        axios: defaultAxios
    }
 */
export default {
  getUserInfo: "/test/userinfo",
  getUserInfo2: {
    url: "/user",
    baseURL: "/aaf",
    method: "post",
    default: {},
    headers: {},
    auth: true,
    gatewayEnable: true
  },
  getUserInfo3: ["getUserInfo", "getUserInfo2"] // 并发请求
}
