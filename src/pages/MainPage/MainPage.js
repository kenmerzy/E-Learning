import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import styles from './MainPage.module.scss'

const MainPage = () => {
  const Home = () => {
    return (
      <h2>Home</h2>
    )
  }
  const Account = () => {
    return <h2>Account</h2>
  }
  const Courses = () => {
    return <h2>Courses</h2>
  }
  const Tutorials = () => {
    return <h2>Tutorials</h2>
  }
  const Pricing = () => {
    return <h2>Pricing</h2>
  }

  return (
    <div className={styles.Container}>
      <Router>
        <Header />
        <div className={styles.Main}>
          <Switch>
            <Route path="/courses" component={Courses} />
            <Route path="/tutorials" component={Tutorials} />
            <Route path="/livestreams" component={Account} />
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
