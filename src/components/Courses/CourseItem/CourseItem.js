import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './CourseItem.module.scss'

const CourseItem = (props) => {
  const maLoaiKhoaHoc = useSelector((value) => value?.coursesReducer?.maLoaiKhoaHoc)
  const {
    customStyles,
    title,
    description,
    avatar,
    logo,
    background,
    id,
    onClick,
  } = props

  return (
    <Link
      to={`/details/${maLoaiKhoaHoc}/${id}`}
      className={styles.container}
      style={customStyles || { margin: 0 }}
      onClick={onClick}
    >
      <img src={background} className={styles.background} alt="logo" />
      <img src={logo} className={styles.logo} alt="logo" />
      <img src={avatar} className={styles.author} alt="logo" />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </Link>

  )
}
export default CourseItem
