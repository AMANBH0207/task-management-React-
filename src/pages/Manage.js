import React from "react";
import "../style/Manage.css";
import ManageRoutes from "../Routes/ManageRoutes";
import { Link } from "react-router-dom";

function Manage() {
  return (
    <>
      <div className="ManageTandU">
        {/* Switch between Tasks and users */}
        <div className="choose">
          <ul>
            <li>
              <Link to="">Tasks</Link>
            </li>
            <li>
              <a href="./ManageUsers.html">Users</a>
            </li>
          </ul>
        </div>
        <ManageRoutes />
      </div>
    </>
  );
}

export default Manage;
