import React, { useEffect, useState } from "react";
import "../style/ManageTaskList.css";
import { getData } from "../pages/Service";

function ManageTaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getData("AddedTasks"));
  }, []);

  const selectedTask =(task)=>{
    console.log(task);
  }

  return (
    <>
      <div className="taskList">
        <ul>
          {tasks.map((task, id) => {
            return (
              <li className={task.priority==="High"?"pointer high":task.priority==="Medium"?"pointer medium":"pointer low"} key={id} onClick={()=>{selectedTask(task)}}>
                <h5 className="center">{task.title}</h5>
                <p>{task.priority}</p>
                <div className="teamMembers">
                  {task.assignedusers.map((assignedUser, index) => {
                    return (
                      <img
                        key={index}
                        className="center"
                        src={assignedUser.userphoto}
                        alt=""
                      />
                    );
                  })}
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
