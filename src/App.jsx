import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PopularCourses from './components/PopularCourses'
import Registernow from './components/registernow'
import Instructors from './components/Instructors'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Header/>
       <PopularCourses/>
       <Registernow/>
       <Instructors/>
      </div>
    </>
  )
}

export default App