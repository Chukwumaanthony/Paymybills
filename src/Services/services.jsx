import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Right from '../Rightside/Right';
// import Homepage from '../Homepage/Homepage';
import Homeserv from '../Homeserv/Homeserv';


const services = () => {
  return (
    <div className="layout">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="main-container">
        <Homeserv />
      </div>
      <div className="right-sidebar">
         <Right />
      </div>
      {/* <img src={yg} alt="" /> */}
    </div>
  )
}

export default services