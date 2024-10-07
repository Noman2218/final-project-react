import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const galleryImages = [
    "gallery-image1.jpg",
    "post-img4-150x150.jpg",
    "edue-short-online-150x150.jpg",
    "popularcourse01.jpg",
    "post-img2-150x150.jpg",
    "edue-lead-web-dev-150x150.jpg",
];



const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                {/* Top section */}
                <div className="flex flex-wrap justify-between mb-8">
                    {/* Company Info */}
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h2 className="text-3xl font-bold mb-2"><img src="images/udetor-logo.png" alt="mainlogo" /></h2>
                        <p className="text-gray-400 mb-4 text-balance">
                            Udetor is designed to process the full and perfect similar to a high-end technology product.
                        </p>
                        <div>
                            <div className='flex p-2 gap-3 '>
                                <FontAwesomeIcon icon={faHouse} />
                                <p className="text-sm ">Maddison Square Garden, NY</p>
                            </div>
                            <div className='flex p-2 gap-3 '>
                                <FontAwesomeIcon icon={faPhone} />
                                <p className="text-sm ">Phone: (084) 77779999</p>
                            </div>


                            <div className='flex p-2 gap-3 '>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p className="text-sm ">Email: info@udetor.com</p>
                            </div>
                        </div>

                        {/* Social icons */}
                        <div className="mt-4 flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-300">
                                <i className="flex justify-center items-center bg-white text-gray-600 hover:bg-blue-400  hover:text-white rounded-full w-9 h-9 mb-4"><FontAwesomeIcon icon={faFacebookF} /></i>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <i className="flex justify-center items-center bg-white text-gray-600 hover:bg-blue-400  hover:text-white rounded-full w-9 h-9 mb-4"><FontAwesomeIcon icon={faTwitter} /></i>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <i className="flex justify-center items-center bg-white text-gray-600 hover:bg-blue-400  hover:text-white rounded-full w-9 h-9 mb-4"><FontAwesomeIcon icon={faGoogle} /></i>
                            </a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Useful Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">F.A.Q</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Gallery</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Chat message</a></li>
                        </ul>
                    </div>

                    {/* Courses and Gallery */}
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-bold mb-4">Courses</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">WordPress for Education</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Digital Citizenship</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Become a PHP Master</a></li>
                        </ul>

                        <h3 className="text-xl font-bold mt-8 mb-4 ">Gallery</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {galleryImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={`images/${image}`}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-28 object-cover"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-700 pt-4">
                    <p className="text-center text-gray-500 text-sm">
                        Udetor - Copyright © 2024 netbaseteam.com. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
