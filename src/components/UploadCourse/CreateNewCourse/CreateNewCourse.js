/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import styles from './CreateNewCourse.module.scss'
import LogoReact from '../../../assets/images/LogoReact.svg'
import AvatarMeng from '../../../assets/images/AvatarMeng.svg'
import addIcon from '../../../assets/images/addIcon.svg'
import ModalCreateCourse from '../ModalCreateCourse/ModalCreateCourse'
import CourseCard from '../../../assets/images/CourseCard.svg'
import { truncateString } from '../../../utils'
import trash from '../../../assets/images/trash.svg'
import { coursesAction } from '../../../redux/actions'

const CreateNewCourse = (props) => {
  const [maKH, setMaKH] = useState()
  // Tat lam off line mai bat lai

  const { location } = props
  const { params, data } = location?.state
  const { active, expired } = data

  // const active = true
  // const expired = false

  const token = useSelector((value) => value?.userReducer?.token)
  const [isModalShow, setModalShow] = useState(false)
  const [isAddQuestionShow, setIsAddQuestionShow] = useState(false)
  const [maBaiGiang, setMaBaiGiang] = useState('')
  const [itemVideo, setItemVideo] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [currentAnswer1, setCurrentAnswer1] = useState('')
  const [currentAnswer2, setCurrentAnswer2] = useState('')
  const [currentAnswer3, setCurrentAnswer3] = useState('')
  const [currentAnswer4, setCurrentAnswer4] = useState('')
  const [arrayQuestionAndAnswer, setArrayQuestionAndAnswer] = useState([])
  const arrVideosOfCourse = useSelector((value) => value?.coursesReducer?.arrayVideosOfCourse)
  const arrQuestion = useSelector((value) => value?.coursesReducer?.arrQuestion)
  const dispatch = useDispatch()
  const handleShowModal = () => {
    setModalShow(true)
  }
  const handleCloseModal = () => {
    setModalShow(false)
  }
  const handleVideoOnClick = (item) => {
    setMaBaiGiang(item.id)
    setItemVideo(item)
    setCurrentQuestion('')
    setCurrentAnswer1('')
    setCurrentAnswer2('')
    setCurrentAnswer3('')
    setCurrentAnswer4('')
    dispatch(coursesAction.GET_LIST_QUESTION({
      token,
      maBG: item.id,
    }, (response) => {
      if (response.success) {
        console.log('===============================================')
        console.log('arrQuestion', arrQuestion)
        console.log('===============================================')
        setIsAddQuestionShow(true)
      } else {
        console.log('===============================================')
        console.log('get List Question fail')
        console.log('===============================================')
      }
    }))
  }
  const handleCancelAddQuestionClick = () => {
    setIsAddQuestionShow(false)
  }
  const handleSaveAddQuestionClick = () => {
    dispatch(coursesAction.ADD_QUESTION({
      token,
      maBG: maBaiGiang,
      noiDung: currentQuestion,
      arrayAnswer: [
        {
          noiDung: currentAnswer1,
          chinhXac: true,
        },
        {
          noiDung: currentAnswer2,
          chinhXac: false,
        },
        {
          noiDung: currentAnswer3,
          chinhXac: false,
        },
        {
          noiDung: currentAnswer4,
          chinhXac: false,
        },
      ],
    }, (response) => {
      console.log('===============================================')
      console.log('response add question', response)
      console.log('===============================================')
      dispatch(coursesAction.GET_LIST_QUESTION({
        token,
        maBG: maBaiGiang,
      }, (responseGet) => {
        if (responseGet.success) {
          console.log('===============================================')
          console.log('get Question success', arrQuestion)
          console.log('===============================================')
          setIsAddQuestionShow(true)
        } else {
          console.log('===============================================')
          console.log('get List Question fail', responseGet.message)
          console.log('===============================================')
        }
      }))
      if (!response.success) {
        console.log('===============================================')
        console.log('Add question fail', response?.message)
        console.log('===============================================')
      }
    }))
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
  const handleDeleteQues = (item) => {
    dispatch(coursesAction.DELETE_QUESTION({
      token,
      maCH: item.id,
    }, (res) => {
      if (res.success) {
        dispatch(coursesAction.GET_LIST_QUESTION({ token, maBG: maBaiGiang }))
      } else {
        console.log('===============================================')
        console.log('get ques fail',)
        console.log('===============================================')
      }
    }))
  }

  // Tat lam off line mai bat lai
  useEffect(() => {
    if (location?.state?.maKH !== undefined) {
      setMaKH(location?.state?.maKH)
    }
  })

  return (
    <div className={styles.container}>
      { isModalShow && <Modal
        show
        backdrop
        bsPrefix="modal"
      >
        <ModalCreateCourse
          onCloseModalClick={handleCloseModal}
          maKH={maKH}
        />
      </Modal>}

      <div div className="row">
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
      <div div className={styles.topic}>
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
                onClick={() => handleVideoOnClick(item)}
              >
                <div className={styles.divCircle}>
                  <p>
                    {index + 1}
                  </p>
                </div>
                <div className={styles.divContent}>
                  <div className={styles.rowTitle}>
                    <p>{truncateString(item.tieuDe, 50)}</p>
                    <div className={styles.time}>{`${item.thoiLuong.minute}:${item.thoiLuong.seconds}`}</div>
                  </div>
                  <p className={styles.contentDes}>{truncateString(item.moTa, 85)}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {
        isAddQuestionShow
        && <div className={styles.divQuestion}>
          <div className={styles.divTitleVideo}>
            {itemVideo && <p>{itemVideo.tieuDe}</p>}
          </div>
          <div className={styles.divInputQuestion}>
            <span>Question :  </span>
            <form
              className={styles.formInput}
              onSubmit={(e) => { e.preventDefault() }}
            >
              <input
                className={styles.inputQuestion}
                placeholder="Question..."
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
                placeholder="Right answer..."
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
                placeholder="Wrong answer 1"
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
                placeholder="Wrong answer 2"
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
                placeholder="Wrong answer 2"
                formNoValidate
                value={currentAnswer4}
                onChange={handleAnswer4OnChange}
              />
            </form>
          </div>
          <div className={styles.divButton}>

            <button
              className={styles.buttonCancel}
              onClick={handleCancelAddQuestionClick}
              type="button"
            >
              <p>Cancel</p>
            </button>
            <button
              className={styles.buttonConfirm}
              onClick={handleSaveAddQuestionClick}
              type="button"
            >
              <p>Add</p>
            </button>
          </div>
        </div>
      }
      {isAddQuestionShow && <div className={styles.divListExam}>
        <ul className="row">
          <p className={styles.titleList}>List Question</p>
          <li>
            <p className={styles.questionHeader}>Question</p>
            <p className={styles.answerHeader}>Right Answer</p>
            <p className={styles.answerHeader}>Wrong Answer</p>
            <p className={styles.answerHeader}>Wrong Answer</p>
            <p className={styles.answerHeader}>Wrong Answer</p>
            <p className={styles.deleteHeader}> </p>
          </li>
          {arrQuestion.map((item, index) => {
            const rightAns = item.arrayAnswer.filter((i) => {
              return i.chinhXac === true
            })
            const wrongAns = item.arrayAnswer.filter((i) => {
              return i.chinhXac === false
            })

            return (
              <li>
                <p className={styles.question}>{item.noiDung}</p>
                <p className={styles.answer}>{rightAns[0].noiDung}</p>
                <p className={styles.answer}>{wrongAns[0] ? wrongAns[0].noiDung : ''}</p>
                <p className={styles.answer}>{wrongAns[1] ? wrongAns[1].noiDung : ''}</p>
                <p className={styles.answer}>{wrongAns[2] ? wrongAns[2].noiDung : ''}</p>
                <a
                  href
                  onClick={() => handleDeleteQues(item)}
                  className={styles.delete}
                >
                  <img
                    src={trash}
                    className={styles.deleteIcon}
                    alt="logo"

                  />
                </a>
              </li>
            )
          })}
        </ul>
      </div>}
    </div>
  )
}
export default CreateNewCourse
