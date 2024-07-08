import React from "react";
import "../style/AddATaskForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function AddATaskForm() {
  return (
    <>
      <form id="newTaskFormId0">
        <div className="newTaskFormDiv0">
          <div className="newTaskForm0">
            <label>Title: </label>
            <input
              className="formInput0"
              type="text"
              name="title"
              id="title"
              placeholder="Enter yout task title"
            />
            <div>
              <label>Description: </label>
              <br />
              <textarea
                name="description"
                rows="4"
                cols="50"
                id="description"
              ></textarea>
            </div>
            <label>Task Type: </label>
            <input
              className="formInfos0"
              id="taskType"
              value="Single"
              disabled
              style={{ color: "black", width: "3rem" }}
            ></input>
            <br />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <label>Assigned users: </label>
              <div id="assignedNames0"></div>
            </div>
            <br />
            <label>Start Date: </label>
            <input id="startDate" type="date" className="formInfos0" />
            <label>Due Date: </label>
            <input id="endDate" type="date" className="formInfos0" />
            <br />
            <label>Priority: </label>
            <select className="formInfos0" id="priority">
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <br />
            <label>Addtional Attachments: </label>
            <input
              className="chooseFile"
              type="file"
              accept=".pdf, .jpg, .jpeg, .png"
              id="fileInput"
            />
            <p style={{ margin: "0" }}>
              <i style={{ color: "red" }}>
                Note: upload files only in .pdf, .jpg, .jpeg, .png under 2mb.
              </i>
            </p>
          </div>
          <div className="unassignedUsers0">
            <h5>Assigned To</h5>
            <div className="assigneduser0"></div>
            <div className="inputSearch20">
              <i style={{ marginLeft: "10px" }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </i>
              <input
                id="searchUsers"
                type="text"
                placeholder="Enter name or email"
              />
            </div>
            <div className="usersList0">
              <ul></ul>
            </div>
          </div>
        </div>
        <div className="savetaskDiv0">
          <div className="errormsg0"> </div>
          <div className="saveTaskBtns0">
            <button>Add</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddATaskForm;