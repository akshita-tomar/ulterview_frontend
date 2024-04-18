import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom"; 


const Login = () => {
const[email,setEmail]=useState('')
const[password,setPassword]=useState('') 
const navigate = useNavigate()


const collectData=(e)=>{
e.preventDefault()

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "email": email,
  "password": password
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:8000/api/v1/signIn", requestOptions)
  .then((response) => response.json())
  .then((result) =>{
    console.log(result)
    if(result.type==='error'){
      toast.error(result.message,{
        duration:1000 
      })
    }else{
      localStorage.setItem('token',result.data.token)
      navigate('/language')
      }
  })
  .catch((error) => console.error(error));
}


    return( 
      <>
        <div class="login-container">
          <div className="heading">Login</div>
        <form>
          <div className="input-group">
            <input type="email" id="username" name="username" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button type="submit" class="btn" onClick={collectData}>Submit</button> <br></br>
          <a className="forget-password" href="/register">forgetpassword </a>  <br></br>
         {/* <div className="register"> Don't have account? <a href="/register"> register here</a></div> */}
        </form>
        <Toaster/>
      </div>
      </>
    );
};

export default Login;
