'use client'
import { animate, motion } from 'framer-motion'

function RevealText({ children }) {
  return (
    <motion.span
      initial='initial'
      animate='animate'
      className='block overflow-hidden whitespace-nowrap bg-red-200'
    >
      <motion.div
        variants={{
          initial: {y: '100%'},
          animate: {y: 0}
        }}
      >
        { children }
      </motion.div>
    </motion.span>
  )
}

export default RevealText;