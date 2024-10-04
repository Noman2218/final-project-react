import React from 'react'
import Logo from './Logo';
import Nav from './Navbar';

const Header = () => {
  return (
    <div>
      <div>
      <header className="sticky top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center
        justify-between border-b border-gray-100 bg-background p-[1.5em] font-sans font-bold uppercase
        text-text-primary backdrop-blur-[100px] dark:bg-d-background dark:text-d-text-primary">
          
        <Logo />
        <Nav />
      </header>
      </div>
      
      <div className="relative bg-cover bg-center h-[80vh]">
        <img
          src="images/sliderbanner1.jpg"
          alt="sliderbanner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute ml-20 sm:ml-8 flex flex-col items-start
         justify-center h-full text-left text-white px-12 max-w-[600px] z-10">
          <p className="text-white font-bold">
            GCREATING A TRAINING SITE HAS NEVER BEEN
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase text-balance ">
            SO EASY WHEN <span style={{ color: '#4DD9D9' }}>UDETOR</span> APPEARS
          </h1>
          <a href="#" className="border-solid border-2 border-blue-400 rounded-full px-4 py-2 pr-6 pl-6 text-lg font-semibold hover:bg-blue-600 transition-transform transform hover:scale-105">
            Purchase Now
          </a>
        </div>

      </div>
    </div>
  )
}

export default Header;
