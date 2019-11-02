import { observable, action } from "mobx"

export default class CounterStore {
  @observable counter = 1

  @action
  inc() {
    this.counter++
  }
}
