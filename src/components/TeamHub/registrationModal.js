import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast, Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react';
import loader from '../../assets/loading.gif'
import { register_slice } from '../../utils/redux/authSlice/registerSlice';
import { clear_register_slice } from '../../utils/redux/authSlice/registerSlice';
import { useDispatch, useSelector } from 'react-redux';




const RegistrationModal = (props) => {
    const dispatch = useDispatch()
    const register_data = useSelector(store => store.REGISTER)
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profile, setProfile] = useState('')
    const [experience, setExprience] = useState('')
    const [showLoader, setShowLoader] = useState(false)

    const handleSubmit = () => {
        setShowLoader(true)
        dispatch(register_slice({ userName: username, email, password, profile, experience, role: props.role }))
    }

    useEffect(() => {
        if (register_data?.isSuccess) {
            props.configureChange((prev => prev + 1))
            setShowLoader(false)
            props.onHide(false)
            dispatch(clear_register_slice())
        }

        if (register_data?.isError) {
            toast.error(register_data?.error?.message, {
                duration: 1300
            })
            setShowLoader(false)
            dispatch(clear_register_slice())
        }
    }, [register_data])

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
                        {showLoader && (<> <img src={loader} height={"50px"} width={"50px"} alt="" /><br></br> <h4>Sending email ....</h4></>)}
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