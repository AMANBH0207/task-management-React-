import React from 'react'

function ButtonComp({id, className, onClick, ButtonName}) {
  return (
    <>
    <button id={id} className={className} onClick={onClick} >
    {ButtonName}
    </button>
    </>
  )
}

export default ButtonComp