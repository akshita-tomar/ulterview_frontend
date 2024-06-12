import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';


const CandidateRegisterModal = (props) => {

    let token = localStorage.getItem('token')
    let url = process.env.REACT_APP_BACKEND_URL
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [experience, setExprience] = useState('')
    const [languages, setlanguages] = useState([])
    const [selectedLanguage, setSelectedLanguage] = useState({ language: '', id: '' });


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
                // console.log(result)
                if (result.type === 'success') {
                    setlanguages(result.data)
                }
            })
            .catch((error) => console.error(error));
    }, [])



    const handleRegisterCandidate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);
        const raw = JSON.stringify({
            "username": username,
            "email": email,
            "profile": selectedLanguage.language,
            "experience": experience,
            'languageId': selectedLanguage.id
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        fetch(`${url}registerCandidate`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log("result---", result)
                if (result.type === 'error') {
                    toast.error(result.message, {
                        duration: 1000
                    })
                }
                if (result.type === 'success') {
                    toast.success(result.message, {
                        duration: 1000
                    })
                    setUserName('')
                    setEmail('')
                    setExprience('')
                    props.handleChange(prev => prev + 1)
                    props.onHide(false)
                }
            })
            .catch((error) => console.error(error));
    }


    const handleChange = (e) => {
        const selectedIndex = e.target.options.selectedIndex;
        const selectedLanguage = e.target.options[selectedIndex].text;
        const selectedId = e.target.value;
        setSelectedLanguage({ language: selectedLanguage, id: selectedId });
    };



    return (
        <div>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter " className="heading">
                        Register Candidate
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="candidate-register-input form-control mt-2" placeholder="Enter candidate name" value={username} onChange={(e) => setUserName(e.target.value)}></input>
                    <input className="candidate-register-input form-control mt-2" placeholder="Enter candidate email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <select className="candidate-register-input form-control mt-2" onChange={handleChange}>
                        <option value="">Select profile</option>
                        {languages?.map((ele) => (
                            <option key={ele._id} value={ele._id}>
                                {ele.language}
                            </option>
                        ))}
                    </select>
                    <input className="candidate-register-input form-control mt-2" placeholder="Enter total experience" value={experience} onChange={(e) => setExprience(e.target.value)}></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleRegisterCandidate} className="cmn_btn_color">Submit</Button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    );
}
export default CandidateRegisterModal