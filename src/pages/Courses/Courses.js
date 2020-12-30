import React from 'react'

import CourseItem from '../../components/Courses/CourseItem/CourseItem'
import LogoFlutter from '../../assets/images/LogoFlutter.svg'
import AvatarMeng from '../../assets/images/AvatarMeng.svg'
import background1 from '../../assets/images/background1.svg'
import background12 from '../../assets/images/background12.svg'
import background8 from '../../assets/images/background8.svg'
import background9 from '../../assets/images/background9.svg'
import background10 from '../../assets/images/background10.svg'
import background11 from '../../assets/images/background11.svg'

const numbers = [
  {
    title: 'React Native for Designer',
    description: '16 videos - 3.5 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background8,
  },
  {
    title: 'Build a full site in Webflow',
    description: '12 videos - 4 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background9,
  },
  {
    title: 'Motion Design in After Effects',
    description: '10 videos - 1 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background10,
  },
  {
    title: 'Swift Advanced',
    description: '2 videos - 1 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background11,
  },
  {
    title: 'Learn Sketch',
    description: '2 videos - 1 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background12,
  },
  {
    title: 'Learn Swift',
    description: '27 videos - 4 hours',
    logo: LogoFlutter,
    avatar: AvatarMeng,
    background: background1,
  },

]

const Courses = () => {
  const listItems = numbers.map((item) => <CourseItem
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
  return (
    <div className="row">
      <div className="col-lg-2" />
      <div className="col-lg-10">
        <ul className="row">
          {listItems}
        </ul>
      </div>

    </div>

  )
}
export default Courses
