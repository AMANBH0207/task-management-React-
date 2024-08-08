import React from 'react'
import ButtonComp from '../components/ButtonComp'
import "../Userstyle/ViewIssuesbtn.css"

function ViewIssuesbtn() {
  return (
    <>
    
    <div className='viewIssuesbuttons'>
        <ButtonComp className={"viewIssues pointer"} ButtonName={"View Issues"}/>
    </div>
    
    </>
  )
}

export default ViewIssuesbtn