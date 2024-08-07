import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Table, Pagination, Form } from "react-bootstrap";
import RegistrationModal from './registrationModal';
import UpdateUser from './updateModal';
import { MdEdit, MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { useAppContext } from "../../utils/useContext";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { get_hr_and_developer_details_slice } from '../../utils/redux/getHrAndDeveloperDetailSlice/hrAndDeveloperDetailsSlice';
import { delete_user } from '../../utils/redux/getHrAndDeveloperDetailSlice/deleteUserSlice';
import { clear_user_delete_slice } from '../../utils/redux/getHrAndDeveloperDetailSlice/deleteUserSlice';



const Team = () => {
  const dispatch = useDispatch()
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
  const details = useSelector(store => store.GET_HR_DEVELOPER_DETAILS)
  const deleted_data = useSelector(store => store.DELETE_USER)

  const { show } = useAppContext();
  useEffect(() => {
    dispatch(get_hr_and_developer_details_slice({ role, page, search }))
  }, [role, token, configureChange, page, search]);

  useEffect(() => {
    if (details?.isSuccess) {
      setUserDetails(details?.data?.details)
      setTotalPages(details?.data?.totalPages)
    }
    if (details?.isError) {
      toast.error(details?.error?.message, {
        duration: 1300
      })
    }

  }, [details])

  const handleDelete = (id, name) => {
    Swal.fire({
      title: "Are you sure to delete " + name + "?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ce2128",
      cancelButtonColor: "#333",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(delete_user({ id }))
      }
    })
  };

  useEffect(() => {
    if (deleted_data?.isSuccess) {
      setConfigureChange(prev => prev + 1)
      dispatch(clear_user_delete_slice())
    }
    if (deleted_data?.isError) {
      toast.error(deleted_data?.error?.message, {
        duration: 1300
      })
      dispatch(clear_user_delete_slice())
    }
  }, [deleted_data])

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
      <div className='page-headers'> <h5>Team Hub</h5></div>
      <div className="d-flex justify-content-between align-items-center mb-3 pe-3 teamhub">
        <div className="searchbox-hr-feedback-teamhub">
          <Form.Control
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <button className="register-btn" onClick={handleRegistration}>
          ADD {role.toUpperCase()}
        </button>
      </div>

      <Tabs
        activeKey={role}
        onSelect={handleChange}
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="developer" title="Developers">
          <div className="table-responsive">
            <Table striped bordered hover className="user-table candidate_entry_table">
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
                      <MdEdit onClick={() => handleEdit(element._id, element.userName, element.experience, element.profile)} />
                      <MdDelete onClick={() => handleDelete(element._id, element.userName)} />
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
                      <MdEdit onClick={() => handleEdit(element._id, element.userName, element.experience)} />
                      <MdDelete onClick={() => handleDelete(element._id, element.userName)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Tab>
      </Tabs>
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
      <Toaster />
    </div>
  );
};

export default Team;
