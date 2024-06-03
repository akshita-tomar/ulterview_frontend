import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Table } from "react-bootstrap";
import RegistrationModal from './registrationModal';
import { MdEdit, MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';

const Developers = () => {
  const token = localStorage.getItem("token");
  const url = 'http://localhost:8000/api/v1/';
  // const url = 'http://16.171.41.223:8000/api/v1/'
  const [role, setRole] = useState('developer'); // Default role set to 'developer'
  const [userDetails, setUserDetails] = useState([]);
  const [showRegistraionModel, setShowRegistrationModal] = useState(false)
  const [configureChange, setConfigureChange] = useState(0)



  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${url}get-HR-or-Developer-Details?role=${role}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        setUserDetails(result.details);
      })
      .catch(error => console.error(error));
  }, [role, token, configureChange]);


  const handleDelete = (id,name) => {
    Swal.fire({
      title: "Are you sure to delete " +name +"?",
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
        console.log(result)
        setConfigureChange(prev=>prev+1)
      })
      .catch((error) => console.error(error));
  }

  const handleChange = (teamRole) => {
    // console.log("Changing role to:", teamRole);
    setRole(teamRole);
  };

  const handleRegistration = () => {
    setShowRegistrationModal(true)
  }

  return (
    <div className="wrapper">
      <div className="text-end mb-3 pe-3">
        <button className="register-btn" onClick={handleRegistration}>ADD {role.toUpperCase()}</button>
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
                {userDetails.map((element, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{element.userName}</td>
                    <td>{element.email}</td>
                    <td>{element.profile}</td>
                    <td>{element.experience}</td>
                    <td><MdEdit /><MdDelete onClick={() => handleDelete(element._id,element.userName)} /> </td>
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
                {userDetails.map((element, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{element.userName}</td>
                    <td>{element.email}</td>
                    <td>{element.experience}</td>
                    <td><MdEdit /><MdDelete onClick={() => handleDelete(element._id,element.userName)} /> </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Tab>
      </Tabs>
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
    </div>
  );
};

export default Developers;
