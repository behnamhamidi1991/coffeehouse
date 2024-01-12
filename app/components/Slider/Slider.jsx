"use client";
import styles from "./slider.module.css";

import React from "react";
import Image from "next/image";
import image1 from "../../../public/coffee1.jpg";
import image2 from "../../../public/coffee2.jpg";
import image3 from "../../../public/coffee3.jpg";
import image4 from "../../../public/coffee4.jpg";
import image5 from "../../../public/coffee5.jpg";
import image6 from "../../../public/coffee6.jpg";
import image7 from "../../../public/coffee7.jpg";
import image8 from "../../../public/coffee8.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={10}
        loop={true}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.slider}
      >
        <SwiperSlide>
          <Image src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image5} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image6} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image7} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image8} />
        </SwiperSlide>
      </Swiper>
      <button className={styles.menuBtn}>Read The Menu</button>
    </div>
  );
}
