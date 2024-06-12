import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HrRoundResponse = () => {
    let url = process.env.REACT_APP_BACKEND_URL
    let token = localStorage.getItem('token')
    let navigate = useNavigate()
    let [candidates, setCandidates] = useState([])



    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${url}HrRoundTestCompletd`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result)
                if (result.type === 'success') {
                    setCandidates(result.testCompletedBy)
                }
            })
            .catch((error) => console.error(error));
    }, [])


    const handleClick=(id)=>{
        navigate(`/hr-answers-check/${id}`)
    }
   
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
                                <td>{index + 1}</td>
                                <td>{element.username}</td>
                                <td>{element.profile}</td>
                                <td>{element.experience}</td>
                                <td>{element.hrRoundStatus}</td>
                                <td><button onClick={()=>handleClick(element._id)}>show</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

        </div>
    )
}

export default HrRoundResponse