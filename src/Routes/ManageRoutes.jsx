import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ManageTasks from '../components/ManageTasks'

function ManageRoutes() {
  return (
    <>
    <Routes>
        <Route path='' element={<ManageTasks/>}/>
    </Routes>
    </>
  )
}

export default ManageRoutes