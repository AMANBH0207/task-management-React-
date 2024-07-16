import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Manage from '../pages/Manage'
import TaskForReview from '../pages/TaskForReview'
import TimeLine from '../pages/TimeLine'

function AdminRoutes() {
  return (
    <div>
         <Routes>
         <Route path='' element={<Home/>}/>
            <Route path='manage/*' element={<Manage />}/>
            <Route path='task-for-review' element={<TaskForReview/>}/>
            <Route path='timeline' element={<TimeLine/>}/>
         </Routes> 
    </div>
  )
}

export default AdminRoutes