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
    <main className="relative h-full min-h-screen bg-[#FBFCF8]">
      <Header />
      <LandingSection id="home" scrollYProgress={scrollYProgress} className='sticky top-0 z-[1] w-full'/>
      <motion.div
        ref={wrapperRef}
        style={{ borderRadius }}
        className="relative z-[2] overflow-clip min-h-screen bg-zinc-700 h-full border-solid border-zinc-700"
      >
        <WorkSection id="work" className='relative z-[2]'/>
        <AboutSection id="about" className='relative z-[3]'/>
        <ContactSection className='sticky bottom-0 z-[1] bg-[#FBFCF8]'/>
      </motion.div>

    </main>
  );
}
