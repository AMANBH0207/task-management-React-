import React, { useContext } from "react";
import "../Userstyle/Card.css";
import AcceptRejectbuttons from "./AcceptRejectbuttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { ctx } from "./TaskBoard";
import UpdatePost from "./UpdatePost";
import ViewIssuesbtn from "./ViewIssuesbtn";

function Card({ task }) {
  const { sendToInProgress,sendForReview,showPopup } = useContext(ctx);
  let bgColor="";
  let sendText="";
  if(task.task_status==="Accepted"){
    bgColor="Progress";
    sendText="Send To In Progress"
  }else if(task.task_status==="In Progress"){
    bgColor="Review";
    sendText="Send For Review"
  }
  const sendToNext = () =>{
    if(task.task_status==="Accepted"){
      sendToInProgress(task)
      bgColor="Progress";
    }else if(task.task_status==="In Progress"){
      sendForReview(task)
    }
  }
  const showDetailedTask=(task)=>{
    showPopup(task,"Task Details")
  }
  return (
    <div>
      <li className="TaskDiv">
        {(task.task_status ==="Accepted"||task.task_status ==="In Progress") && (
          <div className="sendToNext pointer">
            <div>{<FontAwesomeIcon icon={faEllipsisVertical} />}</div>
            <div className={`${bgColor} sendNext`}  onClick={()=>sendToNext()}>
              <p>
                <b>{sendText}</b>
              </p>
            </div>
          </div>
        )}
        <div className="pointer" onClick={()=>showDetailedTask(task)}>
        <h5 className="center">{task.title}</h5>
        <p>
          Priority:<b>{task.priority}</b>
        </p>
        <p>
          Start Date:<b>{task.Start_Date}</b>
        </p>
        <p>
          Due date:<b>{task.End_Date}</b>
        </p>
        </div>
        <div className="taskTeamMembers">
          {task.assignedusers.map((user, index) => {
            return (
              <img
                className="center"
                src={user.userphoto}
                alt="user"
                key={index}
              />
            );
          })}
        </div>
        {task.task_status === "Assigned" && <AcceptRejectbuttons task={task} />}
        {task.task_status ==="In Progress" && <UpdatePost  task={task}/>}
        {Object.keys(task.issues).length!==0 &&<ViewIssuesbtn/>}
          

      </li>
    </div>
  );
}

export default Card;
