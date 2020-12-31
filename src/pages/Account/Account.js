/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styles from './Account.module.scss'
import AvatarMeng from '../../assets/images/AvatarMeng.svg'
import { userAction } from '../../redux/actions'
import phone from '../../assets/images/phone.png'
import user from '../../assets/images/user.png'
import ProfileItem from '../../components/Account/ProfileItem/ProfileItem'

const Account = () => {
  const [valueName, setValueName] = useState(useSelector((value) => value?.userReducer?.name))
  const token = useSelector((value) => value?.userReducer?.token)
  const [valueAddress, setValueAddress] = useState('')
  const [valueDateOfBirth, setValueDateOfBirth] = useState('')
  const [valueOccupation, setValueOccupation] = useState('')
  const [valueGender, setValueGender] = useState('')
  const [valueBio, setValueBio] = useState('')
  const [valueAccountType, setValueAccountType] = useState('')
  const [valueMoney, setValueMoney] = useState('')
  const [valuePhoneNumber, setValuePhoneNumber] = useState('058131886')
  const [profileItemType, setProfileItemType] = useState('text')
  const [buttonType, setButtonType] = useState('edit')
  const [isButtonCancelVisible, setIsButtonCancelVisible] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (token) {
      dispatch(userAction.GET_PROFILE({
        token,
      },
        (response) => {
          console.log('responseGet', response)
          if (response.success) {
            const { data } = response
            setValueName(data.hoVaTen)
            setValueDateOfBirth(data.ngaySinh)
            setValueAddress(data.diaChi)
            setValuePhoneNumber(data.sdt)
            setValueGender(data.gioiTinh)
            setValueBio(data.gioiThieu)
            setValueMoney(data.soDu)
            setValueAccountType(data.ma)
            setValueOccupation(data.ngheNghiep)
          } else {
            console.log('===============================================')
            console.log('get Profile fail')
            console.log('===============================================')
          }
        }))
    }
  }, [token])
  const setValueNameChange = (event) => {
    setValueName(event.target.value)
  }
  const setValueAddressChange = (event) => {
    setValueAddress(event.target.value)
  }
  const setValueDateOfBirthChange = (event) => {
    setValueDateOfBirth(event.target.value)
  }
  const setValueOccupationChange = (event) => {
    setValueOccupation(event.target.value)
  }
  const setValueGenderChange = (event) => {
    setValueGender(event.target.value)
  }
  const setValueBioChange = (event) => {
    setValueBio(event.target.value)
  }

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
    dispatch({ type: 'LOGOUT' })
    history.push('/')
  }
  const handleSaveClick = () => {
    setProfileItemType('text')
    setButtonType('edit')
    setIsButtonCancelVisible(false)
    dispatch(userAction.GET_PROFILE({
      token,
      hoVaTen: valueName,
      diaChi: valueAddress,
      ngheNghiep: valueOccupation,
      gioiTinh: valueGender,
      gioiThieu: valueBio,

    },
      (response) => {
        console.log('responseChange', response)
        if (response.success) {
          const { data } = response
          setValueName(data.hoVaTen)
          setValueDateOfBirth(data.ngaySinh)
          setValueAddress(data.diaChi)
          setValuePhoneNumber(data.sdt)
          setValueGender(data.gioiTinh)
          setValueBio(data.gioiThieu)
          setValueMoney(data.soDu)
          setValueAccountType(data.ma)
          setValueOccupation(data.ngheNghiep)
        }
      }))
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
    dispatch(userAction.GET_PROFILE({
      token,
    },
      (response) => {
        console.log('responseGet', response)
        if (response.success) {
          const { data } = response
          setValueName(data.hoVaTen)
          setValueDateOfBirth(data.ngaySinh)
          setValueAddress(data.diaChi)
          setValuePhoneNumber(data.sdt)
          setValueGender(data.gioiTinh)
          setValueBio(data.gioiThieu)
          setValueMoney(data.soDu)
          setValueAccountType(data.ma)
          setValueOccupation(data.ngheNghiep)
        }
      }))
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
              placeholder="Date of birth"
              value={valueDateOfBirth}
              onChange={setValueDateOfBirthChange}
            />
            <ProfileItem
              type={profileItemType}
              image={user}
              placeholder="Address"
              value={valueAddress}
              onChange={setValueAddressChange}
            />

          </div>
          <div className="col-lg-6">
            <ProfileItem
              type={profileItemType}
              image={user}
              placeholder="Gender"
              value={valueGender}
              onChange={setValueGenderChange}
            />
            <ProfileItem
              type={profileItemType}
              image={phone}
              placeholder="Occupation"
              value={valueOccupation}
              onChange={setValueOccupationChange}
            />
            <ProfileItem
              type={profileItemType}
              image={user}
              placeholder="Bio"
              value={valueBio}
              onChange={setValueBioChange}
            />

          </div>
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
