/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './AdminAuthors.module.scss'
import banned from '../../../assets/images/banned.svg'
import unbanned from '../../../assets/images/unbanned.png'
import { truncateString } from '../../../utils'
import { adminAction, coursesAction } from '../../../redux/actions'

const AdminAuthors = () => {
  const [isFilter, setIsFilter] = useState(true)
  const [valueFilter, setValueFilter] = useState('')
  const arrAuthor = useSelector((value) => value?.coursesReducer?.arrayAuthor)
  const [arrayFilter, setArrayFilter] = useState([])
  const token = useSelector((value) => value?.userReducer?.token)
  const dispatch = useDispatch()

  const handleBanClick = (item) => {
    dispatch(adminAction.BAN_USER({
      token,
      maUser: item.id,
    }, (response) => {
      if (response.success) {
        dispatch(coursesAction.GET_ALL_AUTHOR())
        console.log('ban author success', response)
      } else {
        console.log('===============================================')
        console.log('ban author fail', response)
        console.log('===============================================')
      }
    }))
  }
  const handleUnBanClick = (item) => {
    dispatch(adminAction.UN_BAN_USER({
      token,
      maUser: item.id,
    }, (response) => {
      if (response.success) {
        console.log('unban author success', response)
        dispatch(coursesAction.GET_ALL_AUTHOR())
      } else {
        console.log('===============================================')
        console.log('unban author fail', response)
        console.log('===============================================')
      }
    }))
  }

  useEffect(() => {
    if (isFilter) {
      setArrayFilter(arrAuthor.filter((i) => i.ban === 0))
    } else {
      setArrayFilter(arrAuthor.filter((i) => i.ban === 1))
    }
    console.log('===============================================')
    console.log('isFilter',)
    console.log('arrAuthor', arrAuthor)
    console.log('arrayFilter',)
    console.log('===============================================')
  }, [isFilter, arrAuthor])
  const handleFilterAuthorChange = (event) => {
    setValueFilter(event.target.value)
    if (event.target.value === 'normal') {
      setIsFilter(true)
    } else {
      setIsFilter(false)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.divFilter}>
        <p>Filter Author: </p>
        <select
          value={valueFilter}
          onChange={handleFilterAuthorChange}
        >
          <option value="normal">Normal</option>
          <option value="banned">Banned</option>
        </select>
      </div>
      <div className={styles.listCartItem}>
        {arrayFilter?.length > 0 ? <ul className="row">
          <li>

            <p className={styles.tenHeader}>Name</p>
            <p className={styles.ngaySinhHeader}>D.O.B</p>
            <p className={styles.sdtHeader}>Phone</p>
            <p className={styles.ngheNghiepHeader}>Occupation</p>
            <p className={styles.diaChiHeader}>Address</p>
            <p className={styles.bioHeader}>Bio</p>
            <p className={styles.trashHeader}> </p>

          </li>
          {arrayFilter.map((item) => (
            <li>
              <p className={styles.ten}>{item.hoVaTen}</p>
              <p className={styles.ngaySinh}>{item.ngaySinh}</p>
              <p className={styles.sdt}>{`${item.sdt}`}</p>
              <p className={styles.ngheNghiep}>{item.ngheNghiep}</p>
              <p className={styles.diaChi}>{item.diaChi}</p>
              <p className={styles.bio}>{item.gioiThieu && truncateString(item.gioiThieu, 30)}</p>
              {isFilter ? <a
                href
                onClick={() => handleBanClick(item)}
              >
                <img
                  src={banned}
                  alt="logo"
                />
              </a> : <a
                href
                onClick={() => handleUnBanClick(item)}
              >
                  <img
                    src={unbanned}
                    alt="logo"
                  />
                </a>}

            </li>
          ))}
        </ul>
          : <p className={styles.notiEmptyCart}>There is no author</p>}
      </div>
    </div>
  )
}
export default AdminAuthors
