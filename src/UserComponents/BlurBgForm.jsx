import React, { useEffect, useState } from "react";
import "../Userstyle/BlurBgForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import PostForm from "./PostForm";
import ViewAllPosts from "./ViewAllPosts";
import PostDetail from "./PostDetail";
import TaskDetails from "./TaskDetails";
import AllUpdates from "../components/AllUpdates";

function BlurBgForm({ hidePopup, formName, posts, setFormName }) {
  const [formOnBack, setFormOnBack] = useState("");
  useEffect(() => {
    if (formName === "View all Posts") {
      setFormOnBack("View all Posts");
    } else if (formName === "All Updates") {
      setFormOnBack("All Updates");
    }
  }, [formName]);

  return (
    <>
      <div className="viewDiv">
        <div className="view">
          <div className="Popup">
            <div className="newTask" id="newTask3">
              <div>
                {formName === "Show Updates" && (
                  <i>
                    <FontAwesomeIcon
                      onClick={() => setFormName(formOnBack)}
                      className="pointer"
                      icon={faArrowRight}
                      flip="horizontal"
                    />{" "}
                  </i>
                )}
                <span>
                  <b>{formName}</b>
                </span>
              </div>
              <i>
                <FontAwesomeIcon
                  className="pointer"
                  onClick={() => hidePopup()}
                  icon={faXmark}
                />
              </i>
            </div>
            {formName === "Post an update" ? (
              <PostForm />
            ) : formName === "View all Posts" ? (
              <ViewAllPosts />
            ) : formName === "Show Updates" ? (
              <PostDetail posts={posts} />
            ) : formName === "Task Details" ? (
              <TaskDetails />
            ) : (
              formName === "All Updates" && <AllUpdates hidePopup={hidePopup} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlurBgForm;
