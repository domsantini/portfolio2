'use client'
import React from 'react'

import SectionWrapper from "./SectionWrapper";
import Marquee from "./Marquee/Marquee";
import SkillPill from './SkillPill';

function AboutSection({ id }) {
  return (
    <section
      id={id}
      className='
        relative z-[2] min-h-screen h-full overflow-clip
        pt-20
        flex flex-col
        text-[#E6E8E3] bg-zinc-700
      '
    >
      <h1 
        className='
          p-4 md:px-8 lg:px-20 pb-20
          text-[clamp(45px,9vw,140px)] font-chillax font-semibold 
        '
      >
        About Me
      </h1>
      {/* <div className='flex flex-grow'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vero eos maiores. Odio sunt eum commodi aspernatur repudiandae corporis autem odit consequuntur nesciunt, exercitationem quisquam obcaecati harum consectetur, voluptas corrupti!</p>
      </div> */}
      <div className='flex flex-col flex-grow justify-center h-full text-sm sm:text-base '>
        <Marquee speed='45s'>
          <p>Next.js</p>
          <p>React</p>
          <p>TypeScript</p>
          <p>JavaScript</p>
          <p>CSS</p>
          <p>Framer Motion</p>
          <p>TailwindCSS</p>
          <p>Python</p>
          <p aria-hidden='true'>Next.js</p>
          <p aria-hidden='true'>React</p>
          <p aria-hidden='true'>TypeScript</p>
          <p aria-hidden='true'>JavaScript</p>
          <p aria-hidden='true'>CSS</p>
          <p aria-hidden='true'>Framer Motion</p>
          <p aria-hidden='true'>TailwindCSS</p>
          <p aria-hidden='true'>Python</p>
        </Marquee>
        <Marquee scrollDirection='reverse' speed='50s'>
          <p>Ironman Triathlete</p>
          <p>Kurt Vonnegut</p>
          <p>Art</p>
          <p>Design</p>
          <p>Frank Ocean</p>
          <p>Web Animations</p>
          <p>Chinese Food</p>
          <p>Wes Anderson</p>
          <p>The Raiders</p>
          <p>Reading</p>
          <p aria-hidden='true'>Ironman Triathlete</p>
          <p aria-hidden='true'>Kurt Vonnegut</p>
          <p aria-hidden='true'>Art</p>
          <p aria-hidden='true'>Design</p>
          <p aria-hidden='true'>Frank Ocean</p>
          <p aria-hidden='true'>Web Animations</p>
          <p aria-hidden='true'>Chinese Food</p>
          <p aria-hidden='true'>Wes Anderson</p>
          <p aria-hidden='true'>The Raiders</p>
          <p aria-hidden='true'>Reading</p>
        </Marquee>
        
      </div>
    </section> 
    // <SectionWrapper
    //   id={id}
    //   className='
    //     pt-20
    //     flex flex-col
    //     text-[#E6E8E3] bg-zinc-700
    //     overflow-hidden
    //   '
    // >
    //   <h1 className='text-[clamp(45px,9vw,140px)] font-chillax font-semibold'>
    //     About Me
    //   </h1>
    //   <div className='flex flex-col justify-center flex-grow gap-10 h-full -mx-28 text-[3vw] uppercase' >
    //     <Marquee className='bg-black rotate-[5deg] py-4' scrollDirection='forward'>
    //       <SkillPill className='border-[#A1A1AA] text-[#A1A1AA]'>React</SkillPill>
    //       <SkillPill className='border-[#A1A1AA] text-[#A1A1AA]'>TypeScript</SkillPill>
    //       <SkillPill className='border-[#A1A1AA] text-[#A1A1AA]'>JavaScript</SkillPill>
    //     </Marquee>
    //     <Marquee className='bg-[#A1A1AA] rotate-[-10deg] py-4' scrollDirection='back'>
    //       <SkillPill className='border-black text-black'>Art</SkillPill>
    //       <SkillPill className='border-black text-black'>Design</SkillPill>
    //       <SkillPill className='border-black text-black'>Reading</SkillPill>
    //     </Marquee>
    //   </div>
    // </SectionWrapper>
  );
}

export default AboutSection;


// <section id={id} className={`min-h-screen h-[100svh] flex flex-col justify-end pt-20 p-4 md:px-8 lg:px-20 lg:pb-8 bg-zinc-700 ${className}`}>
//   <div className='h-full'/>
//   <h1 className="text-[#E6E8E3] text-[clamp(35px,9vw,140px)] font-chillax font-semibold">
//     More About Me
// </section>
//   </h1>