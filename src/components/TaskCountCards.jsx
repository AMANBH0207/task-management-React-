import React from "react";
import "../style/TaskCountCards.css";
import UnassignedLogo from "./Assets/Unassigned Icon.svg";
import AssignedLogo from "./Assets/Assigned Icon.svg";
import ReviewLogo from "./Assets/Review Icon.svg";
import CompleteLogo from "./Assets/Completed Icon.svg";

function TaskCountCards() {
  return (
    <>
      <div className="Tasks">
        <div className="unassignedTask card">
          <div
            style={{
              backgroundColor: "#b2afe4",
              width: "46px",
              height: "46px",
              borderRadius: "50%",
            }}
          >
            <img
              style={{ padding: "0.5rem" }}
              src={UnassignedLogo}
              alt="Unassigned"
            />
          </div>
          <h4>Unassigned Tasks</h4>
          <p>10</p>
        </div>
        <div className="assignedTasks card">
          <div
            style={{
              backgroundColor: "#edb996",
              width: "46px",
              height: "46px",
              borderRadius: "50%",
            }}
          >
            <img
              style={{ padding: "0.5rem" }}
              src={AssignedLogo}
              alt="Assigned"
            />
          </div>
          <h4>Assigned Tasks</h4>
          <p>20</p>
        </div>
        <div className="tasksForReview card">
          <div
            style={{
              backgroundColor: "#d06288",
              width: "46px",
              height: "46px",
              borderRadius: "50%",
            }}
          >
            <img
              style={{ padding: "0.5rem" }}
              src={ReviewLogo}
              alt="Unassigned"
            />
          </div>
          <h4>Task for Review</h4>
          <p>5</p>
        </div>
        <div className="completedTasks card">
          <div
            style={{
              backgroundColor: "#78d5e8",
              width: "46px",
              height: "46px",
              borderRadius: "50%",
            }}
          >
            <img
              style={{ padding: "0.5rem" }}
              src={CompleteLogo}
              alt="Unassigned"
            />
          </div>
          <h4>Completed Tasks</h4>
          <p>15</p>
        </div>
      </div>
    </>
  );
}

export default TaskCountCards;
