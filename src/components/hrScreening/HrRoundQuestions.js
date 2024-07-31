import { useEffect, useState } from "react"
import { useAppContext } from "../../utils/useContext";
import { useNavigate, useParams } from "react-router-dom";
import AddHrRoundQuestion from "./addQuestionModal";
import UpdateHrRoundQuestions from "./updateQuestion";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

const HrRoundQuestions = () => {
    let { id } = useParams()
    let token = localStorage.getItem('token')
    const { show } = useAppContext()
    const navigate = useNavigate()
    const url = process.env.REACT_APP_BACKEND_URL
    const [data, setData] = useState([])
    const [series, setSeries] = useState('')
    const [showAddQuestionModal, setShowAddQuestionModal] = useState(false)
    const [seriesId, setSeriesId] = useState('')
    const [handleChange, setHandleChange] = useState(0)
    const [question, setQuestion] = useState('')
    const [showUpdateQuestionModal, setShowUpdateQuestionModal] = useState(false)
    const [questionId, setQuestionId] = useState('')




    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            // body: raw,
            redirect: "follow"
        };

        fetch(`${url}getHrRoundQuestions?seriesId=${id}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result)
                if (result.type === 'success') {
                    setSeries(result.series)
                    var questions = result.questions.questions
                    questions = questions.reverse()
                    setData(questions)
                }
            })
            .catch((error) => console.error(error));
    }, [handleChange])


    const handleDelete=(questionID)=>{
        Swal.fire({
            title: "Are you sure to delete this Question?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ce2128",
            cancelButtonColor: "#333",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteConfirm(questionID)
            }
          })
    }

    const handleDeleteConfirm = (quetionId) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+token);

        const raw = JSON.stringify({
            "seriesId": id,
            "questionId":quetionId
        });

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url}deleteHrRoundQuestion`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result)
                if(result.type==='success'){
                   toast.success(result.message)
                   setHandleChange(prev=>prev+1)
                }
            })
            .catch((error) => console.error(error));
    }


    const handleAddQuestion = () => {
        setShowAddQuestionModal(true)
        setSeriesId(id)
    }

    const handleUpdate = (question, questionIdD) => {
        setQuestion(question)
        setShowUpdateQuestionModal(true)
        setSeriesId(id)
        setQuestionId(questionIdD)
    }

    const handleBack =()=>{
        navigate('/hr-screening')
    }
    return (
        <div className={`wrapper ${show ? "cmn_margin" : ""} `}>
              <div className="back-btn-outer"><button className="back-btn-checkans" onClick={handleBack}>back</button></div>
            <div className="text-end mb-3 pe-3">
                <button className="register-btn" onClick={handleAddQuestion} >Add question</button>
            </div>
            <h4 className="hrRound-seriesname">Set of questions for {series}</h4>
            {
                data.map((ele, index) => {
                    return (
                        <div className="hr-question-outer">
                            <input className="hr-question-input" value={ele.question} />
                            <div className="hrQuestion-update-delete-btn">
                                <button className="hrQuestion-update-btn" onClick={() => handleUpdate(ele.question, ele._id)}>Update</button>
                                <button className="hrQuestion-delete-btn" onClick={() => handleDelete(ele._id)}>Delete</button></div>
                        </div>
                    )
                })
            }
            {
                showAddQuestionModal && (
                    <AddHrRoundQuestion
                        show={showAddQuestionModal}
                        onHide={() => setShowAddQuestionModal(false)}
                        seriesId={seriesId}
                        handleChange={setHandleChange}
                    />
                )
            }
            {
                showUpdateQuestionModal && (
                    <UpdateHrRoundQuestions
                        show={showUpdateQuestionModal}
                        onHide={() => setShowUpdateQuestionModal(false)}
                        handleChange={setHandleChange}
                        seriesId={seriesId}
                        question={question}
                        questionId={questionId}
                    />
                )
            }
            <Toaster/>
        </div>
    )
}

export default HrRoundQuestions