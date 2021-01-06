/* eslint-disable no-unused-vars */
import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { coursesTypes } from '../types'
import { API_URL } from '../../configs'

// watcher saga: watches for actions dispatched to the store, starts worker saga
function* getAllCourse(action) {
  const { data, callback } = action.payload
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/khoahoc/`, {
        ...data,
      })
    )
    if (response?.data?.success) {
      yield put({
        type: coursesTypes.GET_ALL_COURSE_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* getAllCategory(action) {
  const { data, callback } = action.payload

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/loaikhoahoc/`)
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
function* getAllAuthor(action) {
  const { data } = action.payload

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/auth/author/`)
    )
    if (response?.data?.success) {
      yield put({
        type: coursesTypes.GET_ALL_AUTHOR_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    // callback(response?.data)
  } catch (error) {
    console.log(error?.response?.data)
  }
}

function* getUploadedCourses(action) {
  const { data } = action.payload
  const { token } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/khoahoc/uploaded`, {
        token,
      })
    )
    console.log('===============================================')
    console.log('tryGetVideo', response)
    console.log('===============================================')
    if (response?.data?.success) {
      yield put({
        type: coursesTypes.GET_UPLOADED_COURSES_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
  } catch (error) {
    console.log(error?.response?.data)
  }
}
function* addNewCourse(action) {
  const { data, callback } = action.payload
  const {
    token,
    tenKhoaHoc,
    moTa,
    gia,
    thoiHan,
    maLKH,
  } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/khoahoc/add`, {
        token,
        tenKhoaHoc,
        moTa,
        gia,
        thoiHan,
        maLKH,
      })
    )
    if (response?.data?.success) {
      yield put({
        type: coursesTypes.GET_UPLOADED_COURSES_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* addNewVideo(action) {
  const { data, callback } = action.payload

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/baigiang/add`, data)
    )
    if (response?.data?.success) {
      yield put({
        type: coursesTypes.GET_VIDEOS_OF_COURSE_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* getArrVideoOfCourse(action) {
  const { data, callback } = action.payload
  const {
    maKH,
    token,
  } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/baigiang/`, {
        maKH, token,
      })
    )
    if (response?.data?.success) {
      yield put({
        type: coursesTypes.GET_VIDEOS_OF_COURSE_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* getMyCourse(action) {
  const { data, callback } = action.payload
  const {
    token,
  } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/khoahoc/bought`, {
        token,
      })
    )
    if (response?.data?.success) {
      yield put({
        type: coursesTypes.GET_MY_COURSE_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* addToCart(action) {
  const { data, callback } = action.payload
  const {
    token,
    maKH,
  } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/giohang/add`, {
        maKH, token,
      })
    )
    if (response?.data?.success) {
      yield put({
        type: coursesTypes.GET_CART_ITEM_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* getCartItem(action) {
  const { data, callback } = action.payload
  const {
    token,
  } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/giohang/`, {
        token,
      })
    )
    if (response?.data?.success) {
      yield put({
        type: coursesTypes.GET_CART_ITEM_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* deleteCartItem(action) {
  const { data, callback } = action.payload
  const {
    token,
    arrayCourse,
  } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/giohang/delete`, {
        token,
        arrayCourse,
      })
    )
    if (response?.data?.success) {
      console.log('===============================================')
      console.log('response deleteCartItem', response)
      console.log('===============================================')
      yield put({
        type: coursesTypes.GET_CART_ITEM_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* purchase(action) {
  const { data, callback } = action.payload
  const {
    token,
    arrayCourse,
  } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/thanhtoan/`, {
        token,
        arrayCourse,
      })
    )
    if (response?.data?.success) {
      yield put({
        type: coursesTypes.GET_CART_ITEM_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
export default function* courseSagas() {
  yield takeLatest(coursesTypes.GET_ALL_COURSE, getAllCourse)
  yield takeLatest(coursesTypes.GET_ALL_CATEGORY, getAllCategory)
  yield takeLatest(coursesTypes.GET_ALL_AUTHOR, getAllAuthor)
  yield takeLatest(coursesTypes.GET_UPLOADED_COURSES, getUploadedCourses)
  yield takeLatest(coursesTypes.ADD_NEW_COURSE, addNewCourse)
  yield takeLatest(coursesTypes.ADD_NEW_VIDEO, addNewVideo)
  yield takeLatest(coursesTypes.GET_VIDEOS_OF_COURSE, getArrVideoOfCourse)
  yield takeLatest(coursesTypes.ADD_TO_CART, addToCart)
  yield takeLatest(coursesTypes.GET_CART_ITEM, getCartItem)
  yield takeLatest(coursesTypes.GET_MY_COURSE, getMyCourse)
  yield takeLatest(coursesTypes.DELETE_CART_ITEM, deleteCartItem)
  yield takeLatest(coursesTypes.PURCHASE, purchase)
}
