'use client'
import React, { forwardRef } from "react";

import ProjectsList from "./ProjectsList";

const WorkSection = forwardRef(function WorkSection({ id }, ref ) {
  return(
    <section
      ref={ref} 
      id={id}
      className='
        relative z-[2] min-h-[100svh] h-screen p-4 md:px-8 lg:px-20
        pt-20
        flex flex-col
        text-[#E6E8E3] bg-zinc-700
      '
    >
      <h1 className='text-[clamp(45px,9vw,140px)] font-chillax font-semibold pb-20'>
        Projects / Work
      </h1>
      <div className='flex h-full text-sm sm:text-base'>
        <ProjectsList />
      </div>
    </section>
  )
})
 


      
export default WorkSection;
      