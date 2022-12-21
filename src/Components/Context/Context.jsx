
import React, {  useEffect, useState,useContext,createContext} from 'react'

import axios from "axios"

  const AllContext=createContext()
    const Context = ({children}) => {
    const [items,setItems]=useState([])
    const[Allcategories,setCategories]=useState([])


                          const products=async()=>{
                                    await axios.get("https://dummyjson.com/products").then(
                                      response=>setItems(response.data.products))
                                }

                          const categories=async()=>{
                                      await axios.get("https://dummyjson.com/products/categories").then(
                                      response=> setCategories(response.data))   
                                  }
               useEffect(()=>{
                products()
                categories()
                },[])
                                                return (
                                                <AllContext.Provider value={{items,Allcategories}}>
                                              {children}
                                                </AllContext.Provider>
                                                )
                                              }
         export default Context

         export const Itemstate=()=>{
               return  useContext(AllContext)
     }