import { all } from 'redux-saga/effects'

import userSagas from './user'
import courseSagas from './courses'

export default function* rootSaga() {
  yield all([
    userSagas(),
    courseSagas(),
  ])
}
