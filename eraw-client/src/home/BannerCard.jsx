import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Swipe & Share <br/> Your Story ➡</SwiperSlide>
        <SwiperSlide>On Any Social</SwiperSlide>
        <SwiperSlide>With Our Product</SwiperSlide>
        <SwiperSlide>And Earn Multiple</SwiperSlide>
        <SwiperSlide>Disscounts</SwiperSlide>
        <SwiperSlide>For A Variety</SwiperSlide>
        <SwiperSlide>Of Products</SwiperSlide>
        <SwiperSlide>For All Kind</SwiperSlide>
        <SwiperSlide>Of Beloved PETS!</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard