"use client";

export default function LandingSection() {
  return (
    <section className="h-[100dvh] p-4 md:px-8 lg:px-20 lg:pb-8">
      <div className='flex flex-col justify-end h-full'>  
        <p className='text-sm lg:text-base leading-3 text-pretty mb-24 ml-auto mr-0 max-w-[285px] lg:max-w-[410px]'>
          <span className='block  leading-snug'>
            I design and develop digital experiences that combine my love of clean aesthetics and tasteful animations. 
          </span>
          <br />
          <span className='block leading-snug'>
            My focus is on the polish that makes users pause and feel something extraordinary. 
          </span>
        </p>
        <h1 className="font-chillax font-semibold text-[clamp(50px,9vw,140px)] leading-[0.95]">
          Hey!
          <br />
          I'm Dom 👋🏼
        </h1>
      </div>
    </section>
  );
}
