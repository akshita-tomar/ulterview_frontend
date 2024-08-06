import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom"; 
import "./login.css"
import logo from "../../assets/logo.png"
import ultivicLogo from "../../assets/ultivicLogo.png"

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
        <div className="login_container">
          <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div className="login_bg_outer">
              <div className="d-flex align-items-center justify-content-center login_bg_container">
                <div>
              <img src={logo} className="ultiviclogo_img"/>
              <p>As a returning member, we’re thrilled to have you <br></br>back. Let’s continue our journey together!”</p>

                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
              <div className="login_inner_content">
          <div className="login_wrapper">
           <div className="text-center d-flex welcome_outer align-items-center">
           <h3>Welcome To </h3>
           <img src={ultivicLogo} className="ultivic_logo"/>
           </div>
        <form>
          <div className="form-group mt-3">
            <label>Your E-mail</label>
            <input className="form-control mt-2" type="email" id="username" name="username" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="form-group mt-3">
            <div className="d-flex justify-content-between">
            <label>Your Password</label>
            <h6> <a className="forget_password small_font mt-2" href="/">Forget password?</a></h6> 
            </div>
         
            <input className="form-control mt-2" type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
           <div className="mt-3">
            <input type="checkbox" className="custom-checkbox"/>
            <label className="small_font ms-2">Remember me </label>
           </div>
          <button type="submit" className=" login-button mt-4" onClick={collectData}>Sign in</button> <br></br>
        </form>

          </div>

              </div>
          </div>
          </div>
        <Toaster/>
      </div>
      </>
    );
};

export default Login;
