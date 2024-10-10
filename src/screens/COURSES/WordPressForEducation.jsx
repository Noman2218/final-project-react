import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Logo from '../../components/Logo'
import { Link } from 'react-router-dom'



const WordPressForEducation = () => {
  return (
    <div className='align-middle'>
      <header className="sticky top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center
       justify-between border-b border-gray-100 p-[1.5em] font-sans font-bold uppercase
       text-text-primary backdrop-blur-[100px] ">
        <Logo />
        <Navbar />
      </header>
      {/* hero section  */}
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
{/* hero section end */}
<div className="bg-gray-100 min-h-screen">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-bold">WordPress for Education</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="instructor-avatar.jpg"
                alt="Instructor"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-gray-700 font-medium">Michael Carrick</p>
                <p className="text-gray-500 text-sm">Author</p>
              </div>
            </div>
            <p className="text-green-500 font-bold">Free</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Take this Course
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <main className="lg:col-span-2 space-y-4">
            {/* Course Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src="course-image.jpg" alt="Course" className="w-full" />
            </div>

            {/* Course Features */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Course Features</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p>Lessons</p>
                  <p>Students</p>
                  <p>Certificate</p>
                </div>
                <div>
                  <p>2 Lessons</p>
                  <p>150 Students</p>
                  <p>Yes</p>
                </div>
                <div>
                  <p>Level</p>
                  <p>Duration</p>
                  <p>Language</p>
                </div>
                <div>
                  <p>Beginner</p>
                  <p>0.5 hours</p>
                  <p>English</p>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <h2 className="text-2xl font-semibold">Description</h2>
              <p>
                Break out of the walls of your learning management system and
                create open, connected spaces for student learning and
                engagement with WordPress...
              </p>
              {/* Add more course details here */}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-4">
            {/* Category */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">Category</h3>
              <p>Business, Technology</p>
            </div>

            {/* Latest Courses */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">Latest Courses</h3>
              <ul className="space-y-2">
                <li className="text-blue-600">WordPress for Education</li>
                <li className="text-blue-600">Digital Citizenship</li>
                <li className="text-blue-600">Become a PHP Master</li>
                <li className="text-blue-600">Computer Training Suite</li>
              </ul>
            </div>

            {/* Ad Section */}
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="ad-image.jpg" alt="Ad" className="w-full" />
            </div>
          </aside>
        </div>
      </div>
    </div>
      <Footer />
    </div>

  )
}

export default WordPressForEducation
