/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState }
  from 'react'
import {
  Link,
} from 'react-router-dom'
//  
import styles from './HoursOfCourses.module.scss'
import LogoSwiftUI from '../../../assets/images/LogoSwiftUI.svg'
import LogoReact from '../../../assets/images/LogoReact.svg'
import LogoFigma from '../../../assets/images/LogoFigma.svg'
import LogoFramer from '../../../assets/images/LogoFramer.svg'
import LogoProtoPie from '../../../assets/images/LogoProtoPie.svg'
import LogoSketch from '../../../assets/images/LogoSketch.svg'
import LogoWebflow from '../../../assets/images/LogoWebflow.svg'
import search from '../../../assets/images/search.svg'
import deleteIcon from '../../../assets/images/delete.svg'

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
  const [valueInput, setValueInput] = useState('')
  const handleDeleteSearchClick = () => {
    setValueInput('')
  }
  // eslint-disable-next-line no-unused-vars
  const setValueChange = (event) => {
    setValueInput(event.target.value)
  }
  return (
    <div className={styles.Container}>
      <div className={styles.HourOfCourses}>
        <p className={styles.line1}>120 HOURS OF COURSES</p>
        <p className={styles.title}>Learn the best tools and platforms</p>
        <div className="row">
          <div className="col-lg-3" style={{ marginTop: 10 }}>
            <p className={styles.description}>We focus on industry leading platforms so that you can be prepared for your next job. Then we teach all we can about them.</p>

          </div>
          <div className="col-lg-6" style={{ marginTop: 10 }}>
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
          </div>
          {/* <div
            className="col-lg-3"
            style={{ marginTop: 10 }}
          >
            <div className={styles.search}>
              <img src={search} alt="logo" />
              <form
                className={styles.formInput}
                onSubmit={(e) => { e.preventDefault() }}
              >
                <input
                  className={styles.input}
                  placeholder="Search..."
                  formNoValidate
                  value={valueInput}
                  onChange={setValueChange}
                />
              </form>
              <Link
                onClick={handleDeleteSearchClick}
                to="/"
              >
                <img
                  src={deleteIcon}
                  alt="logo"
                  className={styles.delete}
                />
              </Link>
            </div>
          </div> */}
        </div>

      </div>
    </div>

  )
}
export default HoursOfCourses
