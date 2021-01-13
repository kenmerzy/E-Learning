/* eslint-disable no-case-declarations */
import { adminTypes } from '../types'

const initState = {
  arrayStudent: [],
  arrayCategories: [],

}

const adminReducer = (state = initState, action) => {
  const data = action?.payload?.data

  switch (action.type) {
    case adminTypes.GET_ALL_STUDENT_SUCCESS:

      return {
        ...state,
        arrayStudent: data,
      }
    case adminTypes.GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        arrayCategories: data,
      }

    default:
      return state
  }
}
export default adminReducer
