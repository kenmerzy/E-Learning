// import { takeLatest, call, put } from 'redux-saga/effects'
// import axios from 'axios'
// import { userType } from '../types'

// // watcher saga: watches for actions dispatched to the store, starts worker saga
// export default function* userSagas() {
//   yield takeLatest(userType.GET_USER, get_user)
// }
// function* get_user(action) {
//   // const { data, callback } = action.payload
//   try {
//     const response = yield call(
//       () => axios.get('http://api.openweathermap.org/data/2.5/weather?q=Ha%20noi&appid=1be502950243e0f0db00a0dacad257e8&units=metric')
//     )
//     // yield put({
//     //   type: userType.GET_USER_SUCCESS,
//     //   payload: { data: response?.data },
//     // })
//   } catch (error) {
//     console.log('===============================================')
//     console.log('error', error)
//     console.log('===============================================')
//   }
// }
