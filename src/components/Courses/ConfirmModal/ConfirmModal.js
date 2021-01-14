import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import styles from './ConfirmModal.module.scss'
import ModalComponent from '../../Account/ModalComponent/ModalComponent'
import LoadingComponent from '../../Loading/LoadingComponent'
import deleteIcon from '../../../assets/images/delete.svg'
import { coursesAction, userAction } from '../../../redux/actions'

const ConfirmModal = (props) => {
  const {
    onCloseModalClick,
    loadingLabel,
    titleModal,
    contentModal,
    titleNegativeButton,
    titlePositiveButton,
    item,
  } = props
  const token = useSelector((value) => value?.userReducer?.token)
  const [isModalShow, setIsModalShow] = useState('')
  const [textModal, setTextModal] = useState('')
  const [typeModal, setTypeModal] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()
  const handleModalComponentCloseClick = () => {
    console.log('===============================================')
    console.log('closessss',)
    console.log('===============================================')
    setIsModalShow(false)
  }
  const handlePositiveButtonClick = () => {
    setIsLoading(true)
    dispatch(coursesAction.PURCHASE({
      token,
      arrayCourse: [item],
    }, (response) => {
      if (response.success) {
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
        dispatch(userAction.SEND_MAIL({
          token,
          subject: 'Hóa đơn mua hàng E-Learning',
          description: `Bạn vừa thanh toán hóa đơn $${item.gia}`,
        }))

        console.log('===============================================')
        console.log('response purchase now success', response)
        console.log('===============================================')
        setTypeModal('success')
        setTextModal('Purchase successfully !')
        setIsLoading(false)
        setIsModalShow(true)
      } else {
        setTypeModal('fail')
        setTextModal(response.message)
        setIsLoading(false)
        setIsModalShow(true)
        console.log('===============================================')
        console.log('response purchase now fail', response)
        console.log('===============================================')
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
        <p className={styles.title}>{titleModal}</p>

        <p className={styles.content}>{contentModal}</p>

        {isLoading && <LoadingComponent label={loadingLabel} />}
        {!isLoading && <div className={styles.divButton}>

          <button
            className={styles.buttonCancel}
            onClick={onCloseModalClick}
            type="button"
          >
            <p>{titleNegativeButton}</p>
          </button>
          <button
            className={styles.buttonConfirm}
            onClick={handlePositiveButtonClick}
            type="button"
          >
            <p>{titlePositiveButton}</p>
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
export default ConfirmModal
