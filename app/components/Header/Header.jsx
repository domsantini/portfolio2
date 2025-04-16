'use client'
import Link from "next/link";
import { motion } from 'framer-motion'

import styles from "./Header.module.css";
import React from "react";
import { PageContext } from "@/app/context/pageContext";



const NAV_ITEMS = [
  { title: "Home", href: "#" },
  { title: "Work", href: "#work" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

const Header = () => {
  
  const { currentPage, setCurrentPage } = React.useContext(PageContext);
  
  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        delay: '0.7',
        duration: '0.4'
      }} 
      className={styles.header}
    >
      <nav className={styles.navbar}>
        <div className={styles.backdrop} />
        <ul className={styles.navlist}>
          {NAV_ITEMS.map(({ title, href }) => (
            <li
              onClick={() => setCurrentPage(title.toLocaleLowerCase())}
              key={href} 
              className={`${styles.navitem} ${currentPage == title.toLocaleLowerCase() ? styles.active : ''}`} 
            >
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
