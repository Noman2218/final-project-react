import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const cards = [
    {
        image: "/images/popularcourse01.jpg",
        name: "Micheak Carrick",
        date: "July 6 2017",
        title: "Relaxing after work",
        description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has..."
    },
    {
        image: "/images/popularcourse02.jpg",
        name: "Micheak Carrick",
        date: "July 6 2017",
        title: "Tips to Succeed in an Course",
        description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Cicero are also reproduced in their exact original form, accompanied by English versions from..."
    },
    {
        image: "/images/popularcourse03.jpg",
        name: "Micheak Carrick",
        date: "July 6 2017",
        title: "Is Law School?",
        description: "For most people, when you say “social worker” you think of someone working with children and families — your first thought might even be an incorrect image of an overworked..."
    },

];

const Blog = () => {
    return (
        <div>
            <h1 className='mt-10 pt-10 text-4xl md:text-5xl font-bold mb-4 uppercase text-center'>
                NEWS FROM BLOG
            </h1>
            <p className='text-center'>
                There are 1000+ blogs from nice intructors about all fields.
            </p>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4 my-10">
                    {cards.map((card, index) => (
                        <div key={index} className="shadow-lg rounded overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                            {/* Image with hover effect */}
                            <div className="w-full aspect-w-20 aspect-h-9">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>

                                <span className='flex justify-around '>
                                <p className="text-blue-400 font-semibold text-m mb-2 ">{card.name}</p>
                                   <span className='flex gap-2'> <FontAwesomeIcon icon={faCalendarDays} />
                                    <p className="text-blue-400 text-sm mb-2 ">{card.date}</p></span>
                                </span>

                                <p className="text-gray-600 text-sm mb-2 ">{card.description}</p>
                                <div>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full px-6 py-1 ">Read more</button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog
