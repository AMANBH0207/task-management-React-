import React from 'react';
import TaskLogo from "../components/Assets/Task assignment logo.png";
import "../Userstyle/UserLoginBg.css";
import LogRoutes from '../Routes/LogRoutes';

function UserLogin({  formVal }) {
  return (
    <>
    
    <nav>
        <div className="logo"><img  src={TaskLogo} alt=""/></div>
        </nav>
     <div className="loginUser">
        <div className="bgimg1User"></div>
          <LogRoutes formVal={formVal}/>
    </div>
    
    </>
  )
}

export default UserLogin