import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import "./login.css"
import logo from "../../assets/logo.png"
import ultivicLogo from "../../assets/ultivicLogo.png"
import { useDispatch, useSelector } from "react-redux";
import { sign_in_slice } from "../../utils/redux/authSlice/signInSlice";
import { clear_sign_in_slice } from "../../utils/redux/authSlice/signInSlice";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState('')
  
  const navigate = useNavigate()
  const signInData = useSelector(store => store.SIGN_IN)
  useEffect(() => {
    let token = localStorage.getItem('token')
    let role = localStorage.getItem('role')
    if (token && role === 'DEVELOPER') {
      navigate('/homepage')
    }
    if (token && role === "HR") {
      navigate('/candidates')
    }
  }, [])

  const collectData = (e) => {
    e.preventDefault()
    dispatch(sign_in_slice({ email, password }))
  }

  useEffect(() => {
    if (signInData?.isSuccess) {
      toast.success("Logged In", {
        duration: 1300
      })
      if (signInData?.data?.data?.role === "DEVELOPER") {
        navigate('/homepage')
       
      }
      if (signInData?.data?.data?.role === "HR") {
         navigate('/candidates')
      }
      localStorage.setItem('token', signInData?.data?.data?.token)
      localStorage.setItem('role', signInData?.data?.data?.role)
      dispatch(clear_sign_in_slice())
    }

    if (signInData?.isError) {
      toast.error(signInData?.error?.message, {
        duration: 1300
      })
      dispatch(clear_sign_in_slice())
    }

  }, [signInData])
  return (
    <>
      <div className="login_container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div className="login_bg_outer">
              <div className="d-flex align-items-center justify-content-center login_bg_container">
                <div>
                  <img src={logo} className="ultiviclogo_img" alt="" />
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
                  <img src={ultivicLogo} className="ultivic_logo" alt="" />
                </div>
                <form>
                  <div className="form-group mt-3">
                    <label>Your E-mail</label>
                    <input className="form-control mt-2" type="email" id="username" name="username" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group mt-3 position-relative">
                    <div className="d-flex justify-content-between ">
                      <label>Your Password</label>
                      <h6> <a className="forget_password small_font mt-2" href="/">Forget password?</a></h6>
                      
                    </div>

                    <input className="form-control mt-2" type={`${showPassword?"text":"password"}`} id="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className='open_eye'>
                            {
                                showPassword?  <IoEyeOutline onClick={()=>{setShowPassword(false)}}/>:
                                <FaRegEyeSlash onClick={()=>{setShowPassword(true)}}/>
                            }
                       
                     
                        </div>
                  </div>
                  {/* <div className="mt-3">
                    <input type="checkbox" className="custom-checkbox" />
                    <label className="small_font ms-2">Remember me </label>
                  </div> */}
                  <button type="submit" className=" login-button mt-4" onClick={collectData}>Sign in</button> <br></br>
                </form>

              </div>

            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Login;
