import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';


const HrRoundSeries = (props) => {
    // const url = 'http://localhost:8000/api/v1/';
    const url = 'http://16.171.41.223:8000/api/v1/'
    let token = localStorage.getItem('token')
    const [series, setSeries] = useState('')


    const handleSubmit = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        const raw = JSON.stringify({
            "questionSeries": series
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(`${url}addQuestionSeries`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
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
                        Add Series
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="candidate-register-input form-control mt-2" placeholder="Enter series" value={series} onChange={(e)=>setSeries(e.target.value)}></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default HrRoundSeries