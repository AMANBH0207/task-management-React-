import React from "react";
import "../style/DetailsLayout.css";
import TaskDetails from "./TaskDetails";
import UserDetails from "./UserDetails";

function DetailsLayout({task, selectedIndex, setTasks, tasks, setTaskselected, user, selectedUserIndex, users, setUsers, setUserSelected}) {
  return (
    <>
      <div className="tasksReviewDet">
        <div className="AddTaskPopup">
        {task?<TaskDetails task={task} selectedIndex={selectedIndex} setTasks={setTasks} tasks={tasks} setTaskselected={setTaskselected}/>
        :
        <>
        <UserDetails user={user} selectedUserIndex={selectedUserIndex} users={users} setUsers={setUsers} setUserSelected={setUserSelected}/>
        </>}
        </div>
      </div>
    </>
  );
}

export default DetailsLayout;
