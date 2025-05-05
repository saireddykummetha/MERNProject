import React, { useState } from 'react'
import './Createpage.css'
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  { addCartItem } from '../../redux/uploadproject'

const Craetepage = ({onClose}) => {
 
  const [validation ,setvalidation]=useState(true)
  const navigate=useNavigate()
   

  const dispatch = useDispatch();

  const handleUpload = (el) => {
    const uploadedCount = el+1; 
    dispatch(addCartItem(uploadedCount));
  }
  const [data,setdata]=useState({
    name:"",
  });

  
  const handleChange=(e)=>{
    const {name,value}=e.target
  
    setdata((prev)=>{
     return{
      ...prev,
      [name] : value
     }
    })
  }

  const handleSubmit =async(e)=>{

    e.preventDefault();
    const {name}=data
   if(name ){
    const fetchData=await fetch('http://localhost:8080/createproject',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)

  })
  const dataApi=await fetchData.json();
//  console.log(dataApi)
 toast(dataApi.message)

 setdata(()=>{
  return{
    name:'',
  }})
  navigate("/project");
}
}
  return (
    <>
    <div className="overlay">
    <div className="container1">
      <div  className="createproject">Create Project</div>
      <form className='form' onSubmit={handleSubmit}>
        <label className="project">Enter Project Name:</label>
        <input type={'text'} name='name' id='name'className='search' onChange={handleChange} value={data.name}
       onMouseDown={() => setvalidation(false)}/>
        <div className='msg'>
        {data.name.length===0 && validation &&<p className='errmsg'>Project Name Can't be empty</p>}
        </div>
        
        <div className='button'>
      <p className='cancel' onClick={onClose}>Cancel</p>
      <button className='create' onClick={handleUpload}>Create</button>
      </div>
      </form>
     </div>
    </div>
    </>
  )
}

export default Craetepage
