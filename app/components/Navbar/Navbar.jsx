'use client'
import Link from "next/link";
import { motion } from 'framer-motion'
import { usePageContext } from "../../context/pageContext";
import styles from './Navbar.module.css'

const NAV_ITEMS = [
  {title: 'Home', href: '#'},
  {title: 'Work', href: '#work'},
  {title: 'About', href: '#about'},
  {title: 'Contact', href: '#contact'},
]

function Navbar() {
  
  const { currentPage, setCurrentPage } = usePageContext()
  
  return (
      
      <motion.nav 
        initial={{ x: '-50%', y: -10, opacity: 0 }}
        animate={{ x: '-50%', y: 0, opacity: 1 }}
        transition={{
          ease: "easeInOut",
          delay: '0.7',
          duration: '0.4'
        }}
        className="isolate fixed z-10 top-5 left-1/2 -translate-x-1/2 border-2 border-solid border-black rounded-full uppercase px-4 py-2"
      >
        <div className={`${styles.backdrop}`}/>
        <ul className="flex gap-4">
          {NAV_ITEMS.map(({ title, href }, index) => (
            <li key={`${href}-${index}`} className={`cursor-pointer ` } onClick={() => setCurrentPage(title.toLowerCase())}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    
  );
}

export default Navbar;
