/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import styles from './ModalCreateCourse.module.scss'
import ModalComponent from '../../Account/ModalComponent/ModalComponent'
import deleteIcon from '../../../assets/images/delete.svg'
import name from '../../../assets/images/name.png'
import description from '../../../assets/images/description.png'
import { coursesAction } from '../../../redux/actions'

const ModalCreateCourse = (props) => {
  const { onCloseModalClick, maKH } = props
  const [isModalShow, setIsModalShow] = useState('')
  const [textModal, setTextModal] = useState('')
  const [tenBaiGiang, setTenBaiGiang] = useState('')
  const [fileInput, setFileInput] = useState('')
  const token = useSelector((value) => value?.userReducer?.token)
  const [moTa, setMoTa] = useState('')

  const dispatch = useDispatch()

  const handleTenBaiGiangChange = (event) => {
    setTenBaiGiang(event.target.value)
  }
  const handleMoTaChange = (event) => {
    setMoTa(event.target.value)
  }
  const handleFileInputChange = (e) => {
    const { files } = e.target
    setFileInput(files[0])
  }

  const handleCreateCourseClick = () => {
    const formData = new FormData()
    formData.append(
      'tieuDe', tenBaiGiang,
    )
    formData.append(
      'moTa', moTa,
    )
    formData.append(
      'token', token,
    )
    formData.append(
      'maKH', maKH,
    )
    formData.append(
      'videoUpload', fileInput, fileInput.name,
    )
    console.tron.log({ formData })
    dispatch(coursesAction.ADD_NEW_VIDEO(formData,
      (response) => {
        console.log('===============================================')
        console.log('response', response)
        console.log('===============================================')
        if (response.success) {
          setTextModal('Add video successful !')
          setIsModalShow(true)
        } else {
          setTextModal('Add video fail !')
          setIsModalShow(true)
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
        />
      </Modal>}

      <div className={styles.coverT}>
        <p className={styles.title}>Add new video</p>
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
              value={tenBaiGiang}
              onChange={handleTenBaiGiangChange}
            />
          </form>
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
        <div className={styles.divFileInput}>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              type="file"
              onChange={handleFileInputChange}
            />
          </form>
        </div>

        <button
          className={styles.buttonSignUp}
          onClick={handleCreateCourseClick}
          type="button"
        >
          <p>Add video</p>
        </button>

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
export default ModalCreateCourse
