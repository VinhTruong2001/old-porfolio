import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Mousewheel, Pagination, Autoplay } from "swiper";
import ShortInfo from "../components/common/personalInfo/ShortInfo";
import ContactInfo from "../components/common/personalInfo/ContactInfo";


function PersonalInfo() {
  return (
    <Swiper
      mousewheel={true}
      pagination={true}
      modules={[Mousewheel, Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        stopOnLastSlide: true,
      }}
      speed={2000}
    >
      <SwiperSlide>
        <ShortInfo />
      </SwiperSlide>
      <SwiperSlide>
        <ContactInfo />
      </SwiperSlide>
    </Swiper>
  );
}

export default PersonalInfo;
