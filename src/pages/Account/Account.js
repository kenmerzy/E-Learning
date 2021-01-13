/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import DatePicker from 'react-datepicker'
import moment from 'moment'
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
import plusIcon from '../../assets/images/plusIcon.svg'
import RechargeModal from '../../components/Account/RechargeModal/RechargeModal'
import 'react-datepicker/dist/react-datepicker.css'

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
  const valueMoney = useSelector((value) => value?.userReducer?.informationUser.soDu)
  const email = useSelector((value) => value?.userReducer?.informationUser.email)
  // eslint-disable-next-line no-unused-vars
  const [valuePhoneNumber, setValuePhoneNumber] = useState(informationUser.sdt)
  const [profileItemType, setProfileItemType] = useState('text')
  const [buttonType, setButtonType] = useState('edit')
  const [isButtonCancelVisible, setIsButtonCancelVisible] = useState(false)
  const [isModalShow, setModalShow] = useState(false)
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
  const handleDateChange = (date) => {
    console.log('===============================================')
    console.log('e', moment(date).format('YYYY/MM/DD'))
    console.log('===============================================')
    setValueDateOfBirth(date)
  }
  // const setValueDateOfBirthChange = (event) => {
  //   setValueDateOfBirth(event.target.value)
  // }
  const setValueOccupationChange = (event) => {
    setValueOccupation(event.target.value)
  }
  const setValueGenderChange = (event) => {
    setValueGender(event.target.value)
  }
  const setValueBioChange = (event) => {
    setValueBio(event.target.value)
  }
  const handleAddMoneyClick = () => {
    setModalShow(true)
  }
  const handleCloseModal = () => {
    setModalShow(false)
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

    dispatch(userAction.GET_PROFILE({
      token,
      hoVaTen: valueName,
      diaChi: valueAddress,
      ngheNghiep: valueOccupation,
      ngaySinh: moment(valueDateOfBirth).format('YYYY/MM/DD'),
      gioiTinh: valueGender,
      gioiThieu: valueBio,

    },
      (response) => {
        if (response.success) {
          const { data } = response
          setValueName(data.hoVaTen)
          setValueDateOfBirth(data.ngaySinh)
          setValueAddress(data.diaChi)
          setValuePhoneNumber(data.sdt)
          setValueGender(data.gioiTinh)
          setValueBio(data.gioiThieu)
          setValueAccountType(data.ma)
          setValueOccupation(data.ngheNghiep)
          setInformationUser(data)

          setProfileItemType('text')
          setButtonType('edit')
          setIsButtonCancelVisible(false)
        } else {
          console.log('===============================================')
          console.log('get Profile fail', response)
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
          setValueAccountType(data.ma)
          setValueOccupation(data.ngheNghiep)
        }
      }))
    setIsSave(false)
  }

  return (
    <div className={styles.container}>
      {isModalShow && <Modal
        show
        backdrop
        bsPrefix="modal"
      >
        <RechargeModal
          onCloseModalClick={handleCloseModal}
          loadingLabel="Recharging..."

        />
      </Modal>}
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
          <div className={styles.divMoney}>
            <p>
              You have:
              <span>
                {valueMoney ? `  $${valueMoney}` : ' $0'}
              </span>
            </p>
            <a
              href
              rel="noreferrer"
              onClick={handleAddMoneyClick}
            >
              <img
                src={plusIcon}
                alt="logo"
              />
            </a>
          </div>
          <p className={styles.money}>
            Account type:
            {valueAccountType === 'AT' ? <span>
              {' Author'}
            </span>
              : <span>
                {'  Student'}
              </span>}
          </p>
          <p className={styles.money}>
            Email:
            <span>
              {' '}
              {email}
            </span>

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
            {/* <ProfileItem
              type={profileItemType}
              image={birthday}
              placeholder="Date of birth"
              value={valueDateOfBirth}
              textValue={informationUser.ngaySinh}
              onChange={setValueDateOfBirthChange}
            /> */}
            <ProfileItem
              type={profileItemType}
              image={address}
              placeholder="Address"
              value={valueAddress}
              textValue={informationUser.diaChi}
              onChange={setValueAddressChange}
            />
            <div className={styles.divInput}>
              <div className={styles.coverImage}>
                <img
                  src={birthday}
                  alt="logo"
                />
              </div>
              {profileItemType !== 'text' ? <DatePicker
                selected={new Date(valueDateOfBirth)}
                onChange={handleDateChange}
              />
                : <div className={styles.textP}>
                  <p>{`${moment(valueDateOfBirth).format('DD/MM/YYYY')}`}</p>
                </div>}
            </div>

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
