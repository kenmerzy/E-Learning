import React from 'react'
import styles from './CourseItem.module.scss'
import itemCourseImage from '../../../assets/images/itemCourseImage.svg'
import LogoFlutter from '../../../assets/images/LogoFlutter.svg'
import AvatarMeng from '../../../assets/images/AvatarMeng.svg'

const CourseItem = () => {
  return (
    <div className={styles.container}>
      <img src={itemCourseImage} className={styles.background} alt="logo" />
      <img src={LogoFlutter} className={styles.logo} alt="logo" />
      <img src={AvatarMeng} className={styles.author} alt="logo" />
      <p className={styles.title}>Flutter for Designers</p>
      <p className={styles.description}>20 videos - 3 hours</p>
    </div>
  )
}
export default CourseItem
