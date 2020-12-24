import React from 'react'
import CourseItem from '../../components/Courses/CourseItem/CourseItem'
import itemCourseImage from '../../assets/images/itemCourseImage.svg'
import LogoFlutter from '../../assets/images/LogoFlutter.svg'
import AvatarMeng from '../../assets/images/AvatarMeng.svg'
import background1 from '../../assets/images/background1.svg'
import background12 from '../../assets/images/background12.svg'
import background3 from '../../assets/images/background3.svg'
import background4 from '../../assets/images/background4.svg'
import background5 from '../../assets/images/background5.svg'
import background6 from '../../assets/images/background6.svg'
import background7 from '../../assets/images/background7.svg'
import background8 from '../../assets/images/background8.svg'
import background9 from '../../assets/images/background9.svg'
import background10 from '../../assets/images/background10.svg'
import background11 from '../../assets/images/background11.svg'

const MyCourses = () => {
  const numbers = [
    {
      title: 'Flutter for Designers',
      description: '20 videos - 3 hours',
      logo: LogoFlutter,
      avatar: AvatarMeng,
      background: itemCourseImage,
    },
    {
      title: 'SwiftUI Livestreams',
      description: '20 videos - 3 hours',
      logo: LogoFlutter,
      avatar: AvatarMeng,
      background: background3,
    },
    {
      title: 'Design System in Figma',
      description: '20 videos - 3 hours',
      logo: LogoFlutter,
      avatar: AvatarMeng,
      background: background4,
    },
    {
      title: 'UI Design for Developers',
      description: '20 videos - 3 hours',
      logo: LogoFlutter,
      avatar: AvatarMeng,
      background: background5,
    },
    {
      title: 'React for Designers',
      description: '20 videos - 3 hours',
      logo: LogoFlutter,
      avatar: AvatarMeng,
      background: background6,
    },
    {
      title: 'Advanced Prototyping in Protopie',
      description: '20 videos - 3 hours',
      logo: LogoFlutter,
      avatar: AvatarMeng,
      background: background7,
    },
    {
      title: 'React Native for Designer',
      description: '20 videos - 3 hours',
      logo: LogoFlutter,
      avatar: AvatarMeng,
      background: background8,
    },
    {
      title: 'Build a full site in Webflow',
      description: '20 videos - 3 hours',
      logo: LogoFlutter,
      avatar: AvatarMeng,
      background: background9,
    },
    {
      title: 'Motion Design in After Effects',
      description: '20 videos - 3 hours',
      logo: LogoFlutter,
      avatar: AvatarMeng,
      background: background10,
    },
    {
      title: 'Swift Advanced',
      description: '20 videos - 3 hours',
      logo: LogoFlutter,
      avatar: AvatarMeng,
      background: background11,
    },
    {
      title: 'Learn Sketch',
      description: '20 videos - 3 hours',
      logo: LogoFlutter,
      avatar: AvatarMeng,
      background: background12,
    },
    {
      title: 'Learn Swift',
      description: '20 videos - 3 hours',
      logo: LogoFlutter,
      avatar: AvatarMeng,
      background: background1,
    },

  ]
  const listItems = numbers.map((item) => <CourseItem
    title={item.title}
    description={item.description}
    customStyles={{ margin: 20 }}
    logo={item.logo}
    avatar={item.avatar}
    background={item.background}
  />)
  return (
    <ul className="row">
      {listItems}
    </ul>
  )
}
export default MyCourses
