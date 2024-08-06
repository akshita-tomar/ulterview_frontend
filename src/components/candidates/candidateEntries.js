import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Pagination, Form } from "react-bootstrap";
import CandidateRegisterModal from "./candidateRegistarModal";
import UpdateCandidate from "./updateCandidate";
import InviteCandidate from "./InviteCandidate";
import Swal from "sweetalert2";
import { MdEdit, MdDelete } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import { io } from 'socket.io-client';
import { useAppContext } from "../../utils/useContext";
import InviteHrRound from "./hrRoundInvite";
import { Dropdown, DropdownItem, Submenu } from "../Dropdown/DropdownComponent";
import { IoMdAdd } from "react-icons/io";


const CandidateEntries = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [candidateID, setCandidateID] = useState('');
  const [LanguageId, setLanguageId] = useState('');
  const [handleChange, setHandleChange] = useState(0);
  const [showHrRoundSentLink, setShowHrRoundSentLink] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const url = process.env.REACT_APP_BACKEND_URL;
  const socketurl = process.env.REACT_APP_SOCKET_URL;
  const socket = io(socketurl);
  const [search, setSearch] = useState('')
  const [selectedField, setSelectedField] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')
  

  if (!token) {
    navigate('/');
  }

  const fetchCandidates = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    fetch(`${url}getCandidates?page=${page}&limit=10&search=${search}&selectedField=${selectedField}&selectedStatus=${selectedStatus}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCandidates(result.allCandidates);
        setTotalPages(result.totalPages);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchCandidates();

    socket.on('Interview_submitted', () => {
      fetchCandidates();
    });

    return () => {
      socket.disconnect();
    };
  }, [token, url, handleChange, page, search,selectedField,selectedStatus]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

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
        handleDeleteConfirm(id);
      }
    });
  };

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
        if (result.type === 'success') {
          toast.success(result.message, {
            duration: 800
          });
          setHandleChange(prev => prev + 1);
        }
      })
      .catch((error) => console.error(error));
  };

  const handleUpdateCandidate = (id) => {
    setCandidateID(id);
    setShowUpdateModal(true);
  };

  const handleInvite = (id, languageId) => {
    setCandidateID(id);
    setLanguageId(languageId);
    setShowInviteModal(true);
  };

  const handleHrRoundInvite = (candidateid) => {
    setCandidateID(candidateid);
    setShowHrRoundSentLink(true);
  };


  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const { show } = useAppContext();

  const handleItemClick = (status,field) => {
    setSelectedStatus(status)
    setSelectedField(field)
  };

  return (
    <div className={`wrapper ${show ? "cmn_margin" : ""} `}>
      <div className='page-headers'> <h5>Candidate Records</h5></div>
      <div className="d-flex justify-content-between align-items-center mb-3 pe-3 teamhub">
        <div className="d-flex gap-4">
          <div className="searchbox-hr-feedback-teamhub">
            <Form.Control
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearchChange}
            />
          </div>

          <Dropdown title="Select status type" >
      <DropdownItem
        className={selectedStatus === '' && selectedField === '' ? 'selected' : ''}
        onClick={() => handleItemClick('', '')}
      >
        All
      </DropdownItem>
      <Submenu title="HR round" id="submenu1">
        {['invite_sent', 'invite_accepted', 'completed', 'selected', 'rejected', 'pending'].map(status => (
          <DropdownItem
            key={status}
            className={selectedStatus === status && selectedField === 'hr' ? 'selected' : ''}
            onClick={() => handleItemClick(status, 'hr')}
          >
            {status}
          </DropdownItem>
        ))}
      </Submenu>
      <Submenu title="Technical Round" id="submenu2">
        {['invite_sent', 'invite_accepted', 'completed', 'pending'].map(status => (
          <DropdownItem
            key={status}
            className={selectedStatus === status && selectedField === 'technical' ? 'selected' : ''}
            onClick={() => handleItemClick(status, 'technical')}
          >
            {status}
          </DropdownItem>
        ))}
      </Submenu>
      <Submenu title="Final Result" id="submenu3">
        {['selected', 'rejected', 'pending'].map(status => (
          <DropdownItem
            key={status}
            className={selectedStatus === status && selectedField === 'final' ? 'selected' : ''}
            onClick={() => handleItemClick(status, 'final')}
          >
            {status}
          </DropdownItem>
        ))}
      </Submenu>
    </Dropdown>
        </div>


        <button className="register-btn cmn_btn_color" onClick={() => setModalShow(true)}><IoMdAdd className="me-2"/>Register</button>

      </div>
      <div className="table-responsive candidate_table_outer">
        <Table  hover className="user-table candidate_entry_table">
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
              <th>Final Result</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates?.map((element, index) => (
              <tr key={index}>
                <td>{(page - 1) * 10 + index + 1}</td>
                <td>{element.username}</td>
                <td>{element.email}</td>
                <td>{element.profile}</td>
                <td>{element.experience}</td>
                <td className={element.hrRoundStatus === "rejected" ? 'rejected-candidate' : element.hrRoundStatus === 'selected' ? 'selected-candidate' : ''}>{element.hrRoundStatus}</td>
                <td>
                  {
                    element.hrRoundStatus === 'invite_sent' || element.hrRoundStatus === 'invite_accepted' || element.hrRoundStatus === 'completed' || element.hrRoundStatus === 'selected' || element.hrRoundStatus === 'rejected' ?
                      <button className="invite_btn  resend_btn" onClick={() => handleHrRoundInvite(element._id)} >Resend</button> :
                      <button className="invite_btn cmn_btn_color" onClick={() => handleHrRoundInvite(element._id)}>Invite</button>
                  }
                </td>
                <td>{element.testStatus}</td>
                <td>
                  {
                    element.testStatus === 'completed' || element.testStatus === 'invite_sent' || element.testStatus === 'invite_accepted' ?
                      <button className="invite_btn  resend_btn" onClick={() => handleInvite(element._id, element.languageId)} >Resend</button> :
                      <button className="invite_btn cmn_btn_color" onClick={() => handleInvite(element._id, element.languageId)}>Invite</button>
                  }
                </td>
                <td className={element.resultStatus === 'rejected' ? 'rejected-candidate' : element.resultStatus === 'selected' ? 'selected-candidate' : ''} >{element.resultStatus}
                </td>
                <td>
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

      <Pagination className="justify-content-center">
        <Pagination.Prev onClick={() => handlePageChange(page - 1)} disabled={page === 1} />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === page}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(page + 1)} disabled={page === totalPages} />
      </Pagination>

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
            candidateID={candidateID}
            handleChange={setHandleChange}
          />
        )
      }

      <Toaster />
    </div>
  )
}

export default CandidateEntries;
