import React, { useState } from 'react'
import './Frame1.css'
import { Link, useNavigate } from 'react-router-dom'
import  { toast} from 'react-hot-toast';
import Logo from './Images/logo1.png'
import Icon1 from './Images/icon.png'
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import {loginRedux} from '.././redux/userSlice'
const Frame1 = () => {
  const [data,setdata]=useState({
  email:"",
  password:"",
 });
 
 const handleOnchange=(e)=>{
   const{name,value}=e.target
   setdata((prev)=>{
    return{
      ...prev,
      [name]:value
    }
   })
 }

 const navigate=useNavigate()
 const userData=useSelector(state=>state)


const dispatch=useDispatch()

const handleSubmit=async(e)=>{
e.preventDefault();
const {email,password}=data
if(email && password ){
  const fetchData = await fetch('http://localhost:8080/login',{
    method : "post",
    headers : {
      "content-type" : "application/json"
    },
    body : JSON.stringify(data)
  })
  const dataApi=await fetchData.json();
  console.log(dataApi);
  
  toast(dataApi.message)
 
  if(dataApi.alert){
     dispatch(loginRedux(dataApi))
     navigate("/home");
   } 
     console.log(userData)
}

else{
  alert("please enter required field")
}
}
  return (
    <div className="login-container">
    {/* Left Side */}
    <div className="Left-side">
      <div className="branding">
        <div className="logo-section">
          <img src={Logo} className='Logo'/>
        </div>
        <h1 className="main-heading">
          Your podcast will no longer be just a hobby.
        </h1>
        <div className="highlight-box">
          Supercharge Your Distribution using our AI assistant!
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="right-side">
      <div className="form-wrapper">
        <div className='logo-section1'>
        <img src={Icon1} className=' logo-circle1'/>
        </div>
        <h2 className="welcome-title">Welcome to <p className='ques'>Ques.AI</p></h2>
        
        <form className="form-fields" onSubmit={handleSubmit}>
          <input type='email' id="email" name='email' placeholder="Email Address" 
            value={data.email}onChange={handleOnchange} required
          className="input-field" ></input>
          <input  placeholder="Password" className="input-field"
          id="password" name='password'
          value={data.password}onChange={handleOnchange} required
          ></input>
          <div className="options">
            <label className="remember-me">
              <input type="checkbox" id="remember" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
          <button to={'/home'} className="login-button" >
            Login
          </button>
          </form>
          <div className="separator">or</div>
          <button className="google-button">
            <div className="google-icon">
             <Link to={'http://www.google.com/intl/en/privacy'}><FcGoogle/></Link>
            </div>
            Continue with Google
          </button>        
          <div className="create-account">
            Don't have an account? <Link to={'/signup'} className="create-link">Create Account</Link>
          </div>      
      </div>
    </div>
  </div>
  
  )
}

export default Frame1
