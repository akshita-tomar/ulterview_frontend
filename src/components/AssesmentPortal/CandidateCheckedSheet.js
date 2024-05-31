import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast, Toaster } from 'react-hot-toast'
import { useAppContext } from "../../utils/useContext";


const CheckedSheet = () => {
    const { id } = useParams()
    const divRefs = useRef([])
    let token = localStorage.getItem('token')
    let url = 'http://localhost:8000/api/v1/'
    // const url = 'http://16.171.41.223:8000/api/v1/'
    const [originalQuesAns, setOriginalQuesAns] = useState([])
    const [candidateResponse, setCandidateResponse] = useState([])
    const [OriginalQuesLength, setOriginalQuesLength] = useState(0)
    const [correctQuesLength, setCorrectQuesLength] = useState(0)
    const [doneQuestions, setDoneQuestions] = useState({});
    const [candidateQuesAnsLength, setCandidateQuesAnsLength] = useState(0)
    const [checkedBy, setCheckedBy]=useState('')

    const scrollToDiv = (id) => {
        divRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
    };

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
                
                setOriginalQuesAns(result.quesAns.providedQuesAns)
                setCandidateResponse(result.quesAns.retrivedQuesAns)
                setOriginalQuesLength(result.quesAns.providedQuesAns[0].logical.length + result.quesAns.providedQuesAns[0].objective.length + result.quesAns.providedQuesAns[0].subjective.length)
                setCandidateQuesAnsLength(result.quesAns.retrivedQuesAns.logical.length + result.quesAns.retrivedQuesAns.objective.length + result.quesAns.retrivedQuesAns.subjective.length)
                setDoneQuestions(result.quesAns.checkedAnswerSheet)
                setCheckedBy(result.quesAns.checkedBy)
                const checkedAnswerSheet = result.quesAns.checkedAnswerSheet; 
                const correctAnswersCount = Object.values(checkedAnswerSheet)
                    .filter(answer => answer === 'correct') 
                    .length;
                setCorrectQuesLength(correctAnswersCount)
            })
            .catch((error) => console.error(error));

    }, [])

    const{show}=useAppContext()

    return (
        <div className={`wrapper ${show ? "cmn_margin":""}`}>
            <div className='check-result-header'>
                {OriginalQuesLength}/{correctQuesLength} checked by: {checkedBy}
            </div>
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12} >
                        <div className="original-ques-ans p-3 cmn_ques_outer">

                        
                        <div><h3>Original Answers</h3></div>
                        <hr></hr>
                        <h3 className='heading-check-result'>Objective</h3>
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
                        <h3 className='heading-check-result'>Subjective</h3>
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
                        <h3 className='heading-check-result'>Logical</h3>
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
                        </div>
                    </Col>
                    {/* candidate respone ------------------- */}
                    <Col lg={6} md={12} sm={12}>
                        <div className='candidate-ques-ans p-3 cmn_ques_outer'> 
                        <div><h3>Candidate Response</h3></div>
                        <hr></hr>
                        {
                            candidateResponse?.objective?.length > 0 ? <h3 className='heading-check-result'>Objective</h3> : null
                        }

                        {candidateResponse?.objective?.map((questionAnswer, index) => (
                            <div className="question-wrapper-check-result" key={questionAnswer._id}>
                                <div className="d-flex align-items-center'">
                                <h3 className="question-text">{questionAnswer.question} </h3>
                                {doneQuestions[questionAnswer._id] && (
                                    <span className='done-text'>
                                        {doneQuestions[questionAnswer._id] === 'correct' ? <p> &#10004;</p> : <p>&#10006;</p>}
                                    </span>
                                )}
                                
                                </div>
                                <div className="options-wrapper">
                                    {questionAnswer.options.map((option, index) => (
                                        <label className="option-label" key={index}>
                                            {option}
                                        </label>
                                    ))}
                                </div>
                                Correct Answer: {questionAnswer.correctAnswer}
                                <div className='check-btn-outer'> <button className='check-button cmn_gray_btn' key={questionAnswer._id} onClick={() => scrollToDiv(questionAnswer._id)}>
                                    Check</button>

                                </div>
                            </div>
                        ))}
                        {
                            candidateResponse?.subjective?.length > 0 ? <h3 className='heading-check-result'>Subjective</h3> : null
                        }

                        {candidateResponse?.subjective?.map((questionAnswer, index) => (
                            <div className="question-wrapper-check-result" key={questionAnswer._id}>
                                <div className="d-flex align-items-center">
                                <h3 className="question-text">{questionAnswer.question}</h3>
                                {doneQuestions[questionAnswer._id] && (
                                    <span className='done-text'>
                                        {doneQuestions[questionAnswer._id] === 'correct' ? <p> &#10004;</p> : <p>&#10006;</p>}
                                    </span>
                                )}
                                
                                </div>
                                <textarea
                                    className="text-input"
                                    placeholder="Your answer here"
                                    value={questionAnswer.answer}
                                />
                                <div className='check-btn-outer'> <button className='check-button cmn_gray_btn' key={questionAnswer._id} onClick={() => scrollToDiv(questionAnswer._id)}>
                                    Check</button>

                                </div>
                            </div>

                        ))}
                        {
                            candidateResponse?.logical?.length > 0 ? <h3 className='heading-check-result'>Logical</h3> : null
                        }

                        {candidateResponse?.logical?.map((questionAnswer) => (
                            <div className="question-wrapper-check-result" key={questionAnswer._id}>
                                <div className="d-flex align-items-center">
                                <h3 className="question-text">{questionAnswer.question}</h3>
                                {doneQuestions[questionAnswer._id] && (
                                    <span className='done-text'>
                                        {doneQuestions[questionAnswer._id] === 'correct' ? <p> &#10004;</p> : <p>&#10006;</p>}
                                    </span>
                                )}
                                
                                </div>
                                <textarea
                                    className="text-input"
                                    placeholder="Your answer here"
                                    value={questionAnswer.answer}
                                />
                                <div className='check-btn-outer'> <button className='check-button cmn_gray_btn' key={questionAnswer._id} onClick={() => scrollToDiv(questionAnswer._id)}>
                                    Check</button>

                                </div>
                            </div>
                        ))}
                     </div>
                    </Col>
                </Row>
            </Container>
            <Toaster />
        </div>
    )
}
export default CheckedSheet