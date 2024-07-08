import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faListCheck, faUser } from '@fortawesome/free-solid-svg-icons';
import "../style/ProgressCards.css";
import FormBg from './FormBg';
import AddAUser from './AddAUser';
import AddATaskForm from './AddATaskForm';

function ProgressCards({count}) {
  const [addForm, setForm] = useState(false);
  const [selectedForm, setSelectedForm] = useState("");
  const [formName, setFormName] = useState("");
  function setToTrue(formSelector){
    setForm(true);
    if(formSelector === 1){
        setSelectedForm(<AddATaskForm/>)
        setFormName("Add a Task");
      }else if(formSelector === 2){
        setSelectedForm(<AddAUser count={count}/>)
        setFormName("Add a User");
      }
  }
  function handleCross(){
    setForm(false);
  }


  return (
    <>
    <div className="TasksProgress">
              <div className="Alltasks">
                <h3>Add</h3>
                <div>
                  <button className="createbutton CreateTask" onClick={()=>{setToTrue(1)}}>
                  <FontAwesomeIcon icon={faListCheck} /><b> Add a Task</b>
                    </button>
                  <button className="createbutton CreateUser" onClick={()=>{setToTrue(2)}}>
                      <FontAwesomeIcon icon={faUser} /><b> Add a User</b>
                    </button>
                </div>
            {addForm && <FormBg handleCross={handleCross} ele={selectedForm} title={formName}/>}  
              </div>
              <div className="TasksProgressReport">
                <h3>Tasks Progress</h3>
                {/* In progress tasks popup */}
                <div className="inProgresstasksList">
                  <div className="newTask">
                    <span>Select a Task</span><i className="fa-solid fa-xmark center pointer" id="closePopup"></i>
                  </div>
                </div>
                <div className="TasksProgressCard1 pointer" id="card1"><FontAwesomeIcon icon={faPlus} size="xl" /></div>
                <div className="TasksProgressCard1 pointer" id="card2"><FontAwesomeIcon icon={faPlus} size="xl" /></div>
                <div className="TasksProgressCard1 pointer" id="card3"><FontAwesomeIcon icon={faPlus} size="xl" /></div>
              </div>
            </div>
    </>
  )
}

export default ProgressCards