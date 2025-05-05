import React, { useState } from 'react'
import'./Frame7.css';
import upload from "../Images/upload.png";

import { RxCross1 } from "react-icons/rx";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Frame7 = ({onCancel}) => {

  const navigate=useNavigate()
  const [Data,setdata]=useState({
    name:"",
    description:"",
  });
   

  const handleonChange=(e)=>{
    const {name,value}=e.target
    setdata((prev)=>{
     return{
      ...prev,
      [name] : value
     }
    })
  }


  const handleonSubmit =async(e)=>{
    e.preventDefault();
   
    const {name,description}=Data

   if(name,description){
    const fetchData=await fetch('http://localhost:8080/fromyoutube',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(Data)

  })
  const dataApi=await fetchData.json();
 console.log(dataApi)
 toast(dataApi.message)

 setdata(()=>{
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
        <img src={upload} className='youicon'/>
        <div className='upyoutube'>Upload from Files</div>
        <RxCross1 className='cross1' onClick={onCancel}/>
        </div>
        <form className='form1' onSubmit={handleonSubmit}>
        <label className="project1">Name:</label>
        <input type='text' className='search1' name='name' value={Data.name} onChange={handleonChange}/>
        <label className="project1">Transcript</label>
        <textarea type='text' name='description'className='search2'value={Data.description} onChange={handleonChange}></textarea>
      <button className='button1'>Upload</button>
      </form>
    </div>
    </div>
  )
}

export default Frame7