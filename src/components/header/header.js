import React from 'react';
import logo from './ultivic-logo.png'
import {useNavigate} from 'react-router-dom'

const Header = () => {
const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/')
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Company Logo" className="logo-icon" />
        {/* <h1 className="logo-text">Company Name</h1> */}
      </div>
      <button onClick={handleLogout} className="logout-button" >Logout</button>
    </header>
  );
};

export default Header;
