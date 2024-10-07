import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PopularCourses from './components/PopularCourses'
import Instructors from './components/Instructors'
import ProcessSection from './components/ProcessSection.jsx'
import Blog from './components/blog'
import Testimonial from './components/Testimonial'
import SubscribeSection from './components/SubscribeSection'
import Registernow from './components/registernow'
import Footer from './components/Footer'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
    </>
  )
}

export default App