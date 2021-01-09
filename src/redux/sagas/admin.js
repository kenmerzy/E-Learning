/* eslint-disable no-unused-vars */
import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { adminCourses } from '../types'
import { API_URL } from '../../configs'

export default function* adminSagas() {
  yield takeLatest(adminCourses.CENSOR_COURSES, censorCourses)
}
function* censorCourses(action) {
  const { data, callback } = action.payload
  const {
    maKH,
    token,
  } = data
  console.log('===============================================')
  console.log('saga censorCourses')
  console.log('===============================================')
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/khoahoc/verify`, {
        maKH,
        token,
      })
    )

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
