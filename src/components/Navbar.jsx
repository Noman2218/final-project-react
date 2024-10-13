import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the correct icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <div className="hidden md:flex">
          <ul className="items-center flex  justify-between">
            <li className="mr-16">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-16">
              <Link to="/about">About</Link>
            </li>
            <li className="mr-16">
              <Link to="/Courses">Courses</Link>
            </li>
            <li className="mr-16">
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center w-full md:w-auto">  {/* Make the container responsive */}
          <input
            type="search"
            placeholder="What would you like to learn?"
            className="border p-2 outline-none rounded w-full md:w-auto"  // Ensure full width on small screens
          />
          <button className="bg-blue-500 text-white px-3 py-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button className="p-4">
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button
            className="md:hidden flex justify-center w-8 h-8 bg-gray-200 hover:bg-gray-400 rounded-full"
            onClick={toggleNavBar}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center">
          <ul className="space-y-2"> {/* Space between links for mobile */}
            <li>
              <Link to="/" onClick={toggleNavBar}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleNavBar}>About</Link>
            </li>
            <li>
              <Link to="/Courses" onClick={toggleNavBar}>Courses</Link>
            </li>
            <li>
              <Link to="/pages" onClick={toggleNavBar}>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
