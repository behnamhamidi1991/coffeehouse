import React from "react";
import styles from "./top.module.css";
import Image from "next/image";

const Top = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Taste Our Coffee</h1>
        <h2>Just once and you&apos;ll see it&apos;s real</h2>
        <button className={styles.register}>Register</button>
        <button className={styles.login}>Login</button>
      </div>
    </div>
  );
};

export default Top;
