'use client'
import { motion, useTransform } from 'framer-motion'

function MainContentWrapper({ scrollYProgress, children }) {
  
  const scaleX = useTransform(scrollYProgress, [0,1], [0.9,1])
  
  return (
    <motion.section style={{ scaleX }} className='bg-zinc-700 sticky top-0 rounded-[40px]'>
      {children}
    </motion.section>
  )
}

export default MainContentWrapper;