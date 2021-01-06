/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import CourseItem from '../../components/Courses/CourseItem/CourseItem'
import LogoWhite from '../../assets/images/LogoWhite.svg'
// import CourseDetails from '../../components/Courses/CourseDetails/CourseDetails'
import background1 from '../../assets/images/background1.svg'
import styles from './Courses.module.scss'
import { coursesAction } from '../../redux/actions'
import ModalComponent from '../../components/Account/ModalComponent/ModalComponent'

const Courses = () => {
  const dispatch = useDispatch()
  const arrayAllCourse = useSelector((value) => value?.coursesReducer?.arrayAllCourse)
  const arrayAllCategory = useSelector((value) => value?.coursesReducer?.arrayAllCategory)
  const arrayAuthor = useSelector((value) => value?.coursesReducer?.arrayAuthor)
  const token = useSelector((value) => value?.userReducer?.token)
  const history = useHistory()
  const [filterAuthor, setFilterAuthor] = useState('')
  const [filterCourse, setFilterCourse] = useState('')
  const [isModalShow, setIsModalShow] = useState('')
  const [textModal, setTextModal] = useState('')
  const [typeModal, setTypeModal] = useState('')
  const handleFilterAuthorChange = (event) => {
    setFilterAuthor(event.target.value)
    dispatch(coursesAction.GET_ALL_COURSE({
      maUser: event.target.value,
      maLKH: filterCourse,
      token,
    }, (response) => {
      if (response.success) {
        console.log('===============================================')
        console.log('filter Author Success')
        console.log('value', event.target.value)
        console.log('===============================================')
      } else {
        console.log('===============================================')
        console.log('filter Author Fail')
        console.log('===============================================')
      }
    }))
  }

  const handleMenuItemClick = (item) => {
    setFilterCourse(item.id)
    dispatch(coursesAction.GET_ALL_COURSE({
      maUser: filterAuthor,
      maLKH: item.id,
      token,
    }, (response) => {
      if (response.success) {
        console.log('filter Course Success')
      } else {
        console.log('filter Course Fail')
      }
    }))
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
  const onClickAddToCart = (e, item) => {
    dispatch(coursesAction.ADD_TO_CART({
      token,
      maKH: item.id,
    }, (response) => {
      if (response.success) {
        console.log('Add to cart success')
      } else {
        console.log('Add to cart fail')
      }
    }))
  }
  const onClickBuyNow = (item) => {
    dispatch(coursesAction.PURCHASE({
      token,
      arrayCourse: [item],
    }, (response) => {
      if (response.success) {
        dispatch(coursesAction.GET_MY_COURSE({
          token,
        }, (responseGetMyCourse) => {
          if (responseGetMyCourse.success) {
            console.log('Get my course success')
          } else {
            console.log('Get my course fail')
          }
        }))
        dispatch(coursesAction.GET_ALL_COURSE({
        }, (responseGetMyCourse) => {
          if (responseGetMyCourse.success) {
            console.log('Get all course success')
          } else {
            console.log('Get all course fail')
          }
        }))
        console.log('===============================================')
        console.log('response purchase now success', response)
        console.log('===============================================')
      } else {
        setTypeModal('fail')
        setTextModal('Purchase fail')
        setIsModalShow(true)
        console.log('===============================================')
        console.log('response purchase now fail', response)
        console.log('===============================================')
      }
    }))
  }
  const onClickLearnNow = (e) => {
    e.stopPropagation()
  }
  const onClickExtend = (e) => {
    e.stopPropagation()
  }
  const handleModalComponentCloseClick = () => {
    setIsModalShow(false)
  }
  const listmaLoaiKhoaHoc = arrayAllCategory.map((item) => <ListGroup.Item as="li">
    <Link
      onClick={() => handleMenuItemClick(item)}
      key={`${item.id}`}
    >
      <div className={styles.MenuItem}>
        <p>{item.tenLoaiKhoaHoc}</p>
      </div>
    </Link>
  </ListGroup.Item>)

  const listAuthors = arrayAuthor
    .map((item) => <option
      value={`${item.id}`}
      key={item.id}
    >
      {item.hoVaTen}
    </option>)

  // eslint-disable-next-line no-unused-vars

  const coursesComponentLink = () => {
    return (
      <div>
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
        <ul className="row">
          {arrayAllCourse.map((item) => <CourseItem
            key={item.id}
            title={item.tenKhoaHoc}
            description={item.moTa}
            customStyles={{
              marginTop: 30,
              marginLeft: 50,
            }}
            gia={item.gia}
            logo={LogoWhite}
            avatar={LogoWhite}
            background={background1}
            id={item.id}
            maLoaiKhoaHoc={item.maLKH}
            onClick={() => handleCourseItemClick(item)}
            totalTimes={item.tongThoiLuong}
            totalVideos={item.soLuongBaiGiang}
            totalView={item.soLuongDaBan}
            active={item.active}
            expired={item.expired}
            onClickAddToCart={(e) => onClickAddToCart(e, item)}
            onClickBuyNow={() => onClickBuyNow(item)}
            onClickLearnNow={onClickLearnNow}
            onClickExtend={onClickExtend}
          />)}
        </ul>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Router>
        <div className={styles.menuChuDe}>
          <ListGroup as="ul">
            <ListGroup.Item as="li">
              <p className={styles.categoryTitle}>Categories</p>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <Link
                onClick={() => {
                  setFilterCourse(undefined)
                  dispatch(coursesAction.GET_ALL_COURSE({
                    maUser: filterAuthor,
                    maLKH: undefined,
                    token,
                  }, (response) => {
                    if (response.success) {
                      console.log('filter Course Success')
                    } else {
                      console.log('filter Course Fail')
                    }
                  }))
                }}
                key="all"
              >
                <div className={styles.MenuItem}>
                  <p>All courses</p>
                </div>
              </Link>
            </ListGroup.Item>
            {listmaLoaiKhoaHoc}
          </ListGroup>

        </div>
        <div className={styles.courses}>
          <div className={styles.divFilter}>
            <p>Filter by authors</p>
            <select
              value={filterAuthor}
              onChange={handleFilterAuthorChange}
            >
              <option value="">All</option>
              {listAuthors}

            </select>
          </div>

          <Switch>
            <Route path="/courses/react-native" component={() => coursesComponentLink('react-native')} />
            <Route path="/courses/reactJS" component={() => coursesComponentLink('reactJS')} />
            <Route path="/courses/flutter" component={() => coursesComponentLink('flutter')} />
            <Route path="/courses/designer" component={() => coursesComponentLink('designer')} />
            <Route path="/courses" component={() => coursesComponentLink('')} />
          </Switch>
        </div>

      </Router>
    </div>
  )
}
export default Courses
