import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast, Toaster } from 'react-hot-toast'
import { useState } from 'react';
import loader from '../../assets/loading.gif'




const RegistrationModal = (props) => {
    const url = process.env.REACT_APP_BACKEND_URL
    let token = localStorage.getItem('token')
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profile, setProfile] = useState('')
    const [experience, setExprience] = useState('')
    const [showLoader, setShowLoader] = useState(false)


    
    const handleSubmit = () => {
        setShowLoader(true)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const raw = JSON.stringify({
            "userName": username,
            "email": email,
            "password": password,
            "role": props.role,
            "experience": experience,
            "profile": profile
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url}signUp`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result)
                if (result.type === 'error') {
                    setShowLoader(false)
                    toast.error(result.message)
                } else {
                    setShowLoader(false)
                    props.configureChange((prev => prev + 1))
                    props.onHide(false)
                }
            })
            .catch((error) => console.error(error));
    }


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
                        Register {props.role}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='loader_outer_wrapper'>
                        {showLoader && (<> <img src={loader} height={"50px"} width={"50px"} /><br></br> <h4>Sending email ....</h4></>)}
                    </div>
                    <input className="candidate-register-input form-control mt-2" placeholder="Enter username" value={username} onChange={(e) => setUserName(e.target.value)} ></input>
                    <input className="candidate-register-input form-control mt-2" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                    <input className="candidate-register-input form-control mt-2" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                    {props.role === "developer" ? <input className="candidate-register-input form-control mt-2" value={profile} onChange={(e) => setProfile(e.target.value)} placeholder="Enter developer's profile" ></input> : null}
                    <input className="candidate-register-input form-control mt-2" placeholder="Enter total experience" value={experience} onChange={(e) => setExprience(e.target.value)}></input>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    )
}
export default RegistrationModal