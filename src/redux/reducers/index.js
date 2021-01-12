import { combineReducers } from 'redux'
import userReducer from './user'
import coursesReducer from './courses'
import adminReducer from './admin'

const appReducer = combineReducers({
  userReducer, coursesReducer, adminReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
