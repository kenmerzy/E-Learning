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
