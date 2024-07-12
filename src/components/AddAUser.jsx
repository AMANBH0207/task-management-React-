import "../style/AddAUser.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function AddAUser({count, handleCross, successNotification, errorNotification}) {
  let Addedusers = JSON.parse(localStorage.getItem("AddedUsers")) || [];
  let Mainusers = JSON.parse(localStorage.getItem("MainUsers")) || [];
  const [userFoundonSearch, setUserFoundonSearch] = useState(undefined);
  function handleSearch(e){
    const value = e.target.value
    setUserFoundonSearch(searchUser(value));
  }
  function searchUser(user) {
    const usr = Mainusers.find(
      (usr) => usr.email.toLowerCase() === user.toLowerCase()
    );
    return usr;
  }
  function saveUser(user) {
    if (user === undefined) {
      errorNotification("User Not Found. Cannot add user");
    } else if (Addedusers.some((value) => value.email === user.email)) {
      errorNotification("User already added");
    } else {
      Addedusers.push(user);
      successNotification("User Added Successfully");
      localStorage.setItem("AddedUsers", JSON.stringify(Addedusers));
      handleCross();
    }
  }

  function handleSave(e){
    e.preventDefault();
    saveUser(userFoundonSearch)
    count(); 
  }
  return (
    <>
      <form>
        <div className="newTaskFormDiv1">
          <div className="newTaskForm1">
            <div className="inputSearch1">
              <i>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </i>
              <input type="text" placeholder="Search Email" id="searchUser" onChange={handleSearch} />
            </div>
            {userFoundonSearch===undefined?<div className="prompt1" id="promptmsg">No Users Found</div>:<div className="UserFound1">
              <div id="userFoundonSearch" style={{ display: "flex", justifyContent: "space-between" }}>
                <img src={userFoundonSearch.userphoto} alt="user" />
                <span>{userFoundonSearch.email}</span>
                <span>{userFoundonSearch.firstname}</span>
                </div>
            </div>}
          </div>
        </div>
        <div className="savetaskDiv1">
          <div className="saveTaskBtns1">
            <button id="saveUsers1" onClick={handleSave}>Add User</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddAUser;
