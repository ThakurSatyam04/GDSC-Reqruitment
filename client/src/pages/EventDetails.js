import React from 'react'
import { Link,useParams,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import { APIURL } from '../env'
import axios from 'axios'
import EventNavbar from '../components/EventNavbar'
import SpeakerCard from '../components/speaker_card'
import google from '../Assests/Sponsors/google.png'
import zapp from '../Assests/Sponsors/zapp.png'
import nike from '../Assests/Sponsors/nike.png'
import sony from '../Assests/Sponsors/download.png'
import crocs from '../Assests/Sponsors/crocs.png'
import Footer from '../components/Footer'

const EventDetails = ({loggedIn,userDetails}) => {
    const [EventDetail,setEventDetail] = useState("");
    const { _id } = useParams();
    const navigate= useNavigate();

    const getEventCardDetails = async()=>{
        try{
          const data = await axios.get(`${APIURL}/api/card/get/${_id}`)
          setEventDetail(data.data);
        }
        catch(e){
          console.log(e)
        }
      }

      const handleAddSpeakers=()=>{
        navigate('/speakerForm')
      }

      useEffect(()=>{
        getEventCardDetails();
      },[])
  return (
    <div className='w-full'>
    {/* Navbar */}

    {/* HeroSection */}
      <div className='relative event_hero_section h-[500px]'>
        <EventNavbar userDetails={userDetails}/>
        <div className='absolute top-1/3 md:left-20 font-semibold m-4 md:m-0'>
          <p className='text-2xl md:text-4xl text-black'>{EventDetail.title}</p><br />
          <p className='w-1/2 text-black'>{EventDetail.description}</p><br />
        </div>
        <div className='absolute bottom-1/4 md:left-20'>
          <button className='bg-gray-900  text-white px-4 py-2 rounded-[8px] border border-richblack-900 hover:border-blue-900 hover:bg-black'>
            <p>Register &rarr;</p>
          </button> 
        </div>
      </div>

    {/* ContentPart */}
      <div>
        {/* Speaker Section */}
        <div id='speakers' className='w-full h-[100px] flex items-center justify-center'>
          <p className='font-bold text-2xl'>Just join us at the event on {EventDetail.date}</p>
        </div>
        <div className='w-full flex flex-col items-center justify-center bg-gray-100 p-6 shadow-md'>
          <div className="text-center w-full md:text-left flex items-center justify-end" > 
            <button onClick={handleAddSpeakers} className='bg-white p-0.5 h-fit rounded-md hover:brightness-90'>+ Add Speakers</button>
          </div>
          <div>
            <h2 className='w-full text-2xl text-center font-semibold'>Our Speakers</h2>
            <p className='w-full text-sm text-center'>10+ inspiring speekers, meet the best product people</p>
            <p className='w-full text-sm text-center'>around the world and network</p>
          </div>
          <div className='w-11/12 p-10 flex flex-wrap items-center justify-center gap-5'>
            <SpeakerCard/>
            <SpeakerCard/>
            <SpeakerCard/>
          </div>
        </div>
        {/* About Section */}
        <div id='about' className='w-full flex justify-center p-6 mt-0 md:mt-10 mb-0 md:mb-10'>
          <div className='w-9/12'>
            <h2 className='w-full text-2xl text-center font-semibold mb-2'>About the conference</h2>
            <p>{EventDetail.about}</p>
            <div className='w-full flex justify-center items-center mt-6'>
              <button className='px-12 py-1 border border-black flex hover:bg-gray-200'>
                Know more
              </button>
            </div>
          </div>
        </div><hr />
        {/* Sponsor Section */}
        <div id='sponsors' className='w-full flex flex-col justify-center p-10'>
          <div>
            <h2 className='w-full text-2xl text-center font-semibold mb-2'>Event Sponsors</h2>
            <p className='w-full text-sm text-center'>Grateful for the generous support from our esteemed sponsors, who make our events shine brighter and our community stronger.</p>
          </div>
        {/* Sponsors Logos */}
          <div className='sponsors flex flex-wrap items-center justify-center mt-10 p-10 gap-20'>
            <img src={google} alt="" />
            <img src={nike} alt="" />
            <img src={zapp} alt="" />
            <img src={sony} alt="" />
            <img src={crocs} alt="" />
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default EventDetails
