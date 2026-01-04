import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './sections/Hero'
import gsap from 'gsap/all'
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import Message from './sections/Message';
import Flavour from './sections/Flavour';
import { useGSAP } from '@gsap/react';
import NutritionSection from './sections/NutritionSection';
import BenefitSection from './sections/BenefitSection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1, // Start with 1, then increase gradually
      effects: true
    });
  })
  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <Flavour />
          <NutritionSection/>
          <BenefitSection/>
        </div>
      </div>
    </main>)
}

export default App
