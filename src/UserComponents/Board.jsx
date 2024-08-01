import React from "react";
import "../Userstyle/Board.css"
import Card from "./Card";

function Board({boardType, boardName, taskType}) {
  return (
    <>
      <div className={`${boardType} board1`}>
        <h4>{boardName}</h4>
        <div className="userTaskList">
          <ul>
            { taskType.map((task,index)=>
            <Card task={task} key={index}/>
            )
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default Board;
