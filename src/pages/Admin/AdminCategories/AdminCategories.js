/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './AdminCategories.module.scss'
import { adminAction } from '../../../redux/actions'
import showIcon from '../../../assets/images/showIcon.png'
import hideIcon from '../../../assets/images/hideIcon.png'

const AdminCategories = () => {
  const [isFilter, setIsFilter] = useState(true)
  const [valueFilter, setValueFilter] = useState('')

  const token = useSelector((value) => value?.userReducer?.token)
  const arrCategories = useSelector((value) => value.adminReducer.arrayCategories)
  const [arrayFilter, setArrayFilter] = useState([])
  const dispatch = useDispatch()
  const [valueCategories, setValueCategories] = useState('')
  console.log('===============================================')
  console.log('arrCategories', arrCategories)
  console.log('===============================================')

  const handleAddCategoriesButtonClick = () => {
    dispatch(adminAction.ADD_CATEGORIES({
      token,
      tenLoaiKhoaHoc: valueCategories,
    }, (response) => {
      if (response.success) {
        console.log('===============================================')
        console.log('ADD_CATEGORIES success',)
        console.log('===============================================')
      } else {
        console.log('===============================================')
        console.log('ADD_CATEGORIES fails',)
        console.log('===============================================')
      }
    }))
  }
  const handleHideClick = (item) => {
    dispatch(adminAction.HIDE_CATEGORIES({
      token,
      maLKH: item.id,
    }, (response) => {
      if (response.success) {
        dispatch(adminAction.GET_ALL_CATEGORIES({
          token,
        }, (responseGet) => {
          if (responseGet.success) {
            console.log('===============================================')
            console.log('response Get categories success', responseGet)
            console.log('===============================================')
          } else {
            console.log('===============================================')
            console.log('response Get categories fail', responseGet)
            console.log('===============================================')
          }
        }))
      } else {
        console.log('===============================================')
        console.log('response hide categories fail', response)
        console.log('===============================================')
      }
    }))
  }
  const handleUnHideClick = (item) => {
    dispatch(adminAction.UN_HIDE_CATEGORIES({
      token,
      maLKH: item.id,
    }, (response) => {
      if (response.success) {
        dispatch(adminAction.GET_ALL_CATEGORIES({
          token,
        }, (responseGet) => {
          if (responseGet.success) {
            console.log('===============================================')
            console.log('response Get categories success', responseGet)
            console.log('===============================================')
          } else {
            console.log('===============================================')
            console.log('response Get categories fail', responseGet)
            console.log('===============================================')
          }
        }))
      } else {
        console.log('===============================================')
        console.log('response hide categories fail', response)
        console.log('===============================================')
      }
    }))
  }
  const handleFilterCategoriesChange = (event) => {
    setValueFilter(event.target.value)
    if (event.target.value === 'normal') {
      setIsFilter(true)
    } else {
      setIsFilter(false)
    }
  }
  const setValueCategoriesChange = (event) => {
    setValueCategories(event.target.value)
  }
  useEffect(() => {
    if (isFilter) {
      setArrayFilter(arrCategories.filter((i) => i.disable === 0))
    } else {
      setArrayFilter(arrCategories.filter((i) => i.disable === 1))
    }
    console.log('===============================================')
    console.log('isFilter',)
    console.log('arrCategories', arrCategories)
    console.log('arrayFilter',)
    console.log('===============================================')
  }, [isFilter, arrCategories])
  return (
    <div className={styles.Container}>
      <div className={styles.divFilter}>
        <p>Filter Author: </p>
        <select
          value={valueFilter}
          onChange={handleFilterCategoriesChange}
        >
          <option value="normal">Show</option>
          <option value="banned">Hide</option>
        </select>
      </div>
      <div className={styles.listCartItem}>
        {arrayFilter?.length > 0 ? <ul className="row">
          <li>
            <p className={styles.tenKhoaHocHeader}>Categories</p>
            <p className={styles.trashHeader}> </p>
          </li>
          {arrayFilter.map((item) => (
            <li>
              <p className={styles.tenKhoaHoc}>{item.tenLoaiKhoaHoc}</p>
              {isFilter ? <a
                href
                onClick={() => handleHideClick(item)}
              >
                <img
                  src={hideIcon}
                  alt="logo"
                />
              </a> : <a
                href
                onClick={() => handleUnHideClick(item)}
              >
                  <img
                    src={showIcon}
                    alt="logo"
                  />
                </a>}
            </li>
          ))}
        </ul>
          : <p className={styles.notiEmptyCart}>There is no categories</p>}

      </div>
      <div className={styles.divAddCategories}>
        <p className={styles.title}>Add new categories  </p>
        <div className={styles.divInput}>
          <p>Name of categories:  </p>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              placeholder="Categories...  "
              formNoValidate
              value={valueCategories}
              onChange={setValueCategoriesChange}
              type="text"
            />
          </form>
        </div>
        <div className={styles.divButton}>

          <button
            className={styles.buttonConfirm}
            onClick={handleAddCategoriesButtonClick}
            type="button"
          >
            <p>Add</p>
          </button>
        </div>
      </div>
    </div>
  )
}
export default AdminCategories
