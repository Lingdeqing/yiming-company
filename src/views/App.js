import React from "react"
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom"
import routes from "@/router"

export default class Home extends React.Component {
  render() {
    return (
      <Router>
        <h3>项目入口</h3>
        <div>
          {routes.map((item, index) => {
            return (
              <Link key={index} to={item.path}>
                {item.path}
              </Link>
            )
          })}
        </div>
        <Switch>
          {routes.map((item, index) => {
            const Component = item.component
            return (
              <Route key={item.path + "-" + index} exact path={item.path}>
                <Component />
              </Route>
            )
          })}
        </Switch>
      </Router>
    )
  }
}
