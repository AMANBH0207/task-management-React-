import React from 'react';
import '../style/Manage.css';
import TaskDetails from '../components/TaskDetails';

function Manage() {
  return (
    <>
    
    <div className="ManageTandU">
                    {/* Switch between Tasks and users */}
                    <div className="choose">
                        <ul>
                            <li><a href="./Manage.html">Tasks</a></li>
                            <li><a href="./ManageUsers.html">Users</a></li>
                        </ul>
                    </div>
                    {/* ManageTask */}
                    <div className="taskList">
                        <ul>
                            <li className="high pointer">
                                <h5 className="center">FrontEnd Task</h5>
                                <p>High-Priority</p>
                                <div className="teamMembers">
                                <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp1.jpeg?alt=media&token=c81c35a9-fb06-42e4-9885-cd076f1dde44" alt=""/>
                                <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp2.jpeg?alt=media&token=2ee136f8-72c7-4768-b860-5e3e42ffeb27" alt=""/>
                                <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp6.jpeg?alt=media&token=31313693-ee66-490a-92fd-68bba7cfd2da" alt=""/>
                                <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp4.jpeg?alt=media&token=6dcd9e2d-c75d-4ed2-b96a-b2bd168d0a97" alt=""/>
                                <p className="center">+8 Members</p>
                            </div>
                            <div className="optionsDiv center">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            <div className="options">
                                <p className="pointer">Assign Task</p>
                                <p className="pointer">Edit Task</p>
                                <p className="pointer">Delete Task</p>
                            </div>
                            </div>
                        </li>
                            <li className="low pointer"><h5 className="center">Improve UI</h5>
                                <p>Low-Priority</p>
                                <div className="teamMembers">
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp1.jpeg?alt=media&token=c81c35a9-fb06-42e4-9885-cd076f1dde44" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp2.jpeg?alt=media&token=2ee136f8-72c7-4768-b860-5e3e42ffeb27" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp6.jpeg?alt=media&token=31313693-ee66-490a-92fd-68bba7cfd2da" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp4.jpeg?alt=media&token=6dcd9e2d-c75d-4ed2-b96a-b2bd168d0a97" alt=""/>
                                    <p className="center">+8 Members</p>
                                </div>
                                <i className="fa-solid fa-ellipsis-vertical center"></i>
                            </li>
                            <li className="medium pointer"><h5 className="center">Fullstack Project</h5>
                                <p>Medium-Priority</p>
                                <div className="teamMembers">
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp1.jpeg?alt=media&token=c81c35a9-fb06-42e4-9885-cd076f1dde44" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp2.jpeg?alt=media&token=2ee136f8-72c7-4768-b860-5e3e42ffeb27" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp6.jpeg?alt=media&token=31313693-ee66-490a-92fd-68bba7cfd2da" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp4.jpeg?alt=media&token=6dcd9e2d-c75d-4ed2-b96a-b2bd168d0a97" alt=""/>
                                    <p className="center">+8 Members</p>
                                </div><i className="fa-solid fa-ellipsis-vertical center"></i>
                            </li>
                            <li className="high pointer"><h5 className="center">Backend Task</h5>
                                <p>High-Priority</p>
                                <div className="teamMembers">
                                <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp1.jpeg?alt=media&token=c81c35a9-fb06-42e4-9885-cd076f1dde44" alt=""/>
                                <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp2.jpeg?alt=media&token=2ee136f8-72c7-4768-b860-5e3e42ffeb27" alt=""/>
                                <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp6.jpeg?alt=media&token=31313693-ee66-490a-92fd-68bba7cfd2da" alt=""/>
                                <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp4.jpeg?alt=media&token=6dcd9e2d-c75d-4ed2-b96a-b2bd168d0a97" alt=""/>
                                <p className="center">+8 Members</p>
                            </div><i className="fa-solid fa-ellipsis-vertical center"></i>
                        </li>
                            <li className="medium pointer"><h5 className="center">React Project</h5>
                                <p>Medium-Priority</p>
                                <div className="teamMembers">
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp1.jpeg?alt=media&token=c81c35a9-fb06-42e4-9885-cd076f1dde44" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp2.jpeg?alt=media&token=2ee136f8-72c7-4768-b860-5e3e42ffeb27" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp6.jpeg?alt=media&token=31313693-ee66-490a-92fd-68bba7cfd2da" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp4.jpeg?alt=media&token=6dcd9e2d-c75d-4ed2-b96a-b2bd168d0a97" alt=""/>
                                    <p className="center">+8 Members</p>
                                </div><i className="fa-solid fa-ellipsis-vertical center"></i>
                            </li>
                            <li className="medium pointer"><h5 className="center">E-commerce App</h5>
                                <p>Medium-Priority</p>
                                <div className="teamMembers">
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp1.jpeg?alt=media&token=c81c35a9-fb06-42e4-9885-cd076f1dde44" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp2.jpeg?alt=media&token=2ee136f8-72c7-4768-b860-5e3e42ffeb27" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp6.jpeg?alt=media&token=31313693-ee66-490a-92fd-68bba7cfd2da" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp4.jpeg?alt=media&token=6dcd9e2d-c75d-4ed2-b96a-b2bd168d0a97" alt=""/>
                                    <p className="center">+8 Members</p>
                                </div><i className="fa-solid fa-ellipsis-vertical center"></i>
                            </li>
                            <li  className="low pointer"><h5 className="center">UI UX Design</h5>
                                <p>Low-Priority</p>
                                <div className="teamMembers">
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp1.jpeg?alt=media&token=c81c35a9-fb06-42e4-9885-cd076f1dde44" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp2.jpeg?alt=media&token=2ee136f8-72c7-4768-b860-5e3e42ffeb27" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp6.jpeg?alt=media&token=31313693-ee66-490a-92fd-68bba7cfd2da" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp4.jpeg?alt=media&token=6dcd9e2d-c75d-4ed2-b96a-b2bd168d0a97" alt=""/>
                                    <p className="center">+8 Members</p>
                                </div><i className="fa-solid fa-ellipsis-vertical center"></i>
                            </li>
                            <li className="high pointer"><h5 className="center">Bug Fixes</h5>
                                <p>High-Priority</p>
                                <div className="teamMembers">
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp1.jpeg?alt=media&token=c81c35a9-fb06-42e4-9885-cd076f1dde44" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp2.jpeg?alt=media&token=2ee136f8-72c7-4768-b860-5e3e42ffeb27" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp6.jpeg?alt=media&token=31313693-ee66-490a-92fd-68bba7cfd2da" alt=""/>
                                    <img className="center" src="https://firebasestorage.googleapis.com/v0/b/restroz-6505c.appspot.com/o/users%2Fp4.jpeg?alt=media&token=6dcd9e2d-c75d-4ed2-b96a-b2bd168d0a97" alt=""/>
                                    <p className="center">+8 Members</p>
                                </div><i className="fa-solid fa-ellipsis-vertical center"></i>
                            </li>
                        </ul>
                    </div>
                    
                    <TaskDetails props="none"/>

                </div>
    </>
  )
}

export default Manage