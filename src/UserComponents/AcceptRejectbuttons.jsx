import React, { useContext } from "react";
import "../Userstyle/AcceptRejectbuttons.css"
import ButtonComp from "../components/ButtonComp"
import { ctx } from "./TaskBoard";
function AcceptRejectbuttons({task}) {
    const { Accept, Reject }=useContext(ctx);
  return (
    <>
      <div className="ButtonsDiv center">
        <ButtonComp className={"Accept pointer"} ButtonName={"Accept"} onClick={()=>Accept(task)}/>
        <ButtonComp className={"Reject pointer"} ButtonName={"Reject"} onClick={()=>Reject(task)}/>
      </div>
    </>
  );
}

export default AcceptRejectbuttons;
