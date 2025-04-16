'use client'
import React from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

function RevealWord({ duration='1', ease='easeInOut', delay='1', className, children, ...props }) {
  const wordRef = React.useRef(null)
  const isInView = useInView(wordRef, { once: true })

  
  return (
    <AnimatePresence>
      
      <motion.span
        ref={wordRef}
        initial='initial'
        animate={isInView ? 'animate' : 'initial'}
        className={`${className} block w-fit overflow-hidden`}
        // transition={{ ease: "easeInOut", }}
        {...props}
      >
        <motion.div
          variants={{
            initial: {y: '100%'},
            animate: {y: 0}

          }}
          transition={{
            duration: '1',
            ease: "easeInOut",
            delay: '0.3',
          }}
          {...props}
        >
          { children }
        </motion.div>
      </motion.span>
    </AnimatePresence>
  )
}

export default RevealWord;