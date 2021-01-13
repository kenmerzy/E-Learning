import { adminTypes } from '../types'

export const CENSOR_COURSES = (data, callback) => {
  return {
    type: adminTypes.CENSOR_COURSES,
    payload: { data, callback },
  }
}
export const DELETE_COURSES = (data, callback) => {
  return {
    type: adminTypes.DELETE_COURSES,
    payload: { data, callback },
  }
}
export const ADD_CATEGORIES = (data, callback) => {
  return {
    type: adminTypes.ADD_CATEGORIES,
    payload: { data, callback },
  }
}
export const GET_ALL_STUDENT = (data, callback) => {
  return {
    type: adminTypes.GET_ALL_STUDENT,
    payload: { data, callback },
  }
}
export const BAN_USER = (data, callback) => {
  return {
    type: adminTypes.BAN_USER,
    payload: { data, callback },
  }
}
export const UN_BAN_USER = (data, callback) => {
  return {
    type: adminTypes.UN_BAN_USER,
    payload: { data, callback },
  }
}
export const HIDE_CATEGORIES = (data, callback) => {
  return {
    type: adminTypes.HIDE_CATEGORIES,
    payload: { data, callback },
  }
}
export const UN_HIDE_CATEGORIES = (data, callback) => {
  return {
    type: adminTypes.UN_HIDE_CATEGORIES,
    payload: { data, callback },
  }
}
export const GET_ALL_CATEGORIES = (data, callback) => {
  return {
    type: adminTypes.GET_ALL_CATEGORIES,
    payload: { data, callback },
  }
}
