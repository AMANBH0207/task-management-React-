import React, {useState} from 'react';
import TaskDetails from '../components/TaskDetails';
import ManageTaskList from '../components/ManageTaskList';
import ActionButtons from './ActionButtons';

function ManageTasks() {
    const [task, setTask] = useState([]);
    const selectedTask =(task)=>{
        setTask(task);
      }

  return (
    <>
     <ManageTaskList selectedTask={selectedTask}/>
     <TaskDetails component={<ActionButtons/>} task={task}/> </>
  )
}

export default ManageTasks