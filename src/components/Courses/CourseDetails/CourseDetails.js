/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import styles from './CourseDetails.module.scss'
import LogoFlutter from '../../../assets/images/LogoFlutter.svg'
import AvatarMeng from '../../../assets/images/AvatarMeng.svg'
import VideoDetailComponent from '../VideoDetailComponent/VideoDetailComponent'

const videosExample = [
  {
    tieuDe: 'Introduction ',
    moTa: 'Learn the foundations of UI design and start designing an app with me.',
    thoiLuong: {
      hours: 3,
      minute: 12,
      seconds: 36,
    },
  },
  {
    tieuDe: 'Introduction to Visual Design',
    moTa: 'Learn the foundations of UI design and start designing an app with me.',
    thoiLuong: {
      hours: 3,
      minute: 12,
      seconds: 36,
    },
  },
  {
    tieuDe: 'Introduction  Design',
    moTa: 'Learn the foundations of UI design and start designing an app with me.',
    thoiLuong: {
      hours: 3,
      minute: 12,
      seconds: 36,
    },
  },
  {
    tieuDe: 'Design',
    moTa: 'Learn the foundations of UI design and start designing an app with me.',
    thoiLuong: {
      hours: 3,
      minute: 12,
      seconds: 36,
    },
  },
  {
    tieuDe: 'Visual ',
    moTa: 'Learn the foundations of UI design and start designing an app with me.',
    thoiLuong: {
      hours: 3,
      minute: 12,
      seconds: 36,
    },
  },
  {
    tieuDe: 'Introduction to Visual Design',
    moTa: 'Learn the foundations of UI design and start designing an app with me.',
    thoiLuong: {
      hours: 3,
      minute: 12,
      seconds: 36,
    },
  },
  {
    tieuDe: 'Visual Design',
    moTa: 'Learn the foundations of UI design and start designing an app with me.',
    thoiLuong: {
      hours: 3,
      minute: 12,
      seconds: 36,
    },
  },
  {
    tieuDe: 'Introduction to Visual Design',
    moTa: 'Learn the foundations of UI design and start designing an app with me.',
    thoiLuong: {
      hours: 3,
      minute: 12,
      seconds: 36,
    },
  },
  {
    tieuDe: 'Introduction Ta',
    moTa: 'Learn the foundations of UI design and start designing an app with me.',
    thoiLuong: {
      hours: 3,
      minute: 12,
      seconds: 36,
    },
  },
  {
    tieuDe: 'Introduction to Visual Design',
    moTa: 'Learn the foundations of UI design and start designing an app with me.',
    thoiLuong: {
      hours: 3,
      minute: 12,
      seconds: 36,
    },
  },
  {
    tieuDe: 'Introduction  Design',
    moTa: 'Learn the foundations of UI design and start designing an app with me.',
    thoiLuong: {
      hours: 3,
      minute: 12,
      seconds: 36,
    },
  },
  {
    tieuDe: 'Introduction Visual Design',
    moTa: 'Learn the foundations of UI design and start designing an app with me.',
    thoiLuong: {
      hours: 3,
      minute: 12,
      seconds: 36,
    },
  },
]

const CourseDetails = () => {
  const history = useHistory()
  const [isModalShow, setModalShow] = useState(false)

  const handleVideoClick = () => {
    history.push({
      pathname: 'video',
      state:
      {
        src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      },
    })
  }
  const handleCloseClick = () => {
    setModalShow(false)
  }
  return (
    <div className={styles.container}>
      {isModalShow && <Modal
        show
        backdrop
        bsPrefix="modal"
      >
        <VideoDetailComponent
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          handleCloseClick={handleCloseClick}
        />
      </Modal>}
      <div className="row">
        <div className="col-lg-5">
          <img src={LogoFlutter} className={styles.logo} alt="logo" />
        </div>
        <div className="col-lg-7">
          <div className={styles.information}>
            <img src={LogoFlutter} className={styles.logo} alt="logo" />
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
        <ul className="row">
          {videosExample.map((item, index) => (
            <li>
              <a
                className={styles.item}
                href="https://www.w3schools.com"
                rel="noreferrer"
                target="_blank"
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
                  <p className={styles.contentDes}>{item.moTa}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CourseDetails
