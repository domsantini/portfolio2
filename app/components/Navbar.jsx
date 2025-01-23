'use client'
import Link from "next/link";
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <motion.nav 
      initial={{ x: '-50%', y: -10, opacity: 0 }}
      animate={{ x: '-50%', y: 0, opacity: 1 }}
      transition={{
        ease: "easeInOut",
        delay: '0.7',
        duration: '0.4'
      }}
      className="absolute top-5 left-1/2 -translate-x-1/2 border-2 border-solid border-black rounded-full uppercase px-4 py-2"
    >
      <ul className="flex gap-4">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#work">Work</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
