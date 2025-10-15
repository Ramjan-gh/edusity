import React from "react";
import "./program.css";
import program1Image from "../../assets/program-1.png";
import program2Image from "../../assets/program-2.png";
import program3Image from "../../assets/program-3.png";
import programIcon1 from "../../assets/program-icon-1.png";
import programIcon2 from "../../assets/program-icon-2.png";
import programIcon3 from "../../assets/program-icon-3.png";
import aboutImage from "../../assets/about.png";
import playIcon from "../../assets/play-icon.png";

const Program = () => {
  return (
    <section className="program-section py-20 bg-white text-black">
      <div className="max-w-screen-2xl mx-auto ">
        <h2 className="text-lg text-blue-900 font-bold mb-1 text-center">
          OUR PROGRAMS
        </h2>
        <p className="text-4xl text-center font-bold text-[#0e0a33] mb-20">
          What We Offer
        </p>
        <div className="grid md:grid-cols-3 gap-10 px-24">
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
      <div className="max-w-screen-2xl items-center mx-auto flex flex-col-reverse md:flex-row md:px-24 gap-12 justify-between mt-32">
        <div className="relative w-[40%] ">
          <img className="rounded-lg" src={aboutImage} alt="" srcset="" />
          <div className="absolute flex inset-0 items-center justify-center">
            <img className="w-12" src={playIcon} alt="" srcset="" />
          </div>
        </div>
        <div className="w-[70%] md:w-[55%] mb-16 md:mb-0">
          <h3 className="text-lg font-semibold text-blue-900">
            ABOUT UNIVERSITY
          </h3>
          <h1 className="text-4xl font-bold mt-4 mb-3 text-blue-950">
            Nurturing Tomorrow's <br />Leaders Today
          </h1>
          <p className="text-black/60">
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.{" "}
            <br /> <br /> With a focus on innovation, hands-on learning, and
            personalized mentorship, our programs prepare aspiring educators to
            make a meaningful impact in classrooms, schools, and communities.{" "}
            <br /> <br /> Whether you aspire to become a teacher, administrator,
            counselor, or educational leader, our diverse range of programs
            offers the perfect pathway to achieve your goals and unlock your
            full potential in shaping the future of education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Program;
