import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <Swiper className="mySwiper">
        <SwiperSlide>
          <img src="images/6.2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/6.3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/6.4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/6.5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/6.6.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
