import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userAction } from '../../../redux/actions'
import styles from './SignUpComponent.module.scss'
import phone from '../../../assets/images/phone.png'
import Password from '../../../assets/images/Password.svg'
import deleteIcon from '../../../assets/images/delete.svg'

const SignUpComponent = () => {
  const [valuePhoneNumber, setValuePhoneNumber] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [valueConfirmPassword, setValueConfirmPassword] = useState('')
  const dispatch = useDispatch()

  const setValuePhoneChange = (event) => {
    setValuePhoneNumber(event.target.value)
  }
  const setValuePasswordChange = (event) => {
    setValuePassword(event.target.value)
  }
  const setValueConfirmPasswordChange = (event) => {
    setValueConfirmPassword(event.target.value)
  }
  const handleSignUpClick = () => {
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
  return (
    <div className={styles.container}>
      <div className={styles.coverT}>
        <p className={styles.title}>Sign up</p>
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
