/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './AdminCourses.module.scss'
import trash from '../../../assets/images/trash.svg'
import eye from '../../../assets/images/eye.png'
import checkMark from '../../../assets/images/checkMark.png'

import { adminAction } from '../../../redux/actions'

const AdminCourses = () => {
  const token = useSelector((value) => value?.userReducer?.token)
  const [valueFilter, setValueFilter] = useState('')
  const [arrCourses, setArrCourse] = useState(useSelector((value) => value.coursesReducer.arrayAllCourse))
  const arrCensoredCourses = useSelector((value) => value.coursesReducer.arrayAllCourse)
  const arrUncensoredCourses = useSelector((value) => value.coursesReducer.arrayUncensoredCourse)
  const dispatch = useDispatch()

  const handleFilterAuthorChange = (event) => {
    setValueFilter(event.target.value)
    if (event.target.value === 'censored') {
      setArrCourse(arrCensoredCourses)
    } else {
      setArrCourse(arrUncensoredCourses)
    }
  }
  const handleDeleteClick = (item) => {
    console.log('==Click=====================')

    dispatch(adminAction.DELETE_COURSES({
      token,
      maKH: item.id,
    }, (response) => {
      if (response.success) {
        console.log('===============================================')
        console.log('delete success', response)
        console.log('===============================================')
      } else {
        console.log('===============================================')
        console.log('delete fail', response)
        console.log('===============================================')
      }
    }))
  }
  const handleSeeDetailClick = () => {

  }
  const handleCensorClick = (item) => {
    console.log('==handleCensorClick=====================', item)
    dispatch(adminAction.CENSOR_COURSES({
      token,
      maKH: item.id,
    }, (response) => {
      if (response.success) {
        console.log('===============================================')
        console.log('censor success', response)
        console.log('===============================================')
      } else {
        console.log('===============================================')
        console.log('censor fail', response)
        console.log('===============================================')
      }
    }))
  }

  return (
    <div className={styles.Container}>
      <div className={styles.divFilter}>
        <p>Filter courses: </p>
        <select
          value={valueFilter}
          onChange={handleFilterAuthorChange}
        >
          <option value="censored">Censored</option>
          <option value="uncensored">Uncensored</option>
        </select>
      </div>
      <div className={styles.listCartItem}>
        {arrCourses?.length > 0 ? <ul className="row">
          <li>

            <p className={styles.tenKhoaHocHeader}>Course name</p>
            <p className={styles.maHeader}>Category</p>
            <p className={styles.moTaHeader}>Description</p>
            <p className={styles.thoiHanHeader}>Duration</p>
            <p className={styles.giaHeader}>Price</p>
            <p className={styles.trashHeader}> </p>
            <p className={styles.trashHeader}> </p>
            {valueFilter === 'uncensored' && <p className={styles.trashHeader}> </p>}

          </li>
          {arrCourses.map((item) => (
            <li>

              <p className={styles.tenKhoaHoc}>{item.tenKhoaHoc}</p>
              <p className={styles.ma}>{item.tenLoaiKhoaHoc}</p>
              <p className={styles.moTa}>{item.moTa}</p>
              <p className={styles.thoiHan}>{item.thoiHan}</p>
              <p className={styles.gia}>{`$ ${item.gia}`}</p>

              <a
                href
                onClick={() => handleDeleteClick(item)}
              >
                <img
                  src={trash}
                  alt="logo"
                />
              </a>

              <a
                href
                onClick={() => handleSeeDetailClick(item)}
              >
                <img
                  src={eye}
                  alt="logo"
                />
              </a>
              {valueFilter === 'uncensored'
                && <a
                  href
                  onClick={() => handleCensorClick(item)}
                >
                  <img
                    src={checkMark}
                    alt="logo"
                  />
                </a>}
            </li>
          ))}
        </ul>
          : <p className={styles.notiEmptyCart}>There is no course to censored</p>}

      </div>
    </div>
  )
}
export default AdminCourses
