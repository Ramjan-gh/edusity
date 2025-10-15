import React from "react";
import galleryImage1 from "../../assets/gallery-1.png";
import galleryImage2 from "../../assets/gallery-2.png";
import galleryImage3 from "../../assets/gallery-3.png";
import galleryImage4 from "../../assets/gallery-4.png";
import WhiteArrow from "../../assets/white-arrow.png";


const Gallery = () => {
  return (
    <section className="w-screen mx-auto pb-10">
      <div className="text-black flex flex-col items-center max-w-screen-2xl mx-auto pt-20">
        <div className="flex  flex-col items-center">
          <p className="text-lg text-blue-900 font-semibold">GALLERY</p>
          <h1 className="text-4xl font-bold text-blue-950">Campus Photos</h1>
        </div>
        <div className="md:grid md:grid-flow-col flex flex-col justify-between gap-10 md:gap-4 px-24 mt-24">
          <img className="rounded-xl" src={galleryImage1} alt="" />
          <img className="rounded-xl" src={galleryImage2} alt="" />
          <img className="rounded-xl" src={galleryImage3} alt="" />
          <img className="rounded-xl " src={galleryImage4} alt="" />
        </div>
        <button className="flex justify-self-center items-center gap-2 bg-blue-900 rounded-full text-white px-6 py-3 mt-16 mx-auto hover:bg-blue-800 transition-all duration-300 ease-in-out">
          See more here
          <img className="scale-50" src={WhiteArrow} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Gallery;
