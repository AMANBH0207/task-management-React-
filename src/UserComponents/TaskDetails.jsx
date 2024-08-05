import React, { useContext } from "react";
import { ctx } from "./TaskBoard";
import "../Userstyle/TaskDetails.css";

function TaskDetails() {
  const { selectedTask } = useContext(ctx);
  return (
    <>
      <div className="showTaskDetails">
        <label>
          <b>Task Name: </b>
        </label>
        <span>{selectedTask.title}</span>
        <br />
        <label>
          <b>Description: </b>
        </label>
        <br />
        <textarea
          id="w3review"
          name="w3review"
          rows="4"
          cols="67"
          value={selectedTask.description}
          disabled
        ></textarea>
        <br />
        <label>
          <b>Task Type: </b>
        </label>
        <span>{selectedTask.tasktype}</span>
        <br />
        <label>
          <b>Start Date: </b>
        </label>
        <span>{selectedTask.Start_Date}</span>
        <br />
        <label>
          <b>Due Date: </b>
        </label>
        <span>{selectedTask.End_Date}</span>
        <br />
        <label>
          <b>Priority: </b>
        </label>
        <span>{selectedTask.priority}</span>
        <br />
        <label>
          <b>Addtional Attachments: </b>
        </label>
        <span id="file2" className="attachment pointer">
          {selectedTask.file}
        </span>
      </div>
    </>
  );
}

export default TaskDetails;
