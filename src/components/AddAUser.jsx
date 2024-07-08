import "../style/AddAUser.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { searchUser,saveUser} from "../utils/utils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddAUser({count}) {
  const [userFoundonSearch, setUserFoundonSearch] = useState(undefined);
  function handleSearch(e){
    const value = e.target.value
    setUserFoundonSearch(searchUser(value));
  }


  function handleSave(e){
    e.preventDefault();
    const message = saveUser(userFoundonSearch);
    notify(message);
    count();
  }
  const notify = (message) => toast.error(message,{
    progressStyle: { background: 'red' }
  });

  
  
  return (
    <>
    <div>
        <ToastContainer />
      </div>

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
