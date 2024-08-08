import React, { useContext, useEffect, useState } from "react";
import "../style/CreateIssueForm.css";
import { Link } from "react-router-dom";
import {
  faBullhorn,
  faEllipsisVertical,
  faFileExport,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComp from "./ButtonComp";
import { getData, setData } from "../pages/Service";
import { IssueTaskCtx } from "../pages/Issues";

function CreateIssueForm() {
  const [task, setTask] = useState({});
  const [issueData, setIssueData] = useState({
    selectedId: "null",
    issues: { issueTitle: "", issueDescription: "", issueAttachment: "" },
    newEndDate: "",
  });
  const [issueTask, setIssueTask]=useState([]);
  useEffect(()=>{
    setIssueTask(getData("AddedTasks"));
},[])

  const {successNotification, errorNotification}=useContext(IssueTaskCtx)
  
  const setFormVal = (val) => {
    setIssueData({ ...issueData, selectedId: +val });
    issueTask.forEach((taskObj) => {
      if (taskObj.id === +val) {
        setTask(taskObj);
      }
    });
  };
  const saveIssues =(e)=>{
    e.preventDefault()
    if(issueData.issues.issueTitle.length===0){
      errorNotification("Please enter issue title");
    }else if(issueData.issues.issueDescription.length===0){
      errorNotification("Please enter issue description");
    }
    else{
      issueTask.forEach((alltasks,index)=>{
        if(alltasks.id===issueData.selectedId){
          issueTask[index].task_status="Accepted";
          issueTask[index].End_Date=issueData.newEndDate
          issueTask[index].issues=issueData.issues
        }
      })
      successNotification("Task has been sent to the user with issue");
      setData("AddedTasks",issueTask);
      setIssueTask(issueTask);
      setIssueData({
        selectedId: "null",
      issues: { issueTitle: "", issueDescription: "", issueAttachment: "" },
      newEndDate: "",
      })
      setTask("")
    }
  }

  return (
    <>
      <div className="recievedIssues">
        <div className="newTask">
          <span>
            <b>Create An issue</b>
          </span>
        </div>
        <div className="upOptions">
          <div className="upOptions1">
            <Link to="#">
              <i>
                <FontAwesomeIcon icon={faBullhorn} />
              </i>{" "}
              Give Feedback
            </Link>
            <Link to="#">
              <i>
                <FontAwesomeIcon icon={faShare} />
              </i>{" "}
              Share
            </Link>
            <Link to="#">
              <i>
                <FontAwesomeIcon icon={faFileExport} />
              </i>{" "}
              Export
            </Link>
            <Link to="#">
              <i>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </i>{" "}
              More
            </Link>
          </div>
        </div>
        <div className="createIssue">
          <div className="createIssue1">
            <form className="AddIssuePopup">
              <div className="newTaskFormDiv">
                <div className="newIssueForm">
                  <label>
                    <b>Select Task: </b>
                  </label>
                  <select
                    className="formInput"
                    name="TasksDropdown"
                    value={issueData.selectedId}
                    onChange={(e) => setFormVal(e.target.value)}
                    id="TasksDropdown"
                  >
                    <option value="null" disabled>
                      Please Select A Task
                    </option>
                    {issueTask
                      .filter((issue) => issue.task_status === "Issue by user")
                      .map((issue) => {
                        return <option value={issue.id}>{issue.title}</option>;
                      })}
                  </select>
                  <br />
                  <label>
                    <b>Issue Title: </b>
                  </label>
                  <input
                    className="formInput"
                    type="text"
                    name="title"
                    id="issueTitle"
                    placeholder="Enter yout issue title"
                    value={issueData.issues.issueTitle}
                    onChange={(e) =>
                      setIssueData({
                        ...issueData,
                        issues: {
                          ...issueData.issues,
                          issueTitle: e.target.value,
                        },
                      })
                    }
                  />
                  <div>
                    <label>
                      <b>Discription of the issue: </b>
                    </label>
                    <br />
                    <textarea
                      id="issueDescription"
                      name="issueDescription"
                      rows="10"
                      cols="80"
                      value={issueData.issues.issueDescription}
                      onChange={(e) =>
                        setIssueData({
                          ...issueData,
                          issues: {
                            ...issueData.issues,
                            issueDescription: e.target.value,
                          },
                        })
                      }
                    ></textarea>
                  </div>
                  <label>
                    <b>Task Priority: </b>
                  </label>
                  <span id="priority">
                    {task.priority === undefined
                      ? "Task Not Selected"
                      : task.priority}
                  </span>
                  <div id="assignUsers"></div>
                  <label>
                    <b>Previous Due Date: </b>
                  </label>
                  <span id="previousDate">
                    {task.End_Date === undefined
                      ? "Task Not Selected"
                      : task.End_Date}
                  </span>
                  <br />
                  <label>
                    <b>New Due Date: </b>
                  </label>
                  <input
                    className="formInfos0"
                    type="date"
                    id="newEndDate"
                    value={issueData.newEndDate}
                    onChange={(e) =>
                      setIssueData({ ...issueData, newEndDate: e.target.value })
                    }
                  />
                  <br />
                  <label>
                    <b>Addtional Attachments related to issue: </b>
                  </label>
                  <input
                    className="chooseFile"
                    type="file"
                    id="issueAttachment"
                    onChange={(e) =>
                      setIssueData({
                        ...issueData,
                        issues: {
                          ...issueData.issues,
                          issueAttachment: e.target?.files[0]?.name|| " ",
                        },
                      })
                    }
                  />
                </div>
              </div>
              <div className="saveIssueDiv">
                <div className="saveIssueBtns">
                  <ButtonComp ButtonName={"Create An Issue"} onClick={saveIssues}/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateIssueForm;
