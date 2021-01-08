import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import styles from './RechargeModal.module.scss'
import ModalComponent from '../ModalComponent/ModalComponent'
import LoadingComponent from '../../Loading/LoadingComponent'
import deleteIcon from '../../../assets/images/delete.svg'
import { userAction } from '../../../redux/actions'

const RechargeModal = (props) => {
  const {
    onCloseModalClick,
    loadingLabel,
  } = props
  const token = useSelector((value) => value?.userReducer?.token)
  const [isModalShow, setIsModalShow] = useState('')
  const [textModal, setTextModal] = useState('')
  const [typeModal, setTypeModal] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [accountNumber, setAccountNumber] = useState('')
  const [valueMoney, setValueMoney] = useState(0)

  const dispatch = useDispatch()
  const handleModalComponentCloseClick = () => {
    setIsModalShow(false)
  }
  const setValueAccountNumberChange = (event) => {
    setAccountNumber(event.target.value)
  }
  const setValueMoneyChange = (event) => {
    setValueMoney(event.target.value)
  }
  const handlePositiveButtonClick = () => {
    setIsLoading(true)
    dispatch(userAction.RECHARGE({
      token,
      value: valueMoney,
    }, (response) => {
      if (response.success) {
        dispatch(userAction.GET_PROFILE({
          token,
        }, (responseGet) => {
          if (responseGet) {
            setTypeModal('success')
            setTextModal('Recharge successfully !')
            setIsModalShow(true)
            setIsLoading(false)
          } else {
            setTypeModal('fail')
            setTextModal(responseGet.message)
            setIsModalShow(true)
            setIsLoading(false)
          }
        }))
      } else {
        setTypeModal('fail')
        setTextModal(response.message)
        setIsModalShow(true)
        setIsLoading(false)
      }
    }))
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
        <p className={styles.title}>Recharge request</p>
        <div className={styles.divInput}>
          <p>Account number:  </p>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              placeholder="Your account number..."
              formNoValidate
              value={accountNumber}
              onChange={setValueAccountNumberChange}
              type="text"
            />
          </form>
        </div>
        <div className={styles.divInput}>
          <p>Amount of money:  </p>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              placeholder="Type a number..."
              formNoValidate
              value={valueMoney}
              onChange={setValueMoneyChange}
              type="text"
            />
          </form>
        </div>
        {isLoading && <LoadingComponent label={loadingLabel} />}
        {!isLoading && <div className={styles.divButton}>

          <button
            className={styles.buttonConfirm}
            onClick={handlePositiveButtonClick}
            type="button"
          >
            <p>Recharge</p>
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
export default RechargeModal
