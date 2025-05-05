
import React, { useState } from 'react';
import './Frame9.css';
import Logo from "../Images/logo.png";
import { FaPlus } from "react-icons/fa6";
import { RiPencilLine } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import { RiVipDiamondLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { updateProjectDescription } from '../../redux/projectSlice';

const Frame9 = () => {

  const userData=useSelector((state)=>state.user)
  console.log(userData)
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.upload.projectlist);

  const projectdisplay = data.find(el => el._id === id);

  const [description, setDescription] = useState(projectdisplay?.description || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (projectdisplay) {
      dispatch(updateProjectDescription({ id, newDescription: description }));
      alert("Description saved!");
      setIsEditing(false);
    }
  };

  return (
    <div className='container3'>
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

      <div className='leftpart'>
        <div className='header'>
          <div className='home'>
            <GoHome/>
            <p className="homepage">Home Page</p>
            <p className='sampleproject'>/Sample Project</p>
            <p className='Addyourpodcast'>/Add your podcast</p>
          </div>
        </div>

        <div className='arrowframe1'>
          <div className='arrowframe'>
            <BsArrowLeft className='arrow'/>
            <Link to={'/youtubefile'} className='edittranscript'>Edit Transcript</Link>
          </div>
          <div className='discardframe'>
            <button className='discard' onClick={() => setIsEditing(true)}>Edit</button>
            <button className='save' onClick={handleSave} disabled={!isEditing}>Save</button>
          </div>
        </div>

        <div className='content'>
          <div className='speakar'>Speaker</div>
          {isEditing ? (
            <textarea
              className="textframe2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={10}
            />
          ) : (
            <p className="textframe2">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Frame9;
