import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd'; // Importing Pagination from Ant Design
import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Courses = () => {
    const cards = [
        {
            image: "/images/popularcourse01.jpg",
            title: "WordPress for Education",
            rating: "★★★★☆",
            image2: "images/testimonial-3.jpg",
            name: "Micheak Carrick",
            designation: "Author",
        },
        {
            image: "images/popularcourse02.jpg",
            title: "Digital Citizenship",
            rating: "★★★★☆",
            image2: "images/testimonial-3.jpg",
            name: "Micheak Carrick",
            designation: "Author",
        },
        {
            image: "images/popularcourse03.jpg",
            title: "Become a PHP Master",
            rating: "★★★★☆",
            image2: "images/testimonial-4.jpg",
            name: "Micheak Carrick",
            designation: "Author",
        },
        {
            image: "images/popularcourse04.jpg",
            title: "Computer Traning Suite",
            rating: "★★★★☆",
            image2: "images/testimonial-4.jpg",
            name: "Micheak Carrick",
            designation: "Author",
        },

        {
            image: "images/edusite-apps-shutterstock-320x287.jpg",
            title: "Learning Snagit for Mac",
            rating: "★★★★☆",
            image2: "images/testimonial-4.jpg",
            name: "Micheak Carrick",
            designation: "Author",
        },

        {
            image: "/images/edue-short-online-320x287.jpg",
            title: "Diploma in HTML5, CSS3",
            rating: "★★★★☆",
            image2: "images/testimonial-4.jpg",
            name: "Micheak Carrick",
            designation: "Author",
        },
        {
            image: "/images/edue-plus-tutor-in-essex-320x287.jpg",
            title: "Introduction to Cloud Computing",
            rating: "★★★★☆",
            image2: "images/testimonial-4.jpg",
            name: "Micheak Carrick",
            designation: "Author",
        },  
         {
            image: "/images/edue-lead-web-dev-320x287.jpg",
            title: "IT Capstone Written Project",
            rating: "★★★★☆",
            image2: "images/testimonial-4.jpg",
            name: "Micheak Carrick",
            designation: "Author",
        },  
         {
            image: "/images/edue-short-online-320x287.jpg",
            title: "Introduction to IT",
            rating: "★★★★☆",
            image2: "images/testimonial-4.jpg",
            name: "Micheak Carrick",
            designation: "Author",
        },
    ];

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(6); // Number of cards per page

    // Get the current page data by slicing the cards array
    const currentCards = cards.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    // Update page when user changes pagination
    const onChangePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <header className="top-0 z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 p-[1.5em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px]">
                <Logo />
                <Navbar />
            </header>

            {/* Hero Section */}
            <div className="grid-cols-1 relative bg-cover bg-center h-[25vh]">
                <img
                    src="/images/become-teacher-title.jpg"
                    alt="sliderbanner"
                    className="absolute w-full h-full object-cover"
                />
                <div className="relative max-w-7xl mx-auto p-4 sm:px-8 lg:py-12">
                    <div className="items-start text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
                            Archives: Courses
                        </h1>
                        <ul className="flex flex-wrap">
                            <li className="mr-4 list-none"><Link to="/">Home</Link></li>
                            <li className="mr-4 list-none"><Link to="/Courses">Courses</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Main content layout */}
            <div className="max-w-7xl mx-auto p-4 flex flex-wrap lg:flex-nowrap gap-8 mt-8">
                {/* Sidebar */}
                <aside className="w-full lg:w-1/4 space-y-6">
                    {/* Category Section */}
                    <div>
                        <h3 className="font-semibold text-4xl uppercase bg-blue-400 text-white py-2 pl-3 text-start">Category</h3>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3>Business (1)</h3>
                            <h3>Design (3)</h3>
                            <h3>Development (2)</h3>
                            <h3>IT & Software (3)</h3>
                            <h3>Marketing (1)</h3>
                            <h3>Technology (4)</h3>
                        </div>
                    </div>

                    {/* Latest Courses Section */}
                    <div>
                        <h3 className="font-semibold text-4xl uppercase bg-blue-400 text-white py-2 pl-3 text-start">Latest Courses</h3>
                        <div className="bg-white p-4 rounded-lg">
                            <ul className="space-y-2">
                                <li className="text-blue-600">WordPress for Education</li>
                                <li className="text-blue-600">Digital Citizenship</li>
                                <li className="text-blue-600">Become a PHP Master</li>
                                <li className="text-blue-600">Computer Training Suite</li>
                            </ul>
                        </div>
                    </div>

                    {/* Ad Section */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <img src="/images/edue-bnsidebar.jpg" alt="Ad" className="w-full" />
                    </div>
                </aside>

                {/* Course Cards */}
                <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentCards.map((card, index) => (
                        <Link to={`/courses/${card.title.replace(/\s+/g, '-')}`} key={index}>
                            <div className="shadow-lg rounded overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                <div className="w-full aspect-w-16 aspect-h-9">
                                    <img src={card.image} alt={card.title} className="object-cover w-full h-full" />
                                </div>
                                <div className="p-4 text-left">
                                    <div className="text-yellow-500 text-sm">{card.rating}</div>
                                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                    <p className="text-gray-600 text-sm mb-2">{card.description}</p>
                                    <div className="divide-y">
                                        <div className="flex gap-10 pt-4 pb-4 items-center">
                                            <img src={card.image2} alt={card.name} className="rounded-full h-14 w-auto" />
                                            <div>
                                                <h1>{card.name}</h1>
                                                <p>{card.designation}</p>
                                            </div>
                                        </div>
                                        <div className="pt-4 flex justify-between">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full px-6">Free</button>
                                            <span><FontAwesomeIcon icon={faUsers} /> 150</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center my-8">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={cards.length}
                    onChange={onChangePage}
                />
            </div>

            <Footer />
        </div>
    );
};

export default Courses;
