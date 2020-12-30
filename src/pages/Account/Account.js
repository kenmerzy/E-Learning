import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styles from './Account.module.scss'
import AvatarMeng from '../../assets/images/AvatarMeng.svg'
import { userAction } from '../../redux/actions'
import phone from '../../assets/images/phone.png'
import user from '../../assets/images/user.png'
import ProfileItem from '../../components/Account/ProfileItem/ProfileItem'

const Account = () => {
  const [valueName, setValueName] = useState('Nguyễn Ngọc Long')
  const [valuePhoneNumber, setValuePhoneNumber] = useState('058131886')
  // const [valuePassword, setValuePassword] = useState('')
  // const [valueConfirmPassword, setValueConfirmPassword] = useState('')
  const [profileItemType, setProfileItemType] = useState('text')
  const [buttonType, setButtonType] = useState('edit')
  const [isButtonCancelVisible, setIsButtonCancelVisible] = useState(false)
  const dispatch = useDispatch()
  const setValueNameChange = (event) => {
    setValueName(event.target.value)
  }
  const setValuePhoneChange = (event) => {
    setValuePhoneNumber(event.target.value)
  }
  // const setValuePasswordChange = (event) => {
  //   setValuePassword(event.target.value)
  // }
  // const setValueConfirmPasswordChange = (event) => {
  //   setValueConfirmPassword(event.target.value)
  // }

  const buttonEditProfile = () => (
    <button
      className={styles.buttonEditProfile}
      type="button"
      onClick={handleEditClick}
    >
      Edit Profile
    </button>
  )
  const buttonSaveProfile = () => (
    <button
      className={styles.buttonEditProfile}
      type="button"
      onClick={handleSaveClick}
    >
      Save
    </button>
  )

  const objectMapButton = {
    edit: buttonEditProfile,
    save: buttonSaveProfile,
  }
  const ButtonComponent = objectMapButton[buttonType]
  const history = useHistory()

  const handleSignOutClick = () => {
    dispatch(userAction.LOGIN({
      token: null,
    }))
    history.push('/')
  }
  const handleSaveClick = () => {
    setProfileItemType('text')
    setButtonType('edit')
    setIsButtonCancelVisible(false)
  }
  const handleEditClick = () => {
    setProfileItemType('input')
    setButtonType('save')
    setIsButtonCancelVisible(true)
  }
  const handleCancelClick = () => {
    setProfileItemType('text')
    setButtonType('edit')
    setIsButtonCancelVisible(false)
  }
  return (
    <div className={styles.container}>
      <div className={styles.divProfile}>
        <p className={styles.title}>PROFILE</p>
        <p className={styles.description}>Manage your Design+Code profile and account</p>
        <div className={styles.divAvatar}>
          <img
            src={AvatarMeng}
            alt="logo"
          />
          <button
            type="button"
          >
            CHANGE AVATAR
          </button>
        </div>
        <p className={styles.title}>PROFILE SETTINGS</p>
        <div className="row">
          <div className="col-lg-6">
            <ProfileItem
              type={profileItemType}
              image={user}
              placeholder="Your name"
              value={valueName}
              onChange={setValueNameChange}
            />
            <ProfileItem
              type={profileItemType}
              image={phone}
              placeholder="Phone number"
              value={valuePhoneNumber}
              onChange={setValuePhoneChange}
            />

          </div>
          <div className="col-lg-6" />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <ButtonComponent />
          </div>
          <div className="col-lg-6">
            {isButtonCancelVisible && <button
              className={styles.buttonEditProfile}
              type="button"
              onClick={handleCancelClick}
            >
              Cancel
            </button>}
          </div>

        </div>
        <button
          className={styles.buttonSigOut}
          type="button"
          onClick={handleSignOutClick}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}
export default Account
