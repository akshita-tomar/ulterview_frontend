import { useEffect, useState } from "react"
import { Table } from "react-bootstrap";
import swal from 'sweetalert'
import  {useNavigate} from 'react-router-dom'
import { useAppContext } from "../../utils/useContext";


const CandidatesPerformance = () => {
    let url = 'http://localhost:8000/api/v1/'
    // const url = 'http://16.171.41.223:8000/api/v1/'
    let token = localStorage.getItem('token')
    let navigate=useNavigate()
    const [candidates, setCandidates] = useState([])


    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${url}getCandidatebyLanguage?languageId`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.type === 'success') {
                    if (result.candidates.length < 1) {
                        swal(
                        {
                        confirmButtonColor: "red",
                        title: "Interview not completed by any candidate.",
                        text: "Thanks!",
                        icon: "success",className: "swal-button-custom",
                        }
                    )
                    } else {
                        setCandidates(result.candidates)
                    }
                }
            })
            .catch((error) => console.error(error));
    }, [])


    const handleExamine = (id) => {
      navigate(`/candidate-answers-sheet/${id}`)
    }
const{show}=useAppContext()

    return (
        <div className={`wrapper ${show?"cmn_margin":""}`}>
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
                                <td>{index + 1}</td>
                                <td>{element.username}</td>
                                <td>{element.profile}</td>
                                <td>{element.experience}</td>
                                <td>{element.resultStatus}</td>
                                <td><button className="examin-btn" onClick={()=>handleExamine(element._id)}>Examine</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            </div>
        </div>
    )
}
export default CandidatesPerformance