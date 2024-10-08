import styles from './Marquee.module.css'
import { motion } from 'framer-motion'
 
export default function Marquee({ children }) {
  
  // const marqueeAnimation = {
  //   x: ['0%', '-100%'],
  //   transition: {
  //     duration: 5,
  //     ease: 'linear',
  //     repeat: Infinity,
  //   }
  // }
  
  return (
    <div className={styles.marqueeContainer}>
      <motion.div
        className={styles.marqueeText}
        animate={{ x: '-100%'}}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <p>{ children }</p>
        <p>{ children }</p>
      </motion.div>
      <motion.div
        className={styles.marqueeText}
        animate={{ x: '-100%'}}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <p>{ children }</p>
        <p>{ children }</p>
      </motion.div>
    </div>
  )
}