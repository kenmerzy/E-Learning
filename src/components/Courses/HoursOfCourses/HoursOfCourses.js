/* eslint-disable max-len */
import React from 'react'
import {
  Link,
} from 'react-router-dom'
//  
import { Form } from 'react-bootstrap'
import styles from './HoursOfCourses.module.scss'
import LogoSwiftUI from '../../../assets/images/LogoSwiftUI.png'
import LogoReact from '../../../assets/images/LogoReact.png'
import LogoFigma from '../../../assets/images/LogoFigma.png'
import LogoFramer from '../../../assets/images/LogoFramer.png'
import LogoProtoPie from '../../../assets/images/LogoProtoPie.png'
import LogoSketch from '../../../assets/images/LogoSketch.png'
import LogoWebflow from '../../../assets/images/LogoWebflow.png'

const HoursOfCourses = () => {
  const listLogo = [
    {
      id: 1,
      icon: LogoSwiftUI,
    },
    {
      id: 2,
      icon: LogoReact,
    },
    {
      id: 3,
      icon: LogoFigma,

    },
    {
      id: 4,
      icon: LogoSketch,
    },
    {
      id: 5,
      icon: LogoFramer,
    },
    {
      id: 6,
      icon: LogoWebflow,
    },
    {
      id: 7,
      icon: LogoProtoPie,
    },

  ]
  return (
    <div className={styles.Container}>
      <div className={styles.HourOfCourses}>
        <p className={styles.line1}>120 HOURS OF COURSES</p>
        <p className={styles.title}>Learn the best tools and platforms</p>
        <div className={styles.line3}>
          <p className={styles.description}>We focus on industry leading platforms so that you can be prepared for your next job. Then we teach all we can about them.</p>
          <div className={styles.logo}>
            <ul>
              {listLogo.map((item) => <li key={item.id}>
                <Link
                  onClick={() => {
                    console.log('item logo search courses')
                  }}
                  to="/"
                >
                  <img src={item.icon} className={styles.itemLogo} alt="logo" />
                </Link>
              </li>)}
            </ul>
          </div>
          <div className={styles.search}>
            <Form>
              <input
                placeholder="Search for..."
              />
            </Form>
          </div>
        </div>
      </div>
    </div>

  )
}
export default HoursOfCourses
