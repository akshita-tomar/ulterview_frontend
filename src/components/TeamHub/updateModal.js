import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast, Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react';
import { edit_user_details_slice, clear_user_edit_slice } from '../../utils/redux/getHrAndDeveloperDetailSlice/editUserDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';

const UpdateUser = (props) => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [profile, setProfile] = useState('')
    const [experience, setExprience] = useState('')
    const updated_data = useSelector(store => store.EDIT_USER_DETAILS)

    const handleUpdate = () => {
        dispatch(edit_user_details_slice({ userId: props.userId, username: username ? username : props.user, experience: experience ? experience : props.userExperience, profile: profile ? profile : props.userProfile }))
    }

    useEffect(() => {
        if (updated_data?.isSuccess) {
            toast(updated_data?.message?.message)
            toast.success(updated_data?.message?.message)
            props.configureChange(prev => prev + 1)
            props.onHide(false)
            dispatch(clear_user_edit_slice())
        }
        if (updated_data?.isError) {
            toast(updated_data?.error?.message)
            dispatch(clear_user_edit_slice())
        }
    }, [updated_data])

    return (
        <div className="wrapper">
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter " className="heading">
                        Update {props.user}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="candidate-register-input form-control mt-2" placeholder="Update username" defaultValue={props.user} onChange={(e) => setUsername(e.target.value)}></input>
                    {props.role === "developer" ? <input className="candidate-register-input form-control mt-2" placeholder="Update developer's profile" defaultValue={props.userProfile} onChange={(e) => setProfile(e.target.value)}></input> : null}
                    <input className="candidate-register-input form-control mt-2" placeholder="Update total experience" defaultValue={props.userExperience} onChange={(e) => setExprience(e.target.value)} ></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleUpdate}>Submit</Button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    )
}
export default UpdateUser