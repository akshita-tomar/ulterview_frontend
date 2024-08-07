import { useEffect, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { encryptId } from '../../utils/encryption'
import loader from '../../assets/loading.gif'
import "./style.css"

const InviteCandidate = (props) => {

    let token = localStorage.getItem('token')
    const navigate = useNavigate()
    let url = process.env.REACT_APP_BACKEND_URL
    const [series, setseries] = useState([])
    const [language, setLanguage] = useState('')
    const [selectedSeries, setSelectedSeries] = useState({ series: '', id: '' });
    const [showLoader, setShowLoader] = useState(false)
    // const [handleResendInvite,setHandleResendInvite]=useState(false)
    let candidateId = props.candidateID
    let languageid = props.languageId

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
                // console.log('invite candidate mofule ------',result)
                if (result.type === 'success') {
                    setLanguage(result.isCandidateExist.profile)
                    if (result.isCandidateExist.testStatus === "completed" || result.isCandidateExist.testStatus === "invite_accepted" || result.isCandidateExist.testStatus === "invite_sent") {
                        // setHandleResendInvite(true)  
                        handleResendLink()
                    }
                }
            })
            .catch((error) => console.error(error));
    }, [])




    const handleResendLink = () => {
        // console.log("in this function-----------")
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const raw = JSON.stringify({
            "candidateId": candidateId
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url}handleResendLink`, requestOptions)
            .then((response) => response.json())
            .then((result) =>
                console.log(result)
            )
            .catch((error) => console.error(error));
    }


    useEffect(() => {
        if (!token) {
            navigate('/')
        }
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${url}getAllSeries?languageId=${languageid}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result)
                if (result.type === 'success') {
                    if (result.allSeries.length < 1) {
                        toast.error('No series is created for this language.', {
                            duration: 1000
                        })
                    } else {
                        setseries(result.allSeries)
                    }
                } else {
                    toast.error(result.message)
                }
            })
            .catch((error) => console.error(error));
    }, [])


    const handleSendLink = () => {

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${url}sendInterviewLink?candidateId=${candidateId}&seriesId=${selectedSeries.id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.type === 'success') {
                    const encryptedCandidateId = encryptId(candidateId);
                    console.log("invite candidate id ---", encryptedCandidateId)
                    const testLink = `${process.env.REACT_APP_INTERVIEW_URL}/interview-questions/:${encodeURIComponent(encryptedCandidateId)}`;
                    setShowLoader(true)
                    console.log('link----', testLink)
                    const myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");
                    myHeaders.append("Authorization", "Bearer " + token);

                    const raw = JSON.stringify({
                        "link": testLink
                    });

                    const requestOptions = {
                        method: "POST",
                        headers: myHeaders,
                        body: raw,
                        redirect: "follow"
                    };

                    fetch(`${url}sendLinkViaEmail?candidateId=${candidateId}`, requestOptions)
                        .then((response) => response.json())
                        .then((result) => {
                            console.log(result)
                            if (result.type === 'success') {
                                // setShowLoader(false)
                                toast.success(result.message)
                                props.handleChange(prev => prev + 1)
                                props.onHide(false)
                                setShowLoader(false)
                            }
                        })
                        .catch((error) => console.error(error));

                } else {
                    if (result.message === 'Series Id not present.') {
                        toast.error("Please select series.")
                    } else {
                        toast.error(result.message)
                    }
                }
            })
            .catch((error) => console.error(error));

    }

    const handleChange = (e) => {
        const selectedIndex = e.target.options.selectedIndex;
        const selectedSeries = e.target.options[selectedIndex].text;
        const selectedId = e.target.value;
        setSelectedSeries({ language: selectedSeries, id: selectedId });
    };




    return (
        <div>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter Invite_candidate_modal"
                centered
                className="custom_modal_container"
            >
                <Modal.Header closeButton>
                  
                </Modal.Header>
                <Modal.Body>
                    <h3 className='heading'>Invite</h3>
                    <div className='loader_outer_wrapper'>
                        {showLoader && (<img src={loader} height={"50px"} width={"50px"} />)}
                    </div>

                    <input value={language} className="candidate-register-input  form-control mt-3" ></input>
                    <select className="candidate-register-input form-control mt-3" onChange={handleChange}>
                        <option value="">Select series</option>
                        {series?.map((ele) => (
                            <option disabled={ele.status === "pending"} className={ele.status === 'pending' ? 'series-outer-box-pending' : "series-outer-box"} key={ele._id} value={ele._id}>
                                {ele.seriesName}({ele.status})
                            </option>
                        ))}
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <button className='cmn_btn_color submit_btn' onClick={handleSendLink} >Send link</button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    )
}
export default InviteCandidate
//may god bring all the luck in the wrord on your way. Have a bright future!