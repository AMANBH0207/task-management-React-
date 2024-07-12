import React from 'react'
import TaskAssignLogo from '../components/Assets/Task assignment logo.png'
import '../style/loading.css'

function loading() {
  return (
    <div className='loading'>
        <img className='loadingLogo rotate' src={TaskAssignLogo} alt="logo" />
    </div>
  )
}

export default loading