import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import airtime from "../Image/airtime.png";
import data from "../Image/Data.png";
import internet from "../Image/internet.png";
import cable from "../Image/cable.png"
import bulb from "../Image/bulb.png";
import ticket from "../Image/ticket.png";
// import dasg  from "../Image/dashboard.png"
// import set from "../Image/set.png"
import "./homepage.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Barchart from "../Components/BarChart";
// import Bar from "../Components/Bar";
// import Bars from "../Components/Bar";
// import BarCharts from "../Components/BarChart";
// import Bar from "./components/Bar"

const Homepage = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <section className="homesec">
        <p className="para">
          Good Morning, <b>Samuel</b>{" "}
        </p>
        <p className="parara">What will you like to do today?</p>
      </section>
      <div className="graphs">
        <section className="overview">
          <b className="bold">Overview</b>
          <span className="bold1">
            July, 2021
            <MdKeyboardArrowDown />
          </span>
        </section>
        <div style={{width:'85%', padding:"10px 40px",}}  >  
         <Barchart />
        </div>

      </div>
      <section className="butdiv">
        <div className="buy">
          <img className="imgbuy" src={airtime} alt="" /> 
          <span>Buy Airtime</span>
        </div>
        <div className="buy">
          <img className="imgbuy" src={data} alt="" /> 
          <span>Buy Data</span>
        </div>
        <div className="buy">
          <img className="imgbuy" src={cable} alt="" /> 
          <span>Buy Cable tv</span>
        </div>
        <div className="buy">
          <img className="imgbuy" src={bulb} alt="" /> 
          <span>Buy Electricity</span>
        </div>
        <div className="buy">
          <img className="imgbuy" src={internet} alt="" /> 
          <span>internet</span>
        </div>
        <div className="buy">
          <img className="imgbuy" src={ticket} alt="" /> 
          <span>Buy ticket</span>
        </div>
      </section>
      <div className="con">
        <HiOutlineArrowNarrowLeft className="iconss"/>
        <HiOutlineArrowNarrowRight className="iconss"/>
      </div>

    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  .header {
  }
  .nav {
  }
`;

export default Homepage;
