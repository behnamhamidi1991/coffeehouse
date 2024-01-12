import React from "react";
import styles from "./staff.module.css";
import Image from "next/image";
import image1 from "../../../public/b1.jpg";
import image2 from "../../../public/b2.jpg";
import image3 from "../../../public/b3.jpg";
import image4 from "../../../public/b4.jpg";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Staff = () => {
  return (
    <div className={styles.container}>
      <h2>Our Professional Chefs and Baristas</h2>
      <p>Take a look at the magic we do in our coffee house ...</p>
      <div className={styles.imageContainer}>
        <div className={styles.imageBox}>
          <Image src={image1} className={styles.image} />
          <div className={styles.social}>
            <a href="#">
              <AiFillInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaSquareTwitter />
            </a>
          </div>
        </div>
        <div className={styles.imageBox}>
          <Image src={image2} className={styles.image} />
          <div className={styles.social}>
            <a href="#">
              <AiFillInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaSquareTwitter />
            </a>
          </div>
        </div>
        <div className={styles.imageBox}>
          <Image src={image3} className={styles.image} />
          <div className={styles.social}>
            <a href="#">
              <AiFillInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaSquareTwitter />
            </a>
          </div>
        </div>
        <div className={styles.imageBox}>
          <Image src={image4} className={styles.image} />
          <div className={styles.social}>
            <a href="#">
              <AiFillInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaSquareTwitter />
            </a>
          </div>
        </div>
      </div>
      <button className={styles.readMoreBtn}>Read More</button>
    </div>
  );
};

export default Staff;
