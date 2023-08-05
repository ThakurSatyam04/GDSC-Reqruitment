import './App.css';
import React, { useState,useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import EventPage from './pages/EventPage'
import EventCardForm from './components/EventCardForm';
import EventDetails from './pages/EventDetails'
import TeamPage from './components/TeamPage.js'
import SpeakerForm from './components/SpeakerForm';
import ImageForm from './components/ImageForm';

function App() {
  const loggedIn = localStorage.getItem("isLoggedIn");
  // console.log(loggedIn,"login");
  const [isloggedIn,setIsloggedIn] = useState(false);
  const [user, setLoginUser] = useState({});

  const [userDetails, setUserDetails] = useState({});
  
  useEffect(()=>{
    const storedUser = localStorage.getItem("userDetails");
    if(loggedIn){
      setUserDetails(JSON.parse(storedUser));
    }
    else{
      setUserDetails({});
    }
  },[])


  return (
    <>
      <Routes>
        <Route path='/' element={<Home loggedIn={loggedIn} userDetails={userDetails}/>}/>
        <Route path="/login" element={<Login setLoginUser={setLoginUser} setIsloggedIn={setIsloggedIn}/>}/>          
        <Route path="/signup" element={<Signup setLoginUser={setLoginUser}/>}/>
        <Route path="/eventPage" element={<EventPage loggedIn={loggedIn} userDetails={userDetails}/>}/>
        <Route path="/team" element={<TeamPage userDetails={userDetails}/>}/>
        <Route path="/eventCardForm" element={<EventCardForm/>}/>
        <Route path="/speakerForm/:_id" element={<SpeakerForm/>}/>
        <Route path="/imageForm/:_id" element={<ImageForm/>}/>
        <Route path="/eventDetails/:_id" element={<EventDetails loggedIn={loggedIn} userDetails={userDetails}/>}/>
      </Routes>
    </>
  );
}

export default App;
