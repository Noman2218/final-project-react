import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PopularCourses from './components/PopularCourses'
import Instructors from './components/Instructors'
import ProcessSection from './components/ProcessSection.jsx'
import Blog from './components/Blog'
import Testimonial from './components/Testimonial'
import SubscribeSection from './components/SubscribeSection'
import Registernow from './components/Registernow'
import Footer from './components/Footer'
import WordPressForEducation from './components/WordPressForEducation.jsx'
import Navbar from './components/Navbar.jsx'






function App() {

  return (
    <>
      <div>
       <Header/>
       <Navbar/>
       <PopularCourses/>
       <Registernow/>
       <Instructors/>
       <ProcessSection/>
       <Blog/>
       <Testimonial/>
       <SubscribeSection/>
       <Footer/>
      </div>
    </>
  )
}

export default App