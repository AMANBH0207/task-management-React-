import React, { createContext, useEffect, useState } from "react";
import "../Userstyle/TaskBoard.css";
import Board from "./Board";
import { getData, setData } from "../pages/Service";
import BlurBgForm from "./BlurBgForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ctx = createContext();
function TaskBoard() {
  const [allTasks, setAllTasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [render, setRender] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [formName, setFormName] = useState(null);
  const [posts,setPosts] = useState([])
  let action = [];
  let toDo = [];
  let inProgress = [];
  let inReview = [];
  let completed = [];
  let date = new Date();
  let isoString = date.toISOString();
  let dateOnly = isoString.split("T")[0];

  useEffect(() => {
    let data = getData("AddedTasks");
    setAllTasks(data);
    setTasks(
      data.filter((val) =>
        val.assignedusers.some(
          (usr) => usr.email === getData("LoggedUsers").email
        )
      )
    );
  }, [render]);
  const changeSndSaveStatus = (value) => {
    allTasks.forEach((task, index) => {
      if (task.id === value.id) {
        allTasks[index] = value;
      }
    });
    setData("AddedTasks", allTasks);
    setAllTasks(allTasks);
    setRender(!render);
  };
  const assignedStatus = (task) => {
    if (
      task.Start_Date <= dateOnly &&
      task.End_Date >= dateOnly &&
      task.task_status === "Accepted"
    ) {
      task.task_status = "In Progress";
      changeSndSaveStatus(task);
    }
    if (task.End_Date < dateOnly && task.task_status === "In Progress") {
      task.task_status = "In Review";
      changeSndSaveStatus(task);
    }
  };
  tasks.map((task) => {
    assignedStatus(task);
    if (task.task_status === "Assigned") {
      action.push(task);
    } else if (task.task_status === "Accepted") {
      toDo.push(task);
    } else if (task.task_status === "In Progress") {
      inProgress.push(task);
    } else if (task.task_status === "In Review") {
      inReview.push(task);
    } else if (task.task_status === "Completed") {
      completed.push(task);
    }
    return "ok";
  });
  const Accept = (val) => {
    val.task_status = "Accepted";
    changeSndSaveStatus(val);
  };
  const Reject = (val) => {
    val.task_status = "Rejected";
    changeSndSaveStatus(val);
  };
  const sendToInProgress = (val) => {
    val.task_status = "In Progress";
    val.Start_Date = dateOnly;
    changeSndSaveStatus(val);
  };
  const sendForReview = (val) => {
    val.task_status = "In Review";
    changeSndSaveStatus(val);
  };
  const showPopup = (task, formName) => {
    setShow(true);
    setSelectedTask(task);
    setFormName(formName);
  };
  const showUpdatesPopup=(post,formName)=>{
    setShow(true);
    setPosts(post)
    setFormName(formName);
  }
  const hidePopup = () => {
    setShow(false);
  };
  function successNotification(message){
    toast.success(message,{
      autoClose: 2000
    });
  }

  function errorNotification(message){
    toast.error(message,{
      progressStyle: { background: 'red' }
    });
  }

  return (
    <ctx.Provider
      value={{
        Accept,
        Reject,
        sendToInProgress,
        sendForReview,
        showPopup,
        showUpdatesPopup,
        changeSndSaveStatus,
        successNotification,
        errorNotification,
        hidePopup,
        selectedTask
      }}
    >
      <div className="board pageMargin">
      <ToastContainer />
        {show && <BlurBgForm hidePopup={hidePopup} formName={formName} posts={posts}/>}
        <Board boardType={"action"} boardName={"ACTION"} taskType={action} />
        <Board boardType={"toDo"} boardName={"TO DO"} taskType={toDo} />
        <Board
          boardType={"inProgress"}
          boardName={"IN PROGRESS"}
          taskType={inProgress}
        />
        <Board
          boardType={"inReview"}
          boardName={"IN REVIEW"}
          taskType={inReview}
        />
        <Board
          boardType={"completed"}
          boardName={"COMPLETED"}
          taskType={completed}
        />
      </div>
    </ctx.Provider>
  );
}

export default TaskBoard;
