'use client'
import { motion } from 'framer-motion'

function SectionWrapper({ className, children, ref }) {
  return (
    <motion.section
      ref={ref}
      className={`
        min-h-[100svh] w-full p-4 md:px-8 lg:px-20 pb-[calc(100dvh-100svh+16px)]
        flex flex-col justify-end 
        ${className}
      `}
    >
      {children}
    </motion.section>
  )
}

export default SectionWrapper;