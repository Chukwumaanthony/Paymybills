import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Bell from "../Image/Bell.png";
import Edge from "../Image/edge.png";
import "./transact.css";
import Tableone from "../Tableone/tableone";
import { Link } from "react-router-dom";
import Successful from "../Successful/Success";
import Failed from "../Failed/failed";

const Transaction = () => {
  const [allTransaction, setAllTransaction] = useState(true);
  const [SuccessfulTransaction, setSuccessfulTransaction] = useState(false);
  const [failedTransaction, setFailedTransaction] = useState(false);
  return (
    <div className="layout">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="">
        <div className="main-transact">
          <div>
            <Navbar />
          </div>
          <div className="toprrith">
            <span className="imss">#500.00</span>
            <img className="ims" src={Bell} alt="" />
            <img className="ims" src={Edge} alt="" />
          </div>
        </div>

        <section className="transtogether">
          <span className="alsac">
            All <b>Transactions</b>
          </span>
          <Link className="transuccess">
            <p
              className="alltransaction"
              onClick={() => {
                setAllTransaction(true);
                setFailedTransaction(false);
                setSuccessfulTransaction(false);
              }}
              style={{
                color:allTransaction?  "#0F227A": "#B8B8B8",
                background:allTransaction? " #E8EAFD": "none",
               }}>
              All Transactions
            </p>
            <p
              className="alltransaction"
              onClick={() => {
                setAllTransaction(false);
                setFailedTransaction(false);
                setSuccessfulTransaction(true);
              }}
              style={{
                color:SuccessfulTransaction?  "#0F227A": "#B8B8B8",
                background:SuccessfulTransaction? " #E8EAFD": "none",
               }}>
              Successful
            </p>
            <p
              className="alltransaction"
              onClick={() => {
                setAllTransaction(false);
                setFailedTransaction(true);
                setSuccessfulTransaction(false);
              }}
              style={{
                color:failedTransaction?  "#0F227A": "#B8B8B8",
                background:failedTransaction? " #E8EAFD": "none",
               }}>
              Unsuccessful
            </p>
          </Link>

          {allTransaction && <Tableone />}
          {SuccessfulTransaction && <Successful />}
          {failedTransaction && <Failed/>}
        </section>
      </div>
    </div>
  );
};

export default Transaction;
