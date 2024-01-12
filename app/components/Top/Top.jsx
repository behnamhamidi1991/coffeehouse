import React from "react";
import styles from "./top.module.css";

const Top = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Taste Our Coffee</h1>
        <h2>Just once and you&apos;ll see it&apos;s real</h2>
      </div>
    </div>
  );
};

export default Top;
