import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import { userAction } from '../../../redux/actions'
import styles from './SignUpComponent.module.scss'
import phone from '../../../assets/images/phone.png'
import Password from '../../../assets/images/Password.svg'
import deleteIcon from '../../../assets/images/delete.svg'
import user from '../../../assets/images/user.png'
import ModalComponent from '../ModalComponent/ModalComponent'

const SignUpComponent = () => {
  const [valueName, setValueName] = useState('')
  const [valuePhoneNumber, setValuePhoneNumber] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [valueConfirmPassword, setValueConfirmPassword] = useState('')
  const [accountType, setAccountType] = useState('student')
  const [isModalShow, setIsModalShow] = useState(false)
  const [textModal, setTextModal] = useState('Password and confirm password is incorrect !')
  const [typeModal, setTypeModal] = useState('')
  const dispatch = useDispatch()

  const setValueNameChange = (event) => {
    setValueName(event.target.value)
  }
  const setValuePhoneChange = (event) => {
    setValuePhoneNumber(event.target.value)
  }
  const setValuePasswordChange = (event) => {
    setValuePassword(event.target.value)
  }
  const setValueConfirmPasswordChange = (event) => {
    setValueConfirmPassword(event.target.value)
  }
  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value)
  }
  const handleSignUpClick = () => {
    if (valuePassword === valueConfirmPassword) {
      dispatch(userAction.REGISTER({
        sdt: valuePhoneNumber,
        password: valuePassword,
        hoVaTen: valueName,
        accountType,
      }, (response) => {
        console.log('response', response)

        if (response.success) {
          setTypeModal('success')
          setTextModal('Sign up successful !')
          setIsModalShow(true)
        } else {
          setTypeModal('fail')
          setTextModal(response.message)
          setIsModalShow(true)
        }
      }))
    } else {
      setTypeModal('fail')
      setTextModal('Password and confirm password is incorrect !')
      setIsModalShow(true)
    }
  }
  const handleChangeModalToSignInClick = () => {
    dispatch(userAction.SET_IS_MODAL_SHOW({ isModalShow: false }))
    const timeout = setTimeout(() => {
      dispatch(userAction.SET_ACCOUNT_STATE({ accountState: 'SignIn' }))
      dispatch(userAction.SET_IS_MODAL_SHOW({ isModalShow: true }))
      clearTimeout(timeout)
    }, 50)
  }
  const handleCloseClick = () => {
    dispatch(userAction.SET_IS_MODAL_SHOW({ isModalShow: false }))
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
        <p className={styles.title}>Sign up</p>
        <p className={styles.description}> Phone number is use to Sign in as a username</p>
        <div className={styles.divInput}>
          <div className={styles.coverImage}>
            <img
              src={user}
              alt="logo"
            />
          </div>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              placeholder="Your name"
              formNoValidate
              value={valueName}
              onChange={setValueNameChange}
            />
          </form>
        </div>
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
              placeholder="Phone number"
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
              placeholder="Password"
              formNoValidate
              value={valuePassword}
              onChange={setValuePasswordChange}
              type="password"
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
              placeholder="Confirm password"
              formNoValidate
              value={valueConfirmPassword}
              onChange={setValueConfirmPasswordChange}
              type="password"
            />
          </form>
        </div>
        <div className={styles.accountType}>
          <span>Sign up as a </span>
          <select
            value={accountType}
            onChange={handleAccountTypeChange}
          >
            <option value="student">Student</option>
            <option value="authors">Author</option>
          </select>
        </div>

        <button
          className={styles.buttonSignUp}
          onClick={handleSignUpClick}
          type="button"
        >
          <p>Sign up</p>
        </button>
        <p className={styles.textLicense}>
          By clicking on Sign up, you agree to our Terms of service and Privacy policy.
        </p>
        <p className={styles.textSignIn}>
          <span>{'Already have an account?  '}</span>
          <span>
            <button
              type="button"
              onClick={handleChangeModalToSignInClick}
            >
              Sign in
            </button>
          </span>
        </p>
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
export default SignUpComponent
