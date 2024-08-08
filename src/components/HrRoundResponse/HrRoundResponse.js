import { useEffect, useState } from "react";
import { Table, Pagination, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../utils/useContext";
import selectedLogo from '../../assets/selectedLogo.png'
import rejectedLogo from '../../assets/rejectedLogo.png'
import incompleteLogo from '../../assets/incomplete.png'
import showAll from '../../assets/allstatus.png'
import "./hrroundStyle.css"
const HrRoundResponse = () => {
    const { show } = useAppContext()
    let url = process.env.REACT_APP_BACKEND_URL;
    let token = localStorage.getItem('token');
    let navigate = useNavigate();
    let [candidates, setCandidates] = useState([]);
    let [page, setPage] = useState(1);
    let [totalPages, setTotalPages] = useState(1);
    let [search, setSearch] = useState('');
    let [status, setStatus] = useState('');

    const fetchCandidates = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const raw = JSON.stringify({
            "search": search,
            "status": status
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url}HrRoundTestCompletd?page=${page}&limit=10`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.type === 'success') {
                    setCandidates(result.testCompletedBy);
                    setTotalPages(result.totalPages);
                }
            })
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        fetchCandidates();
    }, [page, search, status]);

    const handleClick = (id) => {
        navigate(`/hr-answers-check/${id}`);
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
        setPage(1);
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };




    return (
        <div className={`wrapper ${show ? "cmn_margin" : ""} `}>
              <h5 className="cmn_heading">HR Feedback</h5>
            <div className="hr-feedback-filters-wrapper">
                <div className="status-icons">
                    <div className={status === "selected" ? "status-selected" : ""}>
                        <img src={selectedLogo} alt="img" height="15px" width="15px" />
                        <strong onClick={() => handleStatusChange("selected")}>selected</strong>
                    </div>
                    <div className={status === "rejected" ? "status-selected" : ""}>
                        <img src={rejectedLogo} alt="img" height="15px" width="15px" />
                        <strong onClick={() => handleStatusChange("rejected")}>rejected</strong>
                    </div>
                    <div className={status === "completed" ? "status-selected" : ""}>
                        <img src={incompleteLogo} alt="img" height="11px" width="12px" />
                        <strong onClick={() => handleStatusChange("completed")}>completed</strong>
                    </div>
                    <div className={status === "" ? "status-selected" : ""}>
                        <img src={showAll} alt="img" height="15px" width="15px" />
                        <strong onClick={() => handleStatusChange("")}>all</strong>
                    </div>
                </div>

                <div className="searchbox_feedback">
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>



            <div className="table-responsive cmn_radius">
                <Table  hover className="user-table candidate_entry_table">
                    <thead>
                        <tr>
                            <th>Sr.no</th>
                            <th>Username</th>
                            <th>Profile</th>
                            <th>Experience</th>
                            <th>Hr round status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates?.map((element, index) => (
                            <tr key={index}>
                                <td>{(page - 1) * 10 + index + 1}</td>
                                <td>{element.username}</td>
                                <td>{element.profile}</td>
                                <td>{element.experience}</td>
                                <td className={element.hrRoundStatus === 'rejected' ? 'rejected-candidate' : element.hrRoundStatus === 'selected' ? 'selected-candidate' : ''}>{element.hrRoundStatus}</td>
                                {/* <td className={element.resultStatus === 'rejected' ? 'rejected-candidate' : element.resultStatus === 'selected' ? 'selected-candidate' : ''} >{element.resultStatus} */}
                                <td><button className=" show_btn" onClick={() => handleClick(element._id)}>Show</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
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
        </div>
    );
};

export default HrRoundResponse;
