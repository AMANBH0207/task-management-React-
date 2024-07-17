import React, {useState, useEffect} from 'react';
import TaskDetails from '../components/TaskDetails';
import ManageTaskList from '../components/ManageTaskList';
import ActionButtons from './ActionButtons';
import { getData,setData } from "../pages/Service";

function ManageTasks() {
  const [tasks, setTasks] = useState([]);
  const [taskselected, setTaskselected] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
      setTasks(getData("AddedTasks"));
    }, []);


    const selectedTask =(task ,id)=>{
      setTaskselected(task);
      setSelectedIndex(id);
      } 

      const Assign = ()=>{
        const UpdatedTasks = [...tasks];
        UpdatedTasks[selectedIndex]={...UpdatedTasks[selectedIndex], task_status: "Assigned"}
        setTasks(UpdatedTasks);
        setData("AddedTasks",UpdatedTasks);
      }
      const Edit = ()=>{
        console.log('edit')
      }
      const Del = ()=>{
        const UpdatedTasks = [...tasks];
        UpdatedTasks.splice(selectedIndex,1);
        setTasks(UpdatedTasks);
        setData("AddedTasks",UpdatedTasks);
      }

  return (
    <>
     <ManageTaskList selectedTask={selectedTask} tasks={tasks}/>
     <TaskDetails component={tasks[selectedIndex]?.task_status==="Unassigned" && <ActionButtons Assign={Assign} Edit={Edit} Del={Del}/>} task={taskselected}/> </>
  )
}

export default ManageTasks