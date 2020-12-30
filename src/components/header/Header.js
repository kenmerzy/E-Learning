import React from 'react'
import {
  Link,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/images/Logo.svg'
import courses from '../../assets/images/courses.svg'
import author from '../../assets/images/author.svg'
import mycourses from '../../assets/images/mycourses.svg'
import account from '../../assets/images/account.svg'
import search from '../../assets/images/search.svg'
import iconCart from '../../assets/images/iconCart.svg'
import styles from './Header.module.scss'
import { userAction } from '../../redux/actions'
import verified from '../../assets/images/verified.svg'

const Header = () => {
  const token = useSelector((value) => value?.userReducer?.token)
  const dispatch = useDispatch()

  console.log('===============================================')
  console.log('token Header', token)
  console.log('===============================================')
  const handleAccountClick = () => {
    dispatch(userAction.SET_IS_MODAL_SHOW({ isModalShow: true }))
  }
  const listMenu = [
    {
      id: 1,
      title: 'Courses',
      link: '/courses',
      icon: courses,
    },
    {
      id: 2,
      title: 'My courses',
      link: '/mycourses',
      icon: mycourses,
    },
    {
      id: 3,
      title: 'Authors',
      link: '/authors',
      icon: author,

    },

    {
      id: 4,
      icon: iconCart,
      link: '/cart',
    },
    {
      id: 5,
      icon: search,
    },

  ]
  return (
    <div className="container">

      <div className="row" style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
        <div className="col-lg-2">
          <div className={styles.WrappedLogo}>
            <Link
              to="/"
            >
              <img src={logo} className={styles.AppLogo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="col-lg-10" style={{ flexDirection: 'row', alignItems: 'center' }}>
          <div className="row">
            <ul>
              {listMenu.map((item) => <li key={item.id}>
                <div className="col-lg-2">
                  <Link
                    onClick={item.onClick}
                    to={item.link}
                  >
                    <div className={styles.MenuItem}>
                      <img src={item.icon} className={styles.AppLogo} alt="logo" />
                      {item.title && <p>{item.title}</p>}
                    </div>
                  </Link>
                </div>
              </li>)}
              <li>
                <div className="col-lg-2">
                  {
                    !token
                      ? <Link
                        // eslint-disable-next-line react/jsx-indent-props
                        to="/"
                        // eslint-disable-next-line react/jsx-indent-props
                        onClick={handleAccountClick}
                      >
                        <div className={styles.MenuItem}>
                          <img src={account} className={styles.AppLogo} alt="logo" />
                        </div>
                      </Link>
                      : <Link
                        // eslint-disable-next-line react/jsx-indent-props
                        to="/account"
                      >
                        <div className={styles.MenuItem}>
                          <img src={verified} className={styles.AppLogo} alt="logo" />
                        </div>
                      </Link>
                  }
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Header
