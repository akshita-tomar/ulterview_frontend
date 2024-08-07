import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { update_candidate, clear_update_candidate_slice } from "../../utils/redux/candidateSlice/updateCandidateSlice";
import { get_single_candidate_data, clear_get_single_candidate_slice } from "../../utils/redux/candidateSlice/getSingleCandidateSlice";
import { useLanguage } from "../../utils/customHooks/useLanguage.Hook";

const UpdateCandidate = (props) => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [experience, setExprience] = useState('')
    const [selectedLanguage, setSelectedLanguage] = useState({ language: '', id: '' });
    const updated_candidate_slice = useSelector(store => store.UPDATE_CANDIDATE);
    const get_single_candidate = useSelector(store => store.GET_SINGLE_CANDIDATE)
    let { candidateId } = props
    const language = useLanguage()

    useEffect(() => {
        dispatch(get_single_candidate_data({ id: candidateId }))
    }, [candidateId])

    useEffect(() => {
        if (get_single_candidate?.isSuccess) {
            setData(get_single_candidate?.data?.isCandidateExist)
            dispatch(clear_get_single_candidate_slice())
        }
        if (get_single_candidate?.isError) {
            setData(get_single_candidate?.error?.message)
            dispatch(clear_get_single_candidate_slice())
        }

    }, [get_single_candidate])

    const handleChange = (e) => {
        const selectedIndex = e.target.options.selectedIndex;
        const selectedLanguage = e.target.options[selectedIndex].text;
        const selectedId = e.target.value;
        setSelectedLanguage({ language: selectedLanguage, id: selectedId });
    };


    const handleUpdateCandidate = (id) => {
        dispatch(update_candidate({ languageId: selectedLanguage.id ? selectedLanguage.id : data.languageId, username: username ? username : data.username, email: email ? email : data.email, profile: selectedLanguage.language ? selectedLanguage.language : data.profile, experience: experience ? experience : data.experience, id }))
    }

    useEffect(() => {
        if (updated_candidate_slice?.isSuccess) {
            props.handleChange(prev => prev + 1)
            props.onHide(false)
            toast(updated_candidate_slice?.message?.message)
            dispatch(clear_update_candidate_slice())
        }
        if (updated_candidate_slice?.isError) {
            toast(updated_candidate_slice?.error?.message)
            dispatch(clear_update_candidate_slice())
        }

    }, [updated_candidate_slice])

    return (
        <div>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter heading">
                        Update Candidate
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="candidate-register-input mt-3 form-control" placeholder="Enter candidate name" defaultValue={data.username} onChange={(e) => setUserName(e.target.value)}></input>

                    <input className="candidate-register-input mt-3 form-control" placeholder="Enter candidate email" defaultValue={data.email} onChange={(e) => setEmail(e.target.value)}></input>

                    <select className="candidate-register-input mt-3 form-control" value={selectedLanguage?.id ? selectedLanguage?.id : data.languageId} onChange={handleChange}>
                        {/* <option value="">Select profile</option> */}

                        {language?.languages?.data?.map((ele) => (
                            <option key={ele._id} value={ele._id}>
                                {ele.language}
                            </option>
                        ))}
                    </select>

                    <input className="candidate-register-input mt-3 form-control" placeholder="Enter total experience" defaultValue={data.experience} onChange={(e) => setExprience(e.target.value)}></input>

                </Modal.Body>
                <Modal.Footer>
                    <Button className="cmn_btn_color" onClick={() => handleUpdateCandidate(data._id)}>Update</Button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    );
}

export default UpdateCandidate