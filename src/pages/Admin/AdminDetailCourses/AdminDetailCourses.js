import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './AdminDetailCourses.module.scss'
import { URL } from '../../../configs'
import { coursesAction } from '../../../redux/actions'

const AdminDetailCourses = (props) => {
  const token = useSelector((value) => value?.userReducer?.token)
  const [detailItem, setDetailItem] = useState()
  const [videoTitle, setVideoTitle] = useState()

  const { location } = props
  const arrVideos = useSelector((value) => value?.coursesReducer?.arrayVideosOfCourse)
  const arrQuestion = useSelector((value) => value.coursesReducer.arrQuestion)

  const dispatch = useDispatch()

  console.log('===============================================')
  console.log('detailItem', detailItem)
  console.log('===============================================')

  const handleShowQuestionClick = (item) => {
    console.log('===============================================')
    console.log('item Question click', item)
    console.log('===============================================')
    setVideoTitle(item.tieuDe)
    dispatch(coursesAction.GET_LIST_QUESTION({
      token,
      maBG: item.id,
    }, (response) => {
      console.log('===============================================')
      console.log('responseInit', response)
      console.log('===============================================')
      if (response.success) {
        const elmnt = document.getElementById('question')
        elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' })
        setVideoTitle(item.tieuDe)
      } else {
        console.log('===============================================')
        console.log('get List Question fail')
        console.log('===============================================')
      }
    }))
  }

  useEffect(() => {
    if (location?.state?.params !== undefined) {
      setDetailItem(location?.state?.params)
    }
  })
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <p className={styles.title}>{detailItem && detailItem.tenKhoaHoc}</p>
        <p className={styles.description}>{detailItem && detailItem.moTa}</p>
      </div>

      <div className={styles.listLesson}>
        <ul className="row">
          <li>
            <p className={styles.lessonNameHeader}>Lesson name</p>
            <p className={styles.moTaHeader}>Description</p>
            <p className={styles.showQuesHeader}>Exam question</p>
            <p className={styles.linkVideoHeader}>Link video</p>
          </li>
          {arrVideos.map((item) => (
            <li>
              <p className={styles.lessonName}>{item.tieuDe}</p>
              <p className={styles.moTa}>{item.moTa}</p>
              <a
                className={styles.linkVideo}
                href
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleShowQuestionClick(item)}
              >
                Show question
              </a>
              <a
                href={`${URL}${item.video}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.showQues}
              >
                Show video
              </a>

            </li>
          ))}
        </ul>
      </div>
      <div className={styles.divExam} id="question">
        <p className={styles.titleQues}>
          {arrQuestion.length !== 0 ? ` ${videoTitle + 1} Examination` : 'There is no exam for this lesson'}
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
                  />
                  <p>{arrayAnswer[0].noiDung}</p>

                </div>
                <div className={styles.answerItem}>
                  <input
                    type="radio"
                    id={arrayAnswer[1].id}
                    name={item.id}
                    value={arrayAnswer[1].id}
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
                  />
                  <p>{arrayAnswer[2].noiDung}</p>

                </div>
                <div className={styles.answerItem}>
                  <input
                    type="radio"
                    id={arrayAnswer[3].id}
                    name={item.id}
                    value={arrayAnswer[3].id}
                  />
                  <p>{arrayAnswer[3].noiDung}</p>

                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}
export default AdminDetailCourses
