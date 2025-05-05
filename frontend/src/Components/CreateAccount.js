import React, { useState } from 'react'
import './CreateAccount.css'
import { Link, useNavigate } from 'react-router-dom'
import  { toast} from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const CreateAccount = () => {
  
  const navigate =useNavigate()
  const [data,setdata]=useState({
    name:"",
    email:"",
    password:"",
    confirmpassword:"",
   });
  

  const dispatch=useDispatch();
   const handleOnchange=(e)=>{
    const{name,value}=e.target
    setdata((prev)=>{
     return{
       ...prev,
       [name]:value
     }
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const {name,email,password,confirmpassword}=data
    if(name && email && password && confirmpassword){
       if(password === confirmpassword){
        const fetchData = await fetch('http://localhost:8080/signup',{
          method : "post",
          headers : {
            "content-type" : "application/json"
          },
          body : JSON.stringify(data)
        })
        const dataApi=await fetchData.json();
        console.log(dataApi);
          // alert(dataApi.message)
          toast(dataApi.message);
         
          if(dataApi.alert){
       
          navigate('/')
          }
         
       }
       else{
        toast("password and confirm password not equal")
       }
    }
    }
  return (
    <div>
    <div className="signup-container">
    <h2>Create an Account</h2>
    <form onSubmit={handleSubmit}>
       <label htmlFor='name'> Name</label>
      <input type="text"  id="name" name='name'placeholder="Full Name" 
       value={data.name} onChange={handleOnchange} required/>
        <label htmlFor='firstName'>Email</label>
      <input type="email" id="email" name='email' placeholder="Email Address"
       value={data.email} onChange={handleOnchange} required/>
        <label htmlFor='firstName'>Password</label>
      <input type="" placeholder="Password" 
      id="password" name='password' value={data.password}onChange={handleOnchange} required/>
      <label htmlFor='firstName'>Confirmpassword</label>
      <input type="confirmpassword" id="confirmpassword" name='confirmpassword'placeholder="Confirm Password"
       value={data.confirmpassword}onChange={handleOnchange} required/>
      <button type="submit">Sign Up</button>
    </form>
    <p>Already have an account? <Link to={"/"} >Login</Link></p>
  </div>
   
   
  </div>
  )
}

export default CreateAccount
