import { React } from "react";
import "../style/NavBar.css";
import taskassignmentlogo from "../Userphotos/Task assignment logo.png";
import Managelogo from "./Assets/Manage_TaskAND_Users.png";
import User from "./Assets/User.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse,faListCheck,faBarsProgress,faCircleExclamation,faRightFromBracket,faBell,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProfileOptions from "./ProfileOptions";
function NavBar({component}) {
  return (
    <div>
      <div className="mainDiv">
        <nav className="navBar">
          <div className="logo">
            <a href="./Dashboard.html">
              <img src={taskassignmentlogo} alt="taskassignmentlogo"/>
            </a>
          </div>
          <ul className="navLinks">
            <li>
              <Link to="/admin/home">
                <FontAwesomeIcon icon={faHouse} />
              </Link>
            </li>
            <li>
              <Link to="/admin/manage">
                <img
                  src={Managelogo}
                  alt="TaskAndUser"
                  style={{ height: "30px" }}
                />
              </Link>
            </li>
            <li>
              <Link to="/admin/task-for-review">
                <FontAwesomeIcon icon={faListCheck} />
              </Link>
            </li>
            <li>
              <Link to="/admin/timeline">
                <FontAwesomeIcon icon={faBarsProgress} />
              </Link>
            </li>
            <li>
              <Link to="/create-an-issue">
                <FontAwesomeIcon icon={faCircleExclamation} />
              </Link>
            </li>
          </ul>
          <div className="addtionalLinksDiv">
            <ul className="addtionalLinks">
              <li>
                <a href="../Index.html">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* second div  */}
        <div className="secondDiv">
          <div className="secondDiv1">
            <div className="welcomeUser">
              <h4>Welcome User</h4>
              <div className="searchAndResults">
                {" "}
                <div className="inputSearch">
                  <FontAwesomeIcon
                    className="searchIcon"
                    icon={faMagnifyingGlass}
                  />
                  <input
                    type="text"
                    placeholder="Enter to search"
                    id="search"
                  />
                </div>
                <div className="searchresultsDiv"></div>
              </div>
            </div>
            <div className="userProfile">
              <div className="userProfileDiv">
                <img src={User} alt="" />
                <p>User-name</p>
                <ProfileOptions userDet={User} />
              </div>
              <div className="bellIcon">
                <FontAwesomeIcon icon={faBell} size="lg" />
              </div>
            </div>
          </div>
          {component}
        </div>
      </div>
    </div>
  );
}
export default NavBar;