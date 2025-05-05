import React from 'react';
import './Displayproject.css';
import { useNavigate } from 'react-router-dom';
import  {deleteUser} from '.././redux/projectSlice'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const DisplayProject = ({ name, num, id }) => {
  

  const userData=useSelector((state)=>state.upload.projectlist) 
  console.log(userData)
  const navigate = useNavigate();

  const handleDisplay = (id) => {
    navigate('/editfile/' + id);
    console.log(id);
  };

     const dispatch=useDispatch();
     const handleondeletefile = async () => {
      if (!userData || !userData._id) {
        toast.error("User not found");
        return;
      }
  
      try {
        const res = await fetch(`http://localhost:8080/fromyoutube/${userData._id}`, {
          method: "DELETE",
        });
  
        const result = await res.json();
        console.log(result);
  
        if (res.ok) {
          toast.success("User deleted successfully");
          dispatch(deleteUser(userData._id));
        } else {
          toast.error(result.message || "Delete failed");
        }
      } catch (err) {
        console.error("Delete error:", err);
        toast.error("Server error");
      }
    };

  const showDate = new Date();

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const displayTodayDate = `${showDate.getDate()+1} ${monthNames[showDate.getMonth()]} ${showDate.getFullYear()}`;

const hours = showDate.getHours().toString().padStart(2, '0');
const minutes = showDate.getMinutes().toString().padStart(2, '0');

const displayCurrentTime = `${hours}:${minutes}`; 

  return (
    <div>
      <div className="firstline">
        <p className="num">{num}</p>
        <div className="nameframe">
          <p className="name">{name}</p>
        </div>
        <div className="dateframe">
          <p className="date">{displayTodayDate + ' | ' + displayCurrentTime}</p>
        </div>
        <div className="viewdelete">
         
          <button className="view" onClick={() => handleDisplay(id)}>View</button>
          <button className="delete" onClick={()=>handleondeletefile(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayProject;
