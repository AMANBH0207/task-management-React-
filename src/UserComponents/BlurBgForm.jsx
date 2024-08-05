import React from "react";
import "../Userstyle/BlurBgForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PostForm from "./PostForm";
import ViewAllPosts from "./ViewAllPosts";
import PostDetail from "./PostDetail";
import TaskDetails from "./TaskDetails";

function BlurBgForm({hidePopup, formName, posts}) {
  return (
    <>
      <div className="viewDiv">
        <div className="view">
          <div className="Popup">
            <div className="newTask" id="newTask3">
              <span><b>{formName}</b></span>
              <i><FontAwesomeIcon className="pointer" onClick={()=>hidePopup()} icon={faXmark} /></i>
            </div>
            {formName==="Post an update"?<PostForm/>:formName==="View all Posts"?<ViewAllPosts/>:formName==="Show Updates"?<PostDetail posts={posts}/>:formName==="Task Details" && <TaskDetails/>}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlurBgForm;
