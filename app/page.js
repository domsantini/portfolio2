"use client";
import React from "react";
import { useScroll, useMotionValueEvent } from 'framer-motion';


import Header from "./components/Header/Header";
import LandingSection from "./components/LandingSection/LandingSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}