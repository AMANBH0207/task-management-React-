import React, { useState } from 'react';
import "../style/Home.css";
import TaskCountCards from '../components/TaskCountCards';
import ProgressCards from '../components/ProgressCards';
import HomePageRight from '../components/HomePageRight';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [memberCount, setMemberCount] = useState(
    JSON.parse(localStorage.getItem("AddedUsers"))?.length || 0
  );
  
  function memberCounts(){
    let Addedusers=JSON.parse(localStorage.getItem("AddedUsers")) || [];
    let count=Addedusers.length
    setMemberCount(count);
  }  

  function successNotification(message){
    toast.success(message,{
      autoClose: 2000
    });
  }

  function errorNotification(message){
    toast.error(message,{
      progressStyle: { background: 'red' }
    });
  }
  return (
    <>
    <div>
        <ToastContainer />
      </div>
    <div className="mainContent">
          <div className="mainContent1">
            <TaskCountCards/>
            {/* TasksProgress */}
            <ProgressCards count={memberCounts} successNotification={successNotification} errorNotification={errorNotification}/>
          </div>
          {/* RightSection */}
            <HomePageRight count={memberCount}/>
        </div>
    </>
  )
}

export default Home