// 接口文档：
// https://wiki.n.miui.com/pages/viewpage.action?pageId=134820725
export function login(followup = location.href) {
  location = `${location.origin}/app/shop/login?followup=${encodeURIComponent(
    followup
  )}`
}

export function logout(followup = location.href) {
  location = `${location.origin}/app/shop/logout?followup=${encodeURIComponent(
    followup
  )}`
}
