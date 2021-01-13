/* eslint-disable no-undef */

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import styles from './CreateCourseComponent.module.scss'
import ModalComponent from '../Account/ModalComponent/ModalComponent'
import deleteIcon from '../../assets/images/delete.svg'
import name from '../../assets/images/name.png'
import time from '../../assets/images/time.png'
import description from '../../assets/images/description.png'
import price from '../../assets/images/price.png'
import { coursesAction } from '../../redux/actions'

const CreateCourseComponent = (props) => {
  const arrayAllCategory = useSelector((value) => value?.coursesReducer?.arrayAllCategory)
  const token = useSelector((value) => value?.userReducer?.token)
  const { onCloseModalClick } = props
  const [isModalShow, setIsModalShow] = useState('')
  const [textModal, setTextModal] = useState('')
  const [typeModal, setTypeModal] = useState('')
  const [tenKhoaHoc, setTenKhoaHoc] = useState('')
  const [maLKH, setMaLKH] = useState(arrayAllCategory[0].id)
  const [moTa, setMoTa] = useState('')
  const [gia, setGia] = useState('')
  const [thoiHan, setThoiHan] = useState('')
  const [fileUpload, setFileUpload] = useState()

  const dispatch = useDispatch()

  const handleTenKhoaHocChange = (event) => {
    setTenKhoaHoc(event.target.value)
  }
  const handleMaLKHChange = (event) => {
    setMaLKH(event.target.value)
  }
  const handleMoTaChange = (event) => {
    setMoTa(event.target.value)
  }
  const handleGiaChange = (event) => {
    setGia(event.target.value)
  }
  const handleThoiHanChange = (event) => {
    setThoiHan(event.target.value)
  }
  const handleFileUploadChange = (e) => {
    const { files } = e.target
    setFileUpload(files[0])
  }

  const handleCreateCourseClick = () => {
    dispatch(coursesAction.ADD_NEW_COURSE({
      token,
      tenKhoaHoc,
      moTa,
      gia,
      thoiHan,
      maLKH,
      fileUpload,
    }, (response) => {
      if (response.success) {
        console.log('===============================================')
        console.log('response', response)
        console.log('===============================================')
        setTextModal('Create course successful !')
        setIsModalShow(true)
        setTypeModal('success')
      } else {
        console.log('===============================================')
        console.log('response', response)
        console.log('===============================================')
        setTextModal('Create course fail !')
        setIsModalShow(true)
        setTypeModal('fail')
      }
    }))
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
        <p className={styles.title}>Create new course</p>
        <p className={styles.description}> Your course will be vetify as soon as possible</p>
        <div className={styles.divInput}>
          <div className={styles.coverImage}>
            <img
              src={name}
              alt="logo"
            />
          </div>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              placeholder="Course name"
              formNoValidate
              value={tenKhoaHoc}
              onChange={handleTenKhoaHocChange}
            />
          </form>
        </div>
        <div className={styles.accountType}>
          <span>Course category: </span>
          <select
            value={maLKH}
            onChange={handleMaLKHChange}
          >
            {arrayAllCategory.map((item) => (
              <option value={item.id}>{item.tenLoaiKhoaHoc}</option>
            ))}

          </select>
        </div>
        <div className={styles.divInput}>
          <div className={styles.coverImage}>
            <img
              src={description}
              alt="logo"
            />
          </div>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              placeholder="Description"
              formNoValidate
              value={moTa}
              onChange={handleMoTaChange}
            />
          </form>
        </div>
        <div className={styles.divInput}>
          <div className={styles.coverImage}>
            <img
              src={time}
              alt="logo"
            />
          </div>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              placeholder="Limitation - Ex: 6 (months)"
              formNoValidate
              value={thoiHan}
              onChange={handleThoiHanChange}
            />
          </form>
        </div>
        <div className={styles.divInput}>
          <div className={styles.coverImage}>
            <img
              src={price}
              alt="logo"
            />
          </div>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              placeholder="Price - Ex: 59.99 ($)"
              formNoValidate
              value={gia}
              onChange={handleGiaChange}
            />
          </form>
        </div>
        <div className={styles.divInput}>

          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              type="file"
              onChange={handleFileUploadChange}
            />
          </form>
        </div>

        <button
          className={styles.buttonSignUp}
          onClick={handleCreateCourseClick}
          type="button"
        >
          <p>Create course</p>
        </button>
        <p className={styles.textLicense}>
          By clicking on Create course, you agree to our Terms of service and Privacy policy.
        </p>

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
export default CreateCourseComponent
