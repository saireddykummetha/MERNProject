import React, { useState } from 'react'
import'./Frame5.css';
import youtube from "../Images/youtube.png";

import { RxCross1 } from "react-icons/rx";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Frame5 = ({onCancel}) => {
  const navigate=useNavigate()
    const [Data,setData]=useState({
      name:"",
      description:"",
    });
     
    const handleonChange=(e)=>{
      const {name,value}=e.target
      setData((prev)=>{
       return{
        ...prev,
        [name] : value
       }
      })
    }

    const handleonSubmit =async(e)=>{
      e.preventDefault();
     console.log(Data);

      const {name,description}=Data
     if(name,description){
      const fetchData=await fetch('https://mernproject-krau.onrender.com/fromyoutube',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(Data)
  
    })
    const dataApi=await fetchData.json();
   console.log(dataApi)
   toast(dataApi.message)
  
   setData(()=>{
    return{
      name:'',
      description:'',
    }
   })
    navigate("/youtubefile");
  }
  }
  
  return (
    <div className='overlay'>
    <div className='Youtubecontainer'>
      <div className='youiconframe'>
        <img src={youtube} alt='img' className='youicon'/>
        <div className='upyoutube'>Upload from Youtube</div>
        <RxCross1 className='crosss' onClick={onCancel}/>
        </div>

      <form className='form1' onSubmit={handleonSubmit}>
        <label className="project1">Name:</label>
        <input type={'text'} name='name' className='search1'  onChange={handleonChange} value={Data.name}/>
        <label className="project1">Transcript</label>
        <textarea type={'text'} className='search2' name='description' onChange={handleonChange} value={Data.description}/>
         <button className='button1'>Upload</button>
    </form>  
    </div>
    </div>
  )
}

export default Frame5
