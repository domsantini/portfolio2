"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Header from "./components/Header/Header";
import LandingSection from "./components/LandingSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const wrapperRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "start end"],
  });

  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <main className="relative min-h-screen bg-[#FBFCF8]">
      {/* <Header /> */}
      <LandingSection id="home" scrollYProgress={scrollYProgress}/>
      {/* <WorkSection id="work" className='relative'/> */}
      {/* <div
        ref={wrapperRef}
        // style={{ borderRadius }}
        className="relative z-[2] bg-zinc-700 h-full"
      > */}
        {/* <AboutSection id="about" className='relative z-[6]'/> */}
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
    </main>
  );
}
