import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import emptyIcon from '../../assets/empty.gif';
import { useAppContext } from "../../utils/useContext";
import { Accordion } from 'react-bootstrap';
import "./hrroundStyle.css"
import { IoArrowBackSharp } from "react-icons/io5";
const CheckHrRoundAnswers = () => {
    const { show } = useAppContext();
    let navigate = useNavigate();
    let url = process.env.REACT_APP_BACKEND_URL;
    let token = localStorage.getItem('token');
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);
    const [quesAns, setQuesAns] = useState([]);
    const [showIcon, setShowIcon] = useState(false);

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${url}hrRoundCandidateAnswers?candidateId=${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.type === 'success') {
                    if (result.answers?.length < 1) {
                        setShowIcon(true);
                    }
                    setQuestions(result.questions);
                    setQuesAns(result.answers);
                }
            })
            .catch((error) => console.error(error));
    }, [id, token, url]);

    const handleClick = (status) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const raw = JSON.stringify({
            "candidateId": id,
            "hrResponse": status
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url}hrRoundSelectReject`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.type === 'success') {
                    navigate('/hr-round-response');
                }
            })
            .catch((error) => console.error(error));
    };

    const handleBack = () => {
        navigate('/hr-round-response');
    };

    return (
        <div className={`wrapper ${show ? "cmn_margin" : ""}`}>
            <h3 className="cmn_heading">HR Round Questions</h3>
            <div className="back-btn-outer">
                <button className="back_btn" onClick={handleBack}><IoArrowBackSharp/> Back</button>
            </div>
            <div className="asked_question_outer">

        <h3 className="heading">Asked Questions</h3>
            <Accordion defaultActiveKey="0" className="question_accordian_wrapper mt-4">
                {questions.map((ele, index) => (
                    <Accordion.Item eventKey={index.toString()} key={ele._id}>
                        <Accordion.Header>{ele.question}</Accordion.Header>
                        <Accordion.Body>
                            <textarea
                                className="text-input form-control"
                                placeholder="Your answer here"
                                value={quesAns.find(ans => ans._id === ele._id)?.answer || ''}
                                readOnly
                            />
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
            </div>
            <br />
            {/* <div className="hrcheckans-heading">Candidate Response</div> */}
            {showIcon && (
                <>
                    <img src={emptyIcon} alt="No Data" className="emptyIcon"/>
                    <h4 className="heading mt-2">Not completed even a single question</h4>
                </>
            )}
            <div className="text-end">
                <button type="submit" className="reject-btn" onClick={() => handleClick('rejected')}>Reject</button>
                <button type="submit" className="submit-button" onClick={() => handleClick('selected')}>Select</button> &nbsp;
            </div>
        </div>
    );
};

export default CheckHrRoundAnswers;
