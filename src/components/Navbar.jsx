import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser  } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <ul className='items-center flex flex-wrap justify-between'>
        <li className='mr-16' ><Link to="/">Home</Link></li>
        <li className='mr-16' ><Link to="/about">Features</Link></li>
        <li className='mr-16' ><Link to="/Courses">Courses</Link></li>
        <li className='mr-16' ><Link to="/pages">Pages</Link></li>
        <div>
          <input
            type="search"
            placeholder="What would you like to learn?"
            className="border p-2 outline-none rounded "
          />
          <button className="bg-blue-500 text-white px-3 py-2 ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          <button className='p-4' >
            <FontAwesomeIcon icon={faUser } />
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;