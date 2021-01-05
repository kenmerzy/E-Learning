import React, { useEffect, useState } from 'react'
import styles from './Cart.module.scss'
import trash from '../../assets/images/trash.svg'

const cartItemExample = [
  {
    id: 1,
    tenKhoaHoc: 'React Native',
    ma: 'React',
    moTa: 'Learn JavaScript, React Native, Hook and Functions',
    thoiHan: 12,
    soLuongDaBan: 1568,
    gia: 99.99,
  },
  {
    id: 2,
    tenKhoaHoc: 'React Native',
    ma: 'React',
    moTa: 'Learn JavaScript, React Native, Hook and Functions',
    thoiHan: 12,
    soLuongDaBan: 1568,
    gia: 99.99,
  },
  {
    id: 3,
    tenKhoaHoc: 'React Native',
    ma: 'React',
    moTa: 'Learn JavaScript, React Native, Hook and Functions',
    thoiHan: 12,
    soLuongDaBan: 1568,
    gia: 99.99,
  },
  {
    id: 4,
    tenKhoaHoc: 'React Native',
    ma: 'React',
    moTa: 'Learn JavaScript, React Native, Hook and Functions',
    thoiHan: 12,
    soLuongDaBan: 1568,
    gia: 99.99,
  },
  {
    id: 5,
    tenKhoaHoc: 'React Native',
    ma: 'React',
    moTa: 'Learn JavaScript, React Native, Hook and Functions',
    thoiHan: 12,
    soLuongDaBan: 1568,
    gia: 99.99,
  },

]

const Cart = () => {
  const [checkBoxID, setCheckBoxID] = useState()
  const [isCheckAll, setIsCheckAll] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [listBuy, setListBuy] = useState([])
  const handleThanhToanClick = () => {

  }
  const handleDeleteClick = () => {

  }
  const handleCheckAll = () => {
    const checkBox = document.getElementById('checkBoxAll')
    if (checkBox.checked === true) {
      setIsCheckAll(true)
      cartItemExample.forEach((i) => {
        const checkBoxItem = document.getElementById(`${i.id}`)
        checkBoxItem.checked = true
      })
    } else {
      setIsCheckAll(false)
      cartItemExample.forEach((i) => {
        const checkBoxItem = document.getElementById(`${i.id}`)
        checkBoxItem.checked = false
      })
    }
  }
  const handleCheckOne = (item) => {
    const checkBox = document.getElementById(`${item.id}`)
    if (checkBox.checked === true) {
      setCheckBoxID(`Check box ${item.id} true`)
      setListBuy([...listBuy, item])
    } else {
      setListBuy(listBuy.filter((i) => (i.id !== item.id)))
      setCheckBoxID(`Check box ${item.id} false`)
    }
    console.log('===============================================')
    console.log('listBuy', listBuy)
    console.log('===============================================')
  }
  useEffect(() => {
    if (isCheckAll) {
      setCheckBoxID(' Check ALL')
      setListBuy(...cartItemExample)
    } else {
      setCheckBoxID('Check All cancel')
      setListBuy([])
    }
    console.log('===============================================')
    console.log('listBuy', listBuy)
    console.log('===============================================')
  }, [isCheckAll])
  return (
    <div className={styles.container}>
      <div className={styles.listCartItem}>
        {cartItemExample.length > 0 ? <ul className="row">
          <li>
            <input
              type="checkbox"
              id="checkBoxAll"
              onClick={handleCheckAll}
              className={styles.checkBoxHeader}
            />
            <p className={styles.tenKhoaHocHeader}>Course name</p>
            <p className={styles.maHeader}>Category</p>
            <p className={styles.moTaHeader}>Description</p>
            <p className={styles.thoiHanHeader}>Deadline</p>
            <p className={styles.soLuongDaBanHeader}>Sold</p>
            <p className={styles.giaHeader}>Price</p>
            <p className={styles.trashHeader}> </p>

          </li>
          {cartItemExample.map((item) => (
            <li>
              <input
                type="checkbox"
                id={`${item.id}`}
                onClick={() => handleCheckOne(item)}
                className={styles.checkBox}
              />
              <p className={styles.tenKhoaHoc}>{item.tenKhoaHoc}</p>
              <p className={styles.ma}>{item.ma}</p>
              <p className={styles.moTa}>{item.moTa}</p>
              <p className={styles.thoiHan}>{item.thoiHan}</p>
              <p className={styles.soLuongDaBan}>{item.soLuongDaBan}</p>
              <p className={styles.gia}>{`$ ${item.gia}`}</p>
              <a
                href
                onClick={handleDeleteClick}
              >
                <img
                  src={trash}
                  alt="logo"
                />
              </a>
            </li>
          ))}
        </ul>
          : <p className={styles.notiEmptyCart}>Your cart is empty</p>}
        <p className={styles.notiEmptyCart}>
          CheckBox ID :
          {checkBoxID}
        </p>
      </div>
      <div className={styles.button}>
        <button
          onClick={handleThanhToanClick}
          type="button"
        >
          Purchase
        </button>
      </div>
    </div>
  )
}
export default Cart
