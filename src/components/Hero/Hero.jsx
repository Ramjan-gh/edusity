import React from 'react'
import "./hero.css"
import RightArrow from '../../assets/svg/RightArrow';
import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <section
      className="hero relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
        <div className="absolute inset-0 bg-[#27318B]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
  <div className="hero-content text-neutral-content text-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">
              We Ensure better education for better world
            </h1>
            <p className="mb-5">
              Our cutting edge learning platform offers personalized courses,
              expert instructors, and interactive tools to help you achieve your
              educational goals.
            </p>
            <button className="btn bg-white text-black p-4 rounded-full hover:bg-slate-700 hover:text-white flex justify-self-center gap-4 ">
              Explore more
              <RightArrow />{" "}
            </button>
          </div>
        </div>
    </section>
  );
}

export default Hero