'use client'

import RevealText from "../RevealText";
import SectionWrapper from "../SectionWrapper";
import styles from './Landing.module.css'
import { motion, useTransform } from 'framer-motion'
import useMotionTimeline from "../../hooks/useMotionTimeline";

export default function LandingSection({ id }) {
  
  const scope = useMotionTimeline([
    ['.hand-emoji', { rotate: '-10deg'}, { duration: 0.2, delay: 1 }],
    ['.hand-emoji', { rotate: '10deg'},{ duration: 0.25 }],
    ['.hand-emoji', { rotate: '-5deg'},{ duration: 0.25 }],
    ['.hand-emoji', { rotate: '0deg'}, { duration: 0.1 }],
  ]);
    
  
  return (
    <div
      id={id}
      className='sticky top-0 h-[100svh]'
    >
      
      <div className={styles.background}>
        <div className={styles.blur}/>
        <div className={styles.circle1}/>
        <div className={styles.circle2}/>
        <div className={styles.circle3}/>
      </div>
      <div 
        className={styles.foreground}
      >
        <SectionWrapper
          className='flex flex-col justify-end'
        >
          <motion.p 
            initial={{ y: 10, opacity: 0}}
            animate={{ y: 0, opacity: 1 }}
            transition={{            
              ease: "easeInOut",
              delay: '0.7',
              duration: '0.4'
            }}

            className='text-sm lg:text-base leading-3 text-pretty mb-24 mx-auto xs:ml-auto xs:mr-0 max-w-[285px] lg:max-w-[410px]'
          >
            <span className='block leading-snug'>
              I design and develop digital experiences that combine clean aesthetics and tasteful animations. 
            </span>
            <br />
            <span className='block leading-snug'>
              My focus is on the polish that makes users pause and feel something extraordinary. 
            </span>
          </motion.p>
          <h1 
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
          </h1>
        </SectionWrapper>
      </div>
    </div>
  )
};
  