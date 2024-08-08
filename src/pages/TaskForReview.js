import React, { useState, useEffect, createContext } from "react";
import "../style/TaskForReview.css";
import ReviewCards from "../components/ReviewCards";
import DetailsLayout from "../components/DetailsLayout";
import { getData, setData } from "./Service";
import BlurBgForm from "../UserComponents/BlurBgForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export const ReviewCtx = createContext();
function TaskForReview() {
  const [tasks, setTasks] = useState([]);
  const [taskselected, setTaskselected] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [formName, setFormName] = useState(null);
  const [posts, setPosts] = useState("");

  useEffect(() => {
    setTasks(
      getData("AddedTasks")
    );
  }, []);
  const changeAndSave = (value) => {
    tasks.forEach((task, index) => {
      if (task.id === value.id) {
        tasks[index] = value;
      }
    });
    setTaskselected([])
    setData("AddedTasks", tasks);
    setTasks(tasks);
  };

  const selectedTask = (task, id) => {
    setTaskselected(task);
    setSelectedIndex(id);
  };
  const hidePopup = () => {
    setShow(false);
  };
  const showPopup = (formName) => {
    setShow(true);
    setFormName(formName)
  };
  function successNotification(message){
    toast.success(message,{
      autoClose: 2000
    });
  }
  function errorNotification(message){
    toast.error(message,{
      autoClose: 2000,
      progressStyle: { background: 'red' }
    });
  }
  return (
    <ReviewCtx.Provider value={{ showPopup ,taskselected,setFormName,setPosts,changeAndSave,successNotification,errorNotification }}>
      <div>
        <ToastContainer />
      </div>
      {show && <BlurBgForm hidePopup={hidePopup} formName={formName} posts={posts} setFormName={setFormName}/>}
      <div className="mainContent">
        <div className="reviewTasks">
          {tasks.filter((val) => val.task_status === "In Review").length===0?<>
          <div></div>
            <div className="noTaskForReview"><FontAwesomeIcon style={{height:"15rem"}} icon={faTriangleExclamation} /><h2>No Tasks For Review</h2></div>
          <div></div>
          </>
          :
          <>{tasks.filter((val) => val.task_status === "In Review").map((val, index) => {
            return (
              <div
                key={index}
                style={{ height: "max-content", marginTop: "1rem" }}
                onClick={() => selectedTask(val, index)}
              >
                <ReviewCards val={val} />
              </div>
            );
          })}</>}
          
        </div>
        <DetailsLayout
          task={taskselected}
          selectedIndex={selectedIndex}
          setTasks={setTasks}
          tasks={tasks}
          setTaskselected={setTaskselected}
          showViewButton={true}
        />
      </div>
    </ReviewCtx.Provider>
  );
}

export default TaskForReview;
