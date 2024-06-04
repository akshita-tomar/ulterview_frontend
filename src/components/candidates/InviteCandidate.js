import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { encryptId } from '../../utils/encryption'
import loader from '../../assets/loading.gif'


const InviteCandidate = (props) => {

    let token = localStorage.getItem('token')
    const navigate = useNavigate()
    let url = 'http://localhost:8000/api/v1/'
    // const url = 'http://16.171.41.223:8000/api/v1/'
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
                console.log(result)
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
        // console.log("herer-----")
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
                    const testLink = `http://localhost:3000/interview-questions/:${encodeURIComponent(encryptedCandidateId)}`;
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
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter heading">

                        Invite
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                    <Button className='cmn_btn_color' onClick={handleSendLink} >Send link</Button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    )
}
export default InviteCandidate