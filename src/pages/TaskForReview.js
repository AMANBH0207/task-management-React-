import React from "react";
import "../style/TaskForReview.css";
import TaskDetails from "../components/TaskDetails";
import data from "../Data/Data";
import ReviewCards from "../components/ReviewCards";

function TaskForReview() {
  console.log(data);
  return (
    <>
      <div className="mainContent">
        <div className="reviewTasks">
          {data.map((val) => {
            return <ReviewCards val={val} />;
          })}
        </div>
        <TaskDetails props="flex" />
      </div>
    </>
  );
}

export default TaskForReview;
