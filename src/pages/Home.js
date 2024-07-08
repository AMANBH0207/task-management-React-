import React, { useState } from 'react';
import "../style/Home.css";
import TaskCountCards from '../components/TaskCountCards';
import ProgressCards from '../components/ProgressCards';
import HomePageRight from '../components/HomePageRight';

function Home() {
  const [memberCount, setMemberCount] = useState(
    JSON.parse(localStorage.getItem("AddedUsers"))?.length || 0
  );
  function memberCounts(){
    let Addedusers=JSON.parse(localStorage.getItem("AddedUsers")) || [];
    let count=Addedusers.length
    setMemberCount(count);
  }  

  return (
    <>
    <div className="mainContent">
          <div className="mainContent1">
            <TaskCountCards/>
            {/* TasksProgress */}
            <ProgressCards count={memberCounts}/>
          </div>
          {/* RightSection */}
            <HomePageRight count={memberCount}/>
        </div>
    </>
  )
}

export default Home