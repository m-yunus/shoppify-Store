import React, { useContext, useEffect, useState } from 'react'
import { Itemstate } from '../Context/Context'
import NotFound from '../NotFound/NotFound';
import "./Categories.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Categories = () => { 
        const history=useNavigate();
      const {items,Allcategories }=Itemstate();
      const[activesate,setactive]=useState("smartphones")    
      const [alllist,setAlllist]=useState([])
      const [ItemLoading,setItemloading]=useState(false)


        async function AllItems(){
          await axios.get(`https://dummyjson.com/products/category/${activesate}`).then(res=>setAlllist(res.data.products))
          setItemloading(true)
        }

      useEffect(()=>{
        AllItems()
      },[alllist])
    
            const showItemhandler=(category)=>{

            setactive(category)
            console.log(items.category,items[0].category);
            const filtered=items.filter(it=>{
            return it.category===category
                                            })
           
           setAlllist(filtered)
    }
   
          function GadgetsDetail(deta){
                           history(`/${deta.id}`)
                        }
                    const filteredresults=alllist.map((items,index)=>(
                    <li onClick={()=>{GadgetsDetail(items)}}><img src={items.thumbnail} alt="" />
                    <h3>{items.title}</h3>
                    </li>
))
const categories=Allcategories.map((item,index)=>{
                    return (
                            <li id={index} className={item===activesate?"active":"not-active"} onClick={()=>{showItemhandler(item)}}>{item}</li>
                            )
                                              })
  return (
      <div className="main-categories">
             <div className="categories-name">
                     <h2>Our products makes u better </h2>
                     <h4><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam, numquam a temporibus incidunt soluta!</em></h4>
                </div>
              <div className='categories'>
                        <ul  >
                             {categories}
                       </ul>
 </div> 
    <div  className="compared-results">
    <ul>
{!ItemLoading ? <NotFound/> :filteredresults}
    </ul> </div>
    </div>
  )
}
export default Categories