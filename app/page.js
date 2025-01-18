'use client'
import React from 'react'
import Navbar from './components/Navbar'
import LandingSection from './components/LandingSection';

export default function Home() {  
  
  return (
    <main className='relative bg-[#FBFCF8] h-[100dvh]'>
      <Navbar />
      <LandingSection />
    </main>
  );
}
