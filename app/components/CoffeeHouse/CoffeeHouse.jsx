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
      <p>You can come and visit our amazing environment ... </p>
      <div className={styles.imageContainer}>
        <div className={styles.boxContainer}>
          <Image src={image1} alt="coffee-shop" className={styles.imageItem} />
          <p className={styles.imageDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            ipsum aspernatur at, fugiat porro cumque laborum maiores ut illo
            illum enim, temporibus eveniet recusandae nesciunt, labore unde
            blanditiis doloremque inventore.
          </p>
        </div>

        <div className={styles.boxContainer}>
          <Image src={image2} alt="coffee-shop" className={styles.imageItem} />
          <p className={styles.imageDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            ipsum aspernatur at, fugiat porro cumque laborum maiores ut illo
            illum enim, temporibus eveniet recusandae nesciunt, labore unde
            blanditiis doloremque inventore.
          </p>
        </div>

        <div className={styles.boxContainer}>
          <Image src={image3} alt="coffee-shop" className={styles.imageItem} />
          <p className={styles.imageDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            ipsum aspernatur at, fugiat porro cumque laborum maiores ut illo
            illum enim, temporibus eveniet recusandae nesciunt, labore unde
            blanditiis doloremque inventore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeHouse;
