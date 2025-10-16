import { useState } from 'react';
import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero';
import Program from './components/program/Program';
import Gallery from './components/gallery/Gallery';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Videoplayer from './components/video player/VideoPlayer';

const App = () => {

  const[playState,setPlayState] = useState(false);


  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <Program setPlayState={setPlayState} />
      <Gallery />
      <Testimonials />
      <Contact />
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App