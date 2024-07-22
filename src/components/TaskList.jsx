import React from 'react'
import AssignedUsers from './AssignedUsers';
import "../style/TaskList.css"

function TaskList({selectedTask, tasks}) {
  return (
    <>
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
    </>
  )
}

export default TaskList