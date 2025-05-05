// import Image from "next/image"
import { SlSettings } from "react-icons/sl";
import { FaRegBell } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import Createpage from "../Createpage/Createpage";
import "./Frame2.css"
import React, { useState } from 'react'
import image from "../Images/image.png";
import Logo from "../Images/logo.png";


export default function Frame2() {

  const [upload,setupload]=useState(false);
   const handlefile=()=>{
    setupload(false);
   }

  return (
 
   <>
    <div className="container2">
      <header className="header">
        <div className="logo-container">
          <img src={Logo} className="Logo" alt="image"/>
        </div>
        <div className="header-actions">
          <button className="icon-button">
            <SlSettings className="setting"/>
          </button>
          <button className="icon-button" >
            <FaRegBell className="bell"/>
          </button>
        </div>
      </header>

      <main className="main-content">
        <h1 className="page-title">Create a New Project</h1>

        <div className="illustration-container">
         <img src={image} className="image"/>
        </div>

        <p className="description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in
        </p>

        <button className="create-button" onClick={()=>setupload(true)}>
         <AiFillPlusCircle/>
          Create New Project
        </button>
      </main>
     
    </div>

{upload && (<Createpage onClose={handlefile}/>)}
</>
  )
}
