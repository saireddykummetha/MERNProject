import React from 'react'
import './Frame3.css'
import logo from "../Images/logo.png";
import { MdOutlineSettings } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { BsPlusCircle } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Frame3 = () => {
  
  const cartItemsNumber=useSelector((state)=>state.product.cartItem)
  const timeAgo = (timestamp) => {
    if (!timestamp) return 'Never';
  
    const now = new Date();
    const previous = new Date(timestamp);
    const diffMs = now - previous;
  
    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
    if (seconds < 60) return 'Just now';
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    if (days < 7) return `${days} day${days !== 1 ? 's' : ''} ago`;
  
    return previous.toLocaleDateString();
  };
  const lastEdited = new Date().toISOString(); 

 
  return (
   <> 
   <div >
      <div className="container3">
        <div className='Logoframe'>
            <img src={logo} className='logo'/>
        </div>
        <div className='header-actions1'> 
          <MdOutlineSettings className='setting'/>
        </div >
          <div className='header-actions2'>
          <GoBell className='bell'/>
          </div>
          
          </div>
          <div className='line2'>            
            <p className='title2'>Projects</p>
            <p className='title3'><BsPlusCircle className='plus'/>Create New Project</p>             
          </div>
       <div className='border'>
        
    <div className="card">
    <div className='mainbox'>
       <div className='minbox'>
          <p className='sp'>SP</p>
       </div>
       <p className='sampletext'>Sample Project</p>
       </div> 
       <Link to={'/uploadflow'}>
       <p className='files' >{cartItemsNumber.length} Files</p>
        </Link> 
        <p className='time'>Last edited {timeAgo(lastEdited)}</p> 
          
      </div>     
        </div>
      </div>
    </>       
   
  )
}

export default Frame3
