import { INCREMENT, DECREMENT, CLEAR_COUNTER } from "../constants/action.types"

const INITIAL_STATE = {
  counter: 0
}

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log("Current Count: ", state.counter + 1)
      return {
        counter: state.counter + 1
      }
    case DECREMENT:
      console.log("Current Count: ", state.counter - 1)
      return {
        counter: state.counter - 1
      }
    case CLEAR_COUNTER:
      console.log("Current Count: ", 0)
      return {
        counter: 0
      }
    default:
      return state
  }
}

export default rootReducer
