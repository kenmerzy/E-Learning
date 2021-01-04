import { userType } from '../types'

export const LOGIN = (data, callback) => {
  console.log('===============================================')
  console.log('ActionLogin')
  console.log('===============================================')
  return {
    type: userType.LOGIN,
    payload: { data, callback },
  }
}

export const REGISTER = (data, callback) => {
  return {
    type: userType.REGISTER,
    payload: { data, callback },
  }
}
export const GET_PROFILE = (data, callback) => {
  return {
    type: userType.GET_PROFILE,
    payload: { data, callback },
  }
}
export const SET_IS_MODAL_SHOW = (data, callback) => {
  return {
    type: userType.SET_IS_MODAL_SHOW,
    payload: { data, callback },
  }
}
export const SET_ACCOUNT_STATE = (data, callback) => {
  return {
    type: userType.SET_ACCOUNT_STATE,
    payload: { data, callback },
  }
}
