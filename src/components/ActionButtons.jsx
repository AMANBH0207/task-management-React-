import React from 'react'
import '../style/ActionButtons.css'
import ButtonComp from './ButtonComp';

function ActionButtons({Assign, Edit, Del, Update, goBack, isEdited}) {
 
  return (
    <>
    <div className="operationsDiv">
      {isEdited?<>
      <ButtonComp id={"AssignTask"} className={"assignButton pointer"} onClick={Assign} ButtonName={"Assign Task"}/>
      <ButtonComp id={"editButton"} className={"editButton pointer"} onClick={Edit} ButtonName={"Edit Task"}/>
      <ButtonComp id={"deleteButton"} className={"deleteButton pointer"} onClick={Del} ButtonName={"Delete Task"}/>
      </>
    :<>
      <ButtonComp id={"UpdateButton"} className={"assignButton pointer"} onClick={Update} ButtonName={"Update Task"}/>
      <ButtonComp id={"CancelButton"} className={"deleteButton pointer"} onClick={goBack} ButtonName={"Go Back"}/>
    </>}
    </div>
    </>
  )
}

export default ActionButtons