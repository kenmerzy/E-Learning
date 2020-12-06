import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Introduction}>
        <p>
          Design and code React apps
        </p>
      </div>
      <div className={styles.Description}>
        <p>
          Don’t skip design. Learn design and code, by building real apps with React and Swift. Complete courses about the best tools.
        </p>
      </div>
      <Button
        variant="light"
        bsPrefix={styles.ButtonPurchase}
      >
        <div>
          <p>Get Pro Access</p>
          <p>$19 per month</p>
        </div>
      </Button>

      <div className={styles.MiniDescription}>
        <p>
          Purchase includes access to 30+ courses, 100+ premium tutorials, 120+ hours of videos, source files and certificates.
        </p>
      </div>
    </div>
  )
}
export default Home
