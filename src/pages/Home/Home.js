import React from 'react'
import styles from './Home.module.scss'
import mockup from '../../assets/images/mockup.svg'
import HoursOfCourses from '../../components/Courses/HoursOfCourses/HoursOfCourses'

const Home = () => {
  return (
    <div className={styles.Container}>
      <div className="row" style={{ flexDirection: 'row' }}>
        <div className="col-lg-4">
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

            <div className={styles.MiniDescription}>
              <p>
                Purchase includes access to 30+ courses, 100+ premium tutorials, 120+ hours of videos, source files and certificates.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className={styles.CoverMockup}>
            <img
              src={mockup}
              alt="logo"
            />
          </div>
        </div>

      </div>
      <div className={styles.Separator} />
      <HoursOfCourses />
    </div>
  )
}
export default Home
