import React from 'react';
import '../style/AssignedUsers.css';

function AssignedUsers(users) {
  return (
    <>
    <div className="assigneduser">
        {users.users.map((user)=>{
            return  <img className="center" src={user.image} alt=""/>
        })}
    </div>
    </>
  )
}

export default AssignedUsers