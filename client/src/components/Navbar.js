import React from 'react';
import {Link} from "react-router-dom";
import logo from "../Assests/logo_img.webp";
import {toast} from "react-hot-toast";
import Avatar from './Avatar';

const Navbar = (props) => {
let loggedIn = props.loggedIn;
let userDetails = props.userDetails

  return (
    <div className='flex justify-between items-center w-11/12 max-w-full py-3 mx-auto'>
      <Link to="/">
        <img className='rounded-full' src={logo} alt="Logo" width={40} height={32} loading="lazy" />
      </Link>

    {/* Login, SignUp, Logout, Dashboard */}
      <div className='flex items-center gap-x-5'>
         { ! loggedIn &&
            <Link to="/signup">
                <button className="bg-richblack-800  text-white px-4 py-0.5 rounded-[8px] hover:text-gray-100">
                    Sign Up
                </button>
            </Link>
        }
        {   !loggedIn &&
            <Link to="/login">
                <button className="bg-white  text-blue-700 px-4 py-0.5 rounded-[8px] border border-richblack-900 hover:text-blue-900 hover:bg-gray-100">
                    Login
                </button>
            </Link>
        }
        { loggedIn &&
            <Link to="/team">
                <button className="  text-white px-4 py-0.5 rounded-[8px] border border-richblack-900 hover:bg-gray-50 hover:text-blue-700">
                    Team
                </button>
            </Link>
        }
        { loggedIn &&
            <Link target="_blank" to="https://gdsc.community.dev/nitte-meenakshi-institute-of-technology-bengaluru/">
                <button className="text-white px-4 py-0.5 rounded-[8px] border border-richblack-900 hover:bg-gray-50 hover:text-blue-700">
                    Website
                </button>
            </Link>
        }
        { loggedIn &&
            <Avatar userDetails={userDetails}/>
        }
        
      </div>
    </div>
  )
}

export default Navbar
