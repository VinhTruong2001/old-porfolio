import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import ShortInfo from "../components/personalInfo/ShortInfo";
import ContactInfo from "../components/personalInfo/ContactInfo";

function PersonalInfo() {
  return (
    <Swiper
      mousewheel={true}
      pagination={true}
      modules={[Mousewheel, Pagination]}
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
