import React, { useState } from 'react'
import "./Frame8.css"
import { FaPlus } from "react-icons/fa6";
import { RiPencilLine } from "react-icons/ri";
import Logo from "../Images/logo.png";
import { IoCopyOutline } from "react-icons/io5";
import { RiVipDiamondLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import wifi from "../Images/wifi.png";
import youtube from "../Images/youtube.png";
import upload from "../Images/upload.png";
import { useSelector } from 'react-redux';
import Diaplayproject from '../Diaplayproject'


const Frame8 = () => {
  
  const userData=useSelector((state)=>state.user)
  console.log(userData)
  const data=useSelector((state)=>state.upload.projectlist) 
  console.log(data)
  const projectList=data.slice(0,3)
 
  return (

    <div className='uploadflow'>
      <div className='left'>
        <div className="logoframe">
            <img src={Logo} className='logo' alt="Logo"/>
            <div className='podcast1'><FaPlus/>Add Your Podcast(s)  </div>    
            <p className='create-podcast'><RiPencilLine/>Create & Repurpose</p>
            <p className='podcastwidget'><IoCopyOutline/>Podcast Widget</p>
            <p className='upgrade'><RiVipDiamondLine/>Upgrade</p>
            <hr/>
            <p className='help'><IoSettingsOutline/>Help</p>
          </div>
           <hr/>
          <p className='username'>{userData.name}</p>
            <p className='email'>{userData.email}</p>
        </div>
       
      <div className='right'>
        <div className='home'>
        <GoHome/>
         <p className="homepage">Home Page</p>
         <p className='sampleproject'>/Sample Project</p>
         <p className='Addyourpodcast'>/Add your podcast</p>
         </div>
        <div className='addpodcast'>
          Add Podcast
        </div>

        <div className='frame'>
        <button className='rssframe' >
        <div className="wififrame">
          <div>
          <div className='rssfeed'>RSS Feed</div>
          <p className='text'>Lorem ipsum dolor sit. 
          Dolor lorem sit.</p>
          </div>
          <img src={wifi} className='wifi'/>
          </div>
          </button>

          <button className='youtubeframe' >
            <div className="wififrame" >
              <div>
              <div className='youtube'>Youtube Video</div>
              <p className='text'>Lorem ipsum dolor sit. 
                  Dolor lorem sit.</p>
          
              </div>
              <img src={youtube} className='wifi'/>
            </div>
          </button>  

          <button className='youtubeframe'>
            <div className="wififrame">
              <div>
              <div className='youtube'>Upload Files</div>
              <p className='text'>Lorem ipsum dolor sit. 
                Dolor lorem sit.</p>
          
              </div>
              <img src={upload} className='wifi'/>
            </div>
          </button> 
          </div>
            

         <div className="showproject">
            <div className='yourfiles'>
                 <div>Your Files</div>
            </div>
            <div className='navbar'>
              <p className='no'>NO</p>
              <p >name</p>
              <p >Upload Date & Time</p>
              <p className='action'>Action</p>
            </div>

            {
              projectList[0] && projectList.map((el,index)=>{
                return(              
                <Diaplayproject
                key={el._id}
                id={el._id}
                num={index + 1}
                name={el.name} />
                )
              })
            }
            <ul>
       
      </ul>
           
          </div>
             
        </div>   
    </div>
    
  )
}

export default Frame8

