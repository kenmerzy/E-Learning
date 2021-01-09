/* eslint-disable react/jsx-indent-props */
import React from 'react'
import {
  Link,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/images/Logo.svg'
import courses from '../../assets/images/courses.svg'
import author from '../../assets/images/author.svg'
import account from '../../assets/images/account.svg'
import styles from './HeaderAdmin.module.scss'
import { userAction } from '../../redux/actions'
import verified from '../../assets/images/verified.svg'

const HeaderAdmin = () => {
  const token = useSelector((value) => value?.userReducer?.token)
  const name = useSelector((value) => value?.userReducer?.name)

  const dispatch = useDispatch()

  const handleAccountClick = () => {
    dispatch(userAction.SET_IS_MODAL_SHOW({ isModalShow: true }))
  }
  const listMenu = [
    {
      id: 1,
      title: 'Courses',
      link: '/admincourses',
      icon: courses,
    },
    {
      id: 2,
      title: 'Authors',
      link: '/adminauthors',
      icon: author,
    },
    {
      id: 3,
      title: 'Students',
      link: '/adminstudent',
      icon: account,

    },
  ]
  return (
    <div className="container">

      <div className="row" style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
        <div className="col-lg-2">
          <div className={styles.WrappedLogo}>
            <Link
              to="/"
              className={styles.link}
            >
              <img src={logo} className={styles.AppLogo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="col-lg-10" style={{ flexDirection: 'row', alignItems: 'center' }}>
          <div className="row">
            <ul>
              {listMenu.map((item) => <li key={item.id}>
                <div className="col-lg-3">
                  <Link
                    onClick={item.onClick}
                    to={item.link}
                    className={styles.link}
                  >
                    <div className={styles.MenuItem}>
                      <img src={item.icon} className={styles.AppLogo} alt="logo" />
                      {item.title && <p>{item.title}</p>}
                    </div>
                  </Link>
                </div>
              </li>)}

              <li key="account">
                <div>
                  {
                    !token
                      ? <Link
                        to="/"
                        onClick={handleAccountClick}
                        className={styles.link}
                      >
                        <div className={styles.MenuItem}>
                          <img src={account} className={styles.AppLogo} alt="logo" />
                        </div>
                      </Link>
                      : <Link
                        to="/account"
                        className={styles.link}
                      >
                        <div className={styles.MenuItem}>
                          <img src={verified} className={styles.AppLogo} alt="logo" />
                          {name && <p>{name}</p>}
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
export default HeaderAdmin
