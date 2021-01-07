/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styles from './Account.module.scss'
import verified from '../../assets/images/verified.svg'
import { userAction } from '../../redux/actions'
import name from '../../assets/images/name.png'
import bio from '../../assets/images/bio.png'
import gender from '../../assets/images/gender.png'
import address from '../../assets/images/address.png'
import birthday from '../../assets/images/birthday.png'
import occupation from '../../assets/images/occupation.png'
import ProfileItem from '../../components/Account/ProfileItem/ProfileItem'

const Account = () => {
  const [informationUser, setInformationUser] = useState(useSelector((value) => value?.userReducer?.informationUser))
  const token = useSelector((value) => value?.userReducer?.token)
  // eslint-disable-next-line no-unused-vars
  const [isSave, setIsSave] = useState(false)
  const [valueName, setValueName] = useState(useSelector((value) => value?.userReducer?.name))
  const [valueAddress, setValueAddress] = useState(informationUser.diaChi)
  const [valueDateOfBirth, setValueDateOfBirth] = useState(informationUser.ngaySinh)
  const [valueOccupation, setValueOccupation] = useState(informationUser.ngheNghiep)
  const [valueGender, setValueGender] = useState(informationUser.gioiTinh)
  const [valueBio, setValueBio] = useState(informationUser.gioiThieu)
  const [valueAccountType, setValueAccountType] = useState(informationUser.ma)
  const [valueMoney, setValueMoney] = useState(informationUser.soDu)
  // eslint-disable-next-line no-unused-vars
  const [valuePhoneNumber, setValuePhoneNumber] = useState(informationUser.sdt)
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
          console.log('response UseEffect', response)
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
            setInformationUser(data)
          } else {
            console.log('===============================================')
            console.log('get Profile fail')
            console.log('===============================================')
          }
        }))
    } else {
      history.push('/')
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
    setIsSave(true)

    console.log('===============================================')
    console.log('token', token)
    console.log('informationUser', informationUser)
    console.log('valueName', valueName)
    console.log('valueAddress', valueAddress)
    console.log('valueOccupation', valueOccupation)
    console.log('valueGender', valueGender)
    console.log('valueBio', valueBio)
    console.log('===============================================')
    dispatch(userAction.GET_PROFILE({
      token,
      hoVaTen: valueName,
      diaChi: valueAddress,
      ngheNghiep: valueOccupation,
      gioiTinh: valueGender,
      gioiThieu: valueBio,

    },
      (response) => {
        if (response.success) {
          setProfileItemType('text')
          setButtonType('edit')
          setIsButtonCancelVisible(false)
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
          setInformationUser(data)
        } else {
          console.log('===============================================')
          console.log('get Profile fail')
          console.log('===============================================')
        }
      }))
  }
  const handleEditClick = () => {
    setProfileItemType('input')
    setButtonType('save')
    setIsButtonCancelVisible(true)
    setIsSave(false)
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
    setIsSave(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.divProfile}>
        <p className={styles.title}>PROFILE</p>
        <p className={styles.description}>Manage your Design+Code profile and account</p>
        <div className={styles.divAvatar}>
          <img
            src={verified}
            alt="logo"
          />
          <button
            type="button"
          >
            CHANGE AVATAR
          </button>
          <p className={styles.money}>
            You have:
            <span>
              {`  $${valueMoney}`}
            </span>
          </p>
          <p className={styles.money}>
            Account type:
            {valueAccountType === 'AT' ? <span>
              {' Student'}
            </span>
              : <span>
                {'  Author'}
              </span>}
          </p>
        </div>
        <p className={styles.title}>PROFILE SETTINGS</p>
        <div className="row">
          <div className="col-lg-6">
            <ProfileItem
              type={profileItemType}
              image={name}
              placeholder="Your name"
              value={valueName}
              textValue={informationUser.hoVaTen}
              onChange={setValueNameChange}
            />
            <ProfileItem
              type={profileItemType}
              image={birthday}
              placeholder="Date of birth"
              value={valueDateOfBirth}
              textValue={informationUser.ngaySinh}
              onChange={setValueDateOfBirthChange}
            />
            <ProfileItem
              type={profileItemType}
              image={address}
              placeholder="Address"
              value={valueAddress}
              textValue={informationUser.diaChi}
              onChange={setValueAddressChange}
            />

          </div>
          <div className="col-lg-6">
            <ProfileItem
              type={profileItemType}
              image={gender}
              placeholder="Gender"
              value={valueGender}
              textValue={informationUser.gioiTinh}
              onChange={setValueGenderChange}
            />
            <ProfileItem
              type={profileItemType}
              image={occupation}
              placeholder="Occupation"
              value={valueOccupation}
              textValue={informationUser.ngheNghiep}
              onChange={setValueOccupationChange}
            />
            <ProfileItem
              type={profileItemType}
              image={bio}
              placeholder="Bio"
              value={valueBio}
              textValue={informationUser.gioiThieu}
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
