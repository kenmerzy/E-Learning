/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-indent */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CourseItem from '../../components/Courses/CourseItem/CourseItem'
import AvatarMeng from '../../assets/images/AvatarMeng.svg'
import LogoWhite from '../../assets/images/LogoWhite.svg'
import background1 from '../../assets/images/background1.svg'
import styles from './MyCourses.module.scss'
import { coursesAction } from '../../redux/actions'

const MyCourses = () => {
  const myCourse = useSelector((value) => value?.coursesReducer?.arrayMyCourse)
  const history = useHistory()
  const token = useSelector((value) => value?.userReducer?.token)
  const dispatch = useDispatch()
  const onClickLearnNow = () => {

  }
  const handleCourseItemClick = (item) => {
    dispatch(coursesAction.GET_VIDEOS_OF_COURSE({
      maKH: item.id,
      token,
    }, (response) => {
      if (response.success) {
        history.push({
          pathname: `details/${item.id}`,
          state:
          {
            params: item,
            data: response.data,
          },
        })
      } else {
        console.log('Get videos fail')
      }
    }))
  }
  const listItems = myCourse.map((item) => <CourseItem
    key={item.id}
    title={item.tenKhoaHoc}
    description={item.moTa}
    customStyles={{
      marginTop: 30,
      marginLeft: 50,
    }}
    gia={item.gia}
    logo={LogoWhite}
    avatar={AvatarMeng}
    background={background1}
    id={item.id}
    maLoaiKhoaHoc={item.maLKH}
    onClick={() => handleCourseItemClick(item)}
    totalTimes={item.tongThoiLuong}
    totalVideos={item.soLuongBaiGiang}
    totalView={item.soLuongDaBan}
    active={item.active}
    expired={item.expired}
    onClickLearnNow={(e) => onClickLearnNow(e, item)}
    onClickExtend={(e) => onClickLearnNow(e, item)}
    progress={item.progress.percent}

  />)
  return (
    <div className={styles.container}>
      {listItems.length > 0 ? <ul className="row">
        {listItems && listItems}
      </ul> : <div className={styles.notiEmptyCart}>
          <p>
            You haven't bought any courses yet
        </p>
        </div>}
    </div>
  )
}
export default MyCourses
