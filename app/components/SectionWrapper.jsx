'use client'
import { motion } from 'framer-motion'

// Potentially add back for more sections
// pb-[calc(100dvh-100svh+16px)]

function SectionWrapper({ className, children, props }) {
  return (
    <motion.section
      className={`
        min-h-[100svh] w-full p-4 md:px-8 lg:px-20
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export default SectionWrapper;