/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useSelector } from 'react-redux'
import styles from './CreateNewCourse.module.scss'
import LogoReact from '../../../assets/images/LogoReact.svg'
import AvatarMeng from '../../../assets/images/AvatarMeng.svg'
import addIcon from '../../../assets/images/addIcon.svg'
import ModalCreateCourse from '../ModalCreateCourse/ModalCreateCourse'
import CourseCard from '../../../assets/images/CourseCard.svg'
import { truncateString } from '../../../utils'

const CreateNewCourse = (props) => {
  const [maKH, setMaKH] = useState()
  const { location } = props
  const { params, data } = location?.state
  const { active, expired } = data
  console.log('location.state', location.state)

  // const token = useSelector((value) => value?.userReducer?.token)
  const [isModalShow, setModalShow] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [currentAnswer1, setCurrentAnswer1] = useState('')
  const [currentAnswer2, setCurrentAnswer2] = useState('')
  const [currentAnswer3, setCurrentAnswer3] = useState('')
  const [currentAnswer4, setCurrentAnswer4] = useState('')
  const [arrayQuestionAndAnswer, setArrayQuestionAndAnswer] = useState([])
  const arrVideosOfCourse = useSelector((value) => value?.coursesReducer?.arrayVideosOfCourse)
  const handleShowModal = () => {
    setModalShow(true)
  }
  const handleCloseModal = () => {
    setModalShow(false)
  }
  const handleVideoOnClick = () => {

  }

  const handleQuestionOnChange = (event) => {
    setCurrentQuestion(event.target.value)
  }
  const handleAnswer1OnChange = (event) => {
    setCurrentAnswer1(event.target.value)
  }
  const handleAnswer2OnChange = (event) => {
    setCurrentAnswer2(event.target.value)
  }
  const handleAnswer3OnChange = (event) => {
    setCurrentAnswer3(event.target.value)
  }
  const handleAnswer4OnChange = (event) => {
    setCurrentAnswer4(event.target.value)
  }
  useEffect(() => {
    if (location?.state?.maKH !== undefined) {
      setMaKH(location?.state?.maKH)
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
            <p className={styles.title}>{params?.tenKhoaHoc}</p>
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
      {active && !expired && <div className={styles.taiLieu}>
        <span>Read more  </span>
        <a
          href={`${URL}${params.taiLieu}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Document
        </a>
      </div>}
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
            <a
              href
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
            </a>
          </li>
          {arrVideosOfCourse && arrVideosOfCourse.map((item, index) => (
            <li>
              <a
                href
                className={styles.item}
                onClick={handleVideoOnClick}
              >
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
                  <p className={styles.contentDes}>{truncateString(item.moTa, 85)}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.divQuestion}>
        <div className={styles.divInputQuestion}>
          <span>Question :  </span>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.inputQuestion}
              placeholder="Question"
              formNoValidate
              value={currentQuestion}
              onChange={handleQuestionOnChange}
            />
          </form>
        </div>
        <div className={styles.divInputRightAns}>
          <span>Right answer : </span>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              placeholder="Right answer"
              formNoValidate
              value={currentAnswer1}
              onChange={handleAnswer1OnChange}
            />
          </form>
        </div>

        <div className={styles.divInput}>
          <span>Wrong answer : </span>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              placeholder="Wrong answer"
              formNoValidate
              value={currentAnswer2}
              onChange={handleAnswer2OnChange}
            />
          </form>
        </div>
        <div className={styles.divInput}>
          <span>Wrong answer : </span>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              placeholder="Wrong answer"
              formNoValidate
              value={currentAnswer3}
              onChange={handleAnswer3OnChange}
            />
          </form>
        </div>
        <div className={styles.divInput}>
          <span>Wrong answer : </span>
          <form
            className={styles.formInput}
            onSubmit={(e) => { e.preventDefault() }}
          >
            <input
              className={styles.input}
              placeholder="Wrong answer"
              formNoValidate
              value={currentAnswer4}
              onChange={handleAnswer4OnChange}
            />
          </form>
        </div>

      </div>
    </div>
  )
}
export default CreateNewCourse
