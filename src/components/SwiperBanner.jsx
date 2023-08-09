import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { bannerData } from "../data/bannerData";
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
      {bannerData.map((banner, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              className="bannerimg"
              style={{ backgroundImage: `url(${banner.imageUrl})` }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
