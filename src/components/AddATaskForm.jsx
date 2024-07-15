import React, { useEffect, useState } from "react";
import "../style/AddATaskForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { getData, setData } from "../pages/Service";

function AddATaskForm({ handleCross, successNotification, errorNotification }) {
  const [usersArray, setUsersArray] = useState([]);
  const [arr ,setArr]=useState("");
  const [AddedUsers, setAddedUsers] = useState(getData("AddedUsers"));
  const [val, setVal] = useState({
    title: "",
    description: "",
    tasktype: "",
    assignedusers: [],
    task_status: "Unassigned",
    Start_Date: "",
    End_Date: "",
    priority: "",
    posts: [],
    issues: [],
    attachments: "",
  });
  //for searching users
  const [searchUsers, setSearchUsers] = useState("");
  const [results, setResults] = useState([]);
//calling ls to get the data
useEffect(()=>{
  setArr(getData("AddedTasks"));
},[])
  useEffect(() => {
    const updatedTaskType =
      usersArray.length === 1
        ? "Single"
        : usersArray.length > 1
        ? "Team"
        : "None";
    setVal((prevVal) => ({
      ...prevVal,
      assignedusers: usersArray,
      tasktype: updatedTaskType,
    }));
  }, [usersArray]);

  useEffect(() => {
    let results = AddedUsers.filter(
      (userval) =>
        userval.firstname.toLowerCase().includes(searchUsers.toLowerCase()) ||
        userval.email.toLowerCase().includes(searchUsers.toLowerCase())
    );
    setResults(results);
  }, [searchUsers]);

  //add Users in Task
  const AddusersInTask = (user) => {
    if (usersArray.some((value) => value.email === user.email)) {
      errorNotification("Already Added");
    } else {
      setUsersArray([...usersArray, user]);
    }
  };
  //remove added users
  const removeUser = (index) => {
    usersArray.splice(index, 1);
    setUsersArray([...usersArray]);
  };
  //validations and save to local storage
  function saveTask(val) {
    if (val.title.length === 0) {
      errorNotification("Please enter task title");
    } else if (val.description.length === 0) {
      errorNotification("Please give a description about the task");
    } else if (val.assignedusers.length === 0) {
      errorNotification("Please select atleast one user");
    } else if (val.Start_Date.length === 0) {
      errorNotification("Please specify the start date");
    } else if (val.End_Date.length === 0) {
      errorNotification("Please specify the end date");
    } else if (val.priority.length === 0) {
      errorNotification("Please specify the priority");
    } else {
      arr.push(val);
      successNotification("Task Added Successfully");
      setData("AddedTasks", arr);
      handleCross();
    }
  }
  //add task
  const handleSubmit = (e) => {
    e.preventDefault();
    saveTask(val);
  };

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
              onChange={(e) => {
                setVal({ ...val, title: e.target.value });
              }}
            />
            <div>
              <label>Description: </label>
              <br />
              <textarea
                value={val.description}
                name="description"
                rows="4"
                cols="50"
                id="description"
                onChange={(e) =>
                  setVal({ ...val, description: e.target.value })
                }
              ></textarea>
            </div>
            <label>Task Type: </label>
            <input
              className="formInfos0"
              id="taskType"
              value={val.tasktype}
              disabled
              style={{ color: "black", width: "3rem" }}
            />
            <br />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <label>Assigned users: </label>
              <div id="assignedNames0">
                {usersArray.length > 0
                  ? usersArray.map((user) => {
                      return <span>{user.firstname}</span>;
                    })
                  : ""}
              </div>
            </div>
            <br />
            <label>Start Date: </label>
            <input
              id="startDate"
              type="date"
              className="formInfos0"
              onChange={(e) => setVal({ ...val, Start_Date: e.target.value })}
            />
            <label>Due Date: </label>
            <input
              id="endDate"
              type="date"
              className="formInfos0"
              onChange={(e) => setVal({ ...val, End_Date: e.target.value })}
            />
            <br />
            <label>Priority: </label>
            <select
              className="formInfos0"
              id="priority"
              value={val.priority}
              onChange={(e) => setVal({ ...val, priority: e.target.value })}
            >
              <option value="" disabled>
                Select a priority
              </option>
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
              onChange={(e) => setVal({ ...val, attachments: e.target.value })}
            />
            <p style={{ margin: "0" }}>
              <i style={{ color: "red" }}>
                Note: upload files only in .pdf, .jpg, .jpeg, .png under 2mb.
              </i>
            </p>
          </div>
          <div className="unassignedUsers0">
            <h5>Assigned To</h5>
            <div className="assigneduser0">
              {usersArray.length > 0 ? (
                usersArray.map((user, index) => {
                  return (
                    <>
                      <FontAwesomeIcon
                        key={index}
                        icon={faXmark}
                        className="crossbtn0 pointer"
                        onClick={() => removeUser(index)}
                      />
                      <img
                        key=""
                        src={user.userphoto}
                        alt="user"
                        className="userImages0 center"
                      />
                    </>
                  );
                })
              ) : (
                <p>No users selected</p>
              )}
            </div>
            <div className="inputSearch20">
              <i style={{ marginLeft: "10px" }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </i>
              <input
                id="searchUsers"
                type="text"
                placeholder="Enter name or email"
                value={searchUsers}
                onChange={(e) => setSearchUsers(e.target.value)}
              />
            </div>
            <div className="usersList0">
              <ul>
                {results.map((user, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        AddusersInTask(user);
                      }}
                    >
                      <img src={user.userphoto} alt="user" />
                      <span className="center">{user.firstname}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="savetaskDiv0">
          <div className="saveTaskBtns0">
            <button onClick={handleSubmit}>Add</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddATaskForm;
