import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { APIURL } from '../env'

const Speaker_Cards = ({id}) => {
const [speakerDetails,setSpeakerDetails] = useState('')

//   const getSpeakerCardDetails = async()=>{
//     try{
//       const {data} = await axios.get(`${APIURL}/api/speaker/get/${id}`)
//       setSpeakerDetails(data);
//     }
//     catch(e){
//       console.log(e)
//     }
//   }

  console.log(speakerDetails)

//   useEffect(()=>{
//     getSpeakerCardDetails();
//   },[])

  return (
      <div className='h-[200px] w-[200px] rounded-md'>
      <a href="#" class="group relative block bg-black rounded-md shadow-md">
  <img
    alt="Developer"
    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-md"
  />

  <div class="relative p-4 sm:p-6 lg:p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      Developer
    </p>

    <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

    <div class="mt-4">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur 
        </p>
      </div>
    </div>
  </div>
</a>
    </div>
  )
}

export default Speaker_Cards
