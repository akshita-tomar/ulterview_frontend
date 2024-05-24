import React from "react";
import { useNavigate } from "react-router-dom";




const Sidebar = () => {
  const navigate= useNavigate()
  let role = localStorage.getItem('role')

const fetchLanguages =()=>{
  navigate('/homepage')
}


  return (
    <>
      <div className="sidebar">
        {
          role==="HR"?<button className="sidebar-button"> Candidates</button>:null
        }
        {
          role==='DEVELOPER'?<div><button className="sidebar-button" onClick={fetchLanguages}> Questionnaire</button> 
          <button className="sidebar-button" >Candidate Results</button></div>:null
        }
      </div>
      
    </>

  );
};

export default Sidebar;


