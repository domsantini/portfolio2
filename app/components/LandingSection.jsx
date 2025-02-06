'use client'

import RevealText from "./RevealText";
import SectionWrapper from "./SectionWrapper";
import { motion, useTransform } from 'framer-motion'
import useMotionTimeline from "../hooks/useMotionTimeline";

export default function LandingSection({ id, scrollYProgress }) {
  
  const scope = useMotionTimeline([
    ['.hand-emoji', { rotate: '-10deg'}, { duration: 0.2, delay: 1 }],
    ['.hand-emoji', { rotate: '10deg'},{ duration: 0.25 }],
    ['.hand-emoji', { rotate: '0deg'}, { duration: 0.25 }],
  ]);
  
  // const opacity = useTransform(scrollYProgress, [1,0.5], [1,0])
  // const y = useTransform(scrollYProgress, [1,0.3], [0, 50])
  
    return (
      <SectionWrapper
        id={id}
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
  
  // <motion.section 
  //   // style={{ opacity, y }}
  //   id={id} 
  //   ref={scope} 
  //   className={className}        
  // >
  //   <div className='min-h-[100svh] pb-[calc(100dvh-100svh+16px)] p-4 md:px-8 lg:px-20 w-full border-solid border-emerald-400 border-2 flex flex-col justify-end'>  
  //     <motion.p 
  //       initial={{ y: 10, opacity: 0}}
  //       animate={{ y: 0, opacity: 1 }}
  //       transition={{
  //         ease: "easeInOut",
  //         delay: '0.7',
  //         duration: '0.4'
  //       }}
  //       className='text-sm lg:text-base leading-3 text-pretty mb-24 mx-auto xs:ml-auto xs:mr-0 max-w-[285px] lg:max-w-[410px]'
  //     >
  //       <span className='block leading-snug'>
  //         I design and develop digital experiences that combine clean aesthetics and tasteful animations. 
  //       </span>
  //       <br />
  //       <span className='block leading-snug'>
  //         My focus is on the polish that makes users pause and feel something extraordinary. 
  //       </span>
  //     </motion.p>
  //     <h1 className="font-chillax pb-2 font-semibold text-[clamp(50px,9vw,140px)]">
  //       <RevealText duration='0.4' delay='0.5' ease="easeOut">Hey!</RevealText>
  //       <RevealText duration='0.4' delay="0.7" ease="easeOut">
  //         {`I'm Dom `} 
  //         <motion.span 
  //           className='inline-block hand-emoji' 
  //           style={{ 
  //             transformOrigin: 'bottom right',
  //           }}
  //         >
  //           👋🏼
  //         </motion.span>
  //       </RevealText>
  //     </h1>
  //   </div>
  // </motion.section>
