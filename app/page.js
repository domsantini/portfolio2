'use client'

import LandingSection from "./components/LandingSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";

export default function Home() {  
  return (
    <main className='min-h-screen bg-[#FBFCF8]'>
      <section className='sticky top-0 grid place-content-center h-screen w-full border border-solid border-red-400'>
        <p>Landing section</p>
      </section>
      <section className='bg-lime-300 sticky top-0 grid place-content-center h-screen w-full border border-solid border-green-400'>
        <p>Content section</p>
      </section>
      <div 
        className='relative h-[500px] bg-slate-300 border border-solid border-red-500'
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
      >
        <div className='relative h-[calc(100vh+500px)] -top-[100vh]'>
          <div className='sticky top-[calc(100vh-500px)] h-[500px] flex items-end'>
            <p>Footer content stuff</p>
          </div>
        </div>
      </div>
    </main>
  );
}
