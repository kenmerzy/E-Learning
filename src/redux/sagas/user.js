/* eslint-disable no-unused-vars */
import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { userType } from '../types'
import { API_URL } from '../../configs'

export default function* userSagas() {
  yield takeLatest(userType.LOGIN, loginUser)
  yield takeLatest(userType.REGISTER, registerUser)
  yield takeLatest(userType.GET_PROFILE, getProfileUser)
}
function* loginUser(action) {
  const { data, callback } = action.payload
  const { sdt, password } = data

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/auth/login`, {
        sdt,
        password,
      })
    )
    yield put({
      type: userType.LOGIN_SUCCESS,
      payload: { data: response?.data?.data },
    })
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* getProfileUser(action) {
  const { data, callback } = action.payload
  // const { token } = data

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/auth/`, data)
    )
    console.log('===============================================')
    console.log('response', response?.data)
    console.log('===============================================')
    yield put({
      type: userType.GET_PROFILE_SUCCESS,
      payload: { data: response?.data?.data },
    })
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
function* registerUser(action) {
  const { data, callback } = action.payload
  const {
    sdt,
    password,
    hoVaTen,
    accountType,
  } = data
  let response = ''
  try {
    if (accountType === 'student') {
      response = yield call(
        () => axios.post(`${API_URL}/auth/register/student`, {
          sdt,
          password,
          hoVaTen,
        })
      )
    } else {
      response = yield call(
        () => axios.post(`${API_URL}/auth/register/teacher`, {
          sdt,
          password,
          hoVaTen,
        })
      )
    }
    yield put({
      type: userType.LOGIN_SUCCESS,
      payload: { data: response?.data?.data },
    })
    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
}
