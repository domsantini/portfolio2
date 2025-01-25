'use client'
import React from 'react'
import Navbar from './components/Navbar'
import LandingSection from './components/LandingSection';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import MainContentWrapper from './components/MainContentWrapper';

export default function Home() {  
  
  return (
    <main className='relative bg-[#FBFCF8] h-full'>
      <Navbar />
      <LandingSection id='home'/>
      <MainContentWrapper>  
        <WorkSection id='work'/>
        <AboutSection id='about' />
      </MainContentWrapper>
    </main>
  );
}
