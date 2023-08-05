import React, { useEffect, useState } from 'react'
import Event_card from '../components/Event_card'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { APIURL } from '../env';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EventPage = ({loggedIn,userDetails}) => {
  const navigate = useNavigate(); 
  const [cardDetails,setCardDetails] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/eventCardForm`);
  }

  const getEventCardDetails = async()=>{
    try{
      const {data} = await axios.get(`${APIURL}/api/card/getAll`)
      setCardDetails(data);
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    getEventCardDetails();
  },[])


  return (
    <>
    <div className='realtive bg-[#199CAD]'>
      <Navbar loggedIn={loggedIn} userDetails={userDetails}/>
    </div>
      <div className='mb-20'>
      <h2 className='w-full text-center top-4 font-bold text-2xl text-blcak'>Our Events</h2>
        <div className="text-center md:text-left flex items-center justify-end m-4" > 
          <button onClick={handleClick} className='bg-[#75cce7] p-2 h-fit rounded-md hover:brightness-90'>+ Add Card</button>
        </div>
        <div className='w-full flex flex-col gap-10 items-center justify-center mt-10'>
          {
            cardDetails.map((item)=>{
              return <Event_card key={item._id} {...item}/>
            })
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default EventPage
