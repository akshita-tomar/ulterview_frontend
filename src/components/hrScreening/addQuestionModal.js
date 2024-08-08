import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { hr_add_questions, clear_hr_question_state } from '../../utils/redux/hr_screening_slice/add_question_slice';

const AddHrRoundQuestion = (props) => {
    const dispatch = useDispatch()
    const [question, setQuestion] = useState('')
    const id = props.seriesId
    const hr_question_state = useSelector(store => store.HR_ADD_QUESTIONS)
    const handleSubmit = () => {
        dispatch(hr_add_questions({ questionSeriesId: id, question: question }))
    }

    useEffect(() => {
        if (hr_question_state?.isSuccess) {
            toast(hr_add_questions?.message?.message)
            props.handleChange(prev => prev + 1)
            props.onHide(false)
            dispatch(clear_hr_question_state())
        }
        if (hr_question_state?.isError) {
            toast(hr_add_questions?.error?.message)
            dispatch(clear_hr_question_state())
        }
    }, [hr_question_state])

    return (
        <div>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter " className="heading">
                        Add Question
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="candidate-register-input form-control mt-2" placeholder="Enter question" value={question} onChange={(e) => setQuestion(e.target.value)} ></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    )
}

export default AddHrRoundQuestion