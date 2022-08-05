import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel } from "swiper";
import ShortInfo from "../components/common/personalInfo/ShortInfo";
import ContactInfo from "../components/common/personalInfo/ContactInfo";


function PersonalInfo() {
  return (
    <Swiper
      mousewheel={true}
      modules={[Mousewheel]}
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
