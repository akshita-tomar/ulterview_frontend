import React, { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { RiQuestionnaireFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import {PiNotebookFill} from "react-icons/pi"
import { useAppContext } from "../../utils/useContext";


const Sidebar = () => {
  const navigate= useNavigate()
  let role = localStorage.getItem('role')

const fetchLanguages =()=>{
  navigate('/homepage')
}

const handleCandidateResult = ()=>{
  navigate('/candidates-performance')
}
const path=useLocation()

const { show, setShow } = useAppContext();
  return (
    <>
      <div className={`sidebar ${show? "cmn_width":""}`}>
 
        <h3 className="bar" onClick={()=>{setShow(!show)}}>{show? <RxCross2 className="p-0 text-center"/>:<FaBars />}</h3>

        {
          role==="HR"?<div className={`sidebar-button mt-4 ${path.pathname==="/candidates" ? "active-pathname":""}`}>
            <div className="sidebar_content"><FaUser/> 
          <h4 className={show? "d-none":"sidebar_content"}>Candidates</h4></div></div>:null
        }
        {
          role==='DEVELOPER'?<div>
          <div className={`sidebar-button mt-4 ${path.pathname==="/homepage" ? "active-pathname":""}`} onClick={fetchLanguages} > 
          <div className="sidebar_content">
          <RiQuestionnaireFill />
          <h4 className={show? "d-none":"sidebar_content"}>Questionnaire</h4>

          </div>
          </div> 

          <div className={`sidebar-button ${path.pathname==="/candidates-performance" ? "active-pathname":""}`} onClick={handleCandidateResult}>
            <div className="sidebar_content">
          <PiNotebookFill className="sidebar_content"/>
            <h4 className={show? "d-none":"sidebar_content"}> Candidate Results</h4>
              
            </div>
            </div>
          
          </div>:null
        }
      </div>
      
    </>

  );
};

export default Sidebar;


