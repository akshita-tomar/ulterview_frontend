import Modal from 'react-bootstrap/Modal';

import { toast, Toaster } from 'react-hot-toast'
import { useState } from 'react';
import swal from 'sweetalert';
import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';

const ChangePassword = (props) => {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const[showPassword ,setShowPassword]=useState(false)
const[showConfirmPassword ,setShowConfirmPassword]=useState(false)

const[showNewPassword ,setShowNewPassword]=useState(false)
    const token = localStorage.getItem('token')
    const url = process.env.REACT_APP_BACKEND_URL

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
            // console.log(result)
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
                className='custom_modal_container'
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h3 className="heading"> Change Password</h3>
                    <div className='form-group mt-3 position-relative'>
                        <label className='modal_label'>Old Password</label>
                        <input type={`${showPassword?"text":"password"}`} className="candidate-register-input form-control mt-1" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <div className='open_eye'>
                        {
                                showPassword?  <IoEyeOutline onClick={()=>{setShowPassword(false)}}/>:
                                <FaRegEyeSlash onClick={()=>{setShowPassword(true)}}/>
                            }

                        </div>
                    </div>
                    <div className='form-group mt-3 position-relative'>
                        <label className='modal_label'>New Password</label>
                        <input type={`${showNewPassword?"text":"password"}`} className="candidate-register-input form-control mt-1" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
                        <div className='open_eye'>
                            {
                                showNewPassword?  <IoEyeOutline onClick={()=>{setShowNewPassword(false)}}/>:
                                <FaRegEyeSlash onClick={()=>{setShowNewPassword(true)}}/>
                            }
                       
                     
                        </div>
                    </div>
                    <div className='form-group mt-3 position-relative'>
                        <label className='modal_label'>Confirm New Password</label>
                        <input type={`${showConfirmPassword?"text":"password"}`} className="candidate-register-input form-control mt-1" placeholder="Re-type new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} ></input>
                        <div className='open_eye'>
                        {
                                showConfirmPassword?  <IoEyeOutline onClick={()=>{setShowConfirmPassword(false)}}/>:
                                <FaRegEyeSlash onClick={()=>{setShowConfirmPassword(true)}}/>
                            }

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleChangePassword} className='red_btn'>Change Password</button>
                </Modal.Footer>
                
            </Modal>
            <Toaster />
        </div>
    )
}

export default ChangePassword