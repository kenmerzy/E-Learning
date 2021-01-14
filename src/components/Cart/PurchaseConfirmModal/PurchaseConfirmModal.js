/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import styles from './PurchaseConfirmModal.module.scss'
import ModalComponent from '../../Account/ModalComponent/ModalComponent'
import LoadingComponent from '../../Loading/LoadingComponent'
import deleteIcon from '../../../assets/images/delete.svg'
import { coursesAction, userAction } from '../../../redux/actions'

const PurchaseConfirmModal = (props) => {
  const { onCloseModalClick, arrayPurchase, totalCost } = props
  const token = useSelector((value) => value?.userReducer?.token)
  const [isModalShow, setIsModalShow] = useState(false)
  const [textModal, setTextModal] = useState('')
  const [typeModal, setTypeModal] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const handlePurchaseClick = () => {
    setIsLoading(true)
    dispatch(coursesAction.PURCHASE({
      token,
      arrayCourse: arrayPurchase,
    }, (response) => {
      if (response.success) {
        console.log('===============================================')
        console.log('response purchase success', response)
        console.log('===============================================')
        dispatch(userAction.SEND_MAIL({
          token,
          subject: 'Hóa đơn mua hàng E-Learning',
          description: `Bạn vừa thanh toán hóa đơn $${totalCost}`,
        }))
        dispatch(userAction.GET_PROFILE({
          token,
        },
          (responseGetData) => {
            if (responseGetData.success) {
              console.log('Get information when login success !',)
            } else {
              console.log('===============================================')
              console.log('Get information when login fail !')
              console.log('===============================================')
            }
          }))
        dispatch(coursesAction.GET_MY_COURSE({
          token,
        }, (responseGetMyCourse) => {
          if (responseGetMyCourse.success) {
            console.log('Get my course success')
          } else {
            console.log('Get my course fail')
          }
        }))
        dispatch(coursesAction.GET_ALL_COURSE({
        }, (responseGetMyCourse) => {
          if (responseGetMyCourse.success) {
            console.log('Get all course success')
          } else {
            console.log('Get all course fail')
          }
        }))
        setTypeModal('success')
        setTextModal('Purchase successfully !')
        setIsModalShow(true)
        setIsLoading(false)
      } else {
        setTypeModal('fail')
        setTextModal(response.message)
        setIsModalShow(true)
        setIsLoading(false)
        console.log('===============================================')
        console.log('response purchase fail', response)
        console.log('===============================================')
      }
    }))
  }

  const handleModalComponentCloseClick = () => {
    setIsModalShow(false)
  }
  return (
    <div className={styles.container}>
      {isModalShow && <Modal
        show
        centered
        backdrop
        bsPrefix="modal"
      >
        <ModalComponent
          textModal={textModal}
          handleModalComponentCloseClick={handleModalComponentCloseClick}
          type={typeModal}
        />
      </Modal>}
      <div className={styles.coverT}>

        <p className={styles.title}>Confirm purchase</p>

        <div className={styles.listCartItem}>
          <ul className="row">
            <li>
              <p className={styles.tenKhoaHocHeader}>Course name</p>
              <p className={styles.giaHeader}>Price</p>

            </li>
            {arrayPurchase.map((item) => (
              <li>
                <p className={styles.tenKhoaHoc}>{item.tenKhoaHoc}</p>
                <p className={styles.gia}>{`$ ${item.gia}`}</p>
              </li>
            ))}
            <li>
              <div className={styles.tongGia}>
                {`Total: $ ${totalCost > 0 ? totalCost.toFixed(2) : 0}`}
              </div>
            </li>
          </ul>

        </div>
        {isLoading && <LoadingComponent label="Purchasing..." />}
        {!isLoading && <div className={styles.divButton}>

          <button
            className={styles.buttonCancel}
            onClick={onCloseModalClick}
            type="button"
          >
            <p>Cancel</p>
          </button>
          <button
            className={styles.buttonConfirm}
            onClick={handlePurchaseClick}
            type="button"
          >
            <p>Confirm</p>
          </button>
        </div>}
        <button
          className={styles.buttonClose}
          type="button"
          onClick={onCloseModalClick}
        >
          <img
            src={deleteIcon}
            alt="logo"
          />
        </button>
      </div>
    </div>
  )
}
export default PurchaseConfirmModal
