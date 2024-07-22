import React, { useEffect, useState } from 'react';
import '../style/ManageUsers.css';
import ManageList from './ManageList';
import { getData } from '../pages/Service';
import DetailsLayout from './DetailsLayout';

function ManageUsers() {
  const [users,setUsers]=useState([]);
  const [userSelected, setUserSelected]=useState([]);
  const [selectedUserIndex, setSelectedUserIndex]=useState([]);
  
  useEffect(()=>{
    setUsers(getData("AddedUsers"));
  },[])
  const selectedUser = (user, id) => {
    setUserSelected(user);
    setSelectedUserIndex(id);
  };

  return (
    <>

    <ManageList users={users} selectedUser={selectedUser}/>
    <DetailsLayout user={userSelected} selectedUserIndex={selectedUserIndex} users={users} setUsers={setUsers} setUserSelected={setUserSelected}/>
    
                                        
    </>
  )
}

export default ManageUsers