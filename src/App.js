import React from 'react'
import './css/index.css'
import './css/App.scss'
import { Provider } from 'react-redux'
import { MainPage } from './pages'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>

  )
}

export default App
