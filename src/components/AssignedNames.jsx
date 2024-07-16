import React from 'react'

function AssignedNames({names}) {

  return (
    <>
    {names.map((name, index)=>{
        return <span key={index}>{name.firstname}</span>
    })}
    </>
  )
}

export default AssignedNames