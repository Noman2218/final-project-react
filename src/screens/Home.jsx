import React from 'react'
import Header from '../components/Header'
import PopularCourses from '../components/PopularCourses'
import Registernow from '../components/Registernow'
import Instructors from '../components/Instructors'
import ProcessSection from '../components/ProcessSection'
import Blog from '../components/Blog'
import Testimonial from '../components/Testimonial'
import SubscribeSection from '../components/SubscribeSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
       <PopularCourses/>
       <Registernow/>
       <Instructors/>
       <ProcessSection/>
       <Blog/>
       <Testimonial/>
       <SubscribeSection/>
       <Footer/>
    </div>
  )
}

export default Home
