import Link from "next/link";
import { motion } from 'framer-motion'

import styles from "./Header.module.css";

const NAV_ITEMS = [
  { title: "Home", href: "#" },
  { title: "Work", href: "#work" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

const Header = () => {
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
            <li key={href}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
