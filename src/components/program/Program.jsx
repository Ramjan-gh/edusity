import React from 'react'
import "./program.css"
import program1Image from "../../assets/program-1.png";
import program2Image from "../../assets/program-2.png";
import program3Image from "../../assets/program-3.png";

const Program = () => {
  return (
    <section className="program-section py-20 px-6 bg-white text-black">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-lg text-blue-900 font-bold mb-1 text-center">
          OUR PROGRAMS
        </h2>
        <p className="mb-6 text-4xl text-center font-bold text-[#0e0a33] mb-20">
          What We Offer
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl overflow-hidden">
            <img src={program1Image} alt="" srcset="" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={program2Image} alt="" srcset="" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={program3Image} alt="" srcset="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Program