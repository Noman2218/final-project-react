import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const cards = [
  {
    image: "/images/our-team-a.jpg",
    title: "Jonathan Bean",
    designation: "Author",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
  },
  {
    image: "images/our-team-b.jpg",
    title: "Jenifer Laura",
    designation: "Author",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
  },
  {
    image: "images/our-team-c.jpg",
    title: "Micheak Carrick",
    designation: "Author",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
  },
  {
    image: "images/our-team-d.jpg",
    title: "Rihana Lopez",
    designation: "Author",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit"
  },

];

const Instructors = () => {
  return (
    <div>
      <h1 className='mt-10 pt-10 text-4xl md:text-5xl font-bold mb-4 uppercase text-center'>
        MEET OUR INSTRUCTORS
      </h1>
      <p className='text-center'>
        Meet our excellent teachers. They have a lot of experience in online education.
      </p>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4 my-10">
          {cards.map((card, index) => (
            <div key={index} className="shadow-lg rounded overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              {/* Image with hover effect */}
              <div className="w-full aspect-w-16 aspect-h-9">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-full opacity-40 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 font-semibold text-m mb-2">{card.designation}</p>
                <p className="text-gray-600 text-sm mb-2">{card.description}</p>
                <div className='border-t border-gray-300 mt-4'>
                  <div className="flex justify-center gap-10 pt-4 pb-4 items-center">
                    <i className='flex justify-center items-center bg-gray-500 text-white rounded-full w-8 h-8 mb-4'>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </i>
                    <i className='flex justify-center items-center bg-gray-500 text-white rounded-full w-8 h-8 mb-4'>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </i>
                    <i className='flex justify-center items-center bg-gray-500 text-white rounded-full w-8 h-8 mb-4'>
                      <FontAwesomeIcon icon={faGoogle} />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Instructors;
