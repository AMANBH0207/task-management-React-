import React, { useEffect, useState } from "react";
import "../style/Signup.css";
import { getData, setData } from "../pages/Service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import TaskLogo from "../components/Assets/Task assignment logo.png";
import Loading from "./loading";

function Signup({ formVal }) {
  const navigate = useNavigate();

  const [ls, setLS] = useState([]);
  const [form, setForm] = useState("");
  const [load, setLoad] = useState(false);
  const [val, setVal] = useState({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Confirm_Email: "",
    Password: "",
    Confirm_Password: "",
    Tc: false,
  });
  useEffect(() => {
    if (formVal) {
      setLS(getData("AdminUsers"));
      setForm("AdminUsers");
    } else {
      setLS(getData("MainUsers"));
      setForm("MainUsers");
    }
  }, []);
// Calling function on clicking submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = validations(val);
    notify(message);
  };
  //Signup validations and saving data
  const validations = () => {
    if (val.First_Name.length === 0) {
      return "Please enter your First Name";
    } else if (val.Email.length === 0) {
      return "Please enter your Email";
    } else if (val.Confirm_Email.length === 0) {
      return "Please confirm your Email";
    } else if (val.Password.length === 0) {
      return "Please enter your password";
    } else if (val.Confirm_Password.length === 0) {
      return "Please confirm your Password";
    } else if (val.Tc === false) {
      return "Please accept the terms and conditions";
    } else if (val.Email !== val.Confirm_Email) {
      return "Email does not match";
    } else if (val.Password !== val.Confirm_Password) {
      return "Password does not match";
    } else {
      if (ls.some((user) => user.email === val.Email)) {
        return "Email already exists";
      } else {
        let user = {
          firstname: val.First_Name,
          lastname: val.Last_Name,
          userphoto:
            "https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/DefaultUser.png?alt=media&token=dabfa0e1-763a-4d06-8497-2e4cd97ea298",
          email: val.Email,
          password: val.Password,
        };
        ls.push(user);
        console.log(ls);
        setData(form, ls);
        toast.success("Signup Successful");
        setLoad(true);
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    }
  };
  //Generating notifications on toast
  const notify = (message) =>
    toast.error(message, {
      progressStyle: { background: "red" },
    });

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      {load && <Loading />}
      <nav>
        <div className="logo0">
          <img src={TaskLogo} alt="" />
        </div>
      </nav>
      <div className={`login ${formVal ? "adminBg" : "userBg"}`}>
        <div className={`bgimg1 ${formVal ? "adminBgImg" : "userBgImg"}`}></div>
        <div className="SignupBox">
          <div className="SignupWithEmail">
            <div className="userTypeSignup">
              {formVal ? <span>Admin</span> : <span>User</span>}
            </div>
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
                  value={val.First_Name}
                  onChange={(e) =>
                    setVal({ ...val, First_Name: e.target.value })
                  }
                />
                <input
                  id="lastname"
                  type="text"
                  placeholder="Last Name"
                  value={val.Last_Name}
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
                  value={val.Email}
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
                  value={val.Confirm_Email}
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
                  value={val.Password}
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
                  value={val.Confirm_Password}
                  onChange={(e) => {
                    setVal({ ...val, Confirm_Password: e.target.value });
                  }}
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="tc"
                  value={val.Tc}
                  onChange={(e) => {
                    setVal({ ...val, Tc: e.target.checked });
                  }}
                />
                <label>Agree to the terms and conditions</label>
              </div>
              <button type="submit" className="pointer" onClick={handleSubmit}>
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
