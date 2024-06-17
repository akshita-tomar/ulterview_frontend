import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const UpdateQuestionModal = (props) => {
    return (
        <div className="wrapper">
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
                    <input className="candidate-register-input form-control mt-2" placeholder="Enter series" ></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button >Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default UpdateQuestionModal