import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userAction } from '../../../redux/actions'
import styles from './SignInComponent.module.scss'
import phone from '../../../assets/images/phone.png'
import deleteIcon from '../../../assets/images/delete.svg'
import Password from '../../../assets/images/Password.svg'

const SignInComponent = () => {
  const dispatch = useDispatch()

  const [valuePhoneNumber, setValuePhoneNumber] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  // const [sdt, setSdt] = useState('0123456789')
  // const [passwordUser, setPasswordUser] = useState('123456')
  const setValuePhoneChange = (event) => {
    setValuePhoneNumber(event.target.value)
  }
  const setValuePasswordChange = (event) => {
    setValuePassword(event.target.value)
  }
  const handleSigninClick = () => {
    dispatch(userAction.LOGIN({
      sdt: valuePhoneNumber,
      password: valuePassword,
    }, (response) => {
      console.log('Dang nhap thanh cong !!!')
      console.log('dataLgoin', response.data)

      if (response.success) {
        dispatch(userAction.SET_IS_MODAL_SHOW({ isModalShow: false }))
      } else {
        console.log('===============================================')
        console.log('Dang nhap that bai !!!')
        console.log('===============================================')
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
  const handleCloseClick = () => {
    dispatch(userAction.SET_IS_MODAL_SHOW({ isModalShow: false }))
  }
  return (
    <div className={styles.container}>
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
