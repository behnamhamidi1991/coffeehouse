import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.headerContent}>
        <h2>Order Online</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fuga?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum esse
          eligendi exercitationem, a minus maxime rerum quas repudiandae
          recusandae at sed repellendus fuga libero, facilis autem asperiores,
          commodi possimus adipisci?
        </p>
        <button className={styles.orderBtn}>Order</button>
      </div>

      <div className={styles.links}>
        <div className={styles.linkContainer}>
          <h4 className={styles.linkHeader}>Links</h4>
          <ul>
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              Branches
            </Link>
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              Academy
            </Link>{" "}
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              Order
            </Link>{" "}
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              Cities
            </Link>
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              Abroad
            </Link>
          </ul>
        </div>

        <div className={styles.linkContainer}>
          <h4 className={styles.linkHeader}>Extensions</h4>
          <ul>
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              Miro
            </Link>
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              Jira
            </Link>{" "}
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              Loom
            </Link>{" "}
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              Clearbit
            </Link>
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              Nevermore
            </Link>
          </ul>
        </div>

        <div className={styles.linkContainer}>
          <h4 className={styles.linkHeader}>Company</h4>
          <ul>
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              Career
            </Link>
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              About
            </Link>{" "}
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              Blog
            </Link>{" "}
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              Status
            </Link>
            <Link href="/" className={styles.linkItem}>
              <FaChevronRight className={styles.linkIcon} />
              Newsroom
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
