import React from 'react'
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div>
      <div>
        <header className=" top-0 z-[1] mx-auto flex  w-full max-w-7xl items-center 
        justify-between border-b border-gray-100 bg-background p-[1.5em] 
        font-sans font-bold uppercase text-text-primary ">
          <div className=" items-center"> 
            <Logo/> 
          </div>
          <Navbar /> 
        </header>
      </div>

      <div className=" grid-cols-1 relative bg-cover bg-center h-[80vh]">
        <img
          src="images/sliderbanner1.jpg"
          alt="sliderbanner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 h-full c px-4 sm:px-8 lg:px-20 py-12">
          <div className="flex flex-col justify-center items-start text-white max-w-[600px]">
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

          {/* Right-side Boxes */}
          <div className="absolute top-20 right-14 flex-col space-y-8 z-10 hidden lg:block">
            {/* <div className=" items-center justify-center max-w-md:flex-col"> */}
            <div className='flex grid-cols-1 gap-10'>
              {/* Box 1 */}
              <div className="bg-black bg-opacity-50 p-6 rounded-lg flex flex-col items-start text-white w-[300px]">
                <div className="flex items-center">
                  <span className="material-icons text-blue-500 mr-3 text-md text-4xl "><FontAwesomeIcon icon={faBookOpen} /></span>
                  <h3 className="font-semibold text-lg">Highly Qualified Instructor</h3>
                </div>
                <p className="mt-2">
                  Learners can study on any device at any time so Education is the
                  best choice for future online learning.
                </p>
              </div>

              {/* Box 2 */}
              <div>

                <img src="images/slider-block1-1.jpg" alt="slider-block" />
              </div>
            </div>
            {/* Box 3 */}
            <div className="bg-black bg-opacity-50 p-6 rounded-lg flex flex-col items-start text-white w-[600px] h-[300px]">
              <div className='flex gap-10  '>
                <div>
                  <img src="images/slider-student.png" alt="slider student" />
                </div>

                <div>
                  <h3 className="font- text-lg ">New revolution in web training creation</h3>
                  <p className="mt-2">
                    Education is designed and built with scale and process quality as a major software system.
                  </p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Learn More
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
