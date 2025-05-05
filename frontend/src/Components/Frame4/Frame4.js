import React, { useState } from 'react'
import "./Frame4.css"
import { FaPlus } from "react-icons/fa6";
import { RiPencilLine } from "react-icons/ri";
import Logo from "../Images/logo.png";
import { IoCopyOutline } from "react-icons/io5";
import { RiVipDiamondLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import wifi from "../Images/wifi.png";
import youtube from "../Images/youtube.png";
import upload from "../Images/upload.png";
import Frame6 from '../Frame6/Frame6';
import Frame5 from '../Frame5/Frame5';
import Frame7 from '../Frame7/Frame7';
import Dragfile from '../Dragfile';
import { useSelector } from 'react-redux';


const Frame4 = () => {

const userData=useSelector((state)=>state.user)
console.log(userData)

const [youtubefile,setyoutubefile]=useState(false);
const [rssfeed,setrssfedd]=useState(false);
const[file,setfile]=useState(false);


const handleyoutube=()=>{
  setyoutubefile(false);
}

const handlerssfeed=()=>{
  setrssfedd(false);
}

const handlefile=()=>{
  setfile(false);
}
  return (

    <div className='uploadflow'>
       <div className='left'>
         <div className="logoframe1">
          <img src={Logo} className='logo'/>
        </div> 
       <div className='podcast1'><FaPlus/>Add Your Podcast(s)  </div>
         <p className='create-podcast'><RiPencilLine/>Create & Repurpose</p>
         <p className='podcastwidget'><IoCopyOutline/>Podcast Widget</p>
         <p className='upgrade'><RiVipDiamondLine/>Upgrade</p>
         
         < hr/>
          <p className='help'><IoSettingsOutline/>Help</p>
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
        <button className='rssframe' onClick={()=>setrssfedd(true)}>
        <div className="wififrame">
          <div>
          <div className='rssfeed'>RSS Feed</div>
          <p className='text'>Lorem ipsum dolor sit. 
          Dolor lorem sit.</p>
          </div>
          <img src={wifi} className='wifi'/>
          </div>
          </button>

          <button className='youtubeframe' onClick={()=>setyoutubefile(true)}>
            <div className="wififrame" >
              <div>
              <div className='youtube'>Youtube Video</div>
              <p className='text'>Lorem ipsum dolor sit. 
                  Dolor lorem sit.</p>
          
              </div>
              <img src={youtube} className='wifi'/>
            </div>
          </button>  

          <button className='youtubeframe' onClick={()=>setfile(true)}>
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
        
          <div className="uploadfiles">
            <div className='uploadsimble'>
             <IoCloudUploadOutline className="simble"/>
            </div>
            <div className='text1'>Select a file or drag and drop here (Podcast Media or Transcription Text)</div>
           <p className="textfile"> MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>      
           <Dragfile/>
          
          </div>
        
         
        </div>

        {
         (youtubefile && (<Frame5 onCancel={handleyoutube}/>))
        }
        {
          (rssfeed && (<Frame6 onCancel={handlerssfeed}/>))
        }
      
        {
          (file && (<Frame7 onCancel={handlefile}/>))
        }
    </div>
    
  )
}

export default Frame4
