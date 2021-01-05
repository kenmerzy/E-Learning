import React, { useEffect, useState } from 'react'
import { Player } from 'video-react'
import { useSelector } from 'react-redux'
import styles from './CourseDetails.module.scss'
import LogoFlutter from '../../../assets/images/LogoFlutter.svg'
import AvatarMeng from '../../../assets/images/AvatarMeng.svg'
import { URL } from '../../../configs'
// eslint-disable-next-line no-unused-vars
import { ParseTimeToMinuteAndSecond, GetHourOfTime } from '../../../utils'

import Next from '../../../assets/images/Next.svg'
import Back from '../../../assets/images/Back.svg'

const CourseDetails = (props) => {
  const { location } = props
  const { params, data } = location?.state
  const { active, expired } = data
  console.log('===============================================')
  console.log('params', params)
  console.log('data', data)
  console.log('===============================================')
  // const token = useSelector((value) => value?.userReducer?.token)
  const [videoPath, setVideoPath] = useState('/publish/videos/01.UIDesignforDevelopers.mp4')
  const [videoTitle, setVideoTitle] = useState('')
  const [isVideoShow, setIsVideoShow] = useState(false)
  const [videoIndex, setVideoIndex] = useState(0)
  const [timeCourse, setTimeCourse] = useState(0)
  const arrVideos = useSelector((value) => value?.coursesReducer?.arrayVideosOfCourse)
  const handleVideoItemClick = (item, index) => {
    setIsVideoShow(true)
    setVideoPath(item.video)
    setVideoTitle(item.tieuDe)
    setVideoIndex(index)
    if (isVideoShow) {
      const elmnt = document.getElementById('video')
      elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else {
      const timeout = setTimeout(() => {
        const elmnt = document.getElementById('video')
        elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' })
        clearTimeout(timeout)
      }, 50)
    }
  }
  const handleVideoBackClick = () => {
    setVideoPath(arrVideos[videoIndex - 1].video)
    setVideoTitle(arrVideos[videoIndex - 1].tieuDe)
    setVideoIndex(videoIndex - 1)
  }
  const handleVideoNextClick = () => {
    setVideoPath(arrVideos[videoIndex + 1].video)
    setVideoTitle(arrVideos[videoIndex + 1].tieuDe)
    setVideoIndex(videoIndex + 1)
  }
  useEffect(() => {
    setTimeCourse(GetHourOfTime(params.tongThoiLuong))
  })

  return (
    <div className={styles.container}>
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

              <span> hours of video</span>
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
      <div className={active ? !expired ? styles.videosNoAccess : styles.videos : styles.videosNoAccess}>
        <ul className="row">
          {arrVideos.map((item, index) => (
            <li>
              <a
                className={styles.item}
                rel="noreferrer"
                onClick={active && !expired ? () => handleVideoItemClick(item, index) : null}
                href
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
      </div>}
    </div>
  )
}
export default CourseDetails
