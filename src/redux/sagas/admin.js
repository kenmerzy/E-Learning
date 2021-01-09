/* eslint-disable no-unused-vars */
import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { adminTypes, coursesTypes } from '../types'
import { API_URL } from '../../configs'

export default function* adminSagas() {
  yield takeLatest(adminTypes.CENSOR_COURSES, censorCourses)
  yield takeLatest(adminTypes.DELETE_COURSES, deleteCourses)
  yield takeLatest(adminTypes.ADD_CATEGORIES, addCategories)
}
function* censorCourses(action) {
  const { data, callback } = action.payload
  const {
    maKH,
    token,
  } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/khoahoc/verify`, {
        maKH,
        token,
      })
    )
    if (response?.data?.success) {
      yield put({
        type: coursesTypes.GET_UNCENSORED_COURSE_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* deleteCourses(action) {
  const { data, callback } = action.payload
  const {
    maKH,
    token,
  } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/khoahoc/delete`, {
        maKH,
        token,
      })
    )

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* addCategories(action) {
  const { data, callback } = action.payload
  const {
    token,
    tenLoaiKhoaHoc,
  } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/loaikhoahoc/add`, {
        token,
        tenLoaiKhoaHoc,
      })
    )
    if (response?.data?.success) {
      yield put({
        type: coursesTypes.GET_ALL_CATEGORY_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
