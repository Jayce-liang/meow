import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Main 组件样式
import "./Main.css";

export default function Main() {
  // 自定义
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  const [swiper, setSwiper] = React.useState(null);
  console.log(swiper);
  return (
    <div className="Main">
      <div className="swiper-container bigSwiper">
        {/* 大轮播图 */}
        <Swiper
          className="bigSwiper"
          modules={[Autoplay, Pagination]}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            // 用户操作后不继续 autoplay
            disableOnInteraction: false,
            // 是否停在最后一个 slide
            stopOnLastSlide: false,
          }}
          pagination={pagination}
          loop={true}
          onSlideChange={function () {
            try {
              swiper.slideTo(this.activeIndex);
            } catch (error) {}
          }}
        >
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

        {/* 小轮播图 */}
        <div className="innerSwiper">
          <Swiper
            className="innerSwiper"
            modules={[Autoplay, Pagination]}
            spaceBetween={1}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              // 用户操作后不继续 autoplay
              disableOnInteraction: false,
              // 是否停在最后一个 slide
              stopOnLastSlide: false,
            }}
            grabCursor={true}
            onSwiper={(s) => {
              setSwiper(s);
            }}
            loop={true}
          >
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
      </div>
    </div>
  );
}
