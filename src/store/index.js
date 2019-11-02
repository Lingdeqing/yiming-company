import UserStore from "./modules/user"
import TestStore from "./modules/test"

const userStore = new UserStore()
const testStore = new TestStore()

export default {
  userStore,
  testStore
}
