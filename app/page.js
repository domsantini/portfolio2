"use client";
import React from "react";
import { useScroll, useMotionValueEvent } from 'framer-motion';


import Header from "./components/Header/Header";
import LandingSection from "./components/LandingSection/LandingSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import ContactButton from "./components/ContactButton";

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
    <>
      <main className="relative h-full bg-[#FBFCF8] z-20">
        {/* <Header /> */}
        <LandingSection id="home" scrollYProgress={scrollYProgress}/>
        <div className='relative z-[2]'>
          <WorkSection ref={wrapperRef} id="work"/>
          <AboutSection id="about"/>
        </div>
      </main>
      <footer className='relative h-[100dvh] bg-[#FBFCF8]'>
        <div className='h-full w-full fixed bottom-0 flex flex-col justify-center items-center'>
          <p className='font-chillax font-semibold text-[12vw]'>Get in touch!</p>
          <div className='flex  gap-2'>
            <ContactButton label='LinkedIn' href='https://www.linkedin.com/in/dominic-santini/'/>
            <ContactButton label='GitHub' href='https://github.com/domsantini'/>
          </div>
        </div>
      </footer>
    </>
  );
}

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