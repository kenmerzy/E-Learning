import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CourseItem from '../../components/Courses/CourseItem/CourseItem'
import LogoWhite from '../../assets/images/LogoWhite.svg'
import CreateCourseComponent from '../../components/UploadCourse/CreateCourseComponent'
import AvatarMeng from '../../assets/images/AvatarMeng.svg'
import background6 from '../../assets/images/background6.svg'
import backgroundUpload from '../../assets/images/backgroundUpload.svg'
import styles from './UploadCourse.module.scss'
import { coursesAction } from '../../redux/actions'

const UploadCourse = () => {
  const [isModalShow, setModalShow] = useState(false)
  const arrayUploadedCourses = useSelector((value) => value?.coursesReducer?.arrayUploadedCourses)
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch()
  const history = useHistory()

  const handleCloseModal = () => {
    setModalShow(false)
  }
  const handleShowModal = () => {
    setModalShow(true)
  }
  const handleOnClick = (item) => {
    dispatch(coursesAction.GET_VIDEOS_OF_COURSE({ maKH: item.id },
      (response) => {
        if (response.success) {
          history.push({
            pathname: 'create-new-course',
            state:
            {
              maKH: item.id,
            },
          })
        } else {
          console.log('===============================================')
          console.log('GET_VIDEOS_OF_COURSE Fail')
          console.log('===============================================')
        }
      }))
  }

  const listItems = arrayUploadedCourses.map((item) => <CourseItem
    title={item.tenKhoaHoc}
    description={item.moTa}
    customStyles={{ margin: 20 }}
    logo={LogoWhite}
    avatar={AvatarMeng}
    background={background6}
    totalView={item.soLuongDaBan}
    gia={item.gia}
    totalVideos={item.soLuongBaiGiang}
    totalTimes={item.tongThoiLuong}
    onClick={() => handleOnClick(item)}

  />)

  useEffect(() => {

  }, [arrayUploadedCourses])
  return (
    <div className={styles.container}>
      {isModalShow && <Modal
        show
        backdrop
        bsPrefix="modal"
      >
        <CreateCourseComponent
          onCloseModalClick={handleCloseModal}
        />
      </Modal>}
      <ul className="row">
        <CourseItem
          title="Create a new course"
          description="Long time no see. Create a new course now. "
          customStyles={{ margin: 20 }}
          background={backgroundUpload}
          onClick={handleShowModal}
        />
        {listItems}
      </ul>
    </div>
  )
}
export default UploadCourse
