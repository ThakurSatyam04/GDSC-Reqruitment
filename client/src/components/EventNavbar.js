import React from 'react'
import {Link} from "react-router-dom";
import logo from "../Assests/logo_img.webp";
import {toast} from "react-hot-toast";
import Avatar from './Avatar';

const EventNavbar = ({userDetails}) => {
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-3 mx-auto'>
    <Link to="/">
      <img className='rounded-full' src={logo} alt="Logo" width={40} height={32} loading="lazy" />
    </Link>

    <nav>
      <ul className='text-rich-Black-900 flex gap-x-6 '>
          <Link to="/" className='hover:text-gray-700 cursor-pointer'>Home</Link>
          <a href="/#speakers"><li className='hover:text-gray-700 cursor-pointer' src="#">Speakers</li></a>
          <a href="/#about"><li className='hover:text-gray-700 cursor-pointer' src="#">About</li></a>
          <a href="/#sponsors"><li className='hover:text-gray-700 cursor-pointer' src="#">Sponsors</li></a>
          <Link to='/team'><li className='hover:text-gray-700 cursor-pointer' src="#">Teams</li>
          </Link>
          <a href="#contact"><li className='hover:text-gray-700 cursor-pointer' src="#">Contact</li></a>
      </ul>
    </nav>

    {/* Profile */}
    <div>
        <Avatar userDetails={userDetails}/>
    </div>
  </div>
  )
}

export default EventNavbar
