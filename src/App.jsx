import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero';
import Program from './components/program/Program';
import Gallery from './components/gallery/Gallery';
import Testimonials from './components/testimonials/Testimonials';

const App = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <Program/>
      <Gallery />
      <Testimonials />
      
    </div>
  );
}

export default App