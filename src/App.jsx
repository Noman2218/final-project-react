import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PopularCourses from './components/PopularCourses'
import Registernow from './components/Registernow'
import Instructors from './components/Instructors'
import ProcessSection from './components/ProcessSection.JSX'
import Blog from './components/blog'
import Testimonial from './components/Testimonial'
import SubscribeSection from './components/SubscribeSection'






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
      </div>
    </>
  )
}

export default App