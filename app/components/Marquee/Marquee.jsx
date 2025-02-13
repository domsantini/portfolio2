import styles from './Marquee.module.css'
import { motion } from 'framer-motion'
 
export default function Marquee({ children, className, scrollDirection='forward', props }) {
  
  const scrollDir = scrollDirection === 'forward' ? '100%' : '-100%'
  
  return (
    <div className={`${styles.marqueeContainer} ${className}`} {...props}>
      <motion.div
        className={`${styles.marqueeText} border-2 border-solid border-emerald-300`}
        animate={{ x: '-100%' }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        { children }
        { children }
        { children }
      </motion.div>
      <motion.div
        className={`${styles.marqueeText} border-2 border-solid border-amber-300`}
        animate={{ x: '-100%' }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        { children }
        { children }
        { children }
      </motion.div>
    </div>
  )
}