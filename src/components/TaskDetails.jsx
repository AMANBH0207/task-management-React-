import React from "react";
import "../style/TaskDetails.css";

function TaskDetails(props) {
  return (
    <>
      {/* Review Task Details */}
      <div className="tasksReviewDet">
        <div className="AddTaskPopup">
          <div className="newTaskForm">
            <div className="titleDiv">
              <div>
                <label>Title: </label>
                <span>FrontEnd Task</span>
                <div>
                  <label>Discription: </label>
                  <br />
                  <textarea
                    id="w3review"
                    name="w3review"
                    rows="4"
                    cols="50"
                    value="At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies."
                    disabled
                  ></textarea>
                </div>
              </div>
              <div className="unassignedUsers">
                <div className="assigneduser">
                  <h5>Assigned To</h5>
                  <img
                    className="center"
                    src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp1.jpeg?alt=media&token=c81c35a9-fb06-42e4-9885-cd076f1dde44"
                    alt=""
                  />
                  <img
                    className="center"
                    src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp2.jpeg?alt=media&token=2ee136f8-72c7-4768-b860-5e3e42ffeb27"
                    alt=""
                  />
                  <img
                    className="center"
                    src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp6.jpeg?alt=media&token=31313693-ee66-490a-92fd-68bba7cfd2da"
                    alt=""
                  />
                  <img
                    className="center"
                    src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp4.jpeg?alt=media&token=6dcd9e2d-c75d-4ed2-b96a-b2bd168d0a97"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <label>Task Type: </label>
              <span>Single</span>
              <br />
              <label>Assignee: </label>
              <span>Unassined user 1</span>
              <span>Unassined user 2</span>
              <span>Unassined user 3</span>
              <span>Unassined user 4</span>
              <br />
              <label>Start Date: </label>
              <span>Given Start Date</span>
              <br />
              <label>Due Date: </label>
              <span>Given Due Date</span>
              <br />
              <label>Priority: </label>
              <span>High</span>
              <br />
              <label>Addtional Attachments: </label>
              <span>Image.jpg</span>
            </div>
          </div>
          <div className="savetaskDiv" style={{ display: props.props }}>
            <div className="saveTaskBtns">
              <button>Approve and report completed</button>
              <button>Deny and create an issue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskDetails;
