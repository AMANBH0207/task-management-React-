import React from 'react';
import '../Userstyle/UserNav.css';
import logo from '../Userphotos/Task assignment logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHouse,faCircleExclamation,faMagnifyingGlass, faBell,faCircleQuestion,faGear,faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import UserRoutes from '../Routes/UserRoutes';


function UserNav() {
  return (
    <div className='userBody'>

<nav className="userNavBar">
            <div className="navBar1">
                <div ><img className="Userlogo" src={logo} alt=""/></div>
            <div className="center">
                <ul className="userNavLinks">
                    <li><a href="index.html"><FontAwesomeIcon icon={faHouse} /> Home</a></li>
                    <li><a href="./Html/IssuesReported.html"><FontAwesomeIcon icon={faCircleExclamation}/> Rejected Tasks</a></li>
                </ul>
            </div>
            </div>
            <div className="userProfileUsr">
                <div className="inputSearchUser center">
                <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                    <input type="text" placeholder="Enter to search"/>
                </div>
                <div className="bellIcon">
                <FontAwesomeIcon icon={faBell} size="lg" />
                <FontAwesomeIcon icon={faCircleQuestion} size="lg" />
                <FontAwesomeIcon icon={faGear} size="lg" />
                <FontAwesomeIcon icon={faCircleHalfStroke} size="lg" />
                </div>
                <div className="allUserProfileDiv">
                    <img className="center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZSsRW8ahClgpWbdmk1wKCv_6d5ZNEf_kuZLEmarGpS7KAd8cHuXo9UPSJOy_EESmpu8&usqp=CAU" alt=""/>
                    <div className="profileOptions">
                        <p><b>Account</b></p>
                        <div className="account">
                            <img className="center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZSsRW8ahClgpWbdmk1wKCv_6d5ZNEf_kuZLEmarGpS7KAd8cHuXo9UPSJOy_EESmpu8&usqp=CAU" alt=""/>
                            <div className="center">
                                <p>User123</p>
                                <span>user123@gmail.com</span>
                            </div>
                        </div>
                        <p><b>Manage</b></p>
                        <div className="Manage">
                            <p>Manage Account</p>
                            <p>Profile</p>
                            <p>Notifications</p>
                        </div>
                        <p><b><a href="./Html/UserLogin.html">Logout</a></b></p>
                    </div>    
                </div>
            </div>
        </nav>
        <UserRoutes/>
    </div>
  )
}

export default UserNav