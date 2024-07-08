import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'
import ForgorPassword from '../components/ForgotPassword'
import Welcomepage from '../pages/Welcome_page'
import NavBar from '../components/NavBar'
import Home from '../pages/Home'
import Manage from '../pages/Manage'
import TaskForReview from '../pages/TaskForReview'
import TimeLine from '../pages/TimeLine'

function LogRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Welcomepage/>} />
        <Route path='/login-admin' element={<Login formVal={true}/>} />
        <Route path='/signup-admin' element={<Signup formVal={true}/>} />
        <Route path='/forgotPassword-admin' element={<ForgorPassword formVal={true}/>} />
        <Route path='/login-user' element={<Login formVal={false}/>} />
        <Route path='/signup-user' element={<Signup formVal={false}/>} />
        <Route path='/forgotPassword-user' element={<ForgorPassword formVal={false}/>} />
        <Route path='/admin/home' element={<NavBar component={<Home/>}/>}/>
        <Route path='/admin/manage' element={<NavBar component={<Manage />}/>}/>
        <Route path='/admin/task-for-review' element={<NavBar component={<TaskForReview />}/>}/>
        <Route path='/admin/timeline' element={<NavBar component={<TimeLine/>}/>}/>
        
    </Routes>
    </>
  )
}

export default LogRoutes