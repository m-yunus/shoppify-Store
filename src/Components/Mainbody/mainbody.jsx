import React from 'react'
import gadget from "../../images/photo-1661961112951-f2bfd1f253ce.avif"
import "./Mainbody.css"
import Categories from  "../Categories/Categories";

const mainbody = () => {
  return (
    <div>
    <div className='mainbody'>

            <img src={gadget} alt="" />
            uioy
    </div>
    <div>
    <Categories/>
    </div>
    
    </div>
  )
}

export default mainbody