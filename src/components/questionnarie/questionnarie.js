import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import swal from "sweetalert";

const Questionnarie = () => {
    const navigate = useNavigate()
    const [questionAnswer, setQuestionAnswer] = useState([])
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
                console.log(result)
                if (result.message === 'No questions found') {
                    swal('This series is empty for now.')
                }
                setQuestionAnswer(result)
            })
            .catch((error) => console.error(error));

    }, [series])

   


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

  

    return (
        <div className="outer-edit-question-div">
          
            <>

                <h1 className="questionnarie-heading">{localStorage.getItem('series')} ({localStorage.getItem('language')}) <button className="generatelink-btn" >Generate Link</button> </h1>
                  {/* <div className="headings"><h2 className="create-series-heading"> </h2>
                    { 
                    
                    }
                </div> */}
                <div className="sub-obj-log-heading">
                    {

                        questionAnswer?.questions?.objective?.length > 0 && (
                            <div className="heading-objective" onClick={handleShowobjective}>Objective</div>
                        )

                    }
                    {
                        questionAnswer?.questions?.subjective?.length > 0 && (
                            <div className="heading-objective" onClick={handleShowSubjective}>Subjective</div>
                        )
                    }
                    {
                        questionAnswer?.questions?.logical?.length > 0 && (
                            <div className="heading-objective" onClick={handleShowLogical}>Logical</div>
                        )
                    }
                </div>
                {
                    showobjective &&
                    questionAnswer?.questions?.objective?.map((Element, index) => (
                        <>
                            <input className="mcq-question-edit" type="text" placeholder="Enter question" defaultValue={Element.question}  />
                            {Element?.options?.map((option, index) => (
                                //    console.log("optioen----",option)
                                <input className="mcq-options" key={index} type="text" placeholder={`Option ${index + 1}`} defaultValue={option}  />
                            ))}
                            <label>Select correct answer:</label>
                            <select defaultValue={Element.correctAnswer}  >
                                {Element?.options?.map((_, index) => (
                                    <option key={index} value={index + 1}>{index + 1}</option>
                                ))}
                            </select>
                           
                        </>
                    ))
                }

            </> <br></br>

            <>
                
                {
                    showsubjective &&
                    questionAnswer?.questions?.subjective?.map((Element, index) => (
                        <>
                            <input className='mcq-question-edit' type="text" placeholder="Enter subjective question" defaultValue={Element.question} />
                            <textarea className="testbox-textarea" type="text" placeholder="Enter answer" defaultValue={Element.answer}  />
                        </>
                    ))
                }
            </><br></br><br></br>

            <>
            

                {
                    showLogical &&
                    questionAnswer?.questions?.logical?.map((Element, index) => (
                        <>
                            <textarea type="text" className="testbox-textarea-logical-edit" placeholder="Enter logical question" defaultValue={Element.question}  />
                            <textarea className="testbox-textarea" type="text" placeholder="Enter answer" defaultValue={Element.answer}/>
    
                        </>
                    ))

                }
            </>
            <Toaster />
        </div>
    )
}

export default Questionnarie