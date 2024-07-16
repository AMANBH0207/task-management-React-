import React from 'react'
import '../style/ActionButtons.css'

function ActionButtons() {
  const Assign = ()=>{
    console.log('assign')
  }
  const Edit = ()=>{
    console.log('edit')
  }
  const Del = ()=>{
    console.log('delete')
  }
  return (
    <>

    <div className="operationsDiv">
    <button className="assignButton pointer" onClick={Assign}>Assign Task</button>
    <button className="editButton pointer" onClick={Edit}>Edit Task</button>
    <button className="deleteButton pointer" onClick={Del}>Delete Task</button>
    </div>
    
    </>
  )
}

export default ActionButtons