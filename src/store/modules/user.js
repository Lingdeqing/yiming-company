import { observable, action, runInAction } from "mobx"
import $http from "apis/index"

export default class UserStore {
  @observable name = ""
  @observable avatar = ""
  @observable loaded = false

  @action
  getInfo() {
    return $http.getUserInfo().then(({ code, data }) => {
      if (code === 0) {
        runInAction(() => {
          this.name = data.name
          this.avatar = data.avatar
          this.loaded = true
        })
        return data
      } else {
        runInAction(() => {
          this.loaded = true
        })
        return Promise.reject(new Error("获取用户信息出错了"))
      }
    })
  }
}
