import React, { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RiQuestionnaireFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";



const Sidebar = () => {
  const navigate= useNavigate()
  let role = localStorage.getItem('role')

const fetchLanguages =()=>{
  navigate('/homepage')
}


  return (
    <>
      <div className="sidebar">
        {/* <h3 className="bar" onClick={()=>{setShow(!show)}}>{show? <RxCross2/>:<FaBars />}</h3> */}

        {
          role==="HR"?<div className="sidebar-button">
         <h4 className="sidebar_content"><FaUser/> Candidates</h4> 
            
          </div>:null
        }
        {
          role==='DEVELOPER'?
          <div className="sidebar-button" onClick={fetchLanguages}> <h4 className="sidebar_content"><RiQuestionnaireFill/> Questionnaire</h4></div>
          :
          null
        }
      </div>
      
    </>

  );
};

export default Sidebar;


