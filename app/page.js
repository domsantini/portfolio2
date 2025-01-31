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
    <main className="relative bg-[#FBFCF8] h-full">
      <Header />
      <LandingSection id="home" scrollYProgress={scrollYProgress} />
      <motion.div
        ref={wrapperRef}
        style={{ borderRadius }}
        className="overflow-hidden min-h-screen bg-zinc-700 h-full border-solid border-2 border-zinc-700 mb-[100px]"
      >
        <WorkSection id="work" />
        <AboutSection id="about" />
      </motion.div>
    </main>
  );
}
