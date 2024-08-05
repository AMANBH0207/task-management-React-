import React from "react";
import logo from "../Userphotos/Task assignment logo.png";
import sendnext from "../Userphotos/send_next.png";
import reassign from "../Userphotos/Reassign.png";
import update from "../Userphotos/PostUpdate.png";
import Manage from "../Userphotos/Assign_Tasks.png";
import "../style/Welcome_page.css";
import { Link } from "react-router-dom";

function Welcome_page() {
  return (
    <div className="welcome_page">
      <div className="top_section">
        <img className="Brandlogo" src={logo} alt="logo" />
        <div className="welcome_section">
          <div className="imgBg0">
            <img src={sendnext} alt="sendnext" />
          </div>
          <div style={{ color: "#ffffff", fontSize: "1.2rem" }}>
            <h1>
              <span className="typing-animation">
                Welcome to Task Assignment
              </span>
            </h1>
            <h3>Log in to get glimpse of your tasks</h3>
            <Link to="/login-user">
              <button className="UserLink pointer">Log In</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="second_section">
        <h1>Discover features of Task Assignment</h1>
        <button>Tasks</button>
        <button>Timeline</button>
        <button>Decision</button>
        <button>Insights</button>
      </div> */}

      <div className="third_section">
        <div className="Info_section section1">
          <div
            style={{
              lineHeight: "1.5",
              backgroundColor: "white",
              padding: "2rem",
              display: "flex",
            }}
          >
            <div style={{ padding: "1rem 2.5rem" }}>
              <h2>Not Satisfied? Reassign....</h2>
              <div style={{ fontSize: "13px" }}>
                <p>
                  Not satisfied by the task sent for review? No worry, just
                  reassign.Our system is designed to ensure you get the quality
                  and precision you need.
                </p>
                <ol>
                  <li>
                    <b>Identify the Issue:</b> If you find that the task doesn't
                    meet your expectations, identify the specific areas that
                    need improvement.
                  </li>
                  <li>
                    <b>Provide Feedback:</b> Communicate your concerns clearly.
                    Detail what aspects were lacking and what changes are
                    necessary.
                  </li>
                  <li>
                    <b>Reassign the Task:</b> Use our simple reassignment
                    feature to send the task back for revisions.{" "}
                  </li>
                </ol>
              </div>
            </div>
            <img
              src={reassign}
              alt="reassign"
              style={{ border: "10px solid #1868db" }}
            />
          </div>
        </div>

        <div className="Info_section section2">
          <div
            style={{
              lineHeight: "1.5",
              backgroundColor: "white",
              padding: "2rem",
              display: "flex",
            }}
          >
            <img
              src={update}
              alt="update"
              style={{ border: "10px solid #699a23" }}
            />
            <div style={{ padding: "1rem 2.5rem" }}>
              <h2>Post Updates</h2>
              <div style={{ fontSize: "13px" }}>
                <p>
                  Just post links, files and progress for the task on progress.
                  Stay on top of your project with our streamlined update
                  system.
                </p>
                <ol>
                  <li>
                    <b>Post Links:</b> Share relevant links directly within the
                    task page. Whether it's reference materials, external
                    resources, or examples.
                  </li>
                  <li>
                    <b>Upload Files:</b> Attach important files to the task.
                    From documents and spreadsheets to images and presentations,
                    our platform supports a wide range of file
                  </li>
                  <li>
                    <b>Provide Details:</b> Include detailed notes and comments
                    with each update. Clearly outline what has been done, what
                    is currently being worked on, and any challenges or
                    roadblocks encountered.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="Info_section section3">
          <div
            style={{
              lineHeight: "1.5",
              backgroundColor: "white",
              padding: "2rem",
              display: "flex",
            }}
          >
            <div style={{ padding: "1rem 2.5rem" }}>
              <h2>Manage Tasks</h2>
              <div style={{ fontSize: "13px" }}>
                <p>
                  Manage All you tasks and check their status at
                  ease.Effortlessly oversee all your tasks and stay updated on
                  their status with our intuitive task management system
                </p>
                <ol>
                  <li>
                    <b>Centralized Dashboard:</b> View all your tasks in one
                    place with our centralized dashboard. Get a comprehensive
                    overview of what's pending, in progress, and completed.
                  </li>
                  <li>
                    <b>Status Updates:</b> Easily check the status of each task.
                    With clear indicators and progress bars, you can quickly see
                    how far along each task is and what needs your attention.
                  </li>
                  <li>
                    <b>Prioritize Work:</b> Organize tasks by priority to ensure
                    the most critical work is completed first.
                  </li>
                  <li>
                    <b>Set Deadlines:</b> Assign due dates to tasks and receive
                    reminders as deadlines approach. Stay on schedule and ensure
                    timely completion of all your projects.
                  </li>
                </ol>
              </div>
            </div>
            <img
              src={Manage}
              alt="Manage"
              style={{ border: "10px solid #d43434" }}
            />
          </div>
        </div>
      </div>
      <div className="fourth_section">
        <div className="fourth_sectionInner">
          <div>
            <img className="Brandlogo" src={logo} alt="logo" />
          </div>
          <div>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Disclaimer</p>
            <p>Sitemap</p>
          </div>
          <div>
            <p>About us</p>
            <p>Career</p>
            <p>Contact</p>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <p>FAQ</p>
            <p>Blog</p>
            <p>Help</p>
            <Link to="/login-admin">
              <p>Assign Tasks</p>
            </Link>
          </div>
        </div>
        <p>© 2024 Task Assignment. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Welcome_page;
