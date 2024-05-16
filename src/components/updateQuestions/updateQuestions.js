import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineArrowBack } from "react-icons/md"
import swal from "sweetalert";

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


    const url = 'http://localhost:8000/api/v1/'
    // const url = 'http://16.171.41.223:8000/api/v1/'


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
                // if (result.type === 'error') {
                //     console.log(result.message)
                //     // toast.error(result.message)
                // } else {
                if (result.message === 'No questions found') {
                    swal('This series is empty for now. You can add questions!', 'Thanks!', 'success')
                }
                setQuestionAnswer(result)

                // }
            })
            .catch((error) => console.error(error));

    }, [series, configureChange])

    console.log("questions ---", questionAnswer)



    const delteQuestion = (type, id) => {
        console.log('type___-', type)
        console.log('id___', id)
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
                // if (result.type === 'success') {
                setConfigureSeriesChange(prev => prev + 1)
                toast.success(result.message)

                // }
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
                    })

                }
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
                    })

                }
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
                    toast.error(result.message)

                }
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

    // const handleBackClick = () => {
    //     navigate('/create-task')
    // }
    const getButtonClass =()=>{
        return 'active-type-btn'
    }

    const handleAddQyestion = () => {
        navigate('/create-task')
    }

    return (
        <div className="outer-edit-question-div">
            {/* <div className="back-btn" onClick={handleBackClick}>< MdOutlineArrowBack /></div> */}
            <>
                
                <div className="headings">
                <h1>{localStorage.getItem('series')} ({localStorage.getItem('language')}) </h1> <button className="edit-series-button" onClick={() => handleAddQyestion()}>Add Question</button>
                </div>
                <div className="sub-obj-log-heading">
                    {

                        questionAnswer?.questions?.objective?.length > 0 && (
                            <div onClick={handleShowobjective}   className='heading-objective' >Objective</div>
                        )

                    }
                    {
                        questionAnswer?.questions?.subjective?.length > 0 && (
                            <div  className="heading-objective" onClick={handleShowSubjective}>Subjective</div>
                            // <div   className={`heading-objective ${getButtonClass()}`} onClick={handleShowSubjective}>Subjective</div>
                        )
                    }
                    {
                        questionAnswer?.questions?.logical?.length > 0 && (
                            <div className="heading-objective" onClick={handleShowLogical}>Logical</div>
                            // <div  onClick={handleShowLogical} className={`heading-objective ${getButtonClass()}`}>Logical</div>
                        )
                    }
                </div>
                {
                    showobjective &&
                    questionAnswer?.questions?.objective?.map((Element, index) => (
                        <>
                            <input className="mcq-question-edit" type="text" placeholder="Enter question" defaultValue={Element.question} onChange={(e) => setQuestion(e.target.value)} />
                            {Element?.options?.map((option, index) => (
                                //    console.log("optioen----",option)
                                <input className="mcq-options" key={index} type="text" placeholder={`Option ${index + 1}`} defaultValue={option} onChange={(e) => handleOptionChange(index, e.target.value, Element?.options)} />
                            ))}
                            <label>Select correct answer:</label>
                            <select defaultValue={Element.correctAnswer} onChange={(e) => setCorrectAnswer(parseInt(e.target.value))} >
                                {Element?.options?.map((_, index) => (
                                    <option key={index} value={index + 1}>{index + 1}</option>
                                ))}
                            </select>
                            <button className="Update-btn" onClick={() => delteQuestion('objective', Element._id)}>DELETE</button><button className="Update-btn" onClick={() => updateObjectiveQuestion('objective', Element._id, Element.question, Element?.options, Element.correctAnswer)} >UPDATE</button>
                        </>
                    ))
                }

            </> <br></br>

            <>
                {/* {
                    questionAnswer?.questions?.subjective?.length > 0 && (
                        <div className="heading-objective">Subjective</div>
                    )
                } */}

                {
                    showsubjective &&
                    questionAnswer?.questions?.subjective?.map((Element, index) => (
                        <>
                            <input className='mcq-question-edit' type="text" placeholder="Enter subjective question" defaultValue={Element.question} onChange={(e) => setQuestion(e.target.value)} />
                            <textarea className="testbox-textarea" type="text" placeholder="Enter answer" defaultValue={Element.answer} onChange={(e) => setAnswer(e.target.value)} />
                            <button className="Update-btn" onClick={() => delteQuestion('subjective', Element._id)} >DELETE</button><button className="Update-btn" onClick={() => handleUpdateSubjectiveQuestion('subjective', Element._id, Element.question, Element.answer)} >UPDATE</button>

                        </>
                    ))
                }
            </><br></br><br></br>

            <>
                {/* {
                    questionAnswer?.questions?.logical?.length > 0 && (
                        <div className="heading-objective">Logical</div>
                    )
                } */}

                {
                    showLogical &&
                    questionAnswer?.questions?.logical?.map((Element, index) => (
                        <>
                            <textarea type="text" className="testbox-textarea-logical-edit" placeholder="Enter logical question" defaultValue={Element.question} onChange={(e) => setQuestion(e.target.value)} />
                            <textarea className="testbox-textarea" type="text" placeholder="Enter answer" defaultValue={Element.answer} onChange={(e) => setAnswer(e.target.value)} />
                            <button className="Update-btn" onClick={() => delteQuestion('logical', Element._id)}>DELETE</button><button className="Update-btn" onClick={() => updateLogicalQuestion('logical', Element._id, Element.question, Element.answer)} >UPDATE</button>
                        </>
                    ))

                }
            </>
            <Toaster />
        </div>
    )
}

export default UpdateQuestions