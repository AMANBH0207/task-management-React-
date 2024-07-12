import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'
import ForgorPassword from '../components/ForgotPassword'
import Welcomepage from '../pages/Welcome_page'
import NavBar from '../components/NavBar'

function LogRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Welcomepage/>} />
        <Route path='/login-admin' element={<Login formVal={true} />} />
        <Route path='/signup-admin' element={<Signup formVal={true} />} />
        <Route path='/forgotPassword-admin' element={<ForgorPassword formVal={true}/>} />
        <Route path='/login-user' element={<Login formVal={false}/>} />
        <Route path='/signup-user' element={<Signup formVal={false}/>} />
        <Route path='/forgotPassword-user' element={<ForgorPassword formVal={false}/>} />
        <Route path='/admin/*' element={<NavBar/>}/>
    </Routes>
    </>
  )
}

export default LogRoutes