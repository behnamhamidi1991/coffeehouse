import React from "react";
import styles from "./foodstory.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image1 from "../../../public/story1.jpg";
import image2 from "../../../public/story2.jpg";
import image3 from "../../../public/story3.jpg";
import image4 from "../../../public/story4.jpg";
import image5 from "../../../public/story5.jpg";
import image6 from "../../../public/story6.jpg";
import image7 from "../../../public/story7.jpg";
import image8 from "../../../public/story8.jpg";

const FoodStory = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>Food Story</h2>
        <p>
          <span>Do we server food?</span> Of course! We&apos;ve got the best
          chef in the world who can make th best food you&apos;re ever gonna
          taste in your lifetime! Of course we don&apos;t server everything, but
          whatever we server are number one in the world!
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className={styles.foodStory}
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
      </div>
    </>
  );
};

export default FoodStory;
