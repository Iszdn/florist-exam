import React from 'react'
import "./index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Ajendro = () => {
  return (
    <section id='ajendro'>
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
          <div className="content1">
        <div className="img">
          <img src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png" alt="" />
        </div>
        
        <p>“I just wanted to say thank you for making such gorgeous arrangements for our
birthday celebration. I couldn’t get over how perfect they were for the
party. You did a fantastic job, and I appreciate it very much”</p>
<h4>Ajendro Houston</h4>
<h5>BUISNESSMAN</h5>
      </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="content1">
        <div className="img">
          <img src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png" alt="" />
        </div>
        
        <p>“I just wanted to say thank you for making such gorgeous arrangements for our
birthday celebration. I couldn’t get over how perfect they were for the
party. You did a fantastic job, and I appreciate it very much”</p>
<h4>Ajendro Houston</h4>
<h5>BUISNESSMAN</h5>
      </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="content1">
        <div className="img">
          <img src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png" alt="" />
        </div>
        
        <p>“I just wanted to say thank you for making such gorgeous arrangements for our
birthday celebration. I couldn’t get over how perfect they were for the
party. You did a fantastic job, and I appreciate it very much”</p>
<h4>Ajendro Houston</h4>
<h5>BUISNESSMAN</h5>
      </div>
      </SwiperSlide>
         </Swiper>
      
    </section>
  )
}

export default Ajendro
