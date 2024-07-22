import React, { useState, useEffect } from "react";
import ManageList from "./ManageList";
import { getData } from "../pages/Service";
import DetailsLayout from "./DetailsLayout";

function ManageTasks() {
  const [tasks, setTasks] = useState([]);
  const [taskselected, setTaskselected] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setTasks(getData("AddedTasks"));
  }, []);

  const selectedTask = (task, id) => {
    setTaskselected(task);
    setSelectedIndex(id);
  };

  return (
    <>
      <ManageList selectedTask={selectedTask} tasks={tasks} />
      <DetailsLayout task={taskselected} selectedIndex={selectedIndex} setTasks={setTasks} tasks={tasks} setTaskselected={setTaskselected}/>
    </>
  );
}

export default ManageTasks;
