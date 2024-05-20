import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';

const InviteCandidate = (props) => {




    return (
       <div>
          <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Invite
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input className="candidate-register-input" placeholder="Enter candidate name" ></input>
    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button >Send link</Button>
                    </Modal.Footer>
                </Modal>
       </div>
    )
}
export default InviteCandidate