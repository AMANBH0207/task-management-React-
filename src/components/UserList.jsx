import React from "react";
import "../style/UserList.css";

function UserList({users, selectedUser}) {
  return (
    <>
      <ul>
        {users.map((user,index)=>{
            return (
        <li className="pointer List" key={index} onClick={()=>selectedUser(user,index)}>
        <div className="userDet"><img className="center" src={user.userphoto} alt=""/><span className="center" >{user.firstname}</span></div>
        <div className="center"><p >{user.email}</p></div>
        </li>
          )
        })}
      </ul>
    </>
  );
}

export default UserList;
