import React from 'react'
import img from '../Assests/hero_bg.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import { APIURL } from '../env';
import { MdDeleteForever } from 'react-icons/md';
import { useEffect, useState } from 'react'

const Event_card = ({title,description,date,_id}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [imageResponse,setImageResponse] = useState(false);
  const navigate = useNavigate();
  console.log(_id)
  const handleClick=()=>{
    navigate(`/eventDetails/${_id}`)
  }

  const handleImageUpload=()=>{
    navigate(`/imageForm/${_id}`)
  }

  const handleDelete = async()=>{
    try {
      const confirmed = window.confirm("Are you sure you want to delete the Event?");
  
      if (confirmed) {
        const deleteLab = await axios.delete(`${APIURL}/api/card/delete/${_id}`);
        window.location.reload();
        // toast.success("Event deleted successfully");
      } else {
        // toast.success("Event deletion cancelled");
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get(`${APIURL}/api/card/get-image-url/${_id}`);
        setImageResponse(true)
        setImageUrl(response.data.imageUrl);
      } catch (error) {
        console.error('Error fetching image URL:', error);
      }
    }    
    fetchImage();
  }, []);
  

  return (
    <>
        <div  className='relative w-9/12 flex items-center justify-center  bg-gray-10 p-2 shadow-md rounded-md'>
          <div className='flex w-full h-[200px] gap-10 justify-center cursor-pointer' >
            <div className=''>
              {
                imageResponse?(
                  <img className='h-full rounded-md shadow-md p-2' src={imageUrl} alt="Loading..." />
                ):(
                  <button onClick={handleImageUpload}>UploadImg</button>
                )
              }
                {/* <img className='h-full rounded-md shadow-md' src={img} alt="" /> */}
                {/* {<button onClick={handleImageUpload}>UploadImg</button> && <img className='h-full rounded-md shadow-md p-2' src={imageUrl} alt="UploadImg +" />} */}
            </div>
            <div className='w-11/12 mt-2' onClick={handleClick}>
                <h3>{title}</h3>
                <p className='mt-4'>{description}</p>
            </div>
            <div>
              <h2>{date}</h2>
            </div>
          </div>
          <div className='absolute bottom-2 right-2 text-2xl bg-red-500 rounded-full flex items-center justify-center border border-black'>
            <button onClick={handleDelete}><MdDeleteForever/></button>
          </div>
        </div>
        
    </>
  )
}

export default Event_card
