import React from "react";
import Navbar from "../Navbar/Navbar";
import Phones from "../Image/airtime.png";
import Data from "../Image/Data.png";
import Cable from "../Image/cable.png";
import Elect from "../Image/bulb.png";
import Event from "../Image/Evtick.png";
import Tran from "../Image/transp.png";
import Waec from "../Image/waec.png";
import Int from "../Image/internets.png";
import Glo from "../Image/Glo.png";
import Pands from "../Image/panda.png";
import illus from "../Image/illustration.png";
import aero from "../Image/aero.png";
import "./homeserv.css";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Homeserv = () => {
  return (
    <div>
      <Navbar />

      <div className="fird">
        <div className="homee">
          <img src={Phones} alt="" />
          <span className="servbuy">Buy Airtime</span>
        </div>
        <div className="homei">
          <img src={Data} alt="" />
          <span className="servbuy">Buy Data</span>
        </div>
        <div className="homeii">
          <img src={Cable} alt="" />
          <span className="servbuy">Buy Cable Tv</span>
        </div>
        <div className="homeis">
          <img src={Elect} alt="" />
          <span className="servbuy">Buy Electricty</span>
        </div>
      </div>

      <div className="fird">
        <div className="homee">
          <img src={Event} alt="" />
          <span className="servbuy">Event Ticket</span>
        </div>
        <div className="homei">
          <img src={Tran} alt="" />
          <span className="servbuy">Transfer funds</span>
        </div>
        <div className="homeii">
          <img src={Waec} alt="" />
          <span className="servbuy">WAEC PIN</span>
        </div>
        <div className="homeis">
          <img src={Int} alt="" />
          <span className="servbuy">Internet service</span>
        </div>
      </div>
      <div className="cons">
        <HiOutlineArrowNarrowLeft className="iconss" />
        <HiOutlineArrowNarrowRight className="iconss" />
      </div>
      <div className="glo">
        <section className="childsec">
          <span className="gloo">
            <span>Everything Music</span>
            <img className="imgg" src={Glo} alt="" />
          </span>
          <div className="lorem">Amet minim mollit non deserunt ullamco est sit aliqua </div>
          <span className="offer">
            <button className="buchild"> Get Offer</button>
            <img style={{width:"80px"}} src={Pands} alt="" />
          </span>
        </section>

        <section className="childsecs">
        <span className="offers">
            <img style={{width:"90px"}} src={illus} alt="" />
          </span>
          <span className="gloos">
            <div className="buttomsec">
              <span className="hold">
                <span className="free">Buy 2 Get 1 Free</span>
                <img className="imggs" src={aero} alt="" />
             </span>
            
            <span className="lorems">Amet minim mollit non deserunt ullamco est sit aliqua </span>
            <button className="buchilds"> Get Offer</button>
            </div>
          </span>
        </section>
      </div>
    </div>
  );
};

export default Homeserv;
