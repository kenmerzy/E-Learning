import React, { useState } from 'react'
import styles from './SignUpComponent.module.scss'
import phone from '../../../assets/images/phone.png'
import Password from '../../../assets/images/Password.svg'

const SignUpComponent = () => {
  const [valuePhoneNumber, setValuePhoneNumber] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const setValuePhoneChange = (event) => {
    setValuePhoneNumber(event.target.value)
  }
  const setValuePasswordChange = (event) => {
    setValuePassword(event.target.value)
  }
  const handleSignUpClick = () => {

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
          <span><a>Sign in</a></span>
        </p>
      </div>
    </div>
  )
}
export default SignUpComponent
