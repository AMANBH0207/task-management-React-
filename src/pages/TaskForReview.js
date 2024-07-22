import React, {useState , useEffect} from "react";
import "../style/TaskForReview.css";
import data from "../Data/Data";
import ReviewCards from "../components/ReviewCards";
import DetailsLayout from "../components/DetailsLayout";

function TaskForReview() {
  const [tasks, setTasks] = useState([]);
  const [taskselected, setTaskselected] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setTasks(data);
  }, []);


  const selectedTask = (task, id) => {
    setTaskselected(task);
    setSelectedIndex(id);
  };

  return (
    <>
      <div className="mainContent">
        <div className="reviewTasks">
          {data.map((val, index) => {
            return <div onClick={()=>selectedTask(val, index)}>
                  <ReviewCards val={val} tasks={tasks} />
              </div>
          })}
        </div>
       <DetailsLayout task={taskselected} selectedIndex={selectedIndex} setTasks={setTasks} tasks={tasks} setTaskselected={setTaskselected}/>
      </div>
    </>
  )
}

export default TaskForReview;
