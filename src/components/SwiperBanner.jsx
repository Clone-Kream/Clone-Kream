import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { bannerData } from "../data/bannerData";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/SwiperBanner.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperBanner = () => {
  return (
    <Swiper
      // install Swiper modules
      loop={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {bannerData.map((banner, index) => {
        return (
          <SwiperSlide key={index} style={{ backgroundColor: banner.color }}>
            <img className="bannerImg" src={banner.imageUrl} alt="이미지" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperBanner;
