import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import loader from '../../assets/loading.gif'
import { useEffect, useState } from 'react';
import { encryptId } from '../../utils/encryption'
import toast from 'react-hot-toast';

const InviteHrRound = (props) => {

    let url = process.env.REACT_APP_BACKEND_URL
    let interviewUrl = process.env.REACT_APP_INTERVIEW_URL
    const [showLoader, setShowLoader] = useState(false)
    const [series, setSeries] = useState([])
    const [selectedSeriesId, setSelectedSeriesId] = useState('');
    let token = localStorage.getItem('token')

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${url}getHrRoundSeries`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log('series ---',result)
                setSeries(result.allSeries)
            })
            .catch((error) => console.error(error));
    }, [])


    const handleSendLink = () => {
        const encryptedCandidateId = encryptId(props.candidateID);
        const testLink = `${interviewUrl}/hr-round/:${encodeURIComponent(encryptedCandidateId)}`;
        console.log('test link ---', testLink)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const raw = JSON.stringify({
            "candidateId": props.candidateID,
            "seriesId": selectedSeriesId,
            "link": testLink
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url}sendHrRoundQuesAns`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.type === 'success') {
                    toast.success(result.message)
                    props.handleChange(prev => prev + 1)
                    props.onHide(false)
                } else {
                    if (result.message === 'Series Id not present.') {
                        toast.error('Please enter series', {
                            duration: 2000
                        })
                    } else {
                        toast.error(result.message)
                    }
                }
            })
            .catch((error) => console.error(error));
    }

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
                    <div className='loader_outer_wrapper'>

                        {showLoader && (<img src={loader} height={"50px"} width={"50px"} />)}
                    </div>
                    <div className='form-group'>
                        <label className='modal_label'>Series</label>
                    <select className="candidate-register-input form-control mt-1" value={selectedSeriesId} onChange={handleSelectChange} >
                        <option value="">Select series</option>
                        {series?.map((ele) => (

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