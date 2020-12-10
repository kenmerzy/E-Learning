import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './Home.module.scss'
import iconProAccess from '../../assets/images/iconGetProAccess.png'
import mockup from '../../assets/images/mockup.png'
import HoursOfCourses from '../../components/Courses/HoursOfCourses/HoursOfCourses'

const Home = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.CoverIntroAndMockup}>
        <div className={styles.CoverIntro}>
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
            onClick={
              () => { console.log({ a: 'click' }) }
            }
          >
            <div className={styles.insideButtonPurchase}>
              <img
                src={iconProAccess}
                className={styles.iconProAccess}
                alt="logo"
              />

              <div className={styles.coverTextGetProAccess}>
                <p className={styles.GetProAccess}>Get Pro Access</p>
                <p className={styles.money}>$19 per month</p>
              </div>
            </div>
          </Button>

          <div className={styles.MiniDescription}>
            <p>
              Purchase includes access to 30+ courses, 100+ premium tutorials, 120+ hours of videos, source files and certificates.
            </p>
          </div>
        </div>
        <div className={styles.CoverMockup}>
          <img
            src={mockup}
            className={styles.mockup}
            alt="logo"
          />
        </div>
      </div>
      <div className={styles.Separator} />
      <HoursOfCourses />
    </div>
  )
}
export default Home
