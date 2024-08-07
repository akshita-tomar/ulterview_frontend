import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddHrRoundQuestion = (props) => {
    let token = localStorage.getItem('token')
    const url = process.env.REACT_APP_BACKEND_URL
    const [question, setQuestion] = useState('')
    const id = props.seriesId


   

    const handleSubmit = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+token);

        const raw = JSON.stringify({
            "questionSeriesId": id,
            "question": {
                "question": question
            }
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url}addQuestion`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result)
                if(result.type==='success'){
                  props.handleChange(prev=>prev+1) 
                  props.onHide(false)
                }
            })
            .catch((error) => console.error(error));
    }

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
        </div>
    )
}

export default AddHrRoundQuestion