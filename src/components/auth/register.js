import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom"; 

const Register = () =>{
  const[username,setUserName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[role,setRole]=useState('')
  const navigate = useNavigate()
  


const collectData =(e)=>{
  e.preventDefault();
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    "userName": username,
    "email": email,
    "password": password,
    "role": role
  });
  
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch("http://localhost:8000/api/v1/signUp", requestOptions)
    .then((response) => response.json())
    .then((result) =>{
      console.log(result)
      if(result.type==='error'){
        toast.error(result.message,{
          duration:1000
        })
      }else{
        toast.success(result.message)
        setTimeout(() => {
          navigate('/')
        }, 2000);
      }
    })
    .catch((error) => console.error(error));
}


    return(
        <>
            <div class="login-container">
          <div className="heading">Register</div>
        <form>
        <div className="input-group">
            <input type="text" id="username" name="username" placeholder="Enter your username" value={username} onChange={(e)=>setUserName(e.target.value)}/>
          </div>
          <div className="input-group">
            <input type="email" id="email" name="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <select className="select-role"   onChange={event => setRole(event.target.value)} >
          <option defaultChecked value=""></option>
         <option value="HR">HR</option>
         <option value="Developer">Developer</option>
         </select> 
          <button type="submit" className="btn" onClick={collectData}>Submit</button> <br></br>
         <div className="register">Login to your account? <a href="/"> login</a></div>
        </form>
        <Toaster/>
      </div>
      </>
    )
}
export default Register