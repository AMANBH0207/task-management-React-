import React from "react";
import "../style/ManageTaskList.css";

import AssignedUsers from "./AssignedUsers";

function ManageTaskList({selectedTask, tasks}) {
  
  return (
    <>
      <div className="taskList">
        <ul>
          {tasks.map((task, id) => {
            return (
              <li className={task.priority==="High"?"pointer high":task.priority==="Medium"?"pointer medium":"pointer low"} key={id} onClick={()=>{selectedTask(task, id)}}>
                <h5 className="center">{task.title}</h5>
                <p className="priority">{task.priority}</p>
                <p>{task.task_status}</p>
                <div className="teamMembers">
                  <AssignedUsers users={task.assignedusers} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ManageTaskList;
