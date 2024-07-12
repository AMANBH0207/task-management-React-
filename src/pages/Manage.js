import React from 'react';
import '../style/Manage.css';
import TaskDetails from '../components/TaskDetails';
import ManageTaskList from '../components/ManageTaskList';

function Manage() {
  return (
    <>
    
    <div className="ManageTandU">
                    {/* Switch between Tasks and users */}
                    <div className="choose">
                        <ul>
                            <li><a href="./Manage.html">Tasks</a></li>
                            <li><a href="./ManageUsers.html">Users</a></li>
                        </ul>
                    </div>
                    {/* ManageTask */}
                    <ManageTaskList/>
                    <TaskDetails props="none"/>

                </div>
    </>
  )
}

export default Manage