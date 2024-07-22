import React, { useEffect, useState } from 'react';
import '../style/ManageUsers.css';
import ManageList from './ManageList';
import { getData } from '../pages/Service';

function ManageUsers() {
  const [users,setUsers]=useState([]);
  
  useEffect(()=>{
    setUsers(getData("AddedUsers"));
  },[])

  console.log(users)

  return (
    <>

    <ManageList users={users}/>

                                        
    </>
  )
}

export default ManageUsers