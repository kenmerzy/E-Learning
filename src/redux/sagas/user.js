/* eslint-disable no-unused-vars */
import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { userType } from '../types'
import { API_URL } from '../../configs'

export default function* userSagas() {
  yield takeLatest(userType.LOGIN, loginUser)
  yield takeLatest(userType.REGISTER, registerUser)
  yield takeLatest(userType.GET_PROFILE, getProfileUser)
  yield takeLatest(userType.RECHARGE, recharge)
  yield takeLatest(userType.SEND_MAIL, sendMail)
}
function* sendMail(action) {
  const { data, callback } = action.payload
  const { token, subject, description } = data

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/sendmail/`, {
        token,
        subject,
        description,
      })
    )

    callback(response?.data)
  } catch (error) {
    callback(error?.response?.data)
  }
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
function* recharge(action) {
  const { data, callback } = action.payload
  const {
    token,
  } = data

  try {
    const response = yield call(
      () => axios.post(`${API_URL}/recharge/charge`, data)
    )
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
    email,
  } = data
  let response = ''
  try {
    if (accountType === 'student') {
      response = yield call(
        () => axios.post(`${API_URL}/auth/register/student`, {
          sdt,
          password,
          hoVaTen,
          email,
        })
      )
    } else {
      response = yield call(
        () => axios.post(`${API_URL}/auth/register/teacher`, {
          sdt,
          password,
          hoVaTen,
          email,
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
