import React, { useRef } from 'react'
import nextIcon from '../../assets/next-icon.png'
import prevIcon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import './testimonials.css'

const Testimonials = () => {
  const sliderRef = useRef(null);

  const slideForward = () => {
    const el = sliderRef.current;
    if (!el) return;
    // scroll by one viewport width of the slider
    el.scrollBy({ left: el.clientWidth/2, behavior: 'smooth' });
  };

  const slideBackward = () => {
    const el = sliderRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.clientWidth/2, behavior: 'smooth' });
  };

  return (
    <section className="text-black flex flex-col items-center max-w-screen-2xl mx-auto pt-20 px-12">
      <div className="relative overflow-hidden w-full flex justify-center">
        <button
          onClick={slideForward}
          aria-label="next"
          className="absolute top-[50%] right-0 transform -translate-y-1/2 p-[15px] w-[50px] rounded-full cursor-pointer bg-blue-900"
        >
          <img src={nextIcon} alt="next" />
        </button>
        <button
          onClick={slideBackward}
          aria-label="prev"
          className="absolute top-[50%] left-0 transform -translate-y-1/2 p-[15px] w-[50px] rounded-full cursor-pointer bg-blue-900"
        >
          <img src={prevIcon} alt="prev" />
        </button>
        <div ref={sliderRef} className="slider w-[90%] mx-28 overflow-hidden">
          <ul className="flex w-[200%] gap-12">
            <li>
              <div className=" rounded-lg shadow-lg p-12">
                <div className="user flex items-center gap-4 mb-4">
                  <img
                    className="w-[70px] rounded-full border-blue-900 border-[6px]"
                    src={user1}
                    alt=""
                  />
                  <div className="user-info">
                    <h3 className="text-blue-900 font-bold text-lg">
                      Emily Williams
                    </h3>
                    <p className="text-black/70">Edusity, USA</p>
                  </div>
                </div>
                <p className="text-black/70">
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className=" rounded-lg shadow-lg p-12">
                <div className="user flex items-center gap-4 mb-4">
                  <img
                    className="w-[70px] rounded-full border-blue-900 border-[6px]"
                    src={user2}
                    alt=""
                  />
                  <div className="user-info">
                    <h3 className="text-blue-900 font-bold text-lg">
                      William Jackson
                    </h3>
                    <p className="text-black/70">Edusity, USA</p>
                  </div>
                </div>
                <p className="text-black/70">
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className=" rounded-lg shadow-2xl p-12">
                <div className="user flex items-center gap-4 mb-4">
                  <img
                    className="w-[70px] rounded-full border-blue-900 border-[6px]"
                    src={user3}
                    alt=""
                  />
                  <div className="user-info">
                    <h3 className="text-blue-900 font-bold text-lg">
                      Robart Smith
                    </h3>
                    <p className="text-black/70">Edusity, USA</p>
                  </div>
                </div>
                <p className="text-black/70">
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className=" rounded-lg shadow-2xl p-12">
                <div className="user flex items-center gap-4 mb-4">
                  <img
                    className="w-[70px] rounded-full border-blue-900 border-[6px]"
                    src={user4}
                    alt=""
                  />
                  <div className="user-info">
                    <h3 className="text-blue-900 font-bold text-lg">
                      Jack Wills
                    </h3>
                    <p className="text-black/70">Edusity, USA</p>
                  </div>
                </div>
                <p className="text-black/70">
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Testimonials