/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import styles from './Cart.module.scss'
import trash from '../../assets/images/trash.svg'
import PurchaseConfirmModal from '../../components/Cart/PurchaseConfirmModal/PurchaseConfirmModal'
import { coursesAction } from '../../redux/actions'

const Cart = () => {
  const [isCheckAll, setIsCheckAll] = useState(false)
  const token = useSelector((value) => value?.userReducer?.token)
  const [totalCost, setTotalCost] = useState(0)
  const money = useSelector((value) => value?.userReducer?.informationUser?.soDu)
  const arrCart = useSelector((value) => value?.coursesReducer?.arrayCart)
  const [listBuy, setListBuy] = useState([])
  const [isModalShow, setModalShow] = useState(false)

  const dispatch = useDispatch()
  const handleThanhToanClick = () => {
    setModalShow(true)
  }
  const handleDeleteClick = () => {
    console.log('===============================================')
    console.log('listBuy', listBuy)
    console.log('===============================================')
    dispatch(coursesAction.DELETE_CART_ITEM({
      token,
      arrayCourse: listBuy,
    }, (response) => {
      if (response.success) {
        console.log('===============================================')
        console.log('Deltete cart item success',)
        console.log('response', response)
        console.log('===============================================')
      } else {
        console.log('===============================================')
        console.log('Deltete cart item fail',)
        console.log('response', response)
        console.log('===============================================')
      }
    }))
  }

  const handleCloseModal = () => {
    setModalShow(false)
  }
  const handleCheckAll = () => {
    const checkBox = document.getElementById('checkBoxAll')
    if (checkBox.checked === true) {
      setIsCheckAll(true)
      let total = 0
      arrCart.forEach((i) => {
        const checkBoxItem = document.getElementById(`${i.id}`)
        checkBoxItem.checked = true
        total += i.gia
      })
      setTotalCost(total)
      setListBuy([...arrCart])
    } else {
      setIsCheckAll(false)
      arrCart.forEach((i) => {
        const checkBoxItem = document.getElementById(`${i.id}`)
        checkBoxItem.checked = false
      })
      setTotalCost(0)
      setListBuy([])
    }
  }

  const handleCheckOne = (item) => {
    const checkBox = document.getElementById(`${item.id}`)
    if (checkBox.checked === true) {
      setListBuy([...listBuy, item])
      setTotalCost(totalCost + item.gia)
    } else {
      setListBuy(listBuy.filter((i) => (i.id !== item.id)))
      setTotalCost(totalCost - item.gia)
    }
  }

  return (
    <div className={styles.container}>
      {isModalShow && <Modal
        show
        backdrop
        bsPrefix="modal"
      >
        <PurchaseConfirmModal
          arrayPurchase={listBuy}
          totalCost={totalCost}
          onCloseModalClick={handleCloseModal}
        />
      </Modal>}
      {token
        ? <div>
          <div className={styles.Information}>
            <p>{`You have: $${money}`}</p>
          </div>
          <div className={styles.listCartItem}>
            {arrCart.length > 0 ? <ul className="row">
              <li>
                <input
                  type="checkbox"
                  id="checkBoxAll"
                  onClick={handleCheckAll}
                  className={styles.checkBoxHeader}
                  checked={isCheckAll}
                  onChange={() => handleCheckAll}
                />
                <p className={styles.tenKhoaHocHeader}>Course name</p>
                <p className={styles.maHeader}>Category</p>
                <p className={styles.moTaHeader}>Description</p>
                <p className={styles.thoiHanHeader}>Duration</p>
                <p className={styles.soLuongDaBanHeader}>Sold</p>
                <p className={styles.giaHeader}>Price</p>
                <a
                  href
                  onClick={handleDeleteClick}
                >
                  {listBuy.length > 0
                    && <img
                      src={trash}
                      alt="logo"
                    />}
                </a>

              </li>
              {arrCart.map((item) => (
                <li>
                  <input
                    type="checkbox"
                    id={`${item.id}`}
                    onClick={() => handleCheckOne(item)}
                    className={styles.checkBox}
                  />
                  <p className={styles.tenKhoaHoc}>{item.tenKhoaHoc}</p>
                  <p className={styles.ma}>{item.tenLoaiKhoaHoc}</p>
                  <p className={styles.moTa}>{item.moTa}</p>
                  <p className={styles.thoiHan}>{item.thoiHan}</p>
                  <p className={styles.soLuongDaBan}>{item.soLuongDaBan}</p>
                  <p className={styles.gia}>{`$ ${item.gia}`}</p>
                  <p className={styles.trashHeader}> </p>

                </li>
              ))}
              <li>
                <div className={styles.tongGia}>
                  {`Total: $ ${totalCost > 0 ? totalCost.toFixed(2) : 0}`}
                </div>
              </li>
            </ul>
              : <p className={styles.notiEmptyCart}>Your cart is empty</p>}

          </div>
          {listBuy.length > 0
            && <div className={styles.button}>
              <button
                onClick={handleThanhToanClick}
                type="button"
              >
                Purchase
              </button>
            </div>}
        </div> : null}
    </div>
  )
}
export default Cart
