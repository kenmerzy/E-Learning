/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './CreateNewCourse.module.scss'
import LogoReact from '../../../assets/images/LogoReact.svg'
import AvatarMeng from '../../../assets/images/AvatarMeng.svg'
import addIcon from '../../../assets/images/addIcon.svg'
import ModalCreateCourse from '../ModalCreateCourse/ModalCreateCourse'
import CourseCard from '../../../assets/images/CourseCard.svg'

const CreateNewCourse = (props) => {
  const [maKH, setMaKH] = useState()
  const { location } = props
  const history = useHistory()

  const [isModalShow, setModalShow] = useState(false)
  const arrVideosOfCourse = useSelector((value) => value?.coursesReducer?.arrayVideosOfCourse)
  const handleShowModal = () => {
    console.log('maKH', maKH)
    console.log('===============================================')
    setModalShow(true)
  }
  const handleCloseModal = () => {
    setModalShow(false)
  }
  useEffect(() => {
    if (location?.state?.maKH !== undefined) {
      setMaKH(location?.state?.maKH)
      console.log('===============================================')
      console.log('props', props)
      console.log('location', location)
      console.log('maKH', maKH)
      console.log('arrVideosOfCourse', arrVideosOfCourse)
      console.log('===============================================')
    }
  })
  return (
    <div className={styles.container}>
      {isModalShow && <Modal
        show
        backdrop
        bsPrefix="modal"
      >
        <ModalCreateCourse
          onCloseModalClick={handleCloseModal}
          maKH={maKH}
        />
      </Modal>}

      <div className="row">
        <div className="col-lg-4">
          <img src={CourseCard} className={styles.courseCard} alt="logo" />
        </div>
        <div className="col-lg-8">
          <div className={styles.information}>
            <img src={LogoReact} className={styles.logo} alt="logo" />
            <p className={styles.title}>Build a SwiftUI app for iOS 14</p>
            <p className={styles.time}>20 sections - 3 hours of video</p>
            <p className={styles.description}>Build a multi-platform app for iOS, iPadOS and Big Sur</p>
            <img src={AvatarMeng} className={styles.avatarAuthor} alt="logo" />
            <p className={styles.moreInfo}>
              Purchase includes access to 30 courses.
              Over 80 hours of content, including 12 hours for SwiftUI,
              for iOS 13 and iOS 14.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.topic}>
        <p className={styles.titleTopic}>20 topics</p>
        <p className={styles.contentTopic}>
          All techniques are explained step-by-step,
          in a beginner-friendly format so that you
          can easily follow in a cohesive way.
        </p>
      </div>
      <div className={styles.videos}>
        <ul className="row" style={{ alignItems: 'flex-start' }}>
          <li>
            <Link
              className={styles.item}
              onClick={handleShowModal}
            >
              <div className={styles.coverAddIcon}>
                <img
                  src={addIcon}
                  className={styles.logo}
                  alt="logo"
                />
              </div>
              <div className={styles.divContent}>
                <div className={styles.titleAddVideo}>
                  <p>Add new video</p>
                </div>
                <p className={styles.desVideo}>Add more video to make your course easier</p>
              </div>
            </Link>
          </li>
          {arrVideosOfCourse.map((item, index) => (
            <li>
              <Link className={styles.item}>
                <div className={styles.divCircle}>
                  <p>
                    {index + 1}
                  </p>
                </div>
                <div className={styles.divContent}>
                  <div className={styles.rowTitle}>
                    <p>{item.tieuDe}</p>
                    <div className={styles.time}>{`${item.thoiLuong.minute}:${item.thoiLuong.seconds}`}</div>
                  </div>
                  <p className={styles.contentDes}>{item.moTa}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CreateNewCourse
