import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PopularCourses from './components/PopularCourses'
import Registernow from './components/registernow'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Header/>
       <PopularCourses/>
       <Registernow/>
       
      </div>
    </>
  )
}

export default App