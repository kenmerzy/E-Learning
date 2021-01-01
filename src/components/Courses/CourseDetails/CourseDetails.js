import React from 'react'
import styles from './CourseDetails.module.scss'
import LogoFlutter from '../../../assets/images/LogoFlutter.svg'
import AvatarMeng from '../../../assets/images/AvatarMeng.svg'

const videosExample = [
  {
    title: 'Introduction to Visual Design',
    description: 'Learn the foundations of UI design and start designing an app with me.',
    time: '42:16',
  },
  {
    title: 'Introduction to Visual Design',
    description: 'Learn the foundations of UI design and start designing an app with me.',
    time: '42:16',
  },
  {
    title: 'Introduction to Visual Design',
    description: 'Learn the foundations of UI design and start designing an app with me.',
    time: '42:16',
  },
  {
    title: 'Introduction to Visual Design',
    description: 'Learn the foundations of UI design and start designing an app with me.',
    time: '42:16',
  },
  {
    title: 'Introduction to Visual Design',
    description: 'Learn the foundations of UI design and start designing an app with me.',
    time: '42:16',
  },
  {
    title: 'Introduction to Visual Design',
    description: 'Learn the foundations of UI design and start designing an app with me.',
    time: '42:16',
  },
  {
    title: 'Introduction to Visual Design',
    description: 'Learn the foundations of UI design and start designing an app with me.',
    time: '42:16',
  },
  {
    title: 'Introduction to Visual Design',
    description: 'Learn the foundations of UI design and start designing an app with me.',
    time: '42:16',
  },
  {
    title: 'Introduction to Visual Design',
    description: 'Learn the foundations of UI design and start designing an app with me.',
    time: '42:16',
  },
  {
    title: 'Introduction to Visual Design',
    description: 'Learn the foundations of UI design and start designing an app with me.',
    time: '42:16',
  },
  {
    title: 'Introduction to Visual Design',
    description: 'Learn the foundations of UI design and start designing an app with me.',
    time: '42:16',
  },
  {
    title: 'Introduction to Visual Design',
    description: 'Learn the foundations of UI design and start designing an app with me.',
    time: '42:16',
  },
]

const CourseDetails = () => {
  return (
    <div className={styles.container}>
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
              <div className={styles.item}>
                <div className={styles.divCircle}>
                  <p>
                    {index + 1}
                  </p>
                </div>
                <div className={styles.divContent}>
                  <div className={styles.rowTitle}>
                    <p>{item.title}</p>
                    <div className={styles.time}>{item.time}</div>
                  </div>
                  <p className={styles.contentDes}>{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CourseDetails
