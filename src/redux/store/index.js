import { createStore, applyMiddleware, compose } from 'redux'
// import { encryptTransform } from 'redux-persist-transform-encrypt'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import Reactotron from '../../ReactotronConfig'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = compose

const store = createStore(rootReducer, composeEnhancers(
  Reactotron.createEnhancer(),
  applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(rootSaga)
export default store
