import React from 'react'
import "../components/Form.css"
import {toast} from "react-hot-toast";
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { APIURL } from '../env';
import Button from '../components/Button_comp'

const EventCardForm = () => {

    const navigate = useNavigate();

    const [card, setCard] = useState({
      title: "",
      description:"",
      date:"",
      about:""
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
      const {title,description,date,about} = card;
      if(title && description && date && about){
        await axios.post(`${APIURL}/api/card/`,card)
         .then(res =>{
           console.log(res)
           toast.success("Card added Successfully!", {
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
                <h2 className="flex justify-center">Add Card Details</h2>              
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="formbold-form-input"
                    onChange={handleChange}
                    value={card.title}                    
                    // placeholder='including software and hardware'
                  />
                </div>
                
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
                />
              </div>
              <div className="formbold-mb-3">
                <label className="formbold-form-label">
                  Date
                </label>
                <input
                  type="text"
                  name="date"
                  id="date"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={card.date}
                //   placeholder='Model/Version of equipment'
                />
              </div>
              <div className="formbold-mb-3">
                <label className="formbold-form-label">
                  About
                </label>
                <input
                  type="text"
                  name="about"
                  id="about"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={card.about}
                //   placeholder='Model/Version of equipment'
                />
              </div>
              <div>
                <Button btn="+ Add Card" type='submit'/>
              </div>
    </form>
  </div>
</div>

    </div>
  )
}

export default EventCardForm
