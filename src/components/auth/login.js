import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom"; 
import "./login.css"

const Login = () => {
const[email,setEmail]=useState('')
const[password,setPassword]=useState('') 
const navigate = useNavigate()
const url = process.env.REACT_APP_BACKEND_URL

useEffect(()=>{
  let token = localStorage.getItem('token')
  let role = localStorage.getItem('role')
  if(token && role==='DEVELOPER'){
    navigate('/homepage')
  }
  if(token && role==="HR"){
    navigate('/candidates')
  }
},[])



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



fetch(`${url}signIn`, requestOptions)
  .then((response) => response.json())
  .then((result) =>{
    // console.log(result)
    if(result.type==='error'){
      toast.error(result.message,{
        duration:1000 
      })
    }else{
      localStorage.setItem('token',result.data.token)
      localStorage.setItem('role',result.data.role)
      if(result.data.role==="HR"){
        navigate('/candidates')
      }
      if(result.data.role === 'DEVELOPER'){
        navigate('/homepage')
      }
     
      }
  })
  .catch((error) => console.error(error));
}


    return( 
      <>
        <div className="login-container">
          <div className="login_wrapper">
          <h3 className="heading">Login</h3>
        <form>
          <div className="form-group mt-3">
            <label>E-mail</label>
            <input className="form-control mt-2" type="email" id="username" name="username" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="form-group mt-3">
          <label>Password</label>
            <input className="form-control mt-2" type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <a className="forget-password mt-2" href="/">Forget password?</a>  <br></br>
          <button type="submit" className=" login-button mt-4" onClick={collectData}>Submit</button> <br></br>
         {/* <div className="register"> Don't have account? <a href="/register"> register here</a></div> */}
        </form>

          </div>
        <Toaster/>
      </div>
      </>
    );
};

export default Login;
