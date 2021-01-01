/* eslint-disable no-case-declarations */
import { coursesTypes } from '../types'

const initState = {
  maLoaiKhoaHoc: '',

}

const coursesReducer = (state = initState, action) => {
  const data = action?.payload?.data

  switch (action.type) {
    case coursesTypes.GET_MA_LOAI_KHOA_HOC:
      console.log('===============================================')
      console.log('data', data)
      console.log('===============================================')
      return {
        ...state,
        maLoaiKhoaHoc: data?.maLoaiKhoaHoc,
      }
    default:
      return state
  }
}
export default coursesReducer
