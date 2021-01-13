import React from 'react'
import { useSelector } from 'react-redux'
import styles from './AuthorItem.module.scss'
import AvatarMeng from '../../../assets/images/AvatarMeng.svg'

const AuthorItem = () => {
  const arrAuthor = useSelector((value) => value.coursesReducer.arrayAuthor)
  return (
    <div className={styles.container}>
      <div className={styles.listAuthor}>
        <ul className="row">
          {arrAuthor.map((item) => (
            <a>
              <img src={AvatarMeng} className={styles.author} alt="logo" />
              <p className={styles.title}>{item.hoVaTen}</p>
              <p className={styles.occupation}>{item.ngheNghiep}</p>
              <p className={styles.description}>{item.gioiThieu}</p>
            </a>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default AuthorItem
