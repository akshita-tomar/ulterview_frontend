import React, { useState } from "react";
import { FaBars  } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { RiLockPasswordLine, RiQuestionnaireFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { PiNotebookFill } from "react-icons/pi"
import { useAppContext } from "../../utils/useContext";
import { FaUserGroup } from "react-icons/fa6";

import { MdOutlineQuickreply } from "react-icons/md";
import logo from '../../assets/logo1.png'
import ChangePassword from "../header/changePassword";
import { IoIosLogOut } from "react-icons/io";

import "./sidebar.css"
import LogoutModal from "../Modal/LogoutModal";
import { CiUser } from "react-icons/ci";
const Sidebar = () => {
  const navigate = useNavigate()
  let role = localStorage.getItem('role')

  const fetchLanguages = () => {
    navigate('/homepage')
  }

  const handleCandidateResult = () => {
    navigate('/candidates-performance')
  }

  const handleCandidates = () => {
    navigate("/candidates")
  }

  const handleTeamHub = () => {
    navigate('/ultivic-team')
  }

  const handleHrScreening = () => {
    navigate('/hr-screening')
  }

  const handleHrRound = () => {
    navigate('/hr-round-response')
  }

  const path = useLocation()

  const { show, setShow } = useAppContext();

  const [showChangePassword, setShowChangePassword] = useState(false)
const[showLogoutModal,setShowLogoutModal]=useState(false)
  const handleLogout = () => {
    setShowLogoutModal(true)
   
  };


  const handleChangePassword = () => {
    setShowChangePassword(true)
  }
  return (
    <>
      <div className={`sidebar ${show ? "cmn_width" : ""}`}>

        <h3 className="bar" onClick={() => { setShow(!show) }}>{show ?  <FaBars /> :<RxCross2 className="p-0 text-center" />}</h3>
       <div className={`${show?"d-none":"text-center sidebar_logo_outer"}`}>
       <img src={logo} height={"40px"} width={"158px"}/>
       <h3 className="mt-1">TECHNOLOGIES</h3>
       </div>
        {
          role === "HR" ?
            <>
              <div className={`sidebar-button mt-4 ${path.pathname === "/candidates" ? "active-pathname" : ""}`} onClick={handleCandidates}>
                <div className="sidebar_content"><CiUser /> 
                  <h4 className={show ? "d-none" : "sidebar_content"} >Candidates</h4>
                </div>
              </div>
              <div className={`sidebar-button ${path.pathname === "/ultivic-team" ? "active-pathname" : ""}`} onClick={handleTeamHub} >
                <div className="sidebar_content"><FaUserGroup />
                  <h4 className={show ? "d-none" : "sidebar_content"} >Team Hub</h4>
                </div>
              </div>
              <div className={`sidebar-button ${path.pathname === "/hr-screening" ? "active-pathname" : ""}`} onClick={handleHrScreening} >
                <div className="sidebar_content"><CiUser />
                  <h4 className={show ? "d-none" : "sidebar_content"} >HR Screening</h4>
                </div>
              </div>
              <div className={`sidebar-button ${path.pathname === "/hr-round-response" ? "active-pathname" : ""}`} onClick={handleHrRound} >
                <div className="sidebar_content"><MdOutlineQuickreply />
                  <h4 className={show ? "d-none" : "sidebar_content"} >HR feedback </h4>
                </div>
              </div>
            </>
            : null
        }
        {
          role === 'DEVELOPER' ? <div className="mt-4">
            <div className={`sidebar-button  ${path.pathname === "/homepage" ? "active-pathname" : ""}`} onClick={fetchLanguages} >
              <div className="sidebar_content">
                <RiQuestionnaireFill />
                <h4 className={show ? "d-none" : "sidebar_content"}>Questionnaire</h4>

              </div>
            </div>

            <div className={`sidebar-button ${path.pathname === "/candidates-performance" ? "active-pathname" : ""}`} onClick={handleCandidateResult}>
              <div className="sidebar_content">
                <PiNotebookFill className="sidebar_content" />
                <h4 className={show ? "d-none" : "sidebar_content"}> Candidate Results</h4>
              </div>
            </div>
            
            
            

          </div> : null
        }
        
            <div className={`sidebar-button`} onClick={handleChangePassword}>
              <div className="sidebar_content">
                <RiLockPasswordLine className="sidebar_content" />
                <h4 className={show ? "d-none" : "sidebar_content"}> Change Password </h4>
              </div>
            </div>
            <div className={`sidebar-button`} onClick={handleLogout}>
              <div className="sidebar_content">
                <IoIosLogOut className="sidebar_content" />
                <h4 className={show ? "d-none" : "sidebar_content"}> Logout</h4>
              </div>
            </div>
      </div>
      {
        showChangePassword && (
          <ChangePassword
            show={showChangePassword}
            onHide={() => setShowChangePassword(false)}
          />
        )
      }
      {showLogoutModal && <LogoutModal show={showLogoutModal} setShow={setShowLogoutModal}/>}
    </>

  );
};

export default Sidebar;


