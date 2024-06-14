import { useEffect, useState } from "react";
import { Table, Pagination } from "react-bootstrap";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useAppContext } from "../../utils/useContext";

const CandidatesPerformance = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;
  const socketurl = process.env.REACT_APP_SOCKET_URL;
  const socket = io(socketurl);

  const fetchCandidates = (page) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${url}getCandidatebyLanguage?languageId&page=${page}&limit=${itemsPerPage}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.type === 'success') {
          if (result.candidates.length < 1) {
            swal({
              confirmButtonColor: "red",
              title: "Interview not completed by any candidate.",
              text: "Thanks!",
              icon: "success",
              className: "swal-button-custom",
            });
          } else {
            setCandidates(result.candidates);
            setTotalPages(Math.ceil(result.totalCount / itemsPerPage));
          }
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchCandidates(currentPage);
    socket.on('interview_result_submitted', () => {
      fetchCandidates(currentPage);
    });
    return () => {
      socket.disconnect();
    };
  }, [currentPage]);

  const handleExamine = (id, resultStatus) => {
    if (resultStatus === 'selected' || resultStatus === 'rejected') {
      navigate(`/candidate-checked-sheet/${id}`);
    } else {
      navigate(`/candidate-answers-sheet/${id}`);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const { show } = useAppContext();

  return (
    <div className={`wrapper ${show ? "cmn_margin" : ""}`}>
      <div className="cmn_container">
        <div className="table-responsive mb-0">
          <Table striped bordered hover className="user-table">
            <thead>
              <tr>
                <th>Sr.no</th>
                <th>Username</th>
                <th>Profile</th>
                <th>Experience</th>
                <th>Result Status</th>
                <th>Invite</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((element, index) => (
                <tr key={index}>
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td>{element.username}</td>
                  <td>{element.profile}</td>
                  <td>{element.experience}</td>
                  <td className={element.resultStatus === 'rejected' ? 'rejected-candidate' : element.resultStatus === 'selected' ? 'selected-candidate' : ''}>
                    {element.resultStatus}
                  </td>
                  <td><button className="examin-btn invite_btn" onClick={() => handleExamine(element._id, element.resultStatus)}>Examine</button></td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination>
            {[...Array(totalPages).keys()].map(pageNumber => (
              <Pagination.Item key={pageNumber} active={pageNumber + 1 === currentPage} onClick={() => handlePageChange(pageNumber + 1)}>
                {pageNumber + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default CandidatesPerformance;