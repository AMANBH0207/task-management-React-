import React from 'react';
import '../style/AssignedUsers.css';

function AssignedUsers({users}) {
  return (
    <>
        {users.map((user,index)=>{
            return  <img key={index} className="center" src={user.userphoto} alt=""/>
        })}
    </>
  )
}

export default AssignedUsers