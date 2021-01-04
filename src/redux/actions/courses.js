import { coursesTypes } from '../types'

export const GET_MA_LOAI_KHOA_HOC = (data, callback) => {
  return {
    type: coursesTypes.GET_MA_LOAI_KHOA_HOC,
    payload: { data, callback },
  }
}
export const GET_ALL_COURSE = (data, callback) => {
  return {
    type: coursesTypes.GET_ALL_COURSE,
    payload: { data, callback },
  }
}
export const GET_ALL_CATEGORY = (data, callback) => {
  return {
    type: coursesTypes.GET_ALL_CATEGORY,
    payload: { data, callback },
  }
}
export const GET_ALL_AUTHOR = (data) => {
  return {
    type: coursesTypes.GET_ALL_AUTHOR,
    payload: { data },
  }
}

export const GET_UPLOADED_VIDEOS = (data, callback) => {
  return {
    type: coursesTypes.GET_UPLOADED_VIDEOS,
    payload: { data, callback },
  }
}
export const ADD_NEW_COURSE = (data, callback) => {
  return {
    type: coursesTypes.ADD_NEW_COURSE,
    payload: { data, callback },
  }
}
export const ADD_NEW_VIDEO = (data, callback) => {
  return {
    type: coursesTypes.ADD_NEW_VIDEO,
    payload: { data, callback },
  }
}
export const GET_VIDEOS_OF_COURSE = (data, callback) => {
  return {
    type: coursesTypes.GET_VIDEOS_OF_COURSE,
    payload: { data, callback },
  }
}
