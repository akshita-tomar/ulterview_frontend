import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineArrowBack } from "react-icons/md"

const UpdateQuestions = () => {
    const navigate = useNavigate()
    const [questionAnswer, setQuestionAnswer] = useState([])
    const [question, setQuestion] = useState('')
    const [answer,setAnswer]=useState('')
    let series = localStorage.getItem('seriesId')

   

    useEffect(() => {
        let token = localStorage.getItem('token')
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
        fetch(`http://localhost:8000/api/v1/getQuestionsSeriesWise?seriesId=${series}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.type === 'error') {
                    console.log(result.message)
                    // toast.error(result.message)
                } else {
                    setQuestionAnswer(result)
                }
            })
            .catch((error) => console.error(error));

    }, [series])


    const handleBackClick =()=>{
        navigate('/create-task')
    }

    return (
        <div className="outer-edit-question-div">
           <div className="back-btn" onClick={handleBackClick}>< MdOutlineArrowBack /></div>
            <>
                {
                    questionAnswer?.questions?.objective?.length > 0 && (
                        <div className="heading-objective">Objective</div>
                    )
                }

                {questionAnswer?.questions?.objective?.map((Element, index) => (
                    <>
                        <input className="mcq-question-edit" type="text" placeholder="Enter question" defaultValue={Element.question} onChange={(e)=>setQuestion(e.target.value)} />
                        {Element?.options?.map((option, index) => (
                            <input className="mcq-options" key={index} type="text" placeholder={`Option ${index + 1}`} defaultValue={option} />
                        ))}
                        <label>Select correct answer:</label>
                        <select defaultValue={Element.correctAnswer} >
                            {Element?.options?.map((_, index) => (
                                <option key={index} value={index + 1}>{index + 1}</option>
                            ))}
                        </select>
                        <button className="Update-btn">Update</button>
                    </>
                ))}
            </> <br></br>

            <>
                {
                    questionAnswer?.questions?.subjective?.length > 0 && (
                        <div className="heading-objective">Subjective</div>
                    )
                }

                {
                    questionAnswer?.questions?.subjective?.map((Element, index) => (
                        <>
                            <input className='mcq-question-edit' type="text" placeholder="Enter subjective question" defaultValue={Element.question} />
                            <textarea className="testbox-textarea" type="text" placeholder="Enter answer" defaultValue={Element.answer} />
                            <button className="Update-btn">Update</button>

                        </>
                    ))
                }

            </><br></br><br></br>

            <>
                {
                    questionAnswer?.questions?.logical?.length > 0 && (
                        <div className="heading-objective">Logical</div>
                    )
                }

                {
                    questionAnswer?.questions?.logical?.map((Element, index) => (
                        <>
                            <textarea type="text" className="testbox-textarea-logical-edit" placeholder="Enter logical question" defaultValue={Element.question} />
                            <textarea className="testbox-textarea" type="text" placeholder="Enter answer" defaultValue={Element.answer} />
                            <button className="Update-btn">Update</button>

                        </>
                    ))

                }
            </>
            <Toaster />
        </div>
    )
}

export default UpdateQuestions