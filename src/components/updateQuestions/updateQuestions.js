import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


const UpdateQuestions = () => {
    const navigate = useNavigate()
    const [questionAnswer, setQuestionAnswer] = useState([])
    const [subjectiveQuestion, setSubjectiveQuestion] = useState('')

    let series = localStorage.getItem('series')

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
        fetch(`http://localhost:8000/api/v1/getQuestionsSeriesWise?series=${series}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if (result.type === 'error') {
                    toast.error(result.message)
                } else {
                    setQuestionAnswer(result)
                }


            })
            .catch((error) => console.error(error));

    }, [series])



    return (
        <div className="outer-edit-question-div">
            <div className="mcq-inputs-edit-question">
                 <div className="heading-objective">Objective</div>
                {questionAnswer?.questions?.objective?.map((Element, index) => (
                    <>
                        <input className="mcq-question-edit" type="text" placeholder="Enter question" defaultValue={Element.question} />
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
            </div> <br></br>
           
            <div  className="mcq-inputs-edit-question" >
            <div className="heading-objective">Subjective</div>
                {
                    questionAnswer?.questions?.subjective?.map((Element, index) => (
                   <>
                    <input className='mcq-question-edit' type="text" placeholder="Enter subjective question"  defaultValue={Element.question} />
                    <textarea className="testbox-textarea" type="text" placeholder="Enter answer" defaultValue={Element.answer} />
                    <button className="Update-btn">Update</button>
                   </>
                    ))
                }
                </div>
            <Toaster />
        </div>
    )
}

export default UpdateQuestions