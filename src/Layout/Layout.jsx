import React from "react";
// import yg from "../Homepage/yg.png"
// import { BiAlarmAdd } from "react-icons/bi";
import Homepage from "../Homepage/Homepage";
import Sidebar from "../Sidebar/Sidebar";
import Right from "../Rightside/Right";
// import {NavLink, Link} from 'react-router-dom';


const Layout = () => {
  return (
    <div className="layout">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="main-container">
        <Homepage />
      </div>
      <div className="right-sidebar">
         <Right />
      </div>
      {/* <img src={yg} alt="" /> */}
    </div>
  );
};
// const Buttonwrapper=styled.div`
// .homepage{

// }

// `
export default Layout;
