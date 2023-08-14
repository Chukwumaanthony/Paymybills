import React from "react";
// import dasg from "../Image/dashboard.png";
// import serv from "../Image/services.png";
// import tran from "../Image/trans.png";
// import acct from "../Image/acct.png";
// import set from "../Image/set.png";
import Log from "../Image/Log.png";
import blue from "../Image/blueLogo.png";
import Rec from "../Image/Rectangle 150.png";
import Pay from "../Image/PayBill.png";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { BiImages } from "react-icons/bi";
import { TbHeartHandshake } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import { RiSettings5Line } from "react-icons/ri";
const Sidebar = () => {
  const dashboard = [
    {
      name: "Dashboard",
      icon: <MdOutlineDashboard />,
      className: "Links",
      path: "/",
    },
    {
      name: "Services",
      icon: <TbHeartHandshake />,
      className: "Links",
      path: "/services",
    },
    {
      name: "Transaction",
      icon: <BiImages />,
      className: "Links",
      path: "/transaction",
    },
    {
      name: "Account",
      icon: <BsPersonCircle />,
      className: "Links",
      path: "/account",
    },
    {
      name: "Settings",
      icon: <RiSettings5Line/>,
      className: "Links",
      path: "/settings",
    },
  ];
  return (
    <section className="left-side">
      <section className="blue">
        <img src={blue} alt="" />
      </section>
      {dashboard?.map((d) => {
        return (
          <div>
            <NavLink to={d.path} key={d.id}>
              <li
                className={d.className}
                style={{
                  color: `${
                    window.location.pathname === d.path ? "#03b66b" : ""
                  }`,
                }}
              >
                <span>{d?.icon}</span>
                {d.name}
              </li>
            </NavLink>
          </div>
        );
      })}

      <section className="Paybills">
        <img src={Pay} alt="" />
      </section>
      <section className="Rec">
        <img src={Rec} alt="" />
      </section>

      <li className="Log">
        <img src={Log} alt="" /> Log Out
      </li>
    </section>
  );
};

export default Sidebar;
