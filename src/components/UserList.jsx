import React from "react";
import "../style/UserList.css";

function UserList({users}) {
  return (
    <>
      <ul>
        {users.map((user,index)=>{
            return (<>
        <li class="pointer List" key={index}>
        <div class="userDet"><img class="center" src={user.userphoto} alt=""/><span class="center" >{user.firstname}</span></div>
        <div class="center"><p >{user.email}</p></div>
        </li>
            </>)
        })}
      </ul>
    </>
  );
}

export default UserList;
