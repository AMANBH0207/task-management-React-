import React, { useEffect, useState } from "react";
import "../style/TaskDetails.css";
import { setData } from "../pages/Service";
import AssignedUsers from "./AssignedUsers";
import AssignedNames from "./AssignedNames";
import ActionButtons from "./ActionButtons";
import AproveDeny from "./aproveDeny";

function TaskDetails({
  task, selectedIndex, setTasks, tasks, setTaskselected
}) {
  const [selected, setSelected] = useState(null);
  const [isEdited, setIsEdited] = useState(true);

  useEffect(() => {
    setSelected(task);
  }, [task, isEdited]);

  useEffect(() => {
    setIsEdited(true);
  }, [task]);


  const Assign = () => {
    const UpdatedTasks = [...tasks];
    UpdatedTasks[selectedIndex] = {
      ...UpdatedTasks[selectedIndex],
      task_status: "Assigned",
    };
    setTasks(UpdatedTasks);
    setData("AddedTasks", UpdatedTasks);
    setSelected(UpdatedTasks);
  };

  const Edit = () => {
    setIsEdited(false);
  };

  const Del = () => {
    const UpdatedTasks = [...tasks];
    UpdatedTasks.splice(selectedIndex, 1);
    setTasks(UpdatedTasks);
    setData("AddedTasks", UpdatedTasks);
    setTaskselected([]);
  };


  const Update = () => {
    const TaskForUpdate = [...tasks];
    TaskForUpdate[selectedIndex]=selected;
    setTasks(TaskForUpdate);
    setData("AddedTasks", TaskForUpdate);
    setTaskselected(selected);
    setIsEdited(true);
    
  };

  const goBack = () => {
    setIsEdited(true);
  };

  
  return (
    <>
      {/* Review Task Details */}
          {task.length === 0 ? (
            <div className="noTaskSelected">
              <b>No Task Selected</b>
            </div>
          ) : (
            <>
              <div className="newTaskForm">
                <div className="titleDiv">
                  <div>
                    <label>Title: </label>
                    <input
                      className="formInput"
                      value={selected.title}
                      onChange={(e) => {
                        setSelected({ ...selected, title: e.target.value });
                      }}
                      disabled={isEdited}
                    />
                    <div>
                      <label>Discription: </label>
                      <br />
                      <textarea
                        id="w3review"
                        name="w3review"
                        rows="4"
                        cols="50"
                        value={selected.description}
                        onChange={(e) => {
                          setSelected({
                            ...selected,
                            description: e.target.value,
                          });
                        }}
                        disabled={isEdited}
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
                  <span>{selected.tasktype}</span>
                  <br />
                  <label>Assignee: </label>
                  <AssignedNames names={task.assignedusers} />
                  <br />
                  <label>Start Date: </label>
                  <input
                    className="formInfos0"
                    type="date"
                    value={selected.Start_Date}
                    onChange={(e) => {
                      setSelected({ ...selected, Start_Date: e.target.value });
                    }}
                    disabled={isEdited}
                  />
                  <br />
                  <label>Due Date: </label>
                  <input
                    className="formInfos0"
                    type="date"
                    value={selected.End_Date}
                    onChange={(e) => {
                      setSelected({ ...selected, End_Date: e.target.value });
                    }}
                    disabled={isEdited}
                  />
                  <br />
                  <label>Priority: </label>
                  <select
                    className="formInfos0"
                    id="priority"
                    value={selected.priority}
                    onChange={(e) => {
                      setSelected({ ...selected, priority: e.target.value });
                    }}
                    disabled={isEdited}
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
                  <br />
                  {!isEdited && <label>Previous Attachment: </label>}
                  <span>{task.attachments} </span>
                  <br />
                  {!isEdited && (
                    <>
                      <label>New Attachment</label>
                      <input
                        className="chooseFile"
                        type="file"
                        onChange={(e) => {
                          setSelected({
                            ...selected,
                            attachments: e.target?.files[0].name||" ",
                          });
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
              {selected.task_status === "Unassigned" && <ActionButtons Assign={Assign}  Edit={Edit} Del={Del} goBack={goBack} Update={Update} isEdited={isEdited}/> }
              {selected.task_status==="In Review" && <AproveDeny/>}
            </>
          )}
    </>
  );
}

export default TaskDetails;
