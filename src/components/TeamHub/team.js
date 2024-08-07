import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Table, Pagination, Form } from "react-bootstrap";
import RegistrationModal from './registrationModal';
import UpdateUser from './updateModal';
import Swal from 'sweetalert2';
import { useAppContext } from "../../utils/useContext";
import { RiAddLargeFill, RiDeleteBinLine } from 'react-icons/ri';
import ReactDOMServer from 'react-dom/server';

import "./teamstyle.css"

import { CiEdit } from 'react-icons/ci';

const Team = () => {
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BACKEND_URL;
  const [role, setRole] = useState('developer');
  const [userDetails, setUserDetails] = useState([]);
  const [showRegistraionModel, setShowRegistrationModal] = useState(false);
  const [configureChange, setConfigureChange] = useState(0);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState('');
  const [userProfile, setUserProfile] = useState('');
  const [userExperience, setUserExperience] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  let [search, setSearch] = useState('');

  const { show } = useAppContext();

  const fetchUserDetails = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${url}get-HR-or-Developer-Details?role=${role}&page=${page}&limit=10&search=${search}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setUserDetails(result.details);
        setTotalPages(result.totalPages);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchUserDetails();
  }, [role, token, configureChange, page, search]);
  const renderToString = (component) => ReactDOMServer.renderToString(component);

  const handleDelete = (id, name) => {
    const deleteIconHtml = renderToString(<RiDeleteBinLine size={50} />);

    Swal.fire({
      html: `
      <div>
      <div class="custom_deleteicon_outer">
      <div class="custom_deleteicon">
      ${deleteIconHtml}
      
      </div>

      </div>
       <h2 class="custom-title">Are you sure to delete  ${name}  ?</h2>
        <p class="custom-text">You won't be able to revert this!</p>
      
      </div>
        
        `,
      
      icon: null,
      showCancelButton: true,
      confirmButtonColor: "#FF3030",
      cancelButtonColor: "#ECEAF3",
      confirmButtonText: " Delete",
      customClass:{
        cancelButton: 'swal-cancel',
        confirmButton:"swal-delete",
         title: 'custom-title',
        content: 'custom-text'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteConfirm(id);
      }
    })
  };

  const handleDeleteConfirm = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const raw = JSON.stringify({
      "userId": id
    });

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${url}deleteUser`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setConfigureChange(prev => prev + 1);
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (id, user, experience, profile) => {
    setShowUpdateModal(true);
    setUserId(id);
    setUser(user);
    setUserExperience(experience);
    setUserProfile(profile);
  };

  const handleChange = (teamRole) => {
    setRole(teamRole);
    setPage(1);
  };

  const handleRegistration = () => {
    setShowRegistrationModal(true);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };


  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };


  return (
    <div className={`wrapper ${show ? "cmn_margin" : ""} `}>
       <h5 className='cmn_heading'>Team Hub</h5>
      <div className="d-flex justify-content-between align-items-center mb-3 pe-3 teamhub">
        <div className="searchbox-hr-feedback-teamhub">
          <Form.Control
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <button className="register-btn cmn_btn_color" onClick={handleRegistration}>
        <RiAddLargeFill  /> ADD {role.toUpperCase()} 
        </button>
      </div>

      <Tabs
        activeKey={role}
        onSelect={handleChange}
        id="justify-tab-example"
        className="mb-3 team_tab_outer"
        justify
       
      >
        <Tab eventKey="developer" title="Developers">
          <div className="table-responsive candidate_table_outer cmn_radius ">
            <Table hover className="user-table candidate_entry_table team_table_wrapper">
              <thead>
                <tr>
                  <th>Sr.no</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Profile</th>
                  <th>Experience</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {userDetails?.map((element, index) => (
                  <tr key={index}>
                    <td>{(page - 1) * 10 + index + 1}</td> {/* Adjust index for pagination */}
                    <td>{element.userName}</td>
                    <td>{element.email}</td>
                    <td>{element.profile}</td>
                    <td>{element.experience}</td>
                    <td>
                      <div className='actions_wrapper'>
                      <CiEdit onClick={() => handleEdit(element._id, element.userName, element.experience, element.profile)} />
                      <RiDeleteBinLine onClick={() => handleDelete(element._id, element.userName)} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Tab>
        <Tab eventKey="hr" title="HR">
          <div className="table-responsive">
            <Table striped bordered hover className="user-table candidate_entry_table">
              <thead>
                <tr>
                  <th>Sr.no</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Experience</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {userDetails?.map((element, index) => (
                  <tr key={index}>
                    <td>{(page - 1) * 10 + index + 1}</td> {/* Adjust index for pagination */}
                    <td>{element.userName}</td>
                    <td>{element.email}</td>
                    <td>{element.experience}</td>
                    <td>
                      <div className='actions_wrapper'>
                      <CiEdit  onClick={() => handleEdit(element._id, element.userName, element.experience)} />
                      <RiDeleteBinLine onClick={() => handleDelete(element._id, element.userName)} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Tab>
      </Tabs>
      <Pagination className="justify-content-center custom_pagination_wapper mt-4">
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
        showRegistraionModel && (
          <RegistrationModal
            show={showRegistraionModel}
            role={role}
            onHide={() => setShowRegistrationModal(false)}
            configureChange={setConfigureChange}
          />
        )
      }
      {
        showUpdateModal && (
          <UpdateUser
            show={showUpdateModal}
            onHide={() => setShowUpdateModal(false)}
            userId={userId}
            configureChange={setConfigureChange}
            user={user}
            role={role}
            userExperience={userExperience}
            userProfile={userProfile}
          />
        )
      }
    </div>
  );
};

export default Team;
