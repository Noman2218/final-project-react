import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PopularCourses from './components/PopularCourses'
import ProcessSection from './components/ProcessSection.JSX'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Header/>
       <PopularCourses/>
       <ProcessSection/>
      </div>
    </>
  )
}

export default App