import React,{useEffect, useState} from "react";
import "../style/TaskDetails.css";
import AssignedUsers from "./AssignedUsers";
import AssignedNames from "./AssignedNames";

function TaskDetails({task, component}) {
  const [selected,setSelected] = useState(null);
  useEffect(()=>{
    setSelected(task);
  },[task])
  console.log(selected) ;
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
              <input className="formInput" value={selected.title} onChange={(e) => {
                setSelected({...selected, title: e.target.value });
              }} />
              <div>
                <label>Discription: </label>
                <br />
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  value={selected.description}
                  onChange={(e) =>{setSelected({...selected, description: e.target.value})}}></textarea>
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
            <span>{selected.tasktype}</span>
            <br />
            <label>Assignee: </label>
            <AssignedNames names={task.assignedusers} />
            
            <br />
            <label>Start Date: </label>
            <input className="formInfos0" type="date" value={selected.Start_Date} onChange={(e)=>{setSelected({...selected, Start_Date: e.target.value})}} />
            <br />
            <label>Due Date: </label>
            <input className="formInfos0" type="date" value={selected.End_Date} onChange={(e)=>{setSelected({...selected, End_Date: e.target.value})}} />
            <br />
            <label>Priority: </label>
            <select
              className="formInfos0"
              id="priority"
              value={selected.priority}
              onChange={(e) => {
                setSelected({...selected, priority: e.target.value });
              }}
            >
              <option value="" disabled>
                Select a priority
              </option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <br />
            <label>Addtional Attachments: </label>
            <input className="chooseFile" type="file" onChange={(e) => {
              setSelected({...selected, attachments: e.target.value });
            }} />
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
