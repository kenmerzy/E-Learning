import React from 'react'
import styles from './AuthorItem.module.scss'
import AvatarMeng from '../../../assets/images/AvatarMeng.svg'

const AuthorItem = () => {
  return (
    <div className={styles.container}>
      <img src={AvatarMeng} className={styles.author} alt="logo" />
      <p className={styles.title}>Meng To</p>
      <p className={styles.occupation}>Designer and coder</p>
      <p className={styles.description}>I teach designers code and developers design.</p>
    </div>
  )
}
export default AuthorItem
