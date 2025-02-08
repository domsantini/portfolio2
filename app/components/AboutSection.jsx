'use client'
import React from 'react'

import SectionWrapper from "./SectionWrapper";
import Marquee from "./Marquee/Marquee";
import SkillPill from './SkillPill';

function AboutSection({ id }) {
  const [windowWidth, setWindowWidth] = React.useState(0)
  const marqueeRef = React.useRef(undefined)
  
  React.useEffect(() => {
    const windowWidth = window.innerWidth;
    setWindowWidth(windowWidth)
  }, [])
  
  return (
    <SectionWrapper
      id={id}
      className='
        pt-20
        flex flex-col
        text-[#E6E8E3] bg-zinc-700
        overflow-hidden
      '
    >
      <h1 className='text-[clamp(45px,9vw,140px)] font-chillax font-semibold'>
        About Me
      </h1>
      <div className='flex flex-col justify-center flex-grow gap-10 h-full -mx-28 text-[3vw] uppercase' >
        <Marquee ref={marqueeRef} className='bg-black rotate-[5deg] py-8 space-x-4' scrollDirection='forward'>
          <SkillPill className='border-[#A1A1AA] text-[#A1A1AA]'>React</SkillPill>
          <SkillPill className='border-[#A1A1AA] text-[#A1A1AA]'>TypeScript</SkillPill>
          <SkillPill className='border-[#A1A1AA] text-[#A1A1AA]'>JavaScript</SkillPill>
        </Marquee>
        <Marquee className='bg-[#A1A1AA] rotate-[-10deg] py-4' scrollDirection='back'>
          <SkillPill className='border-black text-black'>Art</SkillPill>
          <SkillPill className='border-black text-black'>Design</SkillPill>
          <SkillPill className='border-black text-black'>Reading</SkillPill>
        </Marquee>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;


// <section id={id} className={`min-h-screen h-[100svh] flex flex-col justify-end pt-20 p-4 md:px-8 lg:px-20 lg:pb-8 bg-zinc-700 ${className}`}>
//   <div className='h-full'/>
//   <h1 className="text-[#E6E8E3] text-[clamp(35px,9vw,140px)] font-chillax font-semibold">
//     More About Me
//   </h1>
// </section>