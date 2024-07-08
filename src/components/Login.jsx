import { useState,React }  from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../style/Login.css";
import { loginValidations } from "../utils/utils.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import TaskLogo from "../components/Assets/Task assignment logo.png";

function Login({ formVal }) {
    const navigate = useNavigate();



    const [values, setValues] = useState({
        email: "",
        password: "",
      });

      const handleSubmit = (e) => {
        e.preventDefault();
        const message = loginValidations(values, formVal, navigate);
        notify(message);
      };
      const notify = (message) => toast.error(message,{
        progressStyle: { background: 'red' }
      });

  return (
    <>
    <div>
        <ToastContainer/>
      </div>

      <nav>
        <div className="logo"><img  src={TaskLogo} alt=""/></div>
        </nav>
     <div className={`login ${formVal ? "adminBg" : "userBg"}`}>
        <div className={`bgimg1 ${formVal ? "adminBgImg" : "userBgImg"}`}></div>
        <div className="loginBox1">
      <div className="userType">{formVal?<span>Admin</span>:<span>User</span>}</div>
          <div className="socialSignin1">
            <h3>LOGIN</h3>
            <p>Login using social media links to get quick access</p>
            <div className="socialbuttons1">
              <div>
                <button className="Google1 pointer">
                <FontAwesomeIcon icon={faGoogle}  /> Signin with Google
                </button>
              </div>
              <div>
                <button className="Facebook1 pointer">
                <FontAwesomeIcon icon={faFacebook} /> Signin with facebook
                </button>
              </div>
              <div>
                <button className="Twitter1 pointer">
                <FontAwesomeIcon icon={faTwitter} /> Signin with Twitter
                </button>
              </div>
            </div>
          </div>
          <div className="loginWithEmail1">
            <div className="loginMsg1">
              <h1>Login To Your Account</h1>
              <p>
                Don't have an account?
                {formVal?<Link to='/signup-admin'> Sign Up Free!</Link>:<Link to='/signup-user'> Sign Up Free!</Link>}
              </p>
            </div>
    <form id="LoginForm1">
              <div className="inputText1">
                <input id="email" name="email" type="email" placeholder="Email address" onChange={(e) => setValues({...values,email: e.target.value})}  />
              </div>
              <div className="inputText">
                <input id="password" name="password" type="password" placeholder="Password" onChange={(e) => setValues({ ...values, password:e.target.value})}  />
              </div>
              <div>
                <input type="checkbox" />
                <label>Remember me</label>
                {formVal?<Link to='/forgotPassword-admin'> Forgot password?</Link>:<Link to='/forgotPassword-user'> Forgot password?</Link>}
              </div>
              <button className="pointer" onClick={handleSubmit}>Login with Email</button>
              <div id="errors"></div>
            </form>
          </div>
        </div>

    </div>

      
    </>
  );
}

export default Login;
