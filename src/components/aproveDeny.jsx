import React from 'react'
import '../style/aproveDeny.css'
import ButtonComp from './ButtonComp'

function aproveDeny({setCompleted, setIssueByuser, hidePopup}) {
  const handleComplete = () =>{
    setCompleted()
    hidePopup()
  }

  const handleIssueByUser = () =>{
    setIssueByuser()
    hidePopup()
  }
  return (
    <>
    <div className="savetaskDiv">
            <div className="saveTaskBtns">
              <ButtonComp ButtonName={"Approve and report completed"} onClick={()=>handleComplete()}/>
              <ButtonComp ButtonName={"Deny and create an issue"} onClick={()=>{handleIssueByUser()}}/>
            </div>
          </div>
    </>
  )
}

export default aproveDeny