/* eslint-disable no-unused-vars */
import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { adminTypes, coursesTypes } from '../types'
import { API_URL } from '../../configs'

export default function* adminSagas() {
  yield takeLatest(adminTypes.CENSOR_COURSES, censorCourses)
  yield takeLatest(adminTypes.DELETE_COURSES, deleteCourses)
  yield takeLatest(adminTypes.ADD_CATEGORIES, addCategories)
  yield takeLatest(adminTypes.GET_ALL_STUDENT, getAllStudent)
  yield takeLatest(adminTypes.BAN_USER, banUser)
  yield takeLatest(adminTypes.UN_BAN_USER, UnBanUser)
  yield takeLatest(adminTypes.GET_ALL_CATEGORIES, getAllCategories)
  yield takeLatest(adminTypes.HIDE_CATEGORIES, hideCategories)
  yield takeLatest(adminTypes.UN_HIDE_CATEGORIES, unHideCategories)
}
function* getAllCategories(action) {
  const { data, callback } = action.payload
  const { token } = data

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/loaikhoahoc/all`, {
        token,
      })
    )
    if (response?.data?.success) {
      yield put({
        type: adminTypes.GET_ALL_CATEGORIES_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    console.log(error?.response?.data)
  }
}
function* hideCategories(action) {
  const { data, callback } = action.payload
  const { token, maLKH } = data

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/loaikhoahoc/hide`, {
        token, maLKH,
      })
    )
    callback(response?.data)
  } catch (error) {
    console.log(error?.response?.data)
  }
}

function* unHideCategories(action) {
  const { data, callback } = action.payload
  const { token, maLKH } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/loaikhoahoc/unhide`, {
        token, maLKH,
      })
    )
    callback(response?.data)
  } catch (error) {
    console.log(error?.response?.data)
  }
}
function* banUser(action) {
  const { data, callback } = action.payload
  const { token, maUser } = data

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/auth/ban`, {
        token, maUser,
      })
    )
    callback(response?.data)
  } catch (error) {
    console.log(error?.response?.data)
  }
}

function* UnBanUser(action) {
  const { data, callback } = action.payload
  const { token, maUser } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/auth/unban`, {
        token, maUser,
      })
    )
    callback(response?.data)
  } catch (error) {
    console.log(error?.response?.data)
  }
}

function* getAllStudent(action) {
  const { data } = action.payload

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/auth/student/`)
    )
    if (response?.data?.success) {
      yield put({
        type: adminTypes.GET_ALL_STUDENT_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    // callback(response?.data)
  } catch (error) {
    console.log(error?.response?.data)
  }
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
