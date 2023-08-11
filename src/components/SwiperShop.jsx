import React from "react";
import { swiperShop } from "../data/swiperShop";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/SwiperShop.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default () => {
  return (
    <div className="swipershop_wrap">
      <div className="top">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          slidesPerGroup={8}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            el: ".swipershop-pagination", // 페이지네이션 위치
            clickable: true, // 페이지네이션을 클릭하여 슬라이드 이동 가능하도록 설정
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {swiperShop.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="shopslide-content">
                <div className="shopswiper-container">
                  <img src={item.imageUrl} alt={`Image ${index}`} />
                  <p className="shopswiper_tag">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swipershop-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};
