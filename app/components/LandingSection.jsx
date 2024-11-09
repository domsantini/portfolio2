"use client";
import React from "react";
import { motion } from "framer-motion";

export default function LandingSection() {
  return (
    <div className="absolute h-screen">
      <p 
        className="w-[450px] text-pretty"
      >
        Frontend developer with a soft spot for rounded corners and smooth
        animations. Currently deepening my skills in design and building with
        React.
      </p>
        <h1 
          className="absolute font-chillax font-semibold text-[8.5vw] leading-[0.95]"
        >
          Hey!
          <br />
          I'm Dom 👋🏼
        </h1>
    </div>
  );
}
