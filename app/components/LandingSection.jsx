"use client";
import React from "react";
import { motion, useTransform } from "framer-motion";

export default function LandingSection({ scrollYProgress }) {
  
  // const input = [0,1]
  // const output = [1,0]
  const input = [0,0.3,0.5]
  const output = [1,0.1,0]
  const opacity = useTransform(scrollYProgress, input, output)
  const y = useTransform(scrollYProgress,[0,1],[0,-100]) 
  
  return (
    <motion.section style={{ opacity, y }} className="sticky top-0 h-screen">
      <div className='relative w-full h-screen flex flex-col justify-end p-2'>  
        <p className='text-balance mb-40'>
          Frontend developer with a soft spot for rounded corners and smooth
          animations. Currently deepening my skills in design and building with
          React.
        </p>
        <h1 className="font-chillax font-semibold text-[clamp(50px,9vw,140px)] leading-[0.95]">
          Hey!
          <br />
          I'm Dom 👋🏼
        </h1>
      </div>
    </motion.section>
  );
}
