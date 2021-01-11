/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './AdminAuthors.module.scss'
import banned from '../../../assets/images/banned.svg'
import unbanned from '../../../assets/images/unbanned.png'
import { truncateString } from '../../../utils'

const arrAuthorAccount = [
  {
    id: 1,
    hoVaTen: 'Nguyen Ngoc Long',
    ngaySinh: '17/10/1999',
    diaChi: '140 Le Trong Tan, TPHCM',
    sdt: '0909123456',
    ngheNghiep: 'React Native Developer',
    gioiThieu: 'This is my Bio',
  },
  {
    id: 2,
    hoVaTen: 'Vu Duy Duong',
    ngaySinh: '17/10/1999',
    diaChi: '140 Le Trong Tan, TPHCM',
    sdt: '0909123456',
    ngheNghiep: 'React Native Developer',
    gioiThieu: 'This is my Bio',
  },
  {
    id: 3,
    hoVaTen: 'Tien Truong',
    ngaySinh: '17/10/1999',
    diaChi: '140 Le Trong Tan, TPHCM',
    sdt: '0909123456',
    ngheNghiep: 'React Native Developer',
    gioiThieu: 'This is  my Biomy Biomy Biomy Biomy Biomy Biomy Bio',
  },
  {
    id: 4,
    hoVaTen: 'Toan Ho',
    ngaySinh: '17/10/1999',
    diaChi: '140 Le Trong Tan, TPHCM',
    sdt: '0909123456',
    ngheNghiep: 'React Native Developer',
    gioiThieu: 'This is my Bio',
  },
]

const AdminAuthors = () => {
  const [isFilter, setIsFilter] = useState(true)
  const [valueFilter, setValueFilter] = useState('')
  const arrNormalAuthorAccount = useSelector((value) => value)
  const arrBannedAuthorAccount = useSelector((value) => value)
  const [arrAuthor, setArrAuthor] = useState(useSelector((value) => value.coursesReducer.arrayAllCourse))
  const dispatch = useDispatch()

  const handleBanClick = () => {
  }
  const handleUnBanClick = () => {
  }
  useEffect(() => {
    if (isFilter) {
      setArrAuthor(arrNormalAuthorAccount)
    } else {
      setArrAuthor(arrBannedAuthorAccount)
    }
  }, [arrNormalAuthorAccount, arrBannedAuthorAccount, isFilter])
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
        <p>Filter account: </p>
        <select
          value={valueFilter}
          onChange={handleFilterAuthorChange}
        >
          <option value="normal">Normal</option>
          <option value="banned">Banned</option>
        </select>
      </div>
      <div className={styles.listCartItem}>
        {arrAuthorAccount?.length > 0 ? <ul className="row">
          <li>

            <p className={styles.tenHeader}>Name</p>
            <p className={styles.ngaySinhHeader}>D.O.B</p>
            <p className={styles.sdtHeader}>Phone</p>
            <p className={styles.ngheNghiepHeader}>Occupation</p>
            <p className={styles.diaChiHeader}>Address</p>
            <p className={styles.bioHeader}>Bio</p>
            <p className={styles.trashHeader}> </p>

          </li>
          {arrAuthorAccount.map((item) => (
            <li>
              <p className={styles.ten}>{item.hoVaTen}</p>
              <p className={styles.ngaySinh}>{item.ngaySinh}</p>
              <p className={styles.sdt}>{`${item.sdt}`}</p>
              <p className={styles.ngheNghiep}>{item.ngheNghiep}</p>
              <p className={styles.diaChi}>{item.diaChi}</p>
              <p className={styles.bio}>{truncateString(item.gioiThieu, 30)}</p>
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
          : <p className={styles.notiEmptyCart}>There is no course to censored</p>}
      </div>
    </div>
  )
}
export default AdminAuthors
