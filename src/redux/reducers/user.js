/* eslint-disable no-case-declarations */
import { userType } from '../types'

const initState = {
  token: null,
  accountState: 'SignIn',
  isModalShow: false,
  accountType: '',
}

const userReducer = (state = initState, action) => {
  const data = action?.payload?.data

  switch (action.type) {
    case userType.LOGIN_SUCCESS:
      const { token, name, accountType } = data
      return {
        ...state,
        token,
        name,
        accountType,
      }
    case userType.SET_IS_MODAL_SHOW:
      return {
        ...state,
        isModalShow: data?.isModalShow,
      }
    case userType.SET_ACCOUNT_STATE:
      return {
        ...state,
        accountState: data?.accountState,
      }

    default:
      return state
  }
}
export default userReducer