import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineArrowBack } from "react-icons/md"

const UpdateQuestions = () => {
    const navigate = useNavigate()
    const [configureChange, setConfigureSeriesChange] = useState(0)
    const [questionAnswer, setQuestionAnswer] = useState([])
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [correctAnswer,setCorrectAnswer]=useState()
    const [options, setOptions] = useState(["", "", "", ""]);
    let series = localStorage.getItem('seriesId')
    let token = localStorage.getItem('token')


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
        fetch(`http://localhost:8000/api/v1/getQuestionsSeriesWise?seriesId=${series}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                // if (result.type === 'error') {
                //     console.log(result.message)
                //     // toast.error(result.message)
                // } else {
                setQuestionAnswer(result)
                // }
            })
            .catch((error) => console.error(error));

    }, [series, configureChange])





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

        fetch(`http://localhost:8000/api/v1/DeleteQuestionAnswer?questionId=${id}`, requestOptions)
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




    const handleUpdateQuestion = (questionType,id) => {
       console.log("updatedQuestion ----",question, "answer----",answer)
       console.log(questionType,id)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+token);

        const raw = JSON.stringify({
            "questionType": questionType,
            "answer": answer,
            "question": question,
            "options":options,
            "correctAnswer":correctAnswer
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`http://localhost:8000/api/v1/updateQuestionAnswer?questionId=${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                if(result.type==='success'){
                    setConfigureSeriesChange(prev=>prev+1)
                    setQuestion('')
                    setAnswer('')
                    setCorrectAnswer()
                    setOptions(["", "", "", ""])
                    toast.success(result.message,{
                        duration:1000
                    })

                }
            })
            .catch((error) => console.error(error));
    }


    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
      };
    


    const handleBackClick = () => {
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
                        <input className="mcq-question-edit" type="text" placeholder="Enter question" defaultValue={Element.question} onChange={(e) => setQuestion(e.target.value)} />
                        {Element?.options?.map((option, index) => (
                            <input className="mcq-options" key={index} type="text" placeholder={`Option ${index + 1}`} defaultValue={option} onChange={(e) => handleOptionChange(index, e.target.value)} />
                        ))}
                        <label>Select correct answer:</label>
                        <select defaultValue={Element.correctAnswer}  onChange={(e) => setCorrectAnswer(parseInt(e.target.value))}  >
                            {Element?.options?.map((_, index) => (
                                <option key={index} value={index + 1}>{index + 1}</option>
                            ))}
                        </select>
                        <button className="Update-btn" onClick={() => delteQuestion('objective', Element._id)}>DELETE</button><button className="Update-btn" onClick={() => handleUpdateQuestion('objective', Element._id)} >UPDATE</button>
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
                            <input className='mcq-question-edit' type="text" placeholder="Enter subjective question" defaultValue={Element.question} onChange={(e) => setQuestion(e.target.defaultValue)}/>
                            <textarea className="testbox-textarea" type="text" placeholder="Enter answer" defaultValue={Element.answer} onChange={(e)=>setAnswer(e.target.defaultValue)} />
                            <button className="Update-btn" onClick={() => delteQuestion('subjective', Element._id)} >DELETE</button><button className="Update-btn" onClick={() => handleUpdateQuestion('subjective', Element._id)} >UPDATE</button>

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
                            <textarea type="text" className="testbox-textarea-logical-edit" placeholder="Enter logical question" defaultValue={Element.question} onChange={(e) => setQuestion(e.target.value)} />
                            <textarea className="testbox-textarea" type="text" placeholder="Enter answer" defaultValue={Element.answer} onChange={(e)=>setAnswer(e.target.value)} />
                            <button className="Update-btn" onClick={() => delteQuestion('logical', Element._id)}>DELETE</button><button className="Update-btn" onClick={() => handleUpdateQuestion('logical', Element._id)} >UPDATE</button>
                        </>
                    ))

                }
            </>
            <Toaster />
        </div>
    )
}

export default UpdateQuestions