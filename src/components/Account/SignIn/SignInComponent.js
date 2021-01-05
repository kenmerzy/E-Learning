/* eslint-disable indent */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import { userAction, coursesAction } from '../../../redux/actions'
import styles from './SignInComponent.module.scss'
import phone from '../../../assets/images/phone.png'
import deleteIcon from '../../../assets/images/delete.svg'
import Password from '../../../assets/images/Password.svg'
import ModalComponent from '../ModalComponent/ModalComponent'
import LoadingComponent from '../../Loading/LoadingComponent'

const SignInComponent = () => {
  const [valuePhoneNumber, setValuePhoneNumber] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [isModalShow, setIsModalShow] = useState(false)
  const [textModal, setTextModal] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()
  const setValuePhoneChange = (event) => {
    setValuePhoneNumber(event.target.value)
  }
  const setValuePasswordChange = (event) => {
    setValuePassword(event.target.value)
  }
  const handleSigninClick = () => {
    setIsLoading(true)
    dispatch(userAction.LOGIN({
      sdt: valuePhoneNumber,
      password: valuePassword,
    }, (response) => {
      if (response.success) {
        const { data } = response
        const { accountType, token } = data
        if (accountType === 'AT') {
          dispatch(coursesAction.GET_UPLOADED_COURSES({ token }))
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
        }

        dispatch(userAction.SET_IS_MODAL_SHOW({ isModalShow: false }))

        setIsLoading(false)
      } else {
        setTextModal(response.message)
        setIsModalShow(true)
        setIsLoading(false)
      }
    }))
  }
  const handleChangeModalToSignUp = () => {
    dispatch(userAction.SET_IS_MODAL_SHOW({ isModalShow: false }))
    const timeout = setTimeout(() => {
      dispatch(userAction.SET_ACCOUNT_STATE({ accountState: 'SignUp' }))
      dispatch(userAction.SET_IS_MODAL_SHOW({ isModalShow: true }))
      clearTimeout(timeout)
    }, 50)
  }
  const handleModalComponentCloseClick = () => {
    setIsModalShow(false)
  }
  const handleCloseClick = () => {
    dispatch(userAction.SET_IS_MODAL_SHOW({ isModalShow: false }))
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

        />
      </Modal>}

      <div className={styles.coverT}>
        <p className={styles.title}>Sign in</p>
        <p className={styles.description}>Access to 80+ hours of courses, tutorials and source files</p>
        <div className={styles.divInput}>
          <div className={styles.coverImage}>
            <img
              src={phone}
              alt="logo"
            />
          </div>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              placeholder="Phone number..."
              formNoValidate
              value={valuePhoneNumber}
              onChange={setValuePhoneChange}

            />
          </form>
        </div>
        <div className={styles.divInput}>
          <div className={styles.coverImage}>
            <img
              src={Password}
              alt="logo"
            />
          </div>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              placeholder="*****"
              formNoValidate
              value={valuePassword}
              onChange={setValuePasswordChange}
              type="password"
            />
          </form>
        </div>
        {isLoading && <LoadingComponent />}

        <button
          className={styles.buttonSignin}
          onClick={handleSigninClick}
          type="button"
        >
          <p>Sign in</p>
        </button>
        <p className={styles.textLicense}>
          By clicking on Sign up, you agree to our Terms of service and Privacy policy.
        </p>
        <p className={styles.textSignIn}>
          <span>{"Don't have an account? "}</span>
          <span>
            <button
              type="button"
              onClick={handleChangeModalToSignUp}
            >
              Sign up
            </button>
          </span>
        </p>
        {/* <p className={styles.textSignIn}>
          <span>
            {'Forgot password? '}
          </span>
          <span>
            <button
              type="button"
            >
              Reset password
            </button>
          </span>
        </p> */}
        <button
          className={styles.buttonClose}
          onClick={handleCloseClick}
          type="button"
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
export default SignInComponent
