import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import emptylogo from './empty.gif'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const CandidateAnswerSheet = () => {
    let token = localStorage.getItem('token')
    let url = 'http://localhost:8000/api/v1/'
    // const url = 'http://16.171.41.223:8000/api/v1/'
    let { id } = useParams()
    const [originalQuesAns, setOriginalQuesAns] = useState([])
    const [candidateResponse, setCandidateResponse] = useState([])
    const [noResponse, setNoResponse] = useState(false)
    const [OriginalQuesLength, setOriginalQuesLength] = useState(0)
    const [candidateQuesAnsLength, setCandidateQuesAnsLength] = useState(0)
    const [correctQuesLength, setCorrectQuesLength] = useState(0)
    const [doneQuestions, setDoneQuestions] = useState({});
    const divRefs = useRef([])
    const navigate = useNavigate()


    const scrollToDiv = (id) => {
        divRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleMarkDone = (id, type) => {

        setDoneQuestions((prev) => ({ ...prev, [id]: type }));
    };


    useEffect(() => {
        const count = Object.values(doneQuestions).filter(type => type === 'correct').length;
        setCorrectQuesLength(count);
    }, [doneQuestions]);


    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`${url}get-dev-candidate-answers?candidatId=${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result)
                if (result.type === 'success') {
                    setOriginalQuesAns(result.quesAns.providedQuesAns)
                    setCandidateResponse(result.quesAns.retrivedQuesAns)
                    setOriginalQuesLength(result.quesAns.providedQuesAns[0].logical.length + result.quesAns.providedQuesAns[0].objective.length + result.quesAns.providedQuesAns[0].subjective.length)
                    setCandidateQuesAnsLength(result.quesAns.retrivedQuesAns.logical.length + result.quesAns.retrivedQuesAns.objective.length + result.quesAns.retrivedQuesAns.subjective.length)
                }
                if (result.quesAns.retrivedQuesAns.logical.length < 1 &&
                    result.quesAns.retrivedQuesAns.objective.length < 1 &&
                    result.quesAns.retrivedQuesAns.subjective.length < 1
                ) {
                    setNoResponse(true)
                }
            })
            .catch((error) => console.error(error));
    }, [])

    
    const handleSubmit = () => {

        const arrFromObj = Object.keys(doneQuestions);
        if (arrFromObj.length < candidateQuesAnsLength) {
            toast.error('Please check all the questions done by candidate')
        } else {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + token);

            const raw = JSON.stringify({
                "candidateId": id,
                "totalQuestions": OriginalQuesLength,
                "totalCorrectQuestions": correctQuesLength,
                "checkedAnswerSheet": doneQuestions
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch(`${url}addCheckedSheet`, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    if(result.type==='success'){
                        navigate('/candidates-performance')
                    }
                })
                .catch((error) => console.error(error));
        }

    }


    return (
        <div className="wrapper">
            <div className='check-result-header'>
                {OriginalQuesLength}/{correctQuesLength}
            </div>
            <Container>
                <Row>
                    <Col className='original-ques-ans'>
                        <div><h3>Original Answers</h3></div>
                        <hr></hr>
                        <div className='heading-check-result'>Objective</div>
                        {originalQuesAns[0]?.objective?.map((questionAnswer, index) => (
                            <div className="question-wrapper-check-result" key={questionAnswer._id} ref={(el) => (divRefs.current[questionAnswer._id] = el)} >
                                <h3 className="question-text">{questionAnswer.question}</h3>
                                <div className="options-wrapper">
                                    {questionAnswer.options.map((option, index) => (
                                        <label className="option-label" key={index}>
                                            {option}
                                        </label>
                                    ))}
                                </div>
                                Correct Answer: {questionAnswer.correctAnswer}
                            </div>
                        ))}
                        <div className='heading-check-result'>Subjective</div>
                        {originalQuesAns[0]?.subjective?.map((questionAnswer, index) => (
                            <div className="question-wrapper-check-result" key={questionAnswer._id} ref={(el) => (divRefs.current[questionAnswer._id] = el)}>
                                <h3 className="question-text">{questionAnswer.question}</h3>
                                <textarea
                                    className="text-input"
                                    placeholder="Your answer here"
                                    value={questionAnswer.answer}
                                />
                            </div>
                        ))}
                        <div className='heading-check-result'>Logical</div>
                        {originalQuesAns[0]?.logical?.map((questionAnswer, index) => (
                            <div className="question-wrapper-check-result" key={questionAnswer._id} ref={(el) => (divRefs.current[questionAnswer._id] = el)}>
                                <h3 className="question-text">{questionAnswer.question}</h3>
                                <textarea
                                    className="text-input"
                                    placeholder="Your answer here"
                                    value={questionAnswer.answer}
                                />
                            </div>
                        ))}
                    </Col>
                    {/* candidate respone ------------------- */}
                    <Col className='candidate-ques-ans'>
                        <div><h3>Candidate Response</h3></div>
                        <hr></hr>
                        {
                            candidateResponse?.objective?.length>0? <div className='heading-check-result'>Objective</div>:null
                        }
                        
                        {candidateResponse?.objective?.map((questionAnswer, index) => (
                            <div className="question-wrapper-check-result" key={questionAnswer._id}>
                                {doneQuestions[questionAnswer._id] && (
                                    <span className='done-text'>
                                        {doneQuestions[questionAnswer._id] === 'correct' ? <p> &#10004;</p> : <p>&#10006;</p>}
                                    </span>
                                )}
                                <h3 className="question-text">{questionAnswer.question} </h3>
                                <div className="options-wrapper">
                                    {questionAnswer.options.map((option, index) => (
                                        <label className="option-label" key={index}>
                                            {option}
                                        </label>
                                    ))}
                                </div>
                                Correct Answer: {questionAnswer.correctAnswer}
                                <div className='check-btn-outer'> <button className='check-button' key={questionAnswer._id} onClick={() => scrollToDiv(questionAnswer._id)}>
                                    Check</button>
                                    <div className='correct-incorrect-btn'>
                                        <button className='correct-opt' onClick={() => handleMarkDone(questionAnswer._id, 'correct')}>Correct</button>
                                        <button className='incorrect-opt' onClick={() => handleMarkDone(questionAnswer._id, 'incorrect')}>Incorrect</button>

                                    </div>
                                </div>
                            </div>
                        ))}
                         {
                            candidateResponse?.subjective?.length>0? <div className='heading-check-result'>Subjective</div>:null
                        }
                        
                        {candidateResponse?.subjective?.map((questionAnswer, index) => (
                            <div className="question-wrapper-check-result" key={questionAnswer._id}>
                                {doneQuestions[questionAnswer._id] && (
                                    <span className='done-text'>
                                        {doneQuestions[questionAnswer._id] === 'correct' ? <p> &#10004;</p> : <p>&#10006;</p>}
                                    </span>
                                )}
                                <h3 className="question-text">{questionAnswer.question}</h3>
                                <textarea
                                    className="text-input"
                                    placeholder="Your answer here"
                                    value={questionAnswer.answer}
                                />
                                <div className='check-btn-outer'> <button className='check-button' key={questionAnswer._id} onClick={() => scrollToDiv(questionAnswer._id)}>
                                    Check</button>
                                    <div className='correct-incorrect-btn'>
                                        <button className='correct-opt' onClick={() => handleMarkDone(questionAnswer._id, 'correct')}>Correct</button>
                                        <button className='incorrect-opt' onClick={() => handleMarkDone(questionAnswer._id, 'incorrect')}>Incorrect</button>

                                    </div>
                                </div>
                            </div>

                        ))}
                         {
                            candidateResponse?.logical?.length>0? <div className='heading-check-result'>Logical</div>:null
                        }
                        
                        {candidateResponse?.logical?.map((questionAnswer) => (
                            <div className="question-wrapper-check-result" key={questionAnswer._id}>
                                {doneQuestions[questionAnswer._id] && (
                                    <span className='done-text'>
                                        {doneQuestions[questionAnswer._id] === 'correct' ? <p> &#10004;</p> : <p>&#10006;</p>}
                                    </span>
                                )}
                                <h3 className="question-text">{questionAnswer.question}</h3>
                                <textarea
                                    className="text-input"
                                    placeholder="Your answer here"
                                    value={questionAnswer.answer}
                                />
                                <div className='check-btn-outer'> <button className='check-button' key={questionAnswer._id} onClick={() => scrollToDiv(questionAnswer._id)}>
                                    Check</button>
                                    <div className='correct-incorrect-btn'>
                                        <button className='correct-opt' onClick={() => handleMarkDone(questionAnswer._id, 'correct')}>Correct</button>
                                        <button className='incorrect-opt' onClick={() => handleMarkDone(questionAnswer._id, 'incorrect')}>Incorrect</button>

                                    </div>
                                </div>
                            </div>
                        ))}
                        {
                            candidateQuesAnsLength >0? <button type="submit" className="submit-button" onClick={handleSubmit}>submit</button> :null
                        }
                       
                        {
                            noResponse && (
                                <div>
                                    <img src={emptylogo} alt='loading...' height={'200px'} width={'200px'} />
                                    <h5>This candidate not respond any question.</h5>
                                </div>
                            )
                        }
                    </Col>
                </Row>
            </Container>
            <Toaster />
        </div>
    )
}
export default CandidateAnswerSheet