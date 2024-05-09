import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




const Sidebar = () => {
  const navigate= useNavigate()

const fetchLanguages =()=>{
  navigate('/homepage')
}


  return (
    <>
      <div className="sidebar">
        <button className="sidebar-button" onClick={fetchLanguages}>Create Task</button>
     
      </div>
      
    </>

  );
};

export default Sidebar;


