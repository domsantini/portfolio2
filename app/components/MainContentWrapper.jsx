'use client'
import { motion, useTransform } from 'framer-motion'

function MainContentWrapper({ scrollYProgress, children }) {
  
  const borderRadius = useTransform(scrollYProgress, [0,1], [40,0])
    
  return (
    <motion.section style={{ borderRadius }} className='bg-zinc-700 sticky top-0'>
      {children}
    </motion.section>
  )
}

export default MainContentWrapper;