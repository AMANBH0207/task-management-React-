import React, { useContext } from "react";
import "../Userstyle/UpdatePost.css";
import ButtonComp from "../components/ButtonComp";
import { ctx } from "./TaskBoard";

function UpdatePost({ task }) {
  const { showPopup } = useContext(ctx);
  return (
    <>
      <div className="ButtonsDivupdate">
        <ButtonComp
          className={"Update pointer"}
          ButtonName={"Post Update"}
          onClick={() => showPopup(task,"Post an update")}
        />
        <ButtonComp
          className={"viewUpdates pointer"}
          ButtonName={"View Posts"}
          onClick={() => showPopup(task,"View all Posts")}
        />
      </div>
    </>
  );
}

export default UpdatePost;
