import React from 'react'
import Bell from "../Image/Bell.png";
import Edge from "../Image/edge.png";
import Phone from "../Image/airtime.png";
import cable from "../Image/cable.png";
import data from "../Image/Data.png";
import "./rightside.css";
import Pie from "../Rightside/pie";
import {IoIosArrowForward} from "react-icons/io";

const Right = () => {
  return (
    <div className='topg'>
        <div  className="topright">
          <span className='imss'>#500.00</span>
          <img className='ims' src={Bell} alt="" />
          <img className='ims' src={Edge} alt="" />
        </div>

        <section className='sectw'>
          <span className='spends'>
            Total Spending <b className='spend'>...</b>
          </span>
          <b className='Onem'>&#8358;1,000,000</b>
          <span className='month'>12 Months</span>
        </section>

        <section className='piechart'>
           <Pie />
        </section>
        <button className='ButtonR'>
          View
        </button>
        <div className='tooda'>Today</div>
        <div className='today'>
          <div className='rightdown'>
            <div className='phone'>
            <img style={{width: "25px"}} src={Phone} alt="" />
            </div>
            <div className='airtran'>
            <span className='rightair'>Airtime</span>
            <span className='rightd'>6 transactions</span>
            </div>
          </div>
          <div className='rightn'>
           <span> &#8358; 10.506</span>
            <span className='icon'><IoIosArrowForward/></span> 
            </div>
        </div>

        <div className='tooda'>Yesterday</div>
        <div className='today'>
          <div className='rightdown'>
            <div className='phone'>
            <img style={{width: "25px"}} src={data} alt="" />
            </div>
            <div className='airtran'>
            <span className='rightair'>Electricity</span>
            <span className='rightd'>1 transactions</span>
            </div>
          </div>
          <div className='rightn'>
           <span> &#8358; 300.000</span>
            <span className='icon'><IoIosArrowForward/></span> 
            </div>
        </div>
        <div className='today'>
          <div className='rightdown'>
            <div className='phone'>
            <img style={{width: "25px"}} src={Phone} alt="" />
            </div>
            <div className='airtran'>
            <span className='rightair'>Airtime</span>
            <span className='rightd'>3 transactions</span>
            </div>
          </div>
          <div className='rightn'>
           <span> &#8358; 20.000</span>
            <span className='icon'><IoIosArrowForward/></span> 
            </div>
        </div>
        <div className='today'>
          <div className='rightdown'>
            <div className='phone'>
            <img style={{width: "25px"}} src={cable} alt="" />
            </div>
            <div className='airtran'>
            <span className='rightair'>Cable Tv</span>
            <span className='rightd'>1 transactions</span>
            </div>
          </div>
          <div className='rightn'>
           <span> &#8358; 60.000  </span>
            <span className='icon'><IoIosArrowForward/></span> 
            </div>
        </div>
        <div className='seeall'>See All</div>
    </div>
  )
}

export default Right