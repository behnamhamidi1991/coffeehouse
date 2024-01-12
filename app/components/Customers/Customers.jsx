import React from "react";
import styles from "./customer.module.css";
import Image from "next/image";
import image1 from "../../../public/person1.png";
import image2 from "../../../public/person2.png";
import image3 from "../../../public/person3.png";
import image4 from "../../../public/person4.png";
import image5 from "../../../public/person5.png";
import image6 from "../../../public/person6.png";

const Customers = () => {
  return (
    <div className={styles.firstContainer}>
      <h2>Feedbacks</h2>
      <p className={styles.about}>
        Read about what our customers say about us and how the rated our
        services
      </p>
      <div className={styles.container}>
        <div className={styles.card}>
          <Image
            src={image1}
            height={50}
            width={50}
            className={styles.commentImg}
          />
          <h4>Alan Doe</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            molestias doloremque officiis.
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src={image2}
            height={50}
            width={50}
            className={styles.commentImg}
          />
          <h4>Alina Walker</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            molestias doloremque officiis.
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src={image3}
            height={50}
            width={50}
            className={styles.commentImg}
          />
          <h4>Selena Gilbert</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            molestias doloremque officiis.
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src={image4}
            height={50}
            width={50}
            className={styles.commentImg}
          />
          <h4>Marc Thomson</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            molestias doloremque officiis.
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src={image5}
            height={50}
            width={50}
            className={styles.commentImg}
          />
          <h4>Julia Weesle</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            molestias doloremque officiis.
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src={image6}
            height={50}
            width={50}
            className={styles.commentImg}
          />
          <h4>Nora Wane</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            molestias doloremque officiis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
