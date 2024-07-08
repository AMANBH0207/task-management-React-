import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "../style/FormBg.css";

function FormBg(props) {
  return (
    <>
    <div className='formBg'>
    <div className="AddTaskPopup0">
            <div className="newTask0"><span><b>{props.title}</b></span><i className='pointer'><FontAwesomeIcon icon={faXmark} onClick={props.handleCross}/></i></div>
                {props.ele}
            </div>
    </div>

    
    </>
  )
}

export default FormBg