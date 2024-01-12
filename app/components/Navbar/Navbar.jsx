"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <ul className={!openMenu ? styles.list : styles.listOpen}>
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
      <button
        className={styles.burgurMenu}
        onClick={() => (!openMenu ? setOpenMenu(true) : setOpenMenu(false))}
      >
        {!openMenu ? <GiHamburgerMenu /> : <RxCross1 />}
      </button>
    </nav>
  );
};

export default Navbar;
