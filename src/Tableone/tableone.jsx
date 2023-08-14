import React from "react";
import Flash from "../Image/flash.png";
import Dstvv from "../Image/Dstvv.png";
import Eko from "../Image/Ekoelect.png";
import "./tableone.css";
import { IoIosArrowForward } from "react-icons/io";

const tableone = () => {
  return (
    <table className="table">
      <td className="tabledata">
        <tr className="tableroww">
          <td>
            <img src={Flash} alt="" />
          </td>
          <td className="firstrow">
            <span className="airpur">Airtime purchase</span>
            <span className="Dec">Dec 30,2011</span>
          </td>
        </tr>
        <td className="ash">***********345</td>
        <tr className="tablerowws">
          <td className="succ">Successful</td>
        </tr>
        <tr className="displaa">
          <td className="NNN">N500</td>
          <td className="arrow">
            <IoIosArrowForward />
          </td>
        </tr>
      </td>
      <td className="tabledata">
        <tr className="tableroww">
          <td>
            <img src={Dstvv} alt="" />
          </td>
          <td className="firstrow">
            <span className="airpur">Dstv Payment</span>
            <span className="Dec">Feb 05,2000</span>
          </td>
        </tr>
        <td className="ash">***********345</td>
        <tr className="tablerowws">
          <td className="succs">Unsuccessful</td>
        </tr>
        <tr className="displaa">
          <td className="NNN">N500</td>
          <td className="arrow">
            <IoIosArrowForward />
          </td>
        </tr>
      </td>
      <td className="tabledata">
        <tr className="tableroww">
          <td>
            <img src={Eko} alt="" />
          </td>
          <td className="firstrow">
            <span className="airpur">Eko Electricity(Prepaid)</span>
            <span className="Dec">Oct 03,2025</span>
          </td>
        </tr>
        <td className="ash">***********345</td>
        <tr className="tablerowws">
          <td className="succss">Pending</td>
        </tr>
        <tr className="displaa">
          <td className="NNN">N500</td>
          <td className="arrow">
            <IoIosArrowForward />
          </td>
        </tr>
      </td>
      <td className="tabledata">
        <tr className="tableroww">
          <td>
            <img src={Flash} alt="" />
          </td>
          <td className="firstrow">
            <span className="airpur">Davido's Concert</span>
            <span className="Dec">July 02,1999</span>
          </td>
        </tr>
        <td className="ash">***********345</td>
        <tr className="tablerowws">
          <td className="succs">Unsuccessful</td>
        </tr>
        <tr className="displaa">
          <td className="NNN">N500</td>
          <td className="arrow">
            <IoIosArrowForward />
          </td>
        </tr>
      </td>
      <td className="tabledata">
        <tr className="tableroww">
          <td>
            <img src={Dstvv} alt="" />
          </td>
          <td className="firstrow">
            <span className="airpur">Dstv Payment</span>
            <span className="Dec">Dec 30,2011</span>
          </td>
        </tr>
        <td className="ash">***********345</td>
        <tr className="tablerowws">
          <td className="succ">Successful</td>
        </tr>
        <tr className="displaa">
          <td className="NNN">N500</td>
          <td className="arrow">
            <IoIosArrowForward />
          </td>
        </tr>
      </td>
    </table>
  );
};

export default tableone;
