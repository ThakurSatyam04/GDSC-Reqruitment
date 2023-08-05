import React from 'react'
import "../components/Form.css"
import {toast} from "react-hot-toast";
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { APIURL } from '../env';
import Button from '../components/Button_comp'

const SpeakerForm = () => {

    const navigate = useNavigate();

    const [card, setCard] = useState({
      name: "",
      company:"",
      designation:"",
      experience:"",
      description:""
    })  
    const handleChange = async(e)=>{
      const {name,value} = e.target;
      setCard({
      ...card,
      [name]:value
    })
    }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const {name,company,designation,experience,description} = card;
      if(name && company && designation && experience && description){
        await axios.post(`${APIURL}/api/speaker/`,card)
         .then(res =>{
           console.log(res)
           toast.success("Speaker added Successfully!", {
            autoClose: 5000, // Adjust the duration as needed (e.g., 3000 milliseconds = 3 seconds)
          });
           navigate("/eventPage");
         })
      }else{
        alert("please fill all the fields");
      }
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
    <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form onSubmit={handleSubmit} >
            <div className="formbold-form-title">
              <h2 className="flex justify-center">Add Speaker Details</h2>              
            </div>

            <div className="formbold-input-flex">
              <div>
                <label className="formbold-form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={card.name}                    
                  // placeholder='including software and hardware'
                />
              </div>

              <div>
                <label className="formbold-form-label">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={card.company}                    
                  // placeholder='including software and hardware'
                />
              </div>
              
            </div>

            <div className="formbold-mb-3">
              <label className="formbold-form-label">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                id="designation"
                className="formbold-form-input"
                onChange={handleChange}
                value={card.designation}
              />
            </div>
            <div className="formbold-mb-3">
              <label className="formbold-form-label">
                Experience
              </label>
              <input
                type="text"
                name="experience"
                id="experience"
                className="formbold-form-input"
                onChange={handleChange}
                value={card.experience}
              //   placeholder='Model/Version of equipment'
              />
            </div>

            <div className="formbold-mb-3">
              <label className="formbold-form-label">
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className="formbold-form-input"
                onChange={handleChange}
                value={card.description}
              //   placeholder='Model/Version of equipment'
              />
            </div>
            <div>
              <Button btn="+ Add Speaker" type='submit'/>
            </div>
  </form>
</div>
</div>

  </div>
  )
}

export default SpeakerForm
