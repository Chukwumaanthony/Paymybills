import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import "./navbar.css"


const Navbar = () => {
  return (
    <div style={{ padding:"20px"}}>

      <div className='search'>
        <AiOutlineSearch className='input1'/>

        <input className='input' type="text"  />
      </div>
    
    </div>
  )
}

// const 
// <span>Good Morning, Samuel
// </span>




export default Navbar