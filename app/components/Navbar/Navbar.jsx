import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <Link href="/" className={styles.listItem}>
          Home
        </Link>
        <Link href="/" className={styles.listItem}>
          Order
        </Link>
        <Link href="/" className={styles.listItem}>
          Events
        </Link>
        <Link href="/" className={styles.listItem}>
          Blog
        </Link>
        <Link href="/" className={styles.listItem}>
          About
        </Link>
        <Link href="/" className={styles.listItem}>
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
