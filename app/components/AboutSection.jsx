'use client'
import React from 'react'
import Marquee from './Marquee/Marquee';

import RevealText from './RevealText';

function AboutSection({ id }) {
  return (
    <section
      id={id}
      className='
        relative z-[2] min-h-screen h-full overflow-clip
        pt-20 p-4 md:px-8 lg:px-20 pb-20
        flex flex-col
        text-[#E6E8E3] bg-zinc-700
      '
    >
      <h1 className='pb-20 text-[clamp(45px,9vw,140px)] font-chillax font-semibold '>
        About Me
      </h1>
      <div className='flex flex-col items-center flex-grow text-sm min-[500px]:text-lg leading-snug text-pretty max-w-[600px] px-2 sm:mx-auto whitespace-normal'>
        <p>I'm a frontend developer who loves crafting beautiful, engaging web experiences. Drawn to clean design, I keep things simple—while adding just the right touch of fun.</p>
        <br/>
        <p>Right now, I’m focused on refining my animation skills, exploring the world of custom shaders, and mastering the small details that bring polish to a project.</p>
        <br/>
        <p>If I'm not coding, I'm likely training for a triathlon, reading great fiction, flipping through one of my (far too many) coffee table books, or spending time with the people who matter most.</p>
      </div>
    </section> 
  );
}



// upper section
//I design and develop digital experiences that combine clean aesthetics and tasteful animations.

// My focus is on the polish that makes users pause and feel something extraordinary.

{/* <Marquee speed='45s'>
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
</Marquee> */}
export default AboutSection;