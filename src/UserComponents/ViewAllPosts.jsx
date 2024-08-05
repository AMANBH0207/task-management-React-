import React, { useContext } from "react";
import { ctx } from "./TaskBoard";
import ButtonComp from "../components/ButtonComp";
import "../Userstyle/ViewAllPosts.css";

function ViewAllPosts() {
  const { selectedTask,changeSndSaveStatus,showUpdatesPopup } = useContext(ctx);

  const showPost=(post)=>{
    showUpdatesPopup(post,"Show Updates");
  }

  const deleteUpdate=(index)=>{
     selectedTask.posts.splice(index,1)
     changeSndSaveStatus(selectedTask);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <p className="TaskNameClass">{selectedTask.title}</p>
      </div>
      <div className="postupdatesSection">
        <ul>
        {selectedTask.posts.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <span>No Updates Posted</span>
          </div>
        ) : (
          selectedTask.posts.map((post,index) => (
            <li key={index}>
              <span>{post.update_title}</span>
              <span>{post.create_date}</span>
              <span>{post.create_time}</span>
              <ButtonComp className={"viewButton pointer"} ButtonName={"View Post"} onClick={()=>showPost(post)}/>
              <ButtonComp className={"deleteButtonBtn pointer"} ButtonName={"Delete Post"} onClick={()=>deleteUpdate(index)}/>
            </li>
          ))
        )}
        </ul>
      </div>
    </>
  );
}

export default ViewAllPosts;
