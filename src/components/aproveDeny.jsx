import React from 'react'
import '../style/aproveDeny.css'
import ButtonComp from './ButtonComp'

function aproveDeny() {
  return (
    <>
    <div className="savetaskDiv">
            <div className="saveTaskBtns">
              <ButtonComp ButtonName={"Approve and report completed"} onClick/>
              <ButtonComp ButtonName={"Deny and create an issue"} onClick/>
            </div>
          </div>
    </>
  )
}

export default aproveDeny