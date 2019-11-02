import React from "react"
import { observer, inject } from "mobx-react"

@inject("testStore")
@observer
class Home extends React.Component {
  render() {
    const { testStore } = this.props
    return (
      <div>
        首页
        <div>{testStore.counter}</div>
        <button onClick={() => testStore.inc()}>inc</button>
      </div>
    )
  }
}

export default Home
