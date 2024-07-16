import React from "react";
import "../style/TaskDetails.css";
import AssignedUsers from "./AssignedUsers";
import AssignedNames from "./AssignedNames";

function TaskDetails({task, component}) {
  return (
    <>
      {/* Review Task Details */}
      <div className="tasksReviewDet">
        <div className="AddTaskPopup">
          {task.length===0?(
            <div className="noTaskSelected"><b>No Task Selected</b></div>
          ):<>
          <div className="newTaskForm">
          <div className="titleDiv">
            <div>
              <label>Title: </label>
              <span>{task.title}</span>
              <div>
                <label>Discription: </label>
                <br />
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  value={task.description}
                  disabled
                ></textarea>
              </div>
            </div>
            <div className="unassignedUsers">
              <div className="assigneduser">
                <h5>Assigned To</h5>
                <AssignedUsers users={task.assignedusers} />
              </div>
            </div>
          </div>
          <div>
            <label>Task Type: </label>
            <span>{task.tasktype}</span>
            <br />
            <label>Assignee: </label>
            <AssignedNames names={task.assignedusers} />
            
            <br />
            <label>Start Date: </label>
            <span>{task.Start_Date}</span>
            <br />
            <label>Due Date: </label>
            <span>{task.End_Date}</span>
            <br />
            <label>Priority: </label>
            <span>{task.priority}</span>
            <br />
            <label>Addtional Attachments: </label>
            <span>{task.attachments}</span>
          </div>
        </div>
        {component}
        </>
          }
        
        </div>
      </div>
    </>
  );
}

export default TaskDetails;
