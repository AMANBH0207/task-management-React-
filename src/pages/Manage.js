import React from "react";
import "../style/Manage.css";
import { Link, Outlet } from "react-router-dom";

function Manage() {
  return (
    <>
      <div className="ManageTandU">
        {/* Switch between Tasks and users */}
        <div className="choose">
          <ul>
            <li>
              <Link to="manageTasks">Tasks</Link>
            </li>
            <li>
              <Link to="manageUsers">Users</Link>
            </li>
          </ul>
        </div>
        <Outlet/>
      </div>
    </>
  );
}

export default Manage;
