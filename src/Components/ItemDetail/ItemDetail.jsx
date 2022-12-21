import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import "./ItemDetail.css"
import {Swiper,SwiperSlide} from "swiper/react"
import { Pagination ,Autoplay,Navigation, EffectFade} from "swiper"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const ItemDetail = () => {
    const {id}=useParams()
    const[dataReceived,setDatareceived]=useState()
useEffect(()=>{

  if(id){
    axios.get(`https://dummyjson.com/products/${id}`).then(res=>setDatareceived(res.data))
   
  }

  
},[id])


console.log(dataReceived);

  return (
   
 
 
        <><div className='item-list'>

      <Swiper

        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        navigation
        effect={"flip"}
        speed={800}
        slidesPerView={1}
        loop={true}
        spaceBetween={8}
        initialSlide={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}


      >

        {dataReceived?.images.map((items, index) => {
          return (
            <SwiperSlide>
              <div className='testimonial' key={index}>


                <img src={items} alt="" />

              </div>

            </SwiperSlide>

          );
        })}
      </Swiper>
    </div><div className='item-detail'>
        <h1 style={{ fontFamily: "initial" }}>  {dataReceived?.title}</h1>
        <h4 style={{ color: "Highlight" }}>brand: {dataReceived?.brand}</h4>
        <div className="item-price">
<h2>₹{dataReceived?.price} <button>ADD TO CART</button>  </h2>
<p><b>{dataReceived?.stock} stocks are available grab up</b></p>

        </div>
        
        
      </div></>
           
  )
}

export default ItemDetail