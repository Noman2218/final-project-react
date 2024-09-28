import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hearder from './components/Hearder'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Hearder/>
     </div>
    </>
  )
}

export default App
