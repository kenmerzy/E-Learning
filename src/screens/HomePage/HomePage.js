import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import styles from './HomePage.module.css'

const HomePage = () => {
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
  const Teacher = () => {
    return <h2>Teacher</h2>
  }

  return (
    <div className={styles.App}>
      <Router>
        <Header />
        <Switch>
          <Route path="/courses" component={Courses} />
          <Route path="/becomeateacher" component={Teacher} />
          <Route path="/account" component={Account} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>

    </div>
  )
}

export default HomePage
