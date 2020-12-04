import React from 'react'
import {
  Link,
} from 'react-router-dom'
import logo from '../../assets/images/Logo.svg'
import styles from './Header.module.scss'

const Header = () => {
  const listMenu = [
    {
      id: 1,
      title: 'Home',
      link: '/',
    },
    {
      id: 2,
      title: 'Courses',
      link: '/courses',
    },
    {
      id: 3,
      title: 'Become a teacher',
      link: '/becomeateacher',

    },
    {
      id: 4,
      title: 'Account',
      link: '/account',
    },
  ]

  return (
    <div className={styles.AppHeader}>
      <div className={styles.WrappedLogo}>
        <Link
          to="/"
        >

          <img src={logo} className={styles.AppLogo} alt="logo" />
        </Link>
      </div>
      <div className={styles.AppHeaderMenu}>
        <div>
          <nav>
            <ul className={styles.AppHeaderMenuItem}>
              {listMenu.map((item) => <li key={item.id}>
                <Link
                  onClick={() => {
                    console.log('item', item.title)
                  }}
                  to={item.link}
                >
                  {item.title}
                </Link>
              </li>)}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
export default Header
