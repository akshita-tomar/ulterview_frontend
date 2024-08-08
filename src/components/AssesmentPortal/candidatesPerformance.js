import { useEffect, useState } from "react";
import { Table, Pagination,Form } from "react-bootstrap";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useAppContext } from "../../utils/useContext";
import "./candidate.css"
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
  const [search,setSearch]= useState('')
  const [checkRefreshCount,setHandleRefreshCount]= useState(1)



  const fetchCandidates = (page) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${url}getCandidatebyLanguage?languageId&page=${page}&limit=${itemsPerPage}&search=${search}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.type === 'success') {
          if (result.candidates.length < 1) {
            if(checkRefreshCount===1){
            swal({
              confirmButtonColor: "#FF3030",
              title: "Interview not completed by any candidate.",
              text: "Thanks!",
              icon: "success",
              className: "swal-button-custom",
            });
            
          }
          } else {
            setCandidates(result.candidates);
            setTotalPages(Math.ceil(result.totalCount / itemsPerPage));
          }}
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    setHandleRefreshCount((prev)=>prev+1)
    fetchCandidates(currentPage);
    socket.on('interview_result_submitted', () => {
      fetchCandidates(currentPage);
    });
    return () => {
      socket.disconnect();
    };
  }, [currentPage,search]);

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

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
};

  const { show } = useAppContext();

  return (
    <div className={`wrapper ${show ? "cmn_margin" : ""}`}>
       
       <div className="d-flex justify-content-between align-items-center mb-3 pe-3 teamhub">
        <h5 className="cmn_heading">Candidate Results</h5>
      <div className="searchbox-hr-feedback-teamhub">
        <Form.Control 
            type="text" 
            placeholder="Search" 
            value={search} 
            onChange={handleSearchChange} 
        />
    </div>
       </div>
      <div className="cmn_container">
        <div className="table-responsive mb-0 cmn_radius">
          <Table  hover className="user-table">
            <thead>
              <tr>
                <th>Sr.no</th>
                <th>Username</th>
                <th>Profile</th>
                <th>Experience</th>
                <th>Result Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {candidates?.map((element, index) => (
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