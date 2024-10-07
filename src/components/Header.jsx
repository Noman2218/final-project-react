import React from 'react'
import Logo from './Logo';
import Nav from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen';

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

        {/* Right-side Boxes */}
        <div className="absolute top-20 right-14 flex flex-col space-y-8 z-10">
          <div className='flex grid-cols-1 gap-10'>
            {/* Box 1 */}
            <div className="bg-black bg-opacity-50 p-6 rounded-lg flex flex-col items-start text-white w-[300px]">
              <div className="flex items-center">
                <span className="material-icons text-green-500 mr-3 text-md text-4xl "><FontAwesomeIcon icon={faBookOpen} /></span>
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
  )
}

export default Header;
