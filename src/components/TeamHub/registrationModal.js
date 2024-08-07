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
                className='custom_modal_container'
            >
                <Modal.Header closeButton>
                 
                </Modal.Header>
                <Modal.Body>
                    <h3 className="heading"> Register {props.role} </h3>
                    <div className='loader_outer_wrapper'>
                        {showLoader && (<> <img src={loader} height={"50px"} width={"50px"} alt="" /><br></br> <h4>Sending email ....</h4></>)}
                    </div>
                    <div className='form-group'>
                        <label className='modal_label'>Username</label>
                        <input className="candidate-register-input form-control  mt-1" placeholder="Enter username" value={username} onChange={(e) => setUserName(e.target.value)} ></input>

                    </div>
                    <div className='form-group  mt-3'>
                        <label className='modal_label'>E-mail address</label>
                        <input className="candidate-register-input form-control  mt-1" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>

                    </div>
                    <div className='form-group mt-3'>
                        <label className='modal_label'>Password</label>
                        <input className="candidate-register-input form-control  mt-1" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>

                    </div>
                    <div className='form-group mt-3'>
                        <label className='modal_label'>Profile</label>
                        {props.role === "developer" ? <input className="candidate-register-input form-control  mt-1" value={profile} onChange={(e) => setProfile(e.target.value)} placeholder="Enter developer's profile" ></input> : null}

                    </div>
                    <div className='form-group mt-3'>
                        <label className='modal_label'>Experience</label>
                        <input className="candidate-register-input form-control mt-1" placeholder="Enter total experience" value={experience} onChange={(e) => setExprience(e.target.value)}></input>

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleSubmit} className='submit_btn'>Submit</button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    )
}
export default RegistrationModal