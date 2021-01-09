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

export const GET_UPLOADED_COURSES = (data, callback) => {
  console.log('===============================================')
  console.log('1',)
  console.log('===============================================')
  return {
    type: coursesTypes.GET_UPLOADED_COURSES,
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
export const GET_MY_COURSE = (data, callback) => {
  return {
    type: coursesTypes.GET_MY_COURSE,
    payload: { data, callback },
  }
}
export const ADD_TO_CART = (data, callback) => {
  return {
    type: coursesTypes.ADD_TO_CART,
    payload: { data, callback },
  }
}
export const GET_CART_ITEM = (data, callback) => {
  return {
    type: coursesTypes.GET_CART_ITEM,
    payload: { data, callback },
  }
}
export const DELETE_CART_ITEM = (data, callback) => {
  return {
    type: coursesTypes.DELETE_CART_ITEM,
    payload: { data, callback },
  }
}
export const PURCHASE = (data, callback) => {
  return {
    type: coursesTypes.PURCHASE,
    payload: { data, callback },
  }
}
export const GET_LIST_QUESTION = (data, callback) => {
  return {
    type: coursesTypes.GET_LIST_QUESTION,
    payload: { data, callback },
  }
}
export const ADD_QUESTION = (data, callback) => {
  return {
    type: coursesTypes.ADD_QUESTION,
    payload: { data, callback },
  }
}
export const CHECK_POINT = (data, callback) => {
  return {
    type: coursesTypes.CHECK_POINT,
    payload: { data, callback },
  }
}
export const GET_UNCENSORED_COURSE = (data, callback) => {
  console.log('===============================================')
  console.log('1 data ', data)
  console.log('===============================================')
  return {
    type: coursesTypes.GET_UNCENSORED_COURSE,
    payload: { data, callback },
  }
}
