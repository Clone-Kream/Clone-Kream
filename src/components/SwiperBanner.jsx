import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { swiperBannerData } from "../data/swiperBannerData";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/SwiperBanner.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      loop={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {swiperBannerData.map((banner, index) => {
        return (
          <SwiperSlide key={index} style={{ backgroundColor: banner.color }}>
            <img className="bannerImg" src={banner.imageUrl} alt="이미지" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
