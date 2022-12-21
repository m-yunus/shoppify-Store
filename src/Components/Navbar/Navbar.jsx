import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import shoppify from "../../images/cart.jpg"
import {BsHandbag} from "react-icons/bs"
const Navbar = () => {
  return (
   
    <div className='main-nav'>

      <div className="nav-left">
     <img src={shoppify} alt="" /> <h1>shoppify </h1>
    
      </div>
      <div className="nav-right">
        <div className="nav-search">
        <input type="text" placeholder='search .. ..' />
        </div>
       <div className="nav-list">
        <ul>
          
          <li>Home</li>
          <li>Products</li>
          <li><BsHandbag/>Cart</li>
          <li>about</li>

        </ul>
       </div>
      </div>


    </div>
  
    
    
  )
}

export default Navbar