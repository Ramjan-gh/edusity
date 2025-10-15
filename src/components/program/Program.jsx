import React from "react";
import "./program.css";
import program1Image from "../../assets/program-1.png";
import program2Image from "../../assets/program-2.png";
import program3Image from "../../assets/program-3.png";
import programIcon1 from "../../assets/program-icon-1.png";
import programIcon2 from "../../assets/program-icon-2.png";
import programIcon3 from "../../assets/program-icon-3.png";

const Program = () => {
  return (
    <section className="program-section py-20 px-6 bg-white text-black">
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-lg text-blue-900 font-bold mb-1 text-center">
          OUR PROGRAMS
        </h2>
        <p className="text-4xl text-center font-bold text-[#0e0a33] mb-20">
          What We Offer
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative">
            <div className="rounded-xl overflow-hidden">
              <img src={program1Image} alt="" srcset="" />
            </div>
            <div className="absolute inset-0 bottom-0 items-center justify-center flex flex-col w-full hover:bg-blue-900 hover:opacity-40 hover:rounded-xl p-4 transition-all duration-700 ease-in-out group">
              <img
                className="w-16 transform translate-y-24 opacity-0 
    group-hover:translate-y-0 group-hover:opacity-100 
    transition-all duration-700 ease-in-out"
                src={programIcon1}
                alt="Program Icon"
              />

              <p
                className="text-white mt-2 transform translate-y-24 opacity-0 
    group-hover:translate-y-0 group-hover:opacity-100 
    transition-all duration-700 ease-in-out"
              >
                Graduation Degree
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden">
              <img src={program2Image} alt="" srcset="" />
            </div>
            <div className="absolute inset-0 bottom-0 items-center justify-center flex flex-col w-full hover:bg-blue-900 hover:opacity-40 hover:rounded-xl p-4 transition-all duration-700 ease-in-out group">
              <img
                className="w-16 transform translate-y-24 opacity-0 
    group-hover:translate-y-0 group-hover:opacity-100 
    transition-all duration-700 ease-in-out"
                src={programIcon2}
                alt="Program Icon"
              />

              <p
                className="text-white mt-2 transform translate-y-24 opacity-0 
    group-hover:translate-y-0 group-hover:opacity-100 
    transition-all duration-700 ease-in-out"
              >
                Masters Degree
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden">
              <img src={program3Image} alt="" srcset="" />
            </div>
            <div className="absolute inset-0 bottom-0 items-center justify-center flex flex-col w-full hover:bg-blue-900 hover:opacity-40 hover:rounded-xl p-4 transition-all duration-700 ease-in-out group">
              <img
                className="w-16 transform translate-y-24 opacity-0 
    group-hover:translate-y-0 group-hover:opacity-100 
    transition-all duration-700 ease-in-out"
                src={programIcon3}
                alt="Program Icon"
              />

              <p
                className="text-white mt-2 transform translate-y-24 opacity-0 
    group-hover:translate-y-0 group-hover:opacity-100 
    transition-all duration-700 ease-in-out"
              >
                Post Graduation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
