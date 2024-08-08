import React, { useContext } from "react";
import ButtonComp from "./ButtonComp";
import { ReviewCtx } from "../pages/TaskForReview";
import ApproveDeny from "./aproveDeny";

function AllUpdates({ hidePopup }) {
  const {
    taskselected,
    setFormName,
    setPosts,
    changeAndSave,
    successNotification,
    errorNotification,
  } = useContext(ReviewCtx);
  const showPost = (post) => {
    setFormName("Show Updates");
    setPosts(post);
  };
  const setCompleted = () => {
    successNotification("Task has been marked as completed");
    taskselected.task_status = "Completed";
    changeAndSave(taskselected);
  };

  const setIssueByuser = () => {
    errorNotification("Task has been marked as Issue by user");
    taskselected.task_status = "Issue by user";
    changeAndSave(taskselected);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <p className="TaskNameClass">{taskselected.title}</p>
      </div>
      <div className="postupdatesSection">
        <ul>
          {taskselected?.posts?.length === 0 ? (
            <div style={{ textAlign: "center" }}>
              <span>No Updates Posted</span>
            </div>
          ) : (
            taskselected?.posts?.map((post, index) => (
              <li key={index}>
                <span>{post.update_title}</span>
                <span>{post.create_date}</span>
                <span>{post.create_time}</span>
                <ButtonComp
                  className={"viewButton pointer"}
                  ButtonName={"View Post"}
                  onClick={() => showPost(post)}
                />
              </li>
            ))
          )}
        </ul>
      </div>
      <ApproveDeny
        setCompleted={setCompleted}
        setIssueByuser={setIssueByuser}
        hidePopup={hidePopup}
      />
    </>
  );
}

export default AllUpdates;
