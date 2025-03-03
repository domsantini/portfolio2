'use client'
import React from 'react'

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
      <div className='flex flex-col flex-grow text-sm sm:text-base lg:text-lg leading-snug text-pretty mb-24 mx-auto min-[450px]:ml-auto min-[450px]:mr-0 lg:max-w-[410px] '>
        <p>I'm a Frontend Developer on a quest to master everything related to web development and creative coding. </p>
        <br/>
        

      </div>

    </section> 
  );
}

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