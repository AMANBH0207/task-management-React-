import React, {useState , useEffect} from "react";
import "../style/TaskForReview.css";

import ReviewCards from "../components/ReviewCards";
import DetailsLayout from "../components/DetailsLayout";
import { getData } from "./Service";

function TaskForReview() {
  const [tasks, setTasks] = useState([]);
  const [taskselected, setTaskselected] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setTasks(getData("AddedTasks").filter((val)=>val.task_status==="In Review"));
  }, []);
  const selectedTask = (task, id) => {
    setTaskselected(task);
    setSelectedIndex(id);
  };
  return (
    <>
      <div className="mainContent">
        <div className="reviewTasks">
          {tasks.map((val, index) => {
            return <div key={index} style={{height:"max-content",  marginTop: "1rem"}} onClick={()=>selectedTask(val, index)}>
                  <ReviewCards val={val} />
              </div>
          })}
        </div>
       <DetailsLayout task={taskselected} selectedIndex={selectedIndex} setTasks={setTasks} tasks={tasks} setTaskselected={setTaskselected}/>
      </div>
    </>
  )
}

export default TaskForReview;
