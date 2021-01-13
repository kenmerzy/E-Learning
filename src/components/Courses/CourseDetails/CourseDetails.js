/* eslint-disable indent */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
import { Player } from 'video-react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import styles from './CourseDetails.module.scss'
import LogoFlutter from '../../../assets/images/LogoFlutter.svg'
import AvatarMeng from '../../../assets/images/AvatarMeng.svg'
import { URL } from '../../../configs'
import {
  GetHourOfTime, truncateString,
} from '../../../utils'
import Next from '../../../assets/images/Next.svg'
import Back from '../../../assets/images/Back.svg'
import { coursesAction } from '../../../redux/actions'
import ModalComponent from '../../Account/ModalComponent/ModalComponent'

const CourseDetails = (props) => {
  const { location } = props
  const { params, data } = location?.state
  const { active, expired } = data
  const dispatch = useDispatch()
  const token = useSelector((value) => value?.userReducer?.token)
  const [videoPath, setVideoPath] = useState('/publish/videos/01.UIDesignforDevelopers.mp4')
  const [videoTitle, setVideoTitle] = useState('')
  const [videoDescription, setVideoDescription] = useState('')
  const [isVideoShow, setIsVideoShow] = useState(false)
  const [videoIndex, setVideoIndex] = useState(0)
  const [timeCourse, setTimeCourse] = useState(0)
  const [maBG, setMaBG] = useState('')
  const [maKH, setmaKH] = useState('')
  const arrVideos = useSelector((value) => value?.coursesReducer?.arrayVideosOfCourse)
  const arrQuestion = useSelector((value) => value.coursesReducer.arrQuestion)
  const [isModalShow, setIsModalShow] = useState(false)
  const [textModal, setTextModal] = useState('')
  const [typeModal, setTypeModal] = useState('')
  const [enableView, setEnableView] = useState(data?.enableView)
  const [arrayAnswersExam, setArrayAnswersExam] = useState(Array(useSelector((value) => value?.coursesReducer?.arrQuestion?.length)).fill())
  const handleVideoItemClick = (item, index) => {
    if (index < enableView) {
      setMaBG(item.id)
      dispatch(coursesAction.GET_LIST_QUESTION({
        token,
        maBG: item.id,
      }, (response) => {
        if (response.success) {
          setIsVideoShow(true)
          setVideoPath(item.video)
          setVideoTitle(item.tieuDe)
          setVideoDescription(item.moTa)
          setVideoIndex(index)
          if (isVideoShow) {
            const elmnt = document.getElementById('video')
            elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' })
          } else {
            const timeout = setTimeout(() => {
              const elmnt = document.getElementById('video')
              elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' })
              clearTimeout(timeout)
            }, 50)
          }
        } else {
          console.log('===============================================')
          console.log('get List Question fail')
          console.log('===============================================')
        }
      }))
    } else if (index === enableView) {
      dispatch(coursesAction.GET_LIST_QUESTION({
        token,
        maBG: item.id,
      }, (response) => {
        if (response.success) {
          setIsVideoShow(true)
          setVideoPath(item.video)
          setVideoTitle(item.tieuDe)
          setVideoDescription(item.moTa)
          setVideoIndex(index)

          if (arrQuestion.length === 0) {
            dispatch(coursesAction.ADD_PROGRESS({
              token,
              maKH,
              maBG: item.id,
            }, (responseAddProgress) => {
              console.log('responseAddProgress init', responseAddProgress)
              if (responseAddProgress.success) {
                setEnableView(enableView + 1)
                console.log('responseAddProgress success', responseAddProgress)
              } else {
                setTypeModal('fail')
                setTextModal('Add Progress fail !!')
                setIsModalShow(true)
              }
            }))
          }
          if (isVideoShow) {
            const elmnt = document.getElementById('video')
            elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' })
          } else {
            const timeout = setTimeout(() => {
              const elmnt = document.getElementById('video')
              elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' })
              clearTimeout(timeout)
            }, 50)
          }
        } else {
          console.log('===============================================')
          console.log('get List Question fail')
          console.log('===============================================')
        }
      }))
    } else {
      setTypeModal('fail')
      setTextModal('You need to watch the previous video and do an exam first')
      setIsModalShow(true)
    }
  }
  const handleVideoBackClick = () => {
    setMaBG(arrVideos[videoIndex - 1].id)
    dispatch(coursesAction.GET_LIST_QUESTION({
      token,
      maBG: arrVideos[videoIndex - 1].id,
    }, (response) => {
      if (response.success) {
        setIsVideoShow(true)
        setVideoPath(arrVideos[videoIndex - 1].video)
        setVideoTitle(arrVideos[videoIndex - 1].tieuDe)
        setVideoDescription(arrVideos[videoIndex - 1].moTa)
        setVideoIndex(videoIndex - 1)
        if (isVideoShow) {
          const elmnt = document.getElementById('video')
          elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          const timeout = setTimeout(() => {
            const elmnt = document.getElementById('video')
            elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' })
            clearTimeout(timeout)
          }, 50)
        }
      } else {
        console.log('===============================================')
        console.log('get List Question fail')
        console.log('===============================================')
      }
    }))
  }
  const handleVideoNextClick = () => {
    console.log('===============================================')
    console.log('VIDEO INDEX', videoIndex)
    console.log('===============================================')
    if ((videoIndex) === enableView) {
      if (arrQuestion.length === 0) {
        setMaBG(arrVideos[videoIndex + 1].id)
        dispatch(coursesAction.GET_LIST_QUESTION({
          token,
          maBG: arrVideos[videoIndex + 1].id,
        }, (response) => {
          if (response.success) {
            console.log('===============================================')
            console.log('res if', response)
            console.log('===============================================')
            setIsVideoShow(true)
            setVideoPath(arrVideos[videoIndex + 1].video)
            setVideoTitle(arrVideos[videoIndex + 1].tieuDe)
            setVideoDescription(arrVideos[videoIndex + 1].moTa)
            setVideoIndex(videoIndex + 1)
            dispatch(coursesAction.ADD_PROGRESS({
              token,
              maKH,
              maBG,
            }, (responseAddProgress) => {
              console.log('responseAddProgress init', responseAddProgress)
              if (responseAddProgress.success) {
                setEnableView(enableView + 1)
                console.log('responseAddProgress success', responseAddProgress)
              } else {
                setTypeModal('fail')
                setTextModal('Add Progress fail !!')
                setIsModalShow(true)
              }
            }))
          } else {
            console.log('===============================================')
            console.log('get List Question fail')
            console.log('===============================================')
          }
        }))
      } else {
        setTypeModal('fail')
        setTextModal('You need to watch this video and do an exam first')
        setIsModalShow(true)
      }
    } else {
      setMaBG(arrVideos[videoIndex + 1].id)
      dispatch(coursesAction.GET_LIST_QUESTION({
        token,
        maBG: arrVideos[videoIndex + 1].id,
      }, (response) => {
        if (response.success) {
          console.log('===============================================')
          console.log('res else', response)
          console.log('===============================================')
          setIsVideoShow(true)
          setVideoPath(arrVideos[videoIndex + 1].video)
          setVideoTitle(arrVideos[videoIndex + 1].tieuDe)
          setVideoDescription(arrVideos[videoIndex + 1].moTa)
          setVideoIndex(videoIndex + 1)
          dispatch(coursesAction.ADD_PROGRESS({
            token,
            maKH,
            maBG: arrVideos[videoIndex + 1].id,
          }, (responseAddProgress) => {
            console.log('responseAddProgress init', responseAddProgress)
            if (responseAddProgress.success) {
              setEnableView(enableView + 1)
              console.log('responseAddProgress success', responseAddProgress)
            } else {
              setTypeModal('fail')
              setTextModal('Add Progress fail !!')
              setIsModalShow(true)
            }
          }))
        } else {
          console.log('===============================================')
          console.log('get List Question fail')
          console.log('===============================================')
        }
      }))
    }
  }
  const handleDoneExamClick = () => {
    console.log('===============================================')
    console.log('arrayAnswersExam', arrayAnswersExam)
    console.log('===============================================')
    dispatch(coursesAction.CHECK_POINT({
      token,
      maBG,
      arrayResult: arrayAnswersExam,
    }, (response) => {
      if (response.success) {
        console.log('success', response)
        console.log('===============================================')
        console.log('token', token,)
        console.log('maKH', maKH,)
        console.log('maBG', maBG,)
        console.log('===============================================')
        dispatch(coursesAction.ADD_PROGRESS({
          token,
          maKH,
          maBG: arrVideos[videoIndex + 1].id,
        }, (responseAddProgress) => {
          console.log('responseAddProgress init', responseAddProgress)
          if (responseAddProgress.success) {
            setEnableView(enableView + 1)
            setIsModalShow(true)
            setTypeModal('success')
            setTextModal(`Your point is: ${response.data.point}/100`)
            console.log('responseAddProgress success', responseAddProgress)
          } else {
            setTypeModal('fail')
            setTextModal('Add Progress fail !!')
            setIsModalShow(true)
          }
        }))
      } else {
        setIsModalShow(true)
        setTypeModal('fail')
        setTextModal('You have to choose all answer !!!')
        console.log('fail', response)
      }
    }))
  }
  const handleRadioChange = (item, index) => {
    const newArr = [...arrayAnswersExam]
    const radioButton = document.getElementsByName(item.id)
    for (let i = 0, { length } = radioButton; i < length; i++) {
      if (radioButton[i].checked) {
        // do whatever you want with the checked radio
        newArr[index] = { id: parseInt(radioButton[i].value, 10), maCH: item.arrayAnswer[0].maCH }
        setArrayAnswersExam(newArr)
        // only one radio can be logically checked, don't check the rest
        break
      }
    }
  }
  const handleModalComponentCloseClick = () => {
    setIsModalShow(false)
  }
  useEffect(() => {
    setTimeCourse(GetHourOfTime(params.tongThoiLuong))
    setmaKH(params.id)
  })

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
      <div className="row">
        <div className="col-lg-4">
          <img src={LogoFlutter} className={styles.logo} alt="logo" />
        </div>
        <div className="col-lg-8">
          <div className={styles.information}>
            <img src={LogoFlutter} className={styles.logo} alt="logo" />
            <p className={styles.title}>{params.tenKhoaHoc}</p>
            <p className={styles.time}>
              <span className={styles.number}>
                {`${params.soLuongBaiGiang}`}
              </span>
              {' '}
              <span>sections - </span>

              <span className={styles.number}>
                {`${timeCourse}`}
              </span>

              <span> minutes of video</span>
            </p>
            <p className={styles.description}>{`${params.moTa}`}</p>
            <img src={AvatarMeng} className={styles.avatarAuthor} alt="logo" />
            <p className={styles.moreInfo}>
              Purchase includes access to 30 courses.
              Over 80 hours of content, including 12 hours for SwiftUI,
              for iOS 13 and iOS 14.
            </p>
          </div>
        </div>
      </div>
      {params.taiLieus && <div className={styles.taiLieu}>
        <span>Read more </span>
        <a
          href={`${URL}${params.taiLieu}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          document
        </a>
      </div>}
      <div className={styles.topic}>
        <p className={styles.titleTopic}>
          {`${params.soLuongBaiGiang} topics`}
        </p>
        <p className={styles.contentTopic}>
          All techniques are explained step-by-step,
          in a beginner-friendly format so that you
          can easily follow in a cohesive way.
        </p>
      </div>

      <div className={active && !expired ? styles.videos : styles.videosNoAccess}>
        <ul className="row">
          {arrVideos.map((item, index) => (
            <li>
              <a
                className={styles.item}
                rel="noreferrer"
                onClick={active && !expired ? () => handleVideoItemClick(item, index) : null}
                href
                style={index > enableView ? {
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: 10,
                  cursor: 'not-allowed',
                } : {
                    borderRadius: 10,
                    cursor: 'pointer',
                  }}
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
      {isVideoShow && <div
        id="video"
        className={styles.divVideo}
      >
        <p>{videoTitle}</p>
        <Player
          src={`${URL}${videoPath}`}
          className={styles.Player}
          preload="auto"
        />
        <div className={styles.moTaVideo}>

          <p>
            {videoDescription}

          </p>
        </div>

        {videoIndex !== 0 && <a
          className={styles.logoBack}
          rel="noreferrer"
          onClick={handleVideoBackClick}
          href
        >
          <img src={Back} alt="logo" />
        </a>}
        {videoIndex !== arrVideos.length - 1 && <a
          a
          className={styles.logoNext}
          rel="noreferrer"
          onClick={handleVideoNextClick}
          href
        >
          <img src={Next} alt="logo" />
        </a>}
        <div className={styles.divExam}>
          <p className={styles.titleQues}>
            {arrQuestion.length !== 0 ? `Lesson ${videoIndex + 1} Examination` : 'There is no exam for this lesson'}
          </p>
          {arrQuestion.length !== 0 && arrQuestion.map((item, index) => {
            const { arrayAnswer } = item
            return (
              <div className={styles.coverItemExam} key={`cau hoi - ${item.id}`}>
                <div className={styles.question}>
                  <p>{`Question ${index + 1}: ${item.noiDung}`}</p>
                </div>
                <div className={styles.divAnswer}>
                  <div className={styles.answerItem}>
                    <input
                      type="radio"
                      id={arrayAnswer[0].id}
                      name={item.id}
                      value={arrayAnswer[0].id}
                      onChange={() => handleRadioChange(item, index)}
                    />
                    <p>{arrayAnswer[0].noiDung}</p>

                  </div>
                  <div className={styles.answerItem}>
                    <input
                      type="radio"
                      id={arrayAnswer[1].id}
                      name={item.id}
                      value={arrayAnswer[1].id}
                      onChange={() => handleRadioChange(item, index)}
                    />
                    <p>{arrayAnswer[1].noiDung}</p>

                  </div>
                </div>
                <div className={styles.divAnswer}>
                  <div className={styles.answerItem}>
                    <input
                      type="radio"
                      id={arrayAnswer[2].id}
                      name={item.id}
                      value={arrayAnswer[2].id}
                      onChange={() => handleRadioChange(item, index)}
                    />
                    <p>{arrayAnswer[2].noiDung}</p>

                  </div>
                  <div className={styles.answerItem}>
                    <input
                      type="radio"
                      id={arrayAnswer[3].id}
                      name={item.id}
                      value={arrayAnswer[3].id}
                      onChange={() => handleRadioChange(item, index)}
                    />
                    <p>{arrayAnswer[3].noiDung}</p>

                  </div>
                </div>
              </div>
            )
          })}
          {arrQuestion.length !== 0
            && <div className={styles.divButton}>
              <button
                className={styles.buttonDoneExam}
                onClick={handleDoneExamClick}
                type="button"
              >
                <p>Done</p>
              </button>
            </div>}
        </div>
      </div>}
    </div>
  )
}
export default CourseDetails
