/* eslint-disable no-case-declarations */
import { coursesTypes } from '../types'

const initState = {
  maLoaiKhoaHoc: '',
  arrayAllCourse: [],
  arrayAllCategory: [],
  arrayUploadedCourses: [],
  arrayAuthor: [],
  arrayVideosOfCourse: [],

}

const coursesReducer = (state = initState, action) => {
  const data = action?.payload?.data

  switch (action.type) {
    // case coursesTypes.GET_MA_LOAI_KHOA_HOC:
    //   return {
    //     ...state,
    //     maLoaiKhoaHoc: data?.maLoaiKhoaHoc,
    //   }
    case coursesTypes.GET_ALL_COURSE_SUCCESS:
      return {
        ...state,
        arrayAllCourse: data,
      }
    case coursesTypes.GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        arrayAllCategory: data,
      }
    case coursesTypes.GET_ALL_AUTHOR_SUCCESS:
      return {
        ...state,
        arrayAuthor: data,
      }
    case coursesTypes.GET_UPLOADED_COURSES_SUCCESS:
      return {
        ...state,
        arrayUploadedCourses: data,
      }
    // case coursesTypes.ADD_NEW_COURSE_SUCCESS:
    //   return {
    //     ...state,
    //     arrayAllCourse: data,
    //   }
    case coursesTypes.GET_VIDEOS_OF_COURSE_SUCCESS:
      return {
        ...state,
        arrayVideosOfCourse: data === undefined ? null : data,
      }

    default:
      return state
  }
}
export default coursesReducer
