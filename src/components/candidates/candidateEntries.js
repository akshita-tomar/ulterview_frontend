import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import CandidateRegisterModal from "./candidateRegistarModal";
import UpdateCandidate from "./updateCandidate";
import InviteCandidate from "./InviteCandidate";
import Swal from "sweetalert2";
import { MdEdit, MdDelete } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import { io } from 'socket.io-client';



const CandidateEntries = () => {

  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [candidates, setCandidates] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [showInviteModal,setShowInviteModal]=useState(false)
  const [candidateID, setCandidateID] = useState('')
  const [LanguageId,setLanguageId] = useState('')
  const [handleChange, setHandleChange] = useState(0)
  const url = 'http://localhost:8000/api/v1/'
  // const url = 'http://16.171.41.223:8000/api/v1/'
  const socketurl = "http://localhost:8000"
  const socket = io(socketurl);


  if (!token) {
    navigate('/')
  }


 

 useEffect(() => {
    const fetchCandidates = () => {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };
      fetch(`${url}getCandidates`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setCandidates(result.allCandidates);
        })
        .catch((error) => console.error(error));
    };

    fetchCandidates(); 


    socket.on('Interview_submitted', () => {
      console.log("here in the socket-----")
      fetchCandidates(); 
    });

    return () => {
      socket.disconnect(); 
    };
  }, [token, url,handleChange]);



  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to detlete this Candidate?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ce2128",
      cancelButtonColor: "#333",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteConfirm(id)
      }
    })
  }

  const handleDeleteConfirm = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow"
    };
    fetch(`${url}deleteCandidate?candidateId=${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.type === 'success') {
          toast.success(result.message, {
            duration: 800
          })
          setHandleChange(prev => prev + 1)
        }
      })
      .catch((error) => console.error(error));
  };


  const handleUpdateCandidate = (id) => {
    setCandidateID(id)
    setShowUpdateModal(true)
  }

  const handleInvite = (id,languageId)=>{
    setCandidateID(id)
    setLanguageId(languageId)
    setShowInviteModal(true)
  }


  return (
    <div className="wrapper">
      <div className="text-end mb-3 pe-3">
        <button className="register-btn" onClick={() => setModalShow(true)}>Register</button>
      </div>

      <div className="table-responsive">
        <Table striped bordered hover className="user-table">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Username</th>
              <th>Email</th>
              <th>Profile</th>
              <th>Experience</th>
              <th>Test status</th>
              <th>Result Status</th>
              <th>Invite</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((element, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{element.username}</td>
                <td>{element.email}</td>
                <td>{element.profile}</td>
                <td>{element.experience}</td>
                <td>{element.testStatus}</td>
                <td>{element.resultStatus}</td>
                <td><button  className="invite_btn" onClick={()=>handleInvite(element._id,element.languageId)}>Invite</button>  <MdEdit className="MdEdit cursor-pointer" onClick={() => handleUpdateCandidate(element._id)} /> <MdDelete className="cursor-pointer MdEdit" onClick={() => handleDelete(element._id)} /></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {
        modalShow && (
          <CandidateRegisterModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          handleChange={setHandleChange}
        />
        )}
      {showUpdateModal && (
        <UpdateCandidate
          show={showUpdateModal}
          onHide={() => setShowUpdateModal(false)}
          candidateId={candidateID}
          handleChange={setHandleChange}
        />
      )}
      { 
        showInviteModal && (
          <InviteCandidate
          show={showInviteModal}
          onHide={()=>setShowInviteModal(false)}
          candidateID={candidateID}
          languageId={LanguageId}
          handleChange={setHandleChange}
          />
        )
      }
      {/* <Row className="m-0">
      {
            candidates.map((Element,index)=>(
                <Col lg={3}>
                <div className="user-profile-container">
                <div className="user-details-card">
                  <div className="user-icon">
                    <FaUser size={50} />
                  </div>
                  <div className="cards-container">
                    <h2>{Element.username}</h2>
                    <p>{Element.email}</p>
                    <p>{Element.profile}</p>
                    <p>{Element.experience  }</p>
                  </div>
                </div>
              </div>
              </Col>
            ))
        }
      </Row> */}
      <Toaster />
    </div>

  )
}
export default CandidateEntries