import React from "react";
import "../Userstyle/BlurBgForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function BlurBgForm() {
  return (
    <>
      <div class="viewDiv">
        <div class="view">
          <div class="Popup">
            <div class="newTask" id="newTask3">
              <span>Post Detail</span>
              <i><FontAwesomeIcon icon={faXmark} /></i>
            </div>
            <div id="showpostData"><h1>Hello</h1></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlurBgForm;
