import React from 'react'
import mainLogo from '../assets/images/mainlogo.png';


const Logo = () => {
  return (
    <div >
      <img
        alt="mainlogo" src={mainLogo} className="block md:w-32 lg:w-48"
      />
    </div>
  )
}

export default Logo;