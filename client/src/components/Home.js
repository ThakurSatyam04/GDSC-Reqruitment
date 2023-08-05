import React from 'react'
import Navbar from './Navbar'
import { Link} from 'react-router-dom'

const Home = ({loggedIn,userDetails}) => {
  return (
    <div>
      <div className='relative hero_section h-screen'>
        <Navbar loggedIn={loggedIn} userDetails={userDetails}/>
        <div className='absolute top-1/3 md:left-20 font-semibold m-4 md:m-0'>
          <span className='text-2xl md:text-6xl text-gray-200'>Opportunities don't happen</span><br />
          <span className='text-2xl md:text-4xl text-white'>You create them...</span><br />
          <span className=' text-white'>Discover a world of excitement and wonder as you explore all our captivating events!</span>
        </div>
        <div className='absolute bottom-1/3 left-20'>
          {
            loggedIn?(
              <Link to='/eventPage'>
                <button className='bg-white  text-blue-700 px-4 py-2 rounded-[8px] border border-richblack-900 hover:text-blue-900 hover:bg-gray-100'>
                Go to Events
                </button>          
              </Link>
            ):(
              <Link to='/login'>
                <button className='bg-white  text-blue-700 px-4 py-2 rounded-[8px] border border-richblack-900 hover:text-blue-900 hover:bg-gray-100'>
                Go to Events
                </button> 
              </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Home
