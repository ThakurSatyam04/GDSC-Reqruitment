import React from 'react'
import TeamCard from '../components/TeamCard'
import Footer from './Footer'
import EventNavbar from './EventNavbar'

const TeamPage = ({userDetails}) => {
  return (
    <div >
        <EventNavbar userDetails={userDetails}/>
        <div className='relative team_hero_section h-[400px]'>
            <div className='absolute top-1/3 md:left-20 font-semibold m-4 md:m-0'>
            <p className='text-2xl md:text-6xl text-black'>Meet</p><br />
            <p className='text-2xl md:text-4xl text-black ml-10'>Our Team...</p><br />
            </div>
        </div>
        <div className='w-full flex items-center justify-center'>
            <div className='w-11/12 flex flex-col items-center justify-center'>
                <h2 className='font-bold text-2xl'>Members</h2>
                <div className='w-full flex flex-wrap items-center justify-center gap-10 mt-0 md:mt-10'>
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default TeamPage
