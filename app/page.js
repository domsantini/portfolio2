"use client";
import React from "react";
import Header from "./components/Header/Header";
import LandingSection from "./components/LandingSection/LandingSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {

  return (
    <main className="relative min-h-[100svh] h-full bg-[#FBFCF8]">
      {/* <Header /> */}
      <LandingSection id="home"/>
      <WorkSection id="work"/>
  
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
    </main>
  );
}
