import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/SwiperProduct.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { swiperProductData } from "../data/swiperProductData";

export default () => {
  return (
    <div className="swiperproduct_wrap">
      <div className="info">
        <p className="main_title">당장 떠나고 싶은 한여름 휴가룩!</p>
        <p className="sub">#트로피칼챌린지</p>
      </div>
      <div className="top-rank">
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {swiperProductData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <div className="image-container">
                  <img src={item.imageUrl} alt={`Image ${index}`} />
                  <div className="circle-overlay">
                    <img className="circle" src={item.imageUrl} alt="Circle" />
                  </div>
                </div>
                <p className="slide-text">@dwije23</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-custom-navigation">
          <div className="custom-prev"></div>
          <div className="custom-next"></div>
        </div>
      </div>
    </div>
  );
};
