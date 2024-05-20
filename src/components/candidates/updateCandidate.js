import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';

const UpdateCandidate = (props) => {
    const [data, setData] = useState([])
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [profile, setProfile] = useState('')
    const [experience, setExprience] = useState('')
    const [languages, setlanguages] = useState([])
    const [selectedLanguage, setSelectedLanguage] = useState({ language: '', id: '' });
    const token = localStorage.getItem('token')
    let candidateId = props.candidateId

    let url = 'http://localhost:8000/api/v1/'
    // const url = 'http://16.171.41.223:8000/api/v1/'

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${url}getAllLanguages`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.type === 'success') {
                    setlanguages(result.data)
                }
            })
            .catch((error) => console.error(error));
    }, [])


    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${url}getSingleCandidate?candidateId=${candidateId}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.type === 'success') {
                    setData(result.isCandidateExist)
                }
            })
            .catch((error) => console.error(error));
    }, [candidateId])

    const handleChange = (e) => {
        const selectedIndex = e.target.options.selectedIndex;
        const selectedLanguage = e.target.options[selectedIndex].text;
        const selectedId = e.target.value;
        setSelectedLanguage({ language: selectedLanguage, id: selectedId });
      };


    const handleUpdateCandidate = (id) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const raw = JSON.stringify({
            "username": username ? username : data.username,
            "email": email ? email : data.email,
            "profile": selectedLanguage.language ? selectedLanguage.language : data.profile,
            "experience": experience ? experience : data.experience,
            "languageId":selectedLanguage.id?selectedLanguage.id:data.languageId
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        fetch(`${url}updateCandidate?candidateId=${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.type === 'success') {
                    toast.success(result.message, {
                        duration: 700
                    })

                    props.handleChange(prev => prev + 1)
                    props.onHide(false)
                }
                if (result.message === 'error') {
                    toast.error(result.message)
                }
            })
            .catch((error) => console.error(error));
    }

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Candidate
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="candidate-register-input" placeholder="Enter candidate name" defaultValue={data.username} onChange={(e) => setUserName(e.target.value)}></input>

                    <input className="candidate-register-input" placeholder="Enter candidate email" defaultValue={data.email} onChange={(e) => setEmail(e.target.value)}></input>

                    <select className="candidate-register-input" defaultValue={data.profile} onChange={handleChange}>
                        {/* <option value="">Select profile</option> */}
                        {languages?.map((ele) => (
                            <option key={ele._id} value={ele._id}>
                                {ele.language}
                            </option>
                        ))}
                    </select>

                    <input className="candidate-register-input" placeholder="Enter total experience" defaultValue={data.experience} onChange={(e) => setExprience(e.target.value)}></input>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handleUpdateCandidate(data._id)}>Update</Button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    );
}
export default UpdateCandidate