/* eslint-disable react/jsx-indent-props */
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CourseItem.module.scss'
import ButtonCourseItem from '../ButtonCourseItem/ButtonCourseItem'

const CourseItem = (props) => {
  const {
    customStyles,
    title,
    avatar,
    logo,
    background,
    onClick,
    totalView,
    gia,
    totalVideos,
    to,
    totalTimes,
    description,
    active,
    expired,
  } = props
  const parseTimeToString = (time) => {
    if (time) {
      if (time.hours < 1) {
        return `${time.minute} minutes`
      }
      return `${time.hours}:${time.minute} minutes`
    }
    return 0
  }
  const time = parseTimeToString(totalTimes)
  const GiaComponent = () => {
    if (gia !== undefined) {
      if (gia === 0) {
        return <p className={styles.gia}>Free</p>
      }
      return <p className={styles.gia}>{`$ ${gia} `}</p>
    }
    return <p className={styles.gia}>{' '}</p>
  }
  const TotalViewComponent = () => {
    if (totalView !== undefined) {
      return <p className={styles.totalView}>{`${totalView} sold`}</p>
    }
    return <p className={styles.totalView}>{' '}</p>
  }
  const TotalVideosComponent = () => {
    if (totalVideos !== undefined) {
      return <p className={styles.description}>{`${totalVideos} videos - ${time} `}</p>
    }
    return <p className={styles.description}>{' '}</p>
  }
  const getTypeButton = () => {
    if (!active) {
      return 'addToCart'
    }

    if (expired) {
      return 'extend'
    }

    return 'learnNow'
  }
  const type = getTypeButton()
  console.log('===============================================')
  console.log('type', type)
  console.log('===============================================')
  return (
    to
      ? <Link
        to={to}
        className={styles.container}
        style={customStyles || { margin: 0 }}
        onClick={onClick && onClick}
      >
        {background && <img src={background} className={styles.background} alt="logo" />}
        {logo && <img src={logo} className={styles.logo} alt="logo" />}
        {avatar && <img src={avatar} className={styles.author} alt="logo" />}
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <TotalVideosComponent />
        <TotalViewComponent />
        <GiaComponent />
        <ButtonCourseItem type={type} />
      </Link>
      : <Link
        className={styles.container}
        style={customStyles || { margin: 0 }}
        onClick={onClick && onClick}
      >
        {background && <img src={background} className={styles.background} alt="logo" />}
        {logo && <img src={logo} className={styles.logo} alt="logo" />}
        {avatar && <img src={avatar} className={styles.author} alt="logo" />}
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <TotalVideosComponent />
        <TotalViewComponent />
        <GiaComponent />
        <ButtonCourseItem type={type} />
      </Link>

  )
}
export default CourseItem
