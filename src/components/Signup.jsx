import React, { useState } from "react";
import "../style/Signup.css";
import { validations } from "../utils/utils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import TaskLogo from "../components/Assets/Task assignment logo.png";

function Signup({formVal}) {
  const navigate = useNavigate();
  const [val, setVal] = useState({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Confirm_Email: "",
    Password: "",
    Confirm_Password: "",
    Tc: false
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = validations(val, formVal, navigate);
    notify(message);
  };
  const notify = (message) => toast.error(message,{
    progressStyle: { background: 'red' }
  });
  return (
    <>
    <div>
        <ToastContainer />
      </div>

      <nav>
        <div className="logo"><img  src={TaskLogo} alt=""/></div>
        </nav>
     <div className={`login ${formVal ? "adminBg" : "userBg"}`}>
     <div className={`bgimg1 ${formVal ? "adminBgImg" : "userBgImg"}`}></div>
        <div className="SignupBox">
        <div className="SignupWithEmail">
        <div className="userTypeSignup">{formVal?<span>Admin</span>:<span>User</span>}</div>
          <div className="signupMsg">
            <h1>Signup</h1>
          </div>
          <form id="SignupForm">
            <div className="inputText">
              <input
                id="firstname"
                type="text"
                placeholder="First Name"
                name="First_Name"
                onChange={(e) => setVal({ ...val, First_Name: e.target.value })}
              />
              <input
                id="lastname"
                type="text"
                placeholder="Last Name"
                onChange={(e) => {
                  setVal({ ...val, Last_Name: e.target.value });
                }}
              />
            </div>
            <div className="inputText">
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                onChange={(e) => {
                  setVal({ ...val, Email: e.target.value });
                }}
              />
            </div>
            <div className="inputText">
              <input
                id="confirmEmail"
                type="email"
                placeholder="Confirm Email"
                onChange={(e) => {
                  setVal({ ...val, Confirm_Email: e.target.value });
                }}
              />
            </div>
            <div className="inputText">
              <input
                id="password"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setVal({ ...val, Password: e.target.value });
                }}
              />
            </div>
            <div className="inputText">
              <input
                id="confirmedPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => {
                  setVal({ ...val, Confirm_Password: e.target.value });
                }}
              />
            </div>
            <div>
              <input
                type="checkbox"
                id="tc"
                onChange={(e) => {
                  setVal({ ...val, Tc: e.target.checked });
                }}
              />
              <label>Agree to the terms and conditions</label>
            </div>
            <button
              type="submit"
              className="pointer"
              onClick={handleSubmit
              }
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
        
    </div>

      
    </>
  );
}

export default Signup;
