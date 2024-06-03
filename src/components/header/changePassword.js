import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast, Toaster } from 'react-hot-toast'
import { useState } from 'react';
import swal from 'sweetalert';

const ChangePassword = (props) => {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const token = localStorage.getItem('token')
    const url = 'http://localhost:8000/api/v1/'
    // const url = 'http://16.171.41.223:8000/api/v1/'

    const handleChangePassword = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+token);
        
        const raw = JSON.stringify({
          "password": password,
          "newPassword": newPassword,
          "confirmPassword": confirmPassword
        });
        
        const requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch(`${url}changePassword`, requestOptions)
          .then((response) => response.json())
          .then((result) =>{
            console.log(result)
            if(result.type==='error'){
                toast.error(result.message,{
                    duration:3000
                })
            }else{
                swal('Password change successfully!', 'Thanks', 'success')
                setTimeout(() => {
                  props.onHide(false)  
                }, 1000);
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
                        Change Password
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="candidate-register-input form-control mt-2" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <input className="candidate-register-input form-control mt-2" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
                    <input className="candidate-register-input form-control mt-2" placeholder="Re-type new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} ></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleChangePassword}>Submit</Button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    )
}

export default ChangePassword