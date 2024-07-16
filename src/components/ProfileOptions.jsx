import React from 'react'
import '../style/ProfileOptions.css'

function ProfileOptions({userDet}) {
  return (
    <>
    <div className="profileOptions">
                <p><b>Account</b></p>
                <div className="account">
                  <img className="center" src={userDet} alt="" />
                  <div className="center">
                    <p>User-name</p>
                    <span>User-name@gmail.com</span>
                  </div>
                </div>
                <p><b>Manage</b></p>
                <div className="Manage">
                  <p>Manage Account</p>
                  <p>Profile</p>
                  <p>Notifications</p>
                </div>
              </div>
    </>
  )
}

export default ProfileOptions