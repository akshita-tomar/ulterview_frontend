import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';
import "./style.css"
import { useLanguage } from '../../utils/customHooks/useLanguage.Hook'
import { register_candidate, clear_register_candidate_slice } from "../../utils/redux/candidateSlice/register_candidate_slice";
import { useDispatch, useSelector } from "react-redux";

const CandidateRegisterModal = (props) => {
    const dispatch = useDispatch()
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [experience, setExprience] = useState('')
    const [selectedLanguage, setSelectedLanguage] = useState({ language: '', id: '' });
    const language = useLanguage()
    const registered_candidate_data = useSelector(store => store.REGISTER_CANDIDATE);
    const handleRegisterCandidate = () => {
        dispatch(register_candidate({ username: username, email: email, profile: selectedLanguage.language, experience: experience, languageId: selectedLanguage.id }))
    }

    useEffect(() => {
        if (registered_candidate_data?.isSuccess) {
            toast(registered_candidate_data?.data?.message)
            setEmail('')
            setExprience('')
            props.handleChange(prev => prev + 1)
            props.onHide(false)
            dispatch(clear_register_candidate_slice())
        }
        if (registered_candidate_data?.isError) {
            toast(registered_candidate_data?.error?.message)
            props.onHide(false)
            dispatch(clear_register_candidate_slice())
        }
    }, [registered_candidate_data])


    const handleChange = (e) => {
        const selectedIndex = e.target.options.selectedIndex;
        const selectedLanguage = e.target.options[selectedIndex].text;
        const selectedId = e.target.value;
        setSelectedLanguage({ language: selectedLanguage, id: selectedId });
    };



    return (
        <div className="">
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
                    <h3 className="heading"> Register Candidate</h3>
                    <div className="form-group">
                        <label className="modal_label">Username</label>
                        <input className="candidate-register-input form-control mt-2" placeholder="Enter candidate name" value={username} onChange={(e) => setUserName(e.target.value)}></input>

                    </div>
                    <div className="form-group mt-2">
                        <label className="modal_label">E-mail address</label>
                        <input className="candidate-register-input form-control mt-2" placeholder="Enter candidate email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                    </div>
                    <div className="form-group mt-2">
                        <label className="modal_label">Profile</label>
                        <select className="candidate-register-input form-control mt-2" onChange={handleChange}>
                            <option value="">Select profile</option>
                            {language?.languages?.data?.map((ele) => (
                                <option key={ele._id} value={ele._id}>
                                    {ele.language}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group mt-2">
                        <label className="modal_label">Experience</label>
                        <input className="candidate-register-input form-control mt-2" placeholder="Enter total experience" value={experience} onChange={(e) => setExprience(e.target.value)}></input>

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleRegisterCandidate} className=" submit_btn">Submit</button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    );
}
export default CandidateRegisterModal