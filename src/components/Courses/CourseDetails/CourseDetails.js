import React from 'react'
import styles from './CourseDetails.module.scss'
import AvatarMeng from '../../../assets/images/AvatarMeng.svg'

// eslint-disable-next-line no-unused-vars
const authors = [
  {
    title: 'Meng To',
    occupation: 'Designer and coder',
    description: 'I teach designers code and developers design.',
  },
]
const CourseDetails = () => {
  return (
    <div className={styles.container}>
      <img src={AvatarMeng} className={styles.author} alt="logo" />
      <p className={styles.title}>Course Details</p>
      <p className={styles.occupation}> coder</p>
      <p className={styles.description}>I teach designers code and developers design.</p>
    </div>
  )
}
export default CourseDetails
