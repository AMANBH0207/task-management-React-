import React from "react";
import "../style/ManageList.css";
import TaskList from "./TaskList";
import UserList from "./UserList";


function ManageList({selectedTask, tasks, users, selectedUser}) {
  
  return (
    <>
      <div className="taskList">
        {selectedTask?<TaskList selectedTask={selectedTask} tasks={tasks}/>
        :
        <UserList users={users} selectedUser={selectedUser}/>}
      </div>
    </>
  );
}

export default ManageList;
