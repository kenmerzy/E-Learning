import { adminCourses } from '../types'

export const CENSOR_COURSES = (data, callback) => {
  return {
    type: adminCourses.CENSOR_COURSES,
    payload: { data, callback },
  }
}
export const DELETE_COURSES = (data, callback) => {
  return {
    type: adminCourses.DELETE_COURSES,
    payload: { data, callback },
  }
}
