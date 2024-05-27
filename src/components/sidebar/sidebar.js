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

const handleCandidateResult = ()=>{
  navigate('/candidates-performance')
}

  return (
    <>
      <div className="sidebar">
        {/* <h3 className="bar" onClick={()=>{setShow(!show)}}>{show? <RxCross2/>:<FaBars />}</h3> */}

        {
          role==="HR"?<button className="sidebar-button"><h4 className="sidebar_content"><FaUser/> Candidates</h4></button>:null
        }
        {
          role==='DEVELOPER'?<div><button className="sidebar-button" onClick={fetchLanguages}>
          <h4 className="sidebar_content"><RiQuestionnaireFill />Questionnaire</h4></button> 
          <button className="sidebar-button" onClick={handleCandidateResult}>Candidate Results</button></div>:null
        }
      </div>
      
    </>

  );
};

export default Sidebar;


