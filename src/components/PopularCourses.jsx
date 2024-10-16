import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import Courses from '../screens/COURSES/Courses';

const PopularCourses = () => {
    const cards = [
        {
            image: "/images/popularcourse01.jpg",
            title: "WordPress for Education",
            rating: "★★★★☆",
            image2: "/images/testimonial-3.jpg",
            name: "Micheak Carrick",
            designation: "Author",
        },
        {
            image: "/images/popularcourse02.jpg",
            title: "Digital Citizenship",
            rating: "★★★★☆",
            image2: "/images/testimonial-3.jpg",
            name: "Micheak Carrick",
            designation: "Author",
        },
        {
            image: "/images/popularcourse03.jpg",
            title: "Become a PHP Master",
            rating: "★★★★☆",
            image2: "/images/testimonial-4.jpg",
            name: "Micheak Carrick",
            designation: "Author",
        },
        {
            image: "/images/popularcourse04.jpg",
            title: "Computer Training Suite",
            rating: "★★★★☆",
            image2: "/images/testimonial-4.jpg",
            name: "Micheak Carrick",
            designation: "Author",
        },
    ];

    return (
        <div>
            <h1 className='mt-10 pt-10 text-4xl md:text-5xl font-bold mb-4 uppercase text-center'>POPULAR COURSES</h1>
            <p className='text-center'>We have monthly 1000+ request to be joined course.</p>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4 my-10">
                    {cards.map((card, index) => (
                        <Link to={`/courses/${card.title.replace(/\s+/g, '-')}`} key={index}> {/* Link around the card */}
                            <div className="shadow-lg rounded overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                <div className="w-full aspect-w-16 aspect-h-9">
                                    <img src={card.image} alt={card.title} className="object-cover w-full h-full" />
                                </div>
                                <div className="p-4 text-left">
                                    <div className="text-yellow-500 text-sm">{card.rating}</div>
                                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                    <p className="text-gray-600 text-sm mb-2">{card.description}</p>
                                    <div className='divide-y'>
                                        <div className="flex gap-10 pt-4 pb-4 items-center">
                                            <img src={card.image2} alt={card.title} className="rounded-full h-14 w-auto" />
                                            <div>
                                                <h1>{card.name}</h1>
                                                <p>{card.designation}</p>
                                            </div>
                                        </div>
                                        <div className='divide-y'>
                                            <div className='pt-4 flex justify-between'>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full pr-6 pl-6">free</button>
                                                <span><FontAwesomeIcon icon={faUsers} />150</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='text-center uppercase font-bold text-gray-400-200 pb-8'>
            <Link className='hover:text-blue-400' to="/Courses">load more courses</Link>
            </div>
        </div>
    );
}

export default PopularCourses;
