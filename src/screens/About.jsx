import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div>
            <div>
                <header className=" top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center
       justify-between border-b border-gray-100 p-[1.5em] font-sans font-bold uppercase
       text-text-primary backdrop-blur-[100px] ">
                    <Logo />
                    <Navbar />
                </header>

                <div className=" grid-cols-1  relative bg-cover bg-center h-[30vh]">
                    <img
                        src="/images/bg-page-title.jpg"
                        alt="sliderbanner"
                        className="absolute  w-full h-full object-cover"
                    />
                    <div className="relative max-w-7xl mx-auto p-4 sm:px-8 lg: py-12">
                        <div className="items-start text-white">
                            <h1 className="text-4xl  md:text-6xl font-bold mb-4 uppercase">
                                About Us
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
            </div>
            <div className=" flex justify-center items-center  text-black">
                <h1 className="text-4xl  md:text-6xl font-bold my-8 uppercase">
                    WHAT IS UDETOR ?
                </h1>
            </div>


            <div className="max-w-7xl mx-auto p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-x-0 sm:space-x-10">
                    {/* Certificate Image */}
                    <div className="w-1/2">
                        <img src="/images/about-us.jpg" alt="About" className="rounded-lg shadow-lg" />
                    </div>

                    {/* Certificate Details */}
                    <div className="w-1/2 space-y-4">
                        <h3 className="text-lg font-semibold">WHO WE ARE?</h3>
                        <p className="leading-relaxed">With the prediction above, Mr. David – CEO of Netbase JSC agrees to start a project immediately on March 2017. So we outlined some of the issues and solutions for the new Education product:</p>
                        <li>Build a powerful custom core theme system for developers</li>
                        <li>Redesigned graphical interface, which builds quality homepages specific to each educational</li>
                        <h3 className="text-lg font-semibold">WHAT WE DO?</h3>
                        <p className="leading-relaxed">
                            Targets customers of this products are web developers, web designer, education managers, training providers, trainers, education website owners, … These products are not for consumers and very specific in website products. With many years’ experience in education and online services, Jonathan – Project manager makes some predictions
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About
