import React from "react"
import ReactDOM from "react-dom"
import { Provider, connect } from "react-redux"
import {
  increment,
  decrement,
  clearCounter
} from "./redux/actions/counter.actions"
import store from "./redux/store"

import "./styles.css"

function ConnectedApp({ counter, increment, decrement, clearCounter }) {
  return (
    <div className="App">
      <h1>COUNTER:</h1>
      <h2>#{counter}</h2>
      <div align="center">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div align="center">
        <button onClick={clearCounter}>CLEAR</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    clearCounter: () => dispatch(clearCounter())
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedApp)

const rootElement = document.getElementById("root")
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
