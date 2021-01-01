/* eslint-disable max-len */
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Modal from 'react-bootstrap/Modal'
import { useSelector } from 'react-redux'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Home from '../Home/Home'
import Account from '../Account/Account'
import Courses from '../Courses/Courses'
import MyCourses from '../MyCourses/MyCourses'
import Authors from '../Authors/Authors'
import Cart from '../Cart/Cart'
import styles from './MainPage.module.scss'
import SignUpComponent from '../../components/Account/SignUp/SignUpComponent'
import SignInComponent from '../../components/Account/SignIn/SignInComponent'
import CourseDetails from '../../components/Courses/CourseDetails/CourseDetails'

const accountStates = {
  SignIn: SignInComponent,
  SignUp: SignUpComponent,

}
const MainPage = () => {
  const isModalShow = useSelector((value) => value?.userReducer?.isModalShow)
  const AccountComponent = accountStates[useSelector((value) => value?.userReducer?.accountState)]
  return (

    <div className={styles.Container}>
      {isModalShow && <Modal
        show
        backdrop
        bsPrefix="modal"
      >
        <AccountComponent />
      </Modal>}
      <div className="container">

        <Router>
          <Header />
          <div className={styles.Main}>
            <Switch>
              <Route path="/courses" component={Courses} />
              <Route path="/mycourses" component={MyCourses} />
              <Route path="/authors" component={Authors} />
              <Route path="/cart" component={Cart} />
              <Route path="/account" component={Account} />
              <Route path="/details" component={CourseDetails} />

              <Route path="/" component={Home} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  )
}

export default MainPage
