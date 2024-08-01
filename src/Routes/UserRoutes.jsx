import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TaskBoard from '../UserComponents/TaskBoard'

function UserRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<TaskBoard/>}/>
    </Routes>


    </>
  )
}

export default UserRoutes