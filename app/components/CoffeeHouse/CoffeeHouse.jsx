import React from "react";
import styles from "./coffeehouse.module.css";
import Image from "next/image";
import image1 from "../../../public/coffeeshop1.jpg";
import image2 from "../../../public/coffeeshop2.jpg";
import image3 from "../../../public/coffeeshop3.jpg";

const CoffeeHouse = () => {
  return (
    <div className={styles.container}>
      <h2>Our Coffee House</h2>
      <p>
        You can come and visit our amazing environment. What you can do in our
        coffee house? If you need a place to study, there&apos;s a quiet study
        room for you! No music or distraction!
        <br />
        If you are a fan of playing games, watching football etc. our coffee
        house has a game and TV-room where you can enjoy.
      </p>

      <div className={styles.imageContainer}>
        <div className={styles.boxContainer}>
          <Image src={image1} alt="coffee-shop" className={styles.imageItem} />
          <button className={styles.reserveBtn1}>
            Reserve a Place in Study Room
          </button>
        </div>

        <div className={styles.boxContainer}>
          <Image src={image2} alt="coffee-shop" className={styles.imageItem} />
          <button className={styles.reserveBtn2}>
            Reserve a Place in Regular Coffee House
          </button>
        </div>

        <div className={styles.boxContainer}>
          <Image src={image3} alt="coffee-shop" className={styles.imageItem} />
          <button className={styles.reserveBtn3}>
            Reserve a Place in Our Game Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeHouse;
