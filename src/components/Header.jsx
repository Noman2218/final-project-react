import React from 'react'
import Logo from './Logo';
import Nav from './Navbar';
import sliderbanner1 from '../assets/images/sliderbanner1.jpg';


const Header = () => {
  return (
    <div>
      <header className="sticky top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center
     justify-between border-b border-gray-100 bg-background p-[1.5em] font-sans font-bold uppercase
      text-text-primary backdrop-blur-[100px] dark:bg-d-background dark:text-d-text-primary">
        <Logo />
        <Nav />
      </header>

      <div className="relative bg-cover bg-center">
      <img src={sliderbanner1} alt="sliderbanner" />


      </div>
    </div>

  )
}

export default Header;