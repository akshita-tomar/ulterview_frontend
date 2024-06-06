import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'
import swal from "sweetalert";
import { useAppContext } from "../../utils/useContext";

const UpdateQuestions = () => {
    const navigate = useNavigate()
    const [configureChange, setConfigureSeriesChange] = useState(0)
    const [questionAnswer, setQuestionAnswer] = useState([])
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState()
    const [options, setOptions] = useState(["", "", "", ""]);
    const [showobjective, setShowObjective] = useState(true)
    const [showsubjective, setShowsubjective] = useState(false)
    const [showLogical, setShowLogical] = useState(false)
    let series = localStorage.getItem('seriesId')
    let token = localStorage.getItem('token')
    // const url = 'http://localhost:8000/api/v1/'
    const url = 'http://16.171.41.223:8000/api/v1/'


    useEffect(() => {
        if (!token) {
            navigate('/')
        }
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };
        fetch(`${url}getQuestionsSeriesWise?seriesId=${series}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log("result -----", result)
                if (result.message === 'No questions found') {
                    swal('This series is empty for now. You can add questions!', 'Thanks!', 'success')
                }
                setQuestionAnswer(result)
            })
            .catch((error) => console.error(error));
    }, [series, configureChange])

  

    const delteQuestion = (type, id) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const raw = JSON.stringify({
            "questionType": type
        });
        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url}DeleteQuestionAnswer?questionId=${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setConfigureSeriesChange(prev => prev + 1)
                toast.success('Document delted successfully.')
            })
            .catch((error) => console.error(error));
    }


    const handleUpdateSubjectiveQuestion = (questionType, id, qus, ans) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const raw = JSON.stringify({
            "questionType": questionType,
            "answer": answer ? answer : ans,
            "question": question ? question : qus,
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url}updateQuestionAnswer?questionId=${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.type === 'success') {
                    setConfigureSeriesChange(prev => prev + 1)
                    setQuestion('')
                    setAnswer('')
                    setCorrectAnswer()
                    setOptions(["", "", "", ""])
                    toast.success('Document updated successfully.', {
                        duration: 1000
                    })}
            })
            .catch((error) => console.error(error));
    }


    const updateLogicalQuestion = (questionType, id, qus, ans) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const raw = JSON.stringify({
            "questionType": questionType,
            "answer": answer ? answer : ans,
            "question": question ? question : qus,
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url}updateQuestionAnswer?questionId=${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.type === 'success') {
                    setConfigureSeriesChange(prev => prev + 1)
                    setQuestion('')
                    setAnswer('')
                    setCorrectAnswer()
                    setOptions(["", "", "", ""])
                    toast.success('Doucument updated successfully.', {
                        duration: 1000
                    })}
            })
            .catch((error) => console.error(error));
    }



    const updateObjectiveQuestion = (questionType, id, ques, optns, corrAns) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const filteredOptions = options.filter(option => option.trim() !== "");

        const raw = JSON.stringify({
            "questionType": questionType,
            "question": question ? question : ques,
            "options": filteredOptions.length > 0 ? filteredOptions : optns,
            "correctAnswer": correctAnswer ? correctAnswer : corrAns
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url}updateQuestionAnswer?questionId=${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.type === 'success') {
                    setConfigureSeriesChange(prev => prev + 1)
                    setQuestion('')
                    setAnswer('')
                    setCorrectAnswer()
                    setOptions(["", "", "", ""])
                    toast.success('Document updated successfully.', {
                        duration: 1000
                    })
                } else {
                    toast.error(result.message) }
            })
            .catch((error) => console.error(error));
    }




    const handleOptionChange = (index, value, prevOpts) => {
        prevOpts[index] = value;
        console.log("prev updted options ---", prevOpts)
        setOptions(prevOpts);
    }

    const handleShowobjective = () => {
        localStorage.setItem('questionType', 'mcq')
        setShowsubjective(false)
        setShowLogical(false)
        setShowObjective(true)
    }

    const handleShowSubjective = () => {
        localStorage.setItem('questionType', 'subjective')
        setShowLogical(false)
        setShowObjective(false)
        setShowsubjective(true)
    }

    const handleShowLogical = () => {
        localStorage.setItem('questionType', 'logical')
        setShowObjective(false)
        setShowsubjective(false)
        setShowLogical(true)
    }

    const handleAddQyestion = () => {
        navigate('/create-task')
    }

    const{show}=useAppContext()
    
    return (
        <div className={`wrapper ${show ? "cmn_margin":""}`}>
            <div className="cmn_container">
            <>
         
                <div className="add_question_wrapper">
                <h1 className="heading">{localStorage.getItem('series')} ({localStorage.getItem('language')}) </h1>  <button className="edit-series-button" onClick={() => handleAddQyestion()}>Add Question</button>
                </div>
                {
                    (questionAnswer?.questions?.objective?.length<3 && questionAnswer?.questions?.subjective?.length<2 && questionAnswer?.questions?.logical?.length<2)?
                    <h6 className="message"> Your have to add minimum 3 objective, 2 subjective and 2 logical to complete this series</h6>:null
                }
                <div className="sub-obj-log-heading">
                    {

                        questionAnswer?.questions?.objective?.length > 0 && (
                            
                            <div onClick={handleShowobjective}   className= { `heading-objective_tab ${showobjective ===true?'heading-objective-active ' :'heading-objective'}`} >Objective {questionAnswer?.questions?.objective?.length}</div>
                        )
                
                    }
                    {
                        questionAnswer?.questions?.subjective?.length > 0 && (
                            <div   className= { `heading-objective_tab ${showsubjective ===true?'heading-objective-active' :'heading-objective'}`} onClick={handleShowSubjective}>Subjective {questionAnswer?.questions?.subjective?.length}</div>
                        )
                    }
                    {
                        questionAnswer?.questions?.logical?.length > 0 && (
                            <div  className= {`heading-objective_tab ${showLogical ===true?'heading-objective-active' :'heading-objective'}` } onClick={handleShowLogical}>Logical { questionAnswer?.questions?.logical?.length}</div>
                        )
                    }
                </div>
                {
                    showobjective &&
                    questionAnswer?.questions?.objective?.map((Element, index) => (
                        <>
                            <input className="mcq-question-edit form-control" type="text" placeholder="Enter question" defaultValue={Element.question} onChange={(e) => setQuestion(e.target.value)} />
                            {Element?.options?.map((option, index) => (
                                <input className="mcq-options form-control mt-4" key={index} type="text" placeholder={`Option ${index + 1}`} defaultValue={option} onChange={(e) => handleOptionChange(index, e.target.value, Element?.options)} />
                            ))}
                            <div className="correct_ans_outer d-flex gap-3 align-items-center justify-content-center">
                            <label className="cmn_text">Select correct answer:</label>
                            <select  defaultValue={Element.correctAnswer} onChange={(e) => setCorrectAnswer(parseInt(e.target.value))} >
                                {Element?.options?.map((_, index) => (
                                    <option key={index} value={index + 1}>{index + 1}</option>
                                ))}
                            </select>

                            </div>
                            <div className="Update_btn_outer">
                            <button className=" cmn_btn_color me-3" onClick={() => delteQuestion('objective', Element._id)}>DELETE</button>
                            <button className="cmn_gray_btn" onClick={() => updateObjectiveQuestion('objective', Element._id, Element.question, Element?.options, Element.correctAnswer)} >UPDATE</button>
                            </div>
                        </>
                    ))}
            </> 
            <>
                {
                    showsubjective &&
                    questionAnswer?.questions?.subjective?.map((Element, index) => (
                        <>
                            <input className='mcq-question-edit form-control' type="text" placeholder="Enter subjective question" defaultValue={Element.question} onChange={(e) => setQuestion(e.target.value)} />
                            <textarea className="testbox-textarea form-control mt-4" type="text" placeholder="Enter answer" defaultValue={Element.answer} onChange={(e) => setAnswer(e.target.value)} />
                            <div className="Update_btn_outer mt-4">
                            <button className="cmn_btn_color me-3" onClick={() => delteQuestion('subjective', Element._id)} >DELETE</button>
                            <button className="cmn_gray_btn" onClick={() => handleUpdateSubjectiveQuestion('subjective', Element._id, Element.question, Element.answer)} >UPDATE</button>
                            </div>
                        </>
                    ))
                }
            </>
            <>
                {
                    showLogical &&
                    questionAnswer?.questions?.logical?.map((Element, index) => (
                        <>
                            <textarea type="text" className="testbox-textarea-logical-edit form-control" placeholder="Enter logical question" defaultValue={Element.question} onChange={(e) => setQuestion(e.target.value)} />
                            <textarea className="testbox-textarea form-control mt-4" type="text" placeholder="Enter answer" defaultValue={Element.answer} onChange={(e) => setAnswer(e.target.value)} />
                            <div className="Update_btn_outer mt-4">
                            <button className="cmn_btn_color me-3" onClick={() => delteQuestion('logical', Element._id)}>DELETE</button>
                            <button className="cmn_gray_btn " onClick={() => updateLogicalQuestion('logical', Element._id, Element.question, Element.answer)} >UPDATE</button>
                            </div>
                        </>
                    ))
                }
            </>
            </div>
            <Toaster />
        </div>
    )
}

export default UpdateQuestions