import React from 'react'
import "./index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


const Header = () => {
  return (
    <section id='header-sec'>
      
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
           <div className="slide1">
            <div className="container">
             <div className="content">
          <span>Fresh Flower & Gift Shop</span>
          <h3>Making beautiful flowers a part of your life.</h3>
          <div className="butt">Shop now</div>
        </div> 
            </div>
        
      </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="slide2">
           <div className="container">
             <div className="content">
          <span>Fresh Flower & Gift Shop</span>
          <h3>Making beautiful flowers a part of your life.</h3>
          <div className="butt">Shop now</div>
        </div> 
            </div>
      </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Header
