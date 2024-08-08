import React, { createContext } from "react";
import "../style/Issues.css";
import { Link, Outlet } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export const IssueTaskCtx = createContext();
function Issues() {
  
  function successNotification(message){
    toast.success(message,{
      autoClose: 2000
    });
  }

  function errorNotification(message){
    toast.error(message,{
      progressStyle: { background: 'red' }
    });
  }

  return (
    <>
     <div>
        <ToastContainer />
      </div>
      <div className="issuesDiv">
        <div className="issue1">
          <ul>
            <li>
              <Link to="create">
                <b>Create an issue</b>
              </Link>
            </li>
            <li>
              <Link to="reported">Reported</Link>
            </li>
          </ul>
        </div>
        <IssueTaskCtx.Provider value={{successNotification, errorNotification}}>
        <Outlet/>
        </IssueTaskCtx.Provider>
      </div>
    </>
  );
}

export default Issues;
