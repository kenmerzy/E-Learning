/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import CourseItem from '../../components/Courses/CourseItem/CourseItem'
import LogoFlutter from '../../assets/images/LogoFlutter.svg'
import AvatarMeng from '../../assets/images/AvatarMeng.svg'
import background1 from '../../assets/images/background1.svg'
import background12 from '../../assets/images/background12.svg'
import background8 from '../../assets/images/background8.svg'
import background9 from '../../assets/images/background9.svg'
import background10 from '../../assets/images/background10.svg'
import background11 from '../../assets/images/background11.svg'
import styles from './Courses.module.scss'

const arrayCourses = [
  {
    id: 1,
    title: 'React Native for Designer',
    description: '16 videos - 3.5 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background8,
    maLoaiKhoaHoc: 'react-native',
    author: 'mtl',

  },
  {
    id: 2,
    title: 'Build a full site in Webflow',
    description: '12 videos - 4 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background9,
    maLoaiKhoaHoc: 'react-native',
    author: 'phm',

  },
  {
    id: 3,
    title: 'Motion Design in After Effects',
    description: '10 videos - 1 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background10,
    maLoaiKhoaHoc: 'react-native',
    author: 'mtl',

  },
  {
    id: 4,
    title: 'Swift Advanced',
    description: '2 videos - 1 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background11,
    maLoaiKhoaHoc: 'lutter',
    author: 'nna',

  },
  {
    id: 5,
    title: 'Learn Sketch',
    description: '2 videos - 1 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background12,
    maLoaiKhoaHoc: 'designer',
    author: 'dvd',

  },
  {
    id: 6,
    title: 'Learn Swift',
    description: '27 videos - 4 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background1,
    maLoaiKhoaHoc: 'designer',
    author: 'phm',

  },
  {
    id: 7,
    title: 'Learn Swift',
    description: '27 videos - 4 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background1,
    maLoaiKhoaHoc: 'designer',
    author: 'mtl',

  },
  {
    id: 8,
    title: 'Learn Swift',
    description: '27 videos - 4 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background1,
    maLoaiKhoaHoc: 'designer',
    author: 'nna',

  },
  {
    id: 9,
    title: 'Learn Swift',
    description: '27 videos - 4 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background1,
    maLoaiKhoaHoc: 'reactJS',
    author: 'phm',

  },
]
const categories = [
  {
    id: 1,
    maLoaiKhoaHoc: 'react-native',
    title: 'React Native',
  },
  {
    id: 2,
    maLoaiKhoaHoc: 'designer',
    title: 'Designer',
  },
  {
    id: 3,
    maLoaiKhoaHoc: 'reactJS',
    title: 'ReactJS',
  },
  {
    id: 4,
    maLoaiKhoaHoc: 'flutter',
    title: 'Flutter',
  },
]
const authors = [
  {
    id: 1,
    value: 'mtl',
    name: 'Mạnh Thiên Lý',
  },
  {
    id: 2,
    value: 'dvd',
    name: 'David Dang',
  },
  {
    id: 3,
    value: 'nna',
    name: 'Nguyễn Nhật Ánh',
  },
  {
    id: 4,
    value: 'phm',
    name: 'Phạm Huy Mạnh',
  },
]

const Courses = () => {
  const [filterAuthor, setFilterAuthor] = useState('')
  const [maLoaiKhoaHoc, setMaLoaiKhoaHoc] = useState('')
  const handleFilterAuthorChange = (event) => {
    setFilterAuthor(event.target.value)
  }

  const listmaLoaiKhoaHoc = categories.map((item) => <ListGroup.Item as="li">
    <Link
      onClick={() => { setMaLoaiKhoaHoc(item.maLoaiKhoaHoc) }}
      to={`/courses/${item.maLoaiKhoaHoc}`}
    >
      <div className={styles.MenuItem}>
        <p>{item.title}</p>
      </div>
    </Link>
  </ListGroup.Item>)
  const listAuthors = authors
    .map((item) => <option value={item.value}>{item.name}</option>)

  const filterItems = () => {
    if (!maLoaiKhoaHoc) {
      if (!filterAuthor) {
        // All
        return arrayCourses.map((item) => <CourseItem
          title={item.title}
          description={item.description}
          customStyles={{
            marginTop: 30,
            marginLeft: 50,
          }}
          logo={item.logo}
          avatar={item.avatar}
          background={item.background}
          id={item.id}
          maLoaiKhoaHoc={maLoaiKhoaHoc}

        />)
      }
      // filter by authors
      return arrayCourses
        .filter((i) => i.author === filterAuthor)
        .map((item) => <CourseItem
          title={item.title}
          description={item.description}
          customStyles={{
            marginTop: 30,
            marginLeft: 50,
          }}
          logo={item.logo}
          avatar={item.avatar}
          background={item.background}
          id={item.id}
          maLoaiKhoaHoc={maLoaiKhoaHoc}

        />)
    }
    // filter by  categories
    if (!filterAuthor) {
      return arrayCourses
        .filter((i) => i.maLoaiKhoaHoc === maLoaiKhoaHoc)
        .map((item) => <CourseItem
          title={item.title}
          description={item.description}
          customStyles={{
            marginTop: 30,
            marginLeft: 50,
          }}
          logo={item.logo}
          avatar={item.avatar}
          background={item.background}
          id={item.id}
          maLoaiKhoaHoc={maLoaiKhoaHoc}

        />)
    }
    // filter by both
    return arrayCourses
      .filter((i) => i.maLoaiKhoaHoc === maLoaiKhoaHoc && i.author === filterAuthor)
      .map((item) => <CourseItem
        title={item.title}
        description={item.description}
        customStyles={{
          marginTop: 30,
          marginLeft: 50,
        }}
        logo={item.logo}
        avatar={item.avatar}
        background={item.background}
      />)
  }
  // eslint-disable-next-line no-unused-vars
  const listItems = filterItems()
  const coursesComponentLink = () => (
    <ul className="row">
      { listItems}
    </ul>
  )
  return (
    <div className={styles.container}>
      <div className={styles.menuChuDe}>
        <ListGroup as="ul">
          <ListGroup.Item as="li">
            <p className={styles.categoryTitle}>Categories</p>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <Link
              onClick={() => { setMaLoaiKhoaHoc('') }}
              to="/courses"
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

        <Router>
          <Switch>
            <Route path={`"/courses/"${maLoaiKhoaHoc}`} component={coursesComponentLink} />
            <Route path="/" component={coursesComponentLink} />
          </Switch>
        </Router>
      </div>

    </div>

  )
}
export default Courses
