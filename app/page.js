'use client'
import React from 'react'
import { useScroll } from 'framer-motion';

import Blob from './components/Blob/Blob'
import Navbar from "./components/Navbar.jsx";
import LandingSection from "./components/LandingSection";
import MainContentWrapper from "./components/MainContentWrapper";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection.jsx";

export default function Home() {  
  
  const container = React.useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'center end']
  })
  
  return (
    <main ref={container} className='relative bg-[#FBFCF8] h-full'>
      {/* <Blob /> */}
      <Navbar />
      <LandingSection scrollYProgress={scrollYProgress}/>
      <MainContentWrapper scrollYProgress={scrollYProgress}>
        <WorkSection id='work'/>
        <AboutSection id='about' />
      </MainContentWrapper>
      {/* <ContactSection /> */}
      {/* <div 
        className='relative h-[500px] bg-slate-300 border border-solid border-red-500'
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
      >
        <div className='relative h-[calc(200vh+500px)] -top-[200vh]'>
          <div className='sticky top-[calc(200vh-500px)] h-[500px] flex items-end'>
            <p>Footer content stuff</p>
          </div>
        </div>
      </div> */}
    </main>
  );
}
