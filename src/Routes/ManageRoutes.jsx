import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ManageTasks from '../components/ManageTasks'
import ManageUsers from '../components/ManageUsers'

function ManageRoutes() {
  return (
    <>
    <Routes>
        <Route path='' element={<ManageTasks/>}/>
        <Route path='manageUsers' element={<ManageUsers/>}/>
    </Routes>
    </>
  )
}

export default ManageRoutes