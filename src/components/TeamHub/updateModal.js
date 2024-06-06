import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast, Toaster } from 'react-hot-toast'
import { useState } from 'react';


const UpdateUser = (props) => {
    let token = localStorage.getItem('token')
    // const url = 'http://localhost:8000/api/v1/';
    const url = 'http://16.171.41.223:8000/api/v1/'
    const [username,setUsername]=useState('')
    const [profile,setProfile]=useState('')
    const [experience,setExprience]=useState('')
  


const handleUpdate =()=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer "+token);
    
    const raw = JSON.stringify({
      "userId": props.userId,
      "username": username?username:props.user,
      "experience": experience?experience:props.userExperience,
      "profile": profile?profile:props.userProfile
    });
    
    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch(`${url}editUserDetails`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        if(result.type==='error'){
            toast.error(result.message)
        }else{
            toast.success(result.message)
            props.configureChange(prev=>prev+1)
            props.onHide(false)
        }
      })
      .catch((error) => console.error(error));
}




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
                        Update {props.user}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className="candidate-register-input form-control mt-2" placeholder="Update username" defaultValue={props.user} onChange={(e)=>setUsername(e.target.value)}></input>
                    {props.role === "developer" ? <input className="candidate-register-input form-control mt-2"  placeholder="Update developer's profile" defaultValue={props.userProfile} onChange={(e)=>setProfile(e.target.value)}></input> : null}
                    <input className="candidate-register-input form-control mt-2" placeholder="Update total experience" defaultValue={props.userExperience} onChange={(e)=>setExprience(e.target.value)} ></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleUpdate}>Submit</Button>
                </Modal.Footer>
            </Modal>
            <Toaster/>
        </div>
    )
}
export default UpdateUser