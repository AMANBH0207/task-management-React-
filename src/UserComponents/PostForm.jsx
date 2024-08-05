import React, { useContext, useState } from "react";
import "../Userstyle/PostForm.css";
import { ctx } from "./TaskBoard";

function PostForm() {
  const {
    selectedTask,
    changeSndSaveStatus,
    successNotification,
    errorNotification,
    hidePopup,
  } = useContext(ctx);
  const [update, setUpdate] = useState({
    update_title: "",
    update_description: "",
    create_date: "",
    create_time: "",
    update_link: "",
    update_file: "",
  });
  const getValue = (e) => {
    e.preventDefault();
    if (update.update_title.length === 0) {
      errorNotification("Please Enter Title");
    } else if (update.update_description.length === 0) {
      errorNotification("Please Enter description");
    } else {
      let date1 = new Date();
      let localString = date1.toLocaleString();
      update.create_date = localString.split(",")[0];
      update.create_time = localString.split(",")[1];
      selectedTask.posts.push(update);
      changeSndSaveStatus(selectedTask);
      successNotification("Update has been saved");
      hidePopup();
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <p className="TaskNameClass">{selectedTask.title}</p>
      </div>
      <form id="newTaskFormId">
        <div className="newTaskFormDiv">
          <div className="newTaskForm">
            <label>Title: </label>
            <input
              className="formInput"
              type="text"
              name="title"
              id="title"
              placeholder="Enter title for update"
              onChange={(e) =>
                setUpdate({ ...update, update_title: e.target.value })
              }
            />
            <div>
              <label>Description: </label>
              <br />
              <textarea
                name="description"
                rows="4"
                cols="107"
                id="description"
                onChange={(e) =>
                  setUpdate({ ...update, update_description: e.target.value })
                }
              ></textarea>
            </div>
            <label>Associated Links: </label>
            <input
              className="formInput"
              placeholder="Associated link (if any)"
              id="link"
              onChange={(e) =>
                setUpdate({ ...update, update_link: e.target.value })
              }
            />
            <br />
            <label>Addtional Attachments: </label>
            <input
              className="chooseFile"
              type="file"
              accept=".pdf, .jpg, .jpeg, .png"
              id="fileInput"
              onChange={(e) =>
                setUpdate({ ...update, update_file: e.target.files[0]?.name })
              }
            />
            <p style={{ margin: "0" }}>
              <i style={{ color: "red" }}>
                Note: upload files only in .pdf, .jpg, .jpeg, .png under 2mb.
              </i>
            </p>
          </div>
        </div>
        <div className="savetaskDiv">
          <div className="errormsg"> </div>
          <div className="saveTaskBtns">
            <button onClick={getValue}>Post</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default PostForm;
