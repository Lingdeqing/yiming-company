import React from "react"
import ReactDOM from "react-dom"
import * as mobx from "mobx"
import { Provider } from "mobx-react"
import "styles/global.less"
import stores from "store/index"
import $http from "apis/index"
import App from "views/App"

window.$http = $http

mobx.configure({ enforceActions: "always" })

ReactDOM.render(
  <div id="app-root">
    <Provider {...stores} $http={$http}>
      <App />
    </Provider>
  </div>,
  document.getElementById("root")
)
