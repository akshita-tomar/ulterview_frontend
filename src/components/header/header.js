import React, { useState } from 'react';
import logo from './ultivic-logo.png'
import {useNavigate} from 'react-router-dom'
import ChangePassword from './changePassword';

const Header = () => {
const navigate = useNavigate();
const [showChangePassword,setShowChangePassword]=useState(false)


  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/')
  };


  const handleChangePassword=()=>{
    setShowChangePassword(true)
  }

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Company Logo" className="logo-icon" />
      </div>
      <div>
      <button onClick={handleLogout} className="logout-button" >Logout</button>
      <button onClick={handleChangePassword} className="logout-button" >Change password</button>
      </div>
     {
      showChangePassword && (
        <ChangePassword 
        show={showChangePassword}
        onHide={() => setShowChangePassword(false)}
        />
      )
     }

    </header>
  );
};

export default Header;
