import React from 'react'
import HoursOfCourses from '../../components/Courses/HoursOfCourses/HoursOfCourses'
import CourseItem from '../../components/Courses/CourseItem/CourseItem'

const Courses = () => {
  return (
    <div className="container">
      <CourseItem />
      <HoursOfCourses />
    </div>
  )
}
export default Courses
