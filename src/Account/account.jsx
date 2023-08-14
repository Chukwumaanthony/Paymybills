import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Bell from "../Image/Bell.png";
import Edges from "../Image/line.png";
import MEN from "../Image/man.png";
import "./account.css";

const account = () => {
  return (
    <div className="layout">
      <div className="left-sidebar">
        <Sidebar />
      </div>

      <div>
        <div className="main-transact">
          <div>
            <Navbar />
          </div>
          <div className="toprrith">
            <span className="imss">#500.00</span>
            <img className="ims" src={Bell} alt="" />
            <img className="ims" src={Edges} alt="" />
          </div>
        </div>
        <section className="transtogs">
          <span className="alss">
            My <b>Account</b>
          </span>
          <span>
            <img style={{ padding: "15px 150px" }} src={MEN} alt="" />
          </span>
        </section>

        <section className="acctsector">
          <div className="acctinput">
            <label htmlFor="text" className="firstname">
              First Name
            </label>
            <input className="saminput" type="text" placeholder="Samuel" />
          </div>
          <div className="acctinput">
            <label htmlFor="text" className="firstname">
              Last Name
            </label>
            <input className="saminput" type="text" placeholder="Akintunde" />
          </div>
        </section>

        <section className="acctsector">
          <div className="acctinput">
            <label htmlFor="email" className="firstname">
              Email Address
            </label>
            <input
              className="saminput"
              id="email"
              type="email"
              placeholder="samuelakintunde@gmail.com"
            />
          </div>
          <div className="acctinput">
            <label htmlFor="number" className="firstname">
              Phone Number
            </label>
            <input className="saminput" type="number" placeholder= "0 816 339 9714" />
          </div>
        </section>

        <section className="acctsector">
          <div className="acctinput">
            <label htmlFor="date" className="firstname">
              Date of Birth
            </label>
            <input className="saminput" type="date" />
          </div>
          <div className="acctinput">
            <label className="firstname">Gender</label>
            <select className="saminputs">
              <option>Male</option>
              <option>Female</option>
              <option>Custom</option>
            </select>
          </div>
        </section>
        <div className="buttondiv">
          <button className="savechanges">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default account;
