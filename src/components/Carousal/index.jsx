// import React from 'react'
import React from 'react';
import './Carousal.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
const Carousal = () => {
  return (
    <div>
          <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/w/i/winter-men_1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/j/_/j._website-01_1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/f/e/festive_men.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousal
