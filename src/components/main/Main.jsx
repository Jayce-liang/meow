import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Main 组件样式
import "./Main.css";

import elements from "../../routes";
import { useRoutes } from "react-router-dom";
export default function Main(props) {
  const routes = useRoutes(elements);
  // 自定义
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  const [innerSwiper, setInnerSwiper] = React.useState(null);
  const [bigSwiper, setBigSwiper] = React.useState(null);
  // console.log(swiper);
  return (
    <div className="Main">
      <div className="swiper-container bigSwiper">
        {/* 大轮播图 */}
        <Swiper
          className="bigSwiper"
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            // 用户操作后不继续 autoplay
            disableOnInteraction: false,
            // 是否停在最后一个 slide
            stopOnLastSlide: false,
          }}
          pagination={pagination}
          loop={true}
          grabCursor={true}
          onSlideChange={function () {
            try {
              setBigSwiper(this);
              innerSwiper.slideTo(this.activeIndex);
            } catch (error) {}
          }}
        >
          <SwiperSlide>
            <img
              src="https://dd-static.jd.com/ddimg/jfs/t1/75563/33/21297/459246/633bbac8E7fdc707f/c0f01f86043043ce.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://dd-static.jd.com/ddimg/jfs/t1/108368/22/33883/268459/63309301E8a2dcb57/e7dd069f028828c0.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://dd-static.jd.com/ddimg/jfs/t1/17504/27/19390/266005/6340e89aE95cb62dc/cb305d25debe1a54.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://dd-static.jd.com/ddimg/jfs/t1/171019/32/30298/199398/6329e9f5E62b50bfd/c82da65da9648ba4.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        {/* 小轮播图 */}
        <div className="innerSwiper">
          <Swiper
            className="innerSwiper"
            modules={[Autoplay, Navigation]}
            // 按钮
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            // 当 noSwiping={true}时 ，在 SwiperSlide 添加类名 swiper-no-swiping ，则该slide不能拖动
            noSwiping={true}
            onSwiper={(s) => {
              setInnerSwiper(s);
            }}
            loop={true}
          >
            <SwiperSlide className="swiper-no-swiping">
              <img
                src="https://dd-static.jd.com/ddimg/jfs/t1/75563/33/21297/459246/633bbac8E7fdc707f/c0f01f86043043ce.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-no-swiping">
              <img
                src="https://dd-static.jd.com/ddimg/jfs/t1/108368/22/33883/268459/63309301E8a2dcb57/e7dd069f028828c0.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-no-swiping">
              <img
                src="https://dd-static.jd.com/ddimg/jfs/t1/17504/27/19390/266005/6340e89aE95cb62dc/cb305d25debe1a54.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-no-swiping">
              <img
                src="https://dd-static.jd.com/ddimg/jfs/t1/171019/32/30298/199398/6329e9f5E62b50bfd/c82da65da9648ba4.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <div className="myswiper-btn-container">
            {/* 小轮播图按钮 */}
            <div
              className="swiper-button-prev"
              // 点击按钮时，大轮播图同时变化
              onClick={() => {
                try {
                  bigSwiper.slideTo(innerSwiper.activeIndex);
                } catch (error) {}
              }}
            ></div>
            <div
              className="swiper-button-next"
              onClick={() => {
                try {
                  bigSwiper.slideTo(innerSwiper.activeIndex);
                } catch (error) {}
              }}
            ></div>
          </div>
          {/* 电影信息 */}
          <div className="movieInfo">
            <div className="title">鬼吹灯</div>
            <div className="movieStatus">已完结</div>
            <div className="stars">
              陈宝国,王千源,李庚希,胡先煦,荣梓杉,郭涛,梁静,颜丙燕,王骁,曹曦文,蓝盈莹,翟小兴,张瑞涵,荣飞,李添诺
            </div>
          </div>
        </div>
      </div>
      {routes}
    </div>
  );
}
