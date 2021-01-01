import { combineReducers } from 'redux'
import userReducer from './user'
import coursesReducer from './courses'

const appReducer = combineReducers({
  userReducer, coursesReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
