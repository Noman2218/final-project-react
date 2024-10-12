import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Logo from '../../components/Logo'
import { Link } from 'react-router-dom'
import PopularCourses from '../../components/PopularCourses'



const DigitalCitizenship = () => {
  return (
    <div className='align-middle'>
      <header className=" top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center
       justify-between border-b border-gray-100 p-[1.5em] font-sans font-bold uppercase
       text-text-primary backdrop-blur-[100px] ">
        <Logo />
        <Navbar />
      </header>
      {/* hero section  */}
      <div className=" grid-cols-1  relative bg-cover bg-center h-[30vh]">
        <img
          src="/images/become-teacher-title.jpg"
          alt="sliderbanner"
          className="absolute  w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto p-4 sm:px-8 lg: py-12">
          <div className="items-start text-white">
            <h1 className="text-4xl  md:text-6xl font-bold mb-4 uppercase">
              Design,Development,IT & Software
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
            <h1 className="text-4xl font-bold">Digital Citizenship
            </h1>
            <div className="flex items-center gap-96 ">
              <div className="flex items-center space-x-2 pt-4">
                <img
                  src="/images/testimonial-3.jpg"
                  alt="Instructor"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-gray-700 font-medium">Jonathan Bean</p>
                  <p className="text-gray-500 text-sm">Author</p>
                </div>
              </div>
              <div>
                <p className="text-red-500 text-2xl font-bold">Free</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  Take this Course
                </button>
              </div>

            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <main className="lg:col-span-2 space-y-4">
              {/* Course Image */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src="/images/post-img3.jpg" alt="Course" className="w-full" />
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
                <p>

                  What does it mean to be a digital citizen? Good digital citizens use technology in appropriate and respectful ways, and build community in every corner of the Internet. In 21st century education, helping students become good digital citizens—who communicate, search, and stay safe online—is part of every educator’s responsibilities.
                  <br />
                  <br />

                  This course helps teachers and students understand the ideas and areas of digital citizenship. Oliver Schinkten describes the impact of our digital footprint. He shows how to participate in online communities, help students deal with cyberbullying, keep computers free of viruses and malware, and safely shop online.
                  <br />
                  <br />
                  The overall focus of this course is on educators and tips for teaching digital citizenship. But if you use the Internet for any reason—for communication, playing games, online shopping, interacting within communities, or any other reason—it is important to understand digital citizenship. Understanding your rights and responsibilities will help you stay safe and have a better experience online.
                  <br />
                  <br />
                  <h4 className='font-bold'>Topics include</h4>
                  <br />

                  <li>Creating a positive digital footprint</li>
                  <li>Addressing cyberbullying</li>
                  <li>Joining online communities</li>
                  <li>Finding solutions for the digital divide</li>
                  <li>Conducting online research</li>
                  <li>Maintaining privacy online</li>
                  <li>Protecting yourself from viruses and malware</li>
                  <li>Buying products online</li>
                  <li>Engaging with online reviews</li>
                  <br />

                </p>
                {/* Add more course details here */}
              </div>
            </main>

            {/* Sidebar */}
            <aside className="space-y-4">
              {/* Category */}
              <div>
                <h3 className="font-semibold text-4xl uppercase bg-blue-400 text-white py-2 pl-3 text-start">Category</h3>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">


                <h3>Business (1)</h3>
                <h3>Design (3)</h3>
                <h3>Development (2)</h3>
                <h3>IT & Software (3)</h3>
                <h3>Marketing (1)</h3>
                <h3>Technology (4)</h3>
              </div>

              {/* Latest Courses */}
              <div>
                <h3 className="font-semibold text-4xl uppercase bg-blue-400 text-white py-2 pl-3 text-start">Latest Courses</h3>
              </div>
              <div className="bg-white p-4 rounded-lg ">

                <ul className="space-y-2">
                  <li className="text-blue-600">WordPress for Education</li>
                  <li className="text-blue-600">Digital Citizenship</li>
                  <li className="text-blue-600">Become a PHP Master</li>
                  <li className="text-blue-600">Computer Training Suite</li>
                </ul>
              </div>

              {/* Ad Section */}
              <div className="bg-white p-4 rounded-lg shadow">
                <img src="/images/edue-bnsidebar.jpg" alt="Ad" className="w-full" />
              </div>
            </aside>
          </div>
        </div>



        <div className="max-w-7xl mx-auto p-6">
          <h3 className="font-bold text-2xl mb-6">CERTIFICATES</h3>

          <div className="flex flex-col sm:flex-row justify-between items-center space-x-0 sm:space-x-10">
            {/* Certificate Image */}
            <div className="w-1/2">
              <img src="/images/certificate-completion.jpg" alt="certificate" className="rounded-lg shadow-lg" />
            </div>

            {/* Certificate Details */}
            <div className="w-1/2 space-y-4">
              <h3 className="text-lg font-semibold">Type:</h3>
              <h2 className="text-xl font-bold">CERTIFICATE OF COMPLETION</h2>
              <h3 className="text-lg font-semibold">Description:</h3>
              <p className="leading-relaxed">
                The most basic option is a printable certificate of completion. <br />
                This is often required for compliance training.
              </p>

              {/* Stats Section */}
              <div className="flex space-x-10 mt-6">
                <div>
                  <p className="text-2xl font-bold">100+</p>
                  <p className="text-sm">enrolled users</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">200+</p>
                  <p className="text-sm">registered users</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">80+</p>
                  <p className="text-sm">finished users</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-2xl my-8">Course Materials</h3>
            <p>Designing for the Web, Learning Web Design, Scalable and Modular Architecture for CSS</p>
          </div>
        </div>
        <PopularCourses />
      </div>



      <Footer />
    </div>

  )
}

export default DigitalCitizenship
