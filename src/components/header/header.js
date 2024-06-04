import React, { useState } from 'react';
import logo from './ultivic-logo.png'
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import ChangePassword from './changePassword';
import { FaListUl } from "react-icons/fa6";

const Header = () => {
  const navigate = useNavigate();
  const [showChangePassword, setShowChangePassword] = useState(false)


  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/')
  };


  const handleChangePassword = () => {
    setShowChangePassword(true)
  }

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Company Logo" className="logo-icon" />
      </div>
      {/* <div>
        <button onClick={handleLogout} className="logout-button" >Logout</button>
        <button onClick={handleChangePassword} className="logout-button" >Change password</button>
      </div> */}

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        <FaListUl />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          <Dropdown.Item onClick={handleChangePassword}>Change Password</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
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
