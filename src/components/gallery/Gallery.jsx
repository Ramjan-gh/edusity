import React from "react";
import galleryImage1 from "../../assets/gallery-1.png";
import galleryImage2 from "../../assets/gallery-2.png";
import galleryImage3 from "../../assets/gallery-3.png";
import galleryImage4 from "../../assets/gallery-4.png";
import WhiteArrow from "../../assets/white-arrow.png";


const Gallery = () => {
  return (
    <section className="w-full mx-auto pb-10">
      <div className="text-black flex flex-col items-center max-w-screen-2xl mx-auto pt-20">
        <div className="flex  flex-col items-center">
          <p className="text-lg text-blue-900 font-semibold">GALLERY</p>
          <h1 className="text-4xl font-bold text-blue-950">Campus Photos</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 md:px-24 px-12 mt-24 w-full">
          <img className="rounded-xl w-full h-auto object-cover" src={galleryImage1} alt="" />
          <img className="rounded-xl w-full h-auto object-cover" src={galleryImage2} alt="" />
          <img className="rounded-xl w-full h-auto object-cover" src={galleryImage3} alt="" />
          <img className="rounded-xl w-full h-auto object-cover" src={galleryImage4} alt="" />
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
