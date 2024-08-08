import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const HrRoundSeries = (props) => {
    const url = process.env.REACT_APP_BACKEND_URL
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
                className='custom_modal_container'
            >
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <Modal.Body>
                    <h3 className="heading">Add Series</h3>
                    <div className='form-group'>
                    <label className='modal_label'>Series</label>
                    <input className="candidate-register-input form-control mt-2" placeholder="Enter series" value={series} onChange={(e)=>setSeries(e.target.value)}></input>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleSubmit} className='red_btn'>Submit</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default HrRoundSeries