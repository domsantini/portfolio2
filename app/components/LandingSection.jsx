'use client'

import RevealText from "./RevealText";
import SectionWrapper from "./SectionWrapper";
import { motion, useTransform } from 'framer-motion'
import useMotionTimeline from "../hooks/useMotionTimeline";

export default function LandingSection({ id, scrollYProgress }) {
  
  const scope = useMotionTimeline([
    ['.hand-emoji', { rotate: '-10deg'}, { duration: 0.2, delay: 1 }],
    ['.hand-emoji', { rotate: '10deg'},{ duration: 0.25 }],
    ['.hand-emoji', { rotate: '-5deg'},{ duration: 0.25 }],
    ['.hand-emoji', { rotate: '0deg'}, { duration: 0.1 }],
  ]);
  
  const opacity = useTransform(scrollYProgress, [1,0.5], [1,0])
  const y = useTransform(scrollYProgress, [1,0.3], [0, 50])
  
  return (
    <SectionWrapper
      id={id}
      className='flex flex-col justify-end'
      style={{ opacity, y }}
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
        <h1 ref={scope} className="font-chillax pb-2 font-semibold text-[clamp(50px,9vw,140px)]">
          <RevealText duration='0.4' delay='0.5' ease="easeOut">Hey!</RevealText>
          <RevealText duration='0.4' delay="0.7" ease="easeOut">
            {`I'm Dom `} 
            <motion.span 
              className='inline-block hand-emoji' 
              // transition={{
              //   type: 'spring',
              //   mass: '200',
              //   stiffness: '50'
              // }}
              style={{ 
                transformOrigin: 'bottom right',
              }}          
            >
              👋🏼
            </motion.span>
          </RevealText>
        </h1>
    </SectionWrapper>
  )
};
  