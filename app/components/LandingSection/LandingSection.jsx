'use client'
import { motion, useInView, useTransform, useMotionValueEvent } from 'framer-motion'

import RevealText from "../RevealText";
import styles from './Landing.module.css'
import useMotionTimeline from "../../hooks/useMotionTimeline";
import React from 'react';


export default function LandingSection({ id, scrollYProgress }) {
  const [isGradientPaused, setIsGradientPaused] = React.useState(false)
   
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setIsGradientPaused(latest > 0.15)
  })
  
  const y = useTransform(scrollYProgress, [0,0.7], [0, -50])
  const opacity = useTransform(scrollYProgress, [0,0.7], [1, 0])
  
  const scope = useMotionTimeline([
    ['.hand-emoji', { rotate: '-10deg'}, { duration: 0.2, delay: 1 }],
    ['.hand-emoji', { rotate: '10deg'},{ duration: 0.25 }],
    ['.hand-emoji', { rotate: '-5deg'},{ duration: 0.25 }],
    ['.hand-emoji', { rotate: '0deg'}, { duration: 0.1 }],
  ]);
    
  return (
    <section
      id={id}
      className='
        h-[100svh] w-full
        sticky top-0 z-[1]
      '
    > 
      {/* <div className={styles.background}>
        <div className={styles.blur}/>
        <motion.div style={{ '--playState': isGradientPaused ? 'paused' : 'running' }} className={styles.circle1}/>
        <motion.div style={{ '--playState': isGradientPaused ? 'paused' : 'running' }} className={styles.circle2}/>
        <motion.div style={{ '--playState': isGradientPaused ? 'paused' : 'running' }} className={styles.circle3}/>
      </div> */}
      <motion.div 
        className={styles.foreground}
        style={{ willChange: 'transform, opacity', translateY: y, opacity, translateZ: 0 }}
      >
        <motion.p 
          initial={{ y: 10, opacity: 0}}
          animate={{ y: 0, opacity: 1 }}
          transition={{            
            ease: "easeInOut",
            delay: '0.7',
            duration: '0.4'
          }}
          className='text-sm lg:text-base leading-3 text-pretty mb-24 mx-auto min-[450px]:ml-auto min-[450px]:mr-0 max-w-[285px] lg:max-w-[410px]'
        >
          <span className='block leading-snug'>
            I design and develop digital experiences that combine clean aesthetics and tasteful animations. 
          </span>
          <br />
          <span className='block leading-snug'>
            My focus is on the polish that makes users pause and feel something extraordinary. 
          </span>
        </motion.p>
        <motion.h1 
          ref={scope} 
          className="font-chillax pb-2 font-semibold text-[clamp(50px,9vw,140px)]"
        >
          <RevealText duration='0.5' delay='0.6'>Hey!</RevealText>
          <RevealText duration='0.5' delay="0.7">
            {`I'm Dom `} 
            <motion.span 
              className='inline-block hand-emoji' 
              style={{ 
                transformOrigin: 'bottom right',
              }}          
            >
              👋🏼
            </motion.span>
          </RevealText>
        </motion.h1>
      </motion.div>
    </section>
  )
};
  