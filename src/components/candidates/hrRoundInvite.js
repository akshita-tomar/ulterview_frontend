import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import loader from '../../assets/loading.gif'
import { useEffect, useState } from 'react';
import { encryptId } from '../../utils/encryption'
import toast from 'react-hot-toast';

const InviteHrRound = (props) => {
   
    let url = process.env.REACT_APP_BACKEND_URL
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
        const testLink = `http://localhost:3000/hr-round/:${encodeURIComponent(encryptedCandidateId)}`;
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
                // console.log('hr round result ----',result)
                if(result.type==='success'){
                    toast.success(result.message)
                    props.handleChange(prev=>prev+1)
                    props.onHide(false)
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
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter heading">

                        Invite for HR Round
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='loader_outer_wrapper'>

                        {showLoader && (<img src={loader} height={"50px"} width={"50px"} />)}
                    </div>
                    <select className="candidate-register-input form-control mt-3" value={selectedSeriesId} onChange={handleSelectChange} >
                        <option value="">Select series</option>
                        {series?.map((ele) => (
                            
                            <option disabled={ele.questions?.length<1 || ele.questions === undefined} className={ele.questions?.length<1 || ele.questions === undefined ? 'series-outer-box-pending' : "series-outer-box"} key={ele._id} value={ele._id}>
                                {ele.questionSeries} {ele.questions?.length<1 || ele.questions === undefined?"(pending)":null}
                            </option>
                        ))}
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='cmn_btn_color' onClick={handleSendLink}>Send link</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
export default InviteHrRound