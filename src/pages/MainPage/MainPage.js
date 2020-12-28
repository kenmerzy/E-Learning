/* eslint-disable max-len */
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// import { Modal } from 'react-bootstrap'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Home from '../Home/Home'
import Courses from '../Courses/Courses'
import MyCourses from '../MyCourses/MyCourses'
import Authors from '../Authors/Authors'
import Account from '../Account/Account'
import Cart from '../Cart/Cart'
import styles from './MainPage.module.scss'
// import SignUpComponent from '../../components/Account/SignUp/SignUpComponent'
// import SignInComponent from '../../components/Account/SignIn/SignInComponent'

const MainPage = () => {
  // const [accountState] = useState('SignIn')
  return (

    <div className={styles.Container}>
      <div className="container">

        <Router>
          <Header />
          <div className={styles.Main}>
            {/* {accountState === 'SignIn'
              ? <Modal.Dialog>

                <Modal.Body>
                  <SignInComponent />
                </Modal.Body>

              </Modal.Dialog>
              : <Modal.Dialog>

                <Modal.Body>
                  <SignUpComponent />
                </Modal.Body>

              </Modal.Dialog>} */}
            <Switch>
              <Route path="/courses" component={Courses} />
              <Route path="/myCourses" component={MyCourses} />
              <Route path="/authors" component={Authors} />
              <Route path="/account" component={Account} />
              <Route path="/cart" component={Cart} />
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
