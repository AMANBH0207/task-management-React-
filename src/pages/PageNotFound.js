import React from 'react'
import AssignedUsers from '../components/AssignedUsers'
import data from "../Data/Data.json";

function PageNotFound() {

  return (
    <div>PageNotFound

<AssignedUsers users={data[0].assignedusers}/>
    </div>
  )
}

export default PageNotFound