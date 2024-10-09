import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Logo from '../../components/Logo'
import { Link } from 'react-router-dom'



const WordPressForEducation = () => {
  return (
    <div>
      <header className="sticky top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center
       justify-between border-b border-gray-100 p-[1.5em] font-sans font-bold uppercase
       text-text-primary backdrop-blur-[100px] ">
        <Logo />
        <Navbar />
      </header>

      <div className=" grid-cols-1 relative bg-cover bg-center h-[25vh]">
        <img
          src="images/become-teacher-title.jpg"
          alt="sliderbanner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative px-4 sm:px-8 lg:px-20 py-12">
          <div className="items-start text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
              Business,Technology
            </h1>
            <p>
              <ul className='flex flex-wrap'>
                <li className='mr-4 list-none' ><Link to="/">Home</Link></li>
                <li className='mr-4 list-none' ><Link to="/Courses">Courses</Link></li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="items-start text-black">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
        WordPress for Education

        </h1>
      </div>

      <Footer />
    </div>

  )
}

export default WordPressForEducation
