import { useEffect, useState } from "react";

import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';
import "./style.css"
const UpdateCandidate = (props) => {
    const [data, setData] = useState([])
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [experience, setExprience] = useState('')
    const [languages, setlanguages] = useState([])
    const [selectedLanguage, setSelectedLanguage] = useState({ language: '', id: '' });
    const token = localStorage.getItem('token')
    let candidateId = props.candidateId
    

    let url = process.env.REACT_APP_BACKEND_URL

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
                // console.log(result)
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
                // console.log(result)
                if (result.type === 'success') {
                    toast.success(result.message, {
                        duration: 700
                    })

                    props.handleChange(prev => prev + 1)
                    props.onHide(false)
                }
                if (result.type === 'error') {
                    toast.error(result.message)
                }
            })
            .catch((error) => console.error(error));
    }
    

    console.log("details of user ----------",data)

    return (
        <div>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="custom_modal_container"
            >
                <Modal.Header closeButton>
                   
                </Modal.Header>
                <Modal.Body>
                    <h3 className="heading">Update Candidate</h3>
                    <div className="form-group">
                    <label className="modal_label">Username</label>
                    <input className="candidate-register-input form-control mt-1" placeholder="Enter candidate name" defaultValue={data.username} onChange={(e) => setUserName(e.target.value)}></input>

                    </div>
                    <div className="form-group mt-3">
                    <label className="modal_label">E-mail address</label>
                    <input className="candidate-register-input  form-control mt-1" placeholder="Enter candidate email" defaultValue={data.email} onChange={(e) => setEmail(e.target.value)}></input>


                    </div>
                    <div className="form-group  mt-3">
                    <label className="modal_label">Profile</label>
                    <select className="candidate-register-input form-control mt-1" value={data.languageId} onChange={handleChange}>
                        {/* <option value="">Select profile</option> */}
                        
                        {languages?.map((ele) => (
                            <option key={ele._id} value={ele._id}>
                                {ele.language}
                            </option>
                        ))}
                    </select>

                    </div>
                    <div className="form-group mt-3">
                    <label className="modal_label">Experience</label>
                    <input className="candidate-register-input  form-control mt-1" placeholder="Enter total experience" defaultValue={data.experience} onChange={(e) => setExprience(e.target.value)}></input>

                    </div>


                   


                </Modal.Body>
                <Modal.Footer>
                    <buton className="cmn_btn_color submit_btn" onClick={() => handleUpdateCandidate(data._id)}>Update</buton>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    );
}

export default UpdateCandidate