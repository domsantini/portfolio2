'use client'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingSection from './components/LandingSection';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import MainContentWrapper from './components/MainContentWrapper';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {  
  
  const wrapperRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: wrapperRef, 
    offset: ['start start', 'start end']
  })  
  
  const borderRadius = useTransform(scrollYProgress, [0,1], [0,40])

  return (
    <main className='relative bg-[#FBFCF8] h-full'>
      <Navbar/>
      <LandingSection id='home' scrollYProgress={scrollYProgress}/>
      <motion.div ref={wrapperRef} style={{ borderRadius }} className='overflow-hidden sticky top-0 bg-zinc-700 h-full border-solid border-2 border-zinc-700'>  
        <WorkSection id='work'/>
        <AboutSection id='about' />
      </motion.div>

    </main>
  );
}
