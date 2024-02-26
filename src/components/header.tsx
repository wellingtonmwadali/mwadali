import React from 'react';
import mwadali from '../assets/mwadali.jpg'
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-4 px-8 bg-black shadow-md text-white">
      <div className="">
      <Link to="/">
        <img
          src={mwadali}
          alt="Logo"
          className="h-14 w-14 mr-2  rounded-lg cursor-pointer transition duration-300 ease-in-out transform  hover:contrast-75"
        />
         </Link>
       
      </div>
      <div className="flex font-light md:text-lg md:gap-12 gap-4 md:mr-4">
        <a
          href="https://read.cv/wellingtonmwadali"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 hover:text-gray-400 transition duration-300"
        >
          Resume
        </a>
        <a
          href="mailto:wellingtonmwadali@gmail.com"
          className="hover:text-gray-400 transition duration-300 "
        >
          Email
        </a>
      </div>
    </header>
  );
};

export default Header;
