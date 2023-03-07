import React,{useRef} from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import shoppify from "../../images/cart.jpg"
import {BsHandbag} from "react-icons/bs"
import {FaBars,FaTimes} from "react-icons/fa"
const Navbar = ({shownavbar,NavRef}) => {
  

  
  return (
   
    <div className='main-nav'>

      <div className="nav-left">
     <img src={shoppify} alt="" /> 
     <h1>shoppify </h1>
    
      </div>
      <div className="nav-right">
        <div className="nav-search">
        <input type="text" placeholder='search .. ..' />
        </div>
       <div className="nav-list">
        <ul ref={NavRef}>
          
          <li>HomeAnvar</li>
          <li>Products123213</li>  
          <li>aboutsss</li>
          <button onClick={shownavbar} className="nav-close-btn">
          <FaTimes/>
        </button>
      
        </ul>
        <button onClick={shownavbar} className="nav-btn"><FaBars/></button>
       </div>
      </div>


    </div>
  
    
    
  )
}

export default Navbar