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
          <div className="imgBg0"><img src={sendnext} alt="sendnext" /></div>
          <div style={{ color: "#ffffff", fontSize: "1.2rem" }}>
          <h1><span className="typing-animation">Welcome to Task Assignment</span></h1>
            <h3>Log in to get glimpse of your tasks</h3>
            <Link to="/login-user"><button className="UserLink pointer">Log In</button></Link>
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
        <div className="Info_section">
          <div>
            <h2>Not Satisfied? Reassign....</h2>
            <p>
              Not satisfied by the task sent for review? No worry, just
              reassign.
            </p>
          </div>
          <div className="imgBg1"><img src={reassign} alt="reassign" /></div>
        </div>
        <div className="Info_section">
          <div className="imgBg2"><img src={update} alt="update" /></div>
          <div>
            <h2>Post Updates</h2>
            <p>Just post links, files and progress for the task on progress.</p>
          </div>
        </div>
        <div className="Info_section">
          <div>
            <h2>Manage Tasks</h2>
            <p>Manage All you tasks and check their status at ease.</p>
          </div>
         <div className="imgBg3"><img src={Manage} alt="Manage" /></div> 
        </div>
      </div>
      <div className="fourth_section">
        <div className="fourth_sectionInner">
            <div>
                <img className="Brandlogo" src={logo} alt="logo"  />
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
            <Link to="/login-admin"><p>Assign Tasks</p></Link>
        </div>
        </div>
        <p>© 2024 Task Assignment. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Welcome_page;
