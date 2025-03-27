'use client'
import { motion } from 'framer-motion'

function RevealText({ duration='1', ease='easeInOut', delay='1', className, children, ...props }) {
  return (
    <motion.span
      initial='initial'
      animate='animate'
      className={`${className} block overflow-hidden whitespace-nowrap leading-[1.2] `}
      transition={{ ease: [0.33, 1, 0.68, 1] }}
      {...props}
    >
      <motion.div
        variants={{
          initial: {y: '100%'},
          animate: {y: 0}

        }}
        transition={{
          duration,
          ease: [0.33, 1, 0.68, 1],
          delay,
        }}
        {...props}
      >
        { children }
      </motion.div>
    </motion.span>
  )
}

export default RevealText;