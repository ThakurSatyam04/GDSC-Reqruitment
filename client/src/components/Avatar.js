import React, { useState,useRef,useEffect } from 'react';
import user_profile from '../Assests/users-icon-png.jpg';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Avatar = ({userDetails}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const divRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleScreenClick  = (event)=>{
    if(divRef.current && !divRef.current.contains(event.target)){
        setIsDropdownOpen(false);
    }
  };

  const handleLogOut =()=>{
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userDetails")
    navigate('/')
    window.location.reload()
  }

  useEffect(()=>{
    document.addEventListener('click',handleScreenClick );
    return ()=>{
      document.removeEventListener('click',handleScreenClick );
    };
  },[]);

  return (
    <div ref={divRef} className="relative border-2 border-black rounded-full">
      <img
        id="avatarButton"
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full cursor-pointer bg-white"
        src={user_profile}
        alt="User dropdown"
      />

      {isDropdownOpen && (
        <div className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{userDetails.name}</div>
            <div className="font-medium truncate">{userDetails.email}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Past Events</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Upcoming Events</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            </ul>
            <div className="py-1">
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={handleLogOut}>Sign out</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
