import React, { useState } from 'react';
import "../style/ForgotPassword.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { forgotPasswordValidations,otpGeneration } from '../utils/utils'; 
import TaskLogo from "../components/Assets/Task assignment logo.png";

function ForgotPassword({formVal}) {
  const navigate = useNavigate();
  const [val, setVal] = useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = forgotPasswordValidations(val, formVal, navigate);
    notify(message);
  };
  const otp = (e) => {
    e.preventDefault();
    const msg = otpGeneration(val);
    notify(msg);
  }
  const notify = (message) => toast.error(message,{
    progressStyle: { background: 'red' }
  });

  return (
    <>
    <div>
        <ToastContainer />
      </div>

      <nav>
        <div className="logo0"><img  src={TaskLogo} alt=""/></div>
        </nav>
        <div className={`login ${formVal ? "adminBg" : "userBg"}`}>
        <div className={`bgimg1 ${formVal ? "adminBgImg" : "userBgImg"}`}></div>
        <div className="loginBox">
          <div className="loginWithEmail">
          <div className="userTypeFp">{formVal?<span>Admin</span>:<span>User</span>}</div>
            <div className="loginMsg">
              <h1>Reset Your Password</h1>
            </div>
            <form id="LoginForm">
                <div className="emailAndButton1">
                    <div className="inputText">
                        <input id="email" name="email" type="email" placeholder="Enter email address" onChange={(e)=>setVal({...val,email:e.target.value})} />
                      </div>
                      <button className="pointer" id="genOTP" onClick={otp}>Generate OTP</button>
                </div>
              <div className="inputText">
                <input id="password" name="password" type="password" placeholder="Enter your new password" onChange={(e)=>setVal({...val,password:e.target.value})} />
              </div>
              <div className="inputText">
                <input id="Confirmpassword" name="Confirmpassword" type="password" placeholder="Confirm new password" onChange={(e)=>setVal({...val,confirmPassword:e.target.value})} />
              </div>
              <div className="inputText">
                <input id="OTP" name="OTP" type="number" placeholder="Enter OTP" onChange={(e)=>setVal({...val,otp:e.target.value})} />
              </div>
              <button className="changeButton pointer" onClick={handleSubmit}>Change Password</button>
              <div id="errors"></div>
            </form>
          </div>
        </div>
    </div>


   
    </>
  )
}

export default ForgotPassword