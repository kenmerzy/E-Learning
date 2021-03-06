/* eslint-disable no-unused-vars */
import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { coursesTypes } from '../types'
import { API_URL } from '../../configs'

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
  yield takeLatest(coursesTypes.GET_LIST_QUESTION, getListQuestion)
  yield takeLatest(coursesTypes.ADD_QUESTION, addQuestion)
  yield takeLatest(coursesTypes.CHECK_POINT, checkPoint)
  yield takeLatest(coursesTypes.GET_UNCENSORED_COURSE, getUncensoredCourses)
  yield takeLatest(coursesTypes.ADD_PROGRESS, addProgress)
  yield takeLatest(coursesTypes.PURCHASE, purchase)
  yield takeLatest(coursesTypes.DELETE_QUESTION, deleteQuestion)
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
function* deleteQuestion(action) {
  const { data, callback } = action.payload
  const {
    token,
    maCH,
  } = data

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/cauhoi/delete`, {
        token,
        maCH,
      })
    )
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* addProgress(action) {
  const { data, callback } = action.payload
  const {
    token,
    maKH,
    maBG,
  } = data

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/tdht/add`, {
        token,
        maKH,
        maBG,
      })
    )
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}

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
    console.log('===============================================')
    console.log('2',)
    console.log('===============================================')
  } catch (error) {
    console.log(error?.response?.data)
  }
}
function* addNewCourse(action) {
  const { data, callback } = action.payload

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/khoahoc/add`, data)
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
    console.log('===============================================')
    console.log('dataGetVideoWhenCreateNEw', response.data)
    console.log('===============================================')
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
    console.log('===============================================')
    console.log('vo1111',)
    console.log('===============================================')
    const response = yield call(
      () => axios.post(`${API_URL}/giohang/delete`, {
        token,
        arrayCourse,
      })
    )
    console.log('===============================================')
    console.log('response deleteCartItem', response.data)
    console.log('===============================================')
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
function* getListQuestion(action) {
  const { data, callback } = action.payload
  const {
    token,
    maBG,
  } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/cauhoi/`, {
        token,
        maBG,
      })
    )

    if (response?.data?.success) {
      yield put({
        type: coursesTypes.GET_LIST_QUESTION_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}

function* addQuestion(action) {
  const { data, callback } = action.payload
  const {
    token,
    noiDung,
    maBG,
    arrayAnswer,
  } = data

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/cauhoi/add`, {
        token,
        noiDung,
        maBG,
        arrayAnswer,
      })
    )

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* checkPoint(action) {
  const { data, callback } = action.payload
  const {
    token,
    maBG,
    arrayResult,
  } = data
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/cauhoi/check`, {
        token,
        maBG,
        arrayResult,
      })
    )

    if (response?.data?.success) {
      yield put({
        type: coursesTypes.CHECK_POINT_SUCCESS,
        payload: { data: response?.data?.data },
      })
    }
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* getUncensoredCourses(action) {
  const { data, callback } = action.payload
  const {
    token,
  } = data
  console.log('===============================================')
  console.log('2 data', data)
  console.log('===============================================')
  try {
    const response = yield call(
      () => axios.post(`${API_URL}/khoahoc/unverify`, {
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
