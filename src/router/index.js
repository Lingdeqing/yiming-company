import Home from "views/Home"
import OpenCourse from "views/OpenCourse"
import NotFound from "views/NotFound"
import Forbidden from "views/Forbidden"
export default [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/open/course",
    component: OpenCourse
  },
  {
    path: "/404",
    component: NotFound
  },
  {
    path: "/401",
    component: Forbidden
  }
]
