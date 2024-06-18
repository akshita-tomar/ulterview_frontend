import { useEffect, useState } from "react";
import { Table, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HrRoundResponse = () => {
    let url = process.env.REACT_APP_BACKEND_URL;
    let token = localStorage.getItem('token');
    let navigate = useNavigate();
    let [candidates, setCandidates] = useState([]);
    let [page, setPage] = useState(1); 
    let [totalPages, setTotalPages] = useState(1); 

    const fetchCandidates = () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
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
    }, [page]); 

    const handleClick = (id) => {
        navigate(`/hr-answers-check/${id}`);
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    return (
        <div className="wrapper">
            <div className="table-responsive">
                <Table striped bordered hover className="user-table candidate_entry_table">
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
                        {candidates.map((element, index) => (
                            <tr key={index}>
                                <td>{(page - 1) * 10 + index + 1}</td> 
                                <td>{element.username}</td>
                                <td>{element.profile}</td>
                                <td>{element.experience}</td>
                                <td>{element.hrRoundStatus}</td>
                                <td><button onClick={() => handleClick(element._id)}>Show</button></td>
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
        </div>
    );
};

export default HrRoundResponse;
