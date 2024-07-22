import React from "react";
import '../style/UserDetails.css'
import ButtonComp from "./ButtonComp";
import { setData } from "../pages/Service";

function UserDetails({user, selectedUserIndex, users, setUsers, setUserSelected}) {
  const Del = () => {
    const UpdatedUsers = [...users];
    UpdatedUsers.splice(selectedUserIndex, 1);
    setUsers(UpdatedUsers);
    setData("AddedUsers", UpdatedUsers);
    setUserSelected([]);
  };
  console.log(user)
  return (
    <>
    {user.length===0?
    <div className="noTaskSelected">
    <b>No User Selected</b>
  </div>
      :
      <div className="taskdet">
      <img className="profile center" src={user.userphoto} alt=""/>
      <div>
            <h4>{user.firstname}</h4>
            <p>{user.email}</p>
            <div>
                <p>Tasks Completed:10</p>
                <p>Assigned Tasks:5</p>
                <p>Tasks Rejected:2</p> 
                <p>Late Tasks:4</p>
            </div>
        </div>
        <ButtonComp className={"deleteButton pointer"} ButtonName={"Delete"} onClick={Del}/>
      </div>
      }
    </>
  );
}

export default UserDetails;
