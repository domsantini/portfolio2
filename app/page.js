"use client";
import React from "react";
import { useScroll, useMotionValueEvent } from 'framer-motion';

import Header from "./components/Header/Header";
import LandingSection from "./components/LandingSection/LandingSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const wrapperRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'start start']
  })

  // This is how you log a motion value
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })
  
  return (
    <main className="relative h-full bg-[#FBFCF8]">
      {/* <Header /> */}
      <LandingSection id="home" scrollYProgress={scrollYProgress}/>
      <div className='relative z-[2]'>
        <WorkSection ref={wrapperRef} id="work"/>
      </div>
    </main>
  );
}

{/* <AboutSection id="about"/> */}
{/* <div
  ref={wrapperRef}
  // style={{ borderRadius }}
  className="relative z-[2] bg-zinc-700 h-full"
> */}
  {/* <ContactSection id='contact' className='sticky bottom-0 z-[3] bg-[#FBFCF8]'/> */}
{/* </div> */}
{/* <motion.div
  ref={wrapperRef}
  // style={{ borderRadius }}
  className="relative z-[2] bg-zinc-700 h-[250svh] border-solid border-2 border-pink-400"
>
  <WorkSection id="work" className='relative z-[5]'/>
  <AboutSection id="about" className='relative z-[6]'/>
  <ContactSection id='contact' className='sticky bottom-0 z-[3] bg-[#FBFCF8] border-2 border-solid border-green-400'/>
</motion.div> */}