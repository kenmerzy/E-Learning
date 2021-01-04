import React from 'react'
import styles from './Cart.module.scss'
import trash from '../../assets/images/trash.svg'

const cartItemExample = [
  {
    tenKhoaHoc: 'React Native',
    ma: 'React',
    moTa: 'Learn JavaScript, React Native, Hook and Functions',
    thoiHan: 12,
    soLuongDaBan: 1568,
    gia: 99.99,
  },
  {
    tenKhoaHoc: 'React Native',
    ma: 'React',
    moTa: 'Learn JavaScript, React Native, Hook and Functions',
    thoiHan: 12,
    soLuongDaBan: 1568,
    gia: 99.99,
  },
  {
    tenKhoaHoc: 'React Native',
    ma: 'React',
    moTa: 'Learn JavaScript, React Native, Hook and Functions',
    thoiHan: 12,
    soLuongDaBan: 1568,
    gia: 99.99,
  },
  {
    tenKhoaHoc: 'React Native',
    ma: 'React',
    moTa: 'Learn JavaScript, React Native, Hook and Functions',
    thoiHan: 12,
    soLuongDaBan: 1568,
    gia: 99.99,
  },
  {
    tenKhoaHoc: 'React Native',
    ma: 'React',
    moTa: 'Learn JavaScript, React Native, Hook and Functions',
    thoiHan: 12,
    soLuongDaBan: 1568,
    gia: 99.99,
  },

]
const Cart = () => {
  const handleThanhToanClick = () => {

  }
  const handleDeleteClick = () => {

  }
  return (
    <div className={styles.container}>
      <div className={styles.listCartItem}>
        {cartItemExample.length > 0 ? <ul className="row">
          <li>
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
