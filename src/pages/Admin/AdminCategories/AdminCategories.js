import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './AdminCategories.module.scss'
import trash from '../../../assets/images/trash.svg'
import { adminAction } from '../../../redux/actions'

const AdminCategories = () => {
  const token = useSelector((value) => value?.userReducer?.token)
  const arrCategories = useSelector((value) => value.coursesReducer.arrayAllCategory)
  const dispatch = useDispatch()
  const [valueCategories, setValueCategories] = useState('')

  const handleDeleteClick = () => {

  }
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
  const setValueCategoriesChange = (event) => {
    setValueCategories(event.target.value)
  }

  return (
    <div className={styles.Container}>
      <div className={styles.listCartItem}>
        {arrCategories?.length > 0 ? <ul className="row">
          <li>
            <p className={styles.tenKhoaHocHeader}>Categories</p>
            <p className={styles.trashHeader}> </p>
          </li>
          {arrCategories.map((item) => (
            <li>
              <p className={styles.tenKhoaHoc}>{item.tenLoaiKhoaHoc}</p>
              <a
                href
                onClick={() => handleDeleteClick(item)}
              >
                <img
                  src={trash}
                  alt="logo"
                />
              </a>
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
