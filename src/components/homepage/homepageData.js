import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


const HomepageData = (props) => {

    const navigate = useNavigate()
    const [quesAns, setQuesAns] = useState([])

    useEffect(() => {
        let token = localStorage.getItem('token')
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

        fetch("http://localhost:8000/api/v1/getQuestions", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setQuesAns(result.data)
                props?.setConfigurechange(false)
            })
            .catch((error) => console.error(error));

    }, [props?.configurechange, props?.holdChange])



    return (
        <>
            <div className="question-container">

                {
                    quesAns?.length > 0 && quesAns[0]?.objective?.length > 0 && (
                        <h2 className="questype-heading">Objective Questions</h2>
                    )
                }
                <div className="objective-questions">
                    <div className="question-card">
                        {quesAns?.length > 0 && quesAns[0]?.objective.map((Element, index) => (
                            Element.difficultyLevel === 'easy' ? (
                                <div key={index} className="question-item">
                                    <h3>{Element.question}</h3>
                                    <p>Options:</p>
                                    <ul>
                                        {Element.options.map((option, optionIndex) => (
                                            <li key={optionIndex}>{option}</li>
                                        ))}
                                    </ul>
                                    <p>Correct Answer: {Element.correctAnswer}</p>
                                </div>
                            ) : null 
                        ))}
                    </div>

                </div>
            </div>

            <div className="question-container">
                {
                    quesAns?.length > 0 && quesAns[0]?.subjective?.length > 0 && (
                        <h2 className="questype-heading">Subjective Questions</h2>
                    )
                }
                <div className="subjective-questions">
                    <div className="question-card">
                        {quesAns?.length > 0 && quesAns[0]?.subjective.map((Element, index) => (
                            <div key={index} className="question-item">
                                <h3>Question: {Element.question}</h3>
                                <p>Answer: {Element.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="question-container">
                {
                    quesAns?.length > 0 && quesAns[0]?.logical?.length > 0 && (
                        <h2 className="questype-heading">Logical Questions</h2>
                    )
                }
                {/* <h2>Logical Questions</h2> */}
                <div className="logical-questions">
                    <div className="question-card">
                        {quesAns?.length > 0 && quesAns[0].logical.map((Element, index) => (
                            <div key={index} className="question-item">
                                <pre><h3>{Element.question}</h3></pre>
                                <pre>{Element.answer}</pre>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    )
}

export default HomepageData;
