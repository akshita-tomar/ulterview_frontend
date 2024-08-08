import { useEffect, useState } from "react"
import { useAppContext } from "../../utils/useContext";
import { useNavigate, useParams } from "react-router-dom";
import AddHrRoundQuestion from "./addQuestionModal";
import UpdateHrRoundQuestions from "./updateQuestion";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { hr_round_questions, clear_hr_round_question_state } from "../../utils/redux/hr_screening_slice/hr_round_questions_slice";
import { useDispatch, useSelector } from "react-redux";
import { delete_hr_round_questions, clear_hr_deleted_question_state } from "../../utils/redux/hr_screening_slice/delete_hr_round_questions_slice";

const HrRoundQuestions = () => {
    const dispatch = useDispatch()
    let { id } = useParams()
    const { show } = useAppContext()
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [series, setSeries] = useState('')
    const [showAddQuestionModal, setShowAddQuestionModal] = useState(false)
    const [seriesId, setSeriesId] = useState('')
    const [handleChange, setHandleChange] = useState(0)
    const [question, setQuestion] = useState('')
    const [showUpdateQuestionModal, setShowUpdateQuestionModal] = useState(false)
    const [questionId, setQuestionId] = useState('')
    const hr_round_questions_state = useSelector(store => store.HR_ROUND_QUESTIONS)
    const deleted_hr_question_state = useSelector(store => store.DELETE_HR_ROUND_QUESTIONS)

    useEffect(() => {
        dispatch(hr_round_questions({ id }))
    }, [handleChange])

    useEffect(() => {
        if (hr_round_questions_state?.isSuccess) {
            setSeries(hr_round_questions_state?.message?.series)
            var questions = hr_round_questions_state?.message?.questions?.questions
            questions = questions?.reverse()
            setData(questions)
            dispatch(clear_hr_round_question_state())
        }
        if (hr_round_questions_state?.isError) {
            toast(hr_round_questions_state?.error?.message)
            dispatch(clear_hr_round_question_state())
        }
    }, [hr_round_questions_state])


    const handleDelete = (questionID) => {
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
                dispatch(delete_hr_round_questions({ id, questionID }))
            }
        })
    }

    useEffect(() => {
        if (deleted_hr_question_state?.isSuccess) {
            toast(deleted_hr_question_state?.message?.message)
            setHandleChange(prev => prev + 1)
            dispatch(clear_hr_deleted_question_state())
        }
        if (deleted_hr_question_state?.isError) {
            toast(deleted_hr_question_state?.error?.message)
            dispatch(clear_hr_deleted_question_state())
        }
    }, [deleted_hr_question_state])

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

    const handleBack = () => {
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
                data?.map((ele, index) => {
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
            <Toaster />
        </div>
    )
}

export default HrRoundQuestions