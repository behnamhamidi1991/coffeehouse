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
          spaceBetween={7}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 7,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 7,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 7,
            },
          }}
          modules={[Pagination]}
          className={styles.foodStory}
        >
          <SwiperSlide className={styles.slideItem}>
            <Image src={image1} />
            <div className={styles.foodDesc}>
              <h4>Bacon With Cheese</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                magnam!
                <br />
                <button className={styles.orderBtn}>Order Now</button>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideItem}>
            <Image src={image2} />
            <div className={styles.foodDesc}>
              <h4>Fried Dessert</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                magnam!
                <br />
                <button className={styles.orderBtn}>Order Now</button>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideItem}>
            <Image src={image3} />
            <div className={styles.foodDesc}>
              <h4>Sicilian Pasta</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                magnam!
                <br />
                <button className={styles.orderBtn}>Order Now</button>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideItem}>
            <Image src={image4} />
            <div className={styles.foodDesc}>
              <h4>Italian Pizza</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                magnam!
                <br />
                <button className={styles.orderBtn}>Order Now</button>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideItem}>
            <Image src={image5} />
            <div className={styles.foodDesc}>
              <h4>Pasta Alfredo</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                magnam!
                <br />
                <button className={styles.orderBtn}>Order Now</button>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideItem}>
            <Image src={image6} />
            <div className={styles.foodDesc}>
              <h4>American Pie</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                magnam!
                <br />
                <button className={styles.orderBtn}>Order Now</button>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideItem}>
            <Image src={image7} />
            <div className={styles.foodDesc}>
              <h4>Grilled Chicken</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                magnam!
                <br />
                <button className={styles.orderBtn}>Order Now</button>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideItem}>
            <Image src={image8} />
            <div className={styles.foodDesc}>
              <h4>Stake With Salad</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                magnam!
                <br />
                <button className={styles.orderBtn}>Order Now</button>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default FoodStory;
