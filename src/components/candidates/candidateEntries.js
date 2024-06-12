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
import { useAppContext } from "../../utils/useContext";
import InviteHrRound from "./hrRoundInvite";



const CandidateEntries = () => {
  // console.log('env credetials -------',process.env.REACT_APP_BACKEND_URL)
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [candidates, setCandidates] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [candidateID, setCandidateID] = useState('')
  const [LanguageId, setLanguageId] = useState('')
  const [handleChange, setHandleChange] = useState(0)
  const [showHrRoundSentLink, setShowHrRoundSentLink] = useState(false)
  const url = process.env.REACT_APP_BACKEND_URL
  const socketurl = process.env.REACT_APP_SOCKET_URL
  // const socketurl = 'http://16.171.41.223:8000'
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
          // console.log(result);
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
  }, [token, url, handleChange]);



  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete this Candidate?",
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
        // console.log(result)
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

  const handleInvite = (id, languageId) => {
    setCandidateID(id)
    setLanguageId(languageId)
    setShowInviteModal(true)
  }

  const handleHrRoundInvite = (candidateid) => {
    setCandidateID(candidateid)
    setShowHrRoundSentLink(true)
  }
  const { show } = useAppContext()

  return (
    <div className={`wrapper ${show ? "cmn_margin" : ""} `}>
      <div className="text-end mb-3 pe-3">
        <button className="register-btn" onClick={() => setModalShow(true)}>Register</button>
      </div>

      <div className="table-responsive">
        <Table striped bordered hover className="user-table candidate_entry_table">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Username</th>
              <th>Email</th>
              <th>Profile</th>
              <th>Experience</th>
              <th>HR round</th>
              <th>Invite(HR round)</th>
              <th>Technical round</th>
              <th>Invite(Tech round)</th>
              <th>Result Status</th>

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
                <td>{element.hrRoundStatus}</td>
                <td>
                  {
                    element.hrRoundStatus === 'invite_sent' || element.hrRoundStatus === 'invite_accepted' || element.hrRoundStatus === 'completed' || element.hrRoundStatus === 'selected' || element.hrRoundStatus === 'rejected' ?
                      <button className="invite_btn" onClick={() => handleHrRoundInvite(element._id)} >Resend</button> :
                      <button className="invite_btn" onClick={() => handleHrRoundInvite(element._id)}>Invite</button>
                  }
                </td>
                <td>{element.testStatus}</td>
                <td>
                  {
                    element.testStatus === 'completed' || element.testStatus === 'invite_sent' || element.testStatus === 'invite_accepted' ?
                      <button className="invite_btn" onClick={() => handleInvite(element._id, element.languageId)} >Resend</button> :
                      <button className="invite_btn" onClick={() => handleInvite(element._id, element.languageId)}>Invite</button>
                  }
                </td>
                <td className={element.resultStatus === 'rejected' ? 'rejected-candidate' : element.resultStatus === 'selected' ? 'selected-candidate' : ''} >{element.resultStatus}
                  <div>
                    <MdEdit className="MdEdit cursor-pointer me-2" onClick={() => handleUpdateCandidate(element._id)} />
                    <MdDelete className="cursor-pointer MdEdit" onClick={() => handleDelete(element._id)} />
                  </div>
                </td>
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
            onHide={() => setShowInviteModal(false)}
            candidateID={candidateID}
            languageId={LanguageId}
            handleChange={setHandleChange}
          />
        )
      }
      {
        showHrRoundSentLink && (
          <InviteHrRound
            show={showHrRoundSentLink}
            onHide={() => setShowHrRoundSentLink(false)}
            candidateID = {candidateID}
            handleChange={setHandleChange}
          />
        )
      }
     
      <Toaster />
    </div>

  )
}
export default CandidateEntries