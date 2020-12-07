import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Home from '../Home/Home'
import Courses from '../Courses/Courses'
import Tutorials from '../Tutorials/Tutorials'
import Livestreams from '../Livestreams/Livestreams'
import Pricing from '../Pricing/Pricing'
import styles from './MainPage.module.scss'

const MainPage = () => {
  return (
    <div className={styles.Container}>
      <Router>
        <Header />
        <div className={styles.Main}>
          <Switch>
            <Route path="/courses" component={Courses} />
            <Route path="/tutorials" component={Tutorials} />
            <Route path="/livestreams" component={Livestreams} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default MainPage
