import { INCREMENT, DECREMENT, CLEAR_COUNTER } from "../constants/action.types"

export function increment() {
  console.log("INCREMENTING")
  return {
    type: INCREMENT
  }
}
export function decrement() {
  console.log("DECREMENTING")
  return {
    type: DECREMENT
  }
}
export function clearCounter() {
  console.log("CLEARING THE COUNTER")
  return {
    type: CLEAR_COUNTER
  }
}
