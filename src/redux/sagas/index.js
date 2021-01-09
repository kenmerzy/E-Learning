import { all } from 'redux-saga/effects'

import userSagas from './user'
import courseSagas from './courses'
import adminSagas from './admin'

export default function* rootSaga() {
  yield all([
    userSagas(),
    courseSagas(),
    adminSagas(),
  ])
}
