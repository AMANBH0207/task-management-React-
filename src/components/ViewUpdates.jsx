import React, { useContext } from "react";
import "../style/ViewUpdates.css"
import ButtonComp from "./ButtonComp";
import { ReviewCtx } from "../pages/TaskForReview";

function ViewUpdates() {
  const { showPopup }=useContext(ReviewCtx);
  return (
    <div>
      <div className="savetaskDivUpdates">
        <div className="saveTaskBtnsUpdates">
          <ButtonComp ButtonName={"View Updates"} onClick={()=>showPopup("All Updates")}/>
        </div>
      </div>
    </div>
  );
}

export default ViewUpdates;
