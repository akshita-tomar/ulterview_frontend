import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { encryptId } from '../../utils/encryption'
import toast from 'react-hot-toast';
import { useHrInvite } from '../../utils/customHooks/useHrInvite.Hook';
import { useDispatch, useSelector } from 'react-redux';
import { send_hr_round_que_ans, clear_hr_round_link_state } from '../../utils/redux/candidateSlice/send_hr_round_slice';

const InviteHrRound = (props) => {
    const dispatch = useDispatch()
    let interviewUrl = process.env.REACT_APP_INTERVIEW_URL
    const [selectedSeriesId, setSelectedSeriesId] = useState('');
    const series = useHrInvite()
    const hr_round_state = useSelector(store => store.HR_ROUND_LINK)

    const handleSendLink = () => {
        const encryptedCandidateId = encryptId(props.candidateID);
        const testLink = `${interviewUrl}/hr-round/:${encodeURIComponent(encryptedCandidateId)}`;
        console.log('test link ---', testLink)
        if (testLink) dispatch(send_hr_round_que_ans({ candidateId: props.candidateID, seriesId: selectedSeriesId, link: testLink }))
    }

    useEffect(() => {
        if (hr_round_state?.isSuccess) {
            toast(hr_round_state?.message?.message)
            props.handleChange(prev => prev + 1)
            dispatch(clear_hr_round_link_state())
            props.onHide(false)
        }
        if (hr_round_state?.isError) {
            toast(hr_round_state?.error?.message)
            dispatch(clear_hr_round_link_state())
        }
    }, [hr_round_state])

    const handleSelectChange = (event) => {
        setSelectedSeriesId(event.target.value);
    };

    return (
        <div>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter Invite_candidate_modal"
                centered
                className='custom_modal_container'
            >
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <h3 className='heading'>Invite for HR Round</h3>
                    <div className='form-group'>
                        <label className='modal_label'>Series</label>
                        <select className="candidate-register-input form-control mt-1" value={selectedSeriesId} onChange={handleSelectChange} >
                            <option value="">Select series</option>
                            {series?.series?.allSeries?.map((ele) => (

                                <option disabled={ele.questions?.length < 3 || ele.questions === undefined} className={ele.questions?.length < 3 || ele.questions === undefined ? 'series-outer-box-pending' : "series-outer-box"} key={ele._id} value={ele._id}>
                                    {ele.questionSeries} {ele.questions?.length < 1 || ele.questions === undefined ? "(pending)" : null}
                                </option>
                            ))}
                        </select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='cmn_btn_color submit_btn' onClick={handleSendLink}>Send Invite</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
export default InviteHrRound