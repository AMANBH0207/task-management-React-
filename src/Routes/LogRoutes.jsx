import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ForgorPassword from "../components/ForgotPassword";
import Welcomepage from "../pages/Welcome_page";
import NavBar from "../components/NavBar";
import UserNav from "../UserComponents/UserNav";
import TaskBoard from "../UserComponents/TaskBoard";
import Home from "../pages/Home";
import Manage from "../pages/Manage";
import TaskForReview from "../pages/TaskForReview";
import TimeLine from "../pages/TimeLine";
import ManageTasks from "../components/ManageTasks";
import ManageUsers from "../components/ManageUsers";
import Issues from "../pages/Issues";
import CreateIssueForm from "../components/CreateIssueForm";

function LogRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="/login-admin" element={<Login formVal={true} />} />
        <Route path="/signup-admin" element={<Signup formVal={true} />} />
        <Route
          path="/forgotPassword-admin"
          element={<ForgorPassword formVal={true} />}
        />

        <Route path="/user" element={<UserNav />}>
          <Route path="" element={<TaskBoard />} />
        </Route>

        <Route path="/login-user" element={<Login formVal={false} />} />
        <Route path="/signup-user" element={<Signup formVal={false} />} />
        <Route
          path="/forgotPassword-user"
          element={<ForgorPassword formVal={false} />}
        />

        <Route path="/admin" element={<NavBar />}>
          <Route path="home" element={<Home />} />
          <Route path="manage" element={<Manage />}>
            <Route path="manageTasks" element={<ManageTasks />} />
            <Route path="manageUsers" element={<ManageUsers />} />
          </Route>
          <Route path="task-for-review" element={<TaskForReview />} />
          <Route path="timeline" element={<TimeLine />} />

          <Route path="issues" element={<Issues/>}>
            <Route path="create" element={<CreateIssueForm/>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default LogRoutes;
