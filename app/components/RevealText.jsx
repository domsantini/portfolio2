'use client'
import { animate, motion, spring } from 'framer-motion'

function RevealText({ duration, ease='easeInOut', delay='1', children, ...props }) {
  return (
    <motion.span
      initial='initial'
      animate='animate'
      className='block overflow-hidden whitespace-nowrap leading-[1.2]'
      transition={{ type: spring }}
    >
      <motion.div
        variants={{
          initial: {y: '100%'},
          animate: {y: 0}
        }}
        transition={{
          duration,
          ease,
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