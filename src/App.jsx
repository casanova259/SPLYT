import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './sections/Hero'
import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <div className="h-dvh"></div>
    </main>)
}

export default App
