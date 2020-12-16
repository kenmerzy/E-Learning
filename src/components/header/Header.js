import React from 'react'
import {
  Link,
} from 'react-router-dom'
import logo from '../../assets/images/Logo.svg'
import courses from '../../assets/images/courses.svg'
import tutorials from '../../assets/images/tutorials.svg'
import livestreams from '../../assets/images/livestreams.svg'
import pricing from '../../assets/images/pricing.svg'
import account from '../../assets/images/account.svg'
import more from '../../assets/images/more.png'
import search from '../../assets/images/search.svg'
import styles from './Header.module.scss'

const Header = () => {
  const listMenu = [
    {
      id: 1,
      title: 'Courses',
      link: '/courses',
      icon: courses,
    },
    {
      id: 2,
      title: 'Tutorials',
      link: '/tutorials',
      icon: tutorials,
    },
    {
      id: 3,
      title: 'Livestreams',
      link: '/Livestreams',
      icon: livestreams,

    },
    {
      id: 4,
      title: 'Pricing',
      link: '/pricing',
      icon: pricing,
    },
    {
      id: 5,
      icon: more,
    },
    {
      id: 6,
      icon: search,
    },
    {
      id: 7,
      icon: account,

    },
  ]

  // const handleOptionsClick = () => {
  //   console.log('Click!!')
  // }

  return (
    <div className="container">

      <div className="row" style={{ flexDirection: 'row', alignItems: 'center' }}>
        <div className="col-lg-3">
          <div className={styles.WrappedLogo}>
            <Link
              to="/"
            >
              <img src={logo} className={styles.AppLogo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="col-lg-9">
          <div className={styles.AppHeaderMenu}>
            <ul>
              {listMenu.map((item) => <li key={item.id}>
                <Link
                  onClick={() => {
                    console.log('item', item.title)
                  }}
                  to={item.link}
                >
                  <div className={styles.MenuItem}>
                    <img src={item.icon} className={styles.AppLogo} alt="logo" />
                    {item.title
                      && <p>
                        {item.title}
                      </p>}
                  </div>
                </Link>
              </li>)}
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Header
