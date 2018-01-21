import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initState = {
  env: process.env ? process.env : undefined
}

export const actionTypes = {
  ENV: 'ENV'
}

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ENV:
      return Object.assign({}, state, {
        env: process.env ? process.env : undefined
      })
    default:
      return state
  }
}

export const ENV = () => dispatch => {
  return dispatch({ type: actionTypes.ENV })
}

export const initStore = (initialState = initState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
