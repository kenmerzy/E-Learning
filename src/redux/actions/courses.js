import { coursesTypes } from '../types'

export const GET_MA_LOAI_KHOA_HOC = (data, callback) => {
  return {
    type: coursesTypes.GET_MA_LOAI_KHOA_HOC,
    payload: { data, callback },
  }
}
