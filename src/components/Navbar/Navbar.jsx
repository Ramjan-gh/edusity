import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    "Home",
    "Program",
    "About us",
    "Campus",
    "Testimonials",
    "Contact us",
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // run once to set initial state
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 w-full z-50 transition-colors duration-700 ${
        scrolled ? "bg-blue-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="navbar max-w-screen-2xl mx-auto justify-self-center flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <button className="text-xl scale-[120%] transform transition duration-500 hover:scale-[125%]">
        <img src={logo} alt="Logo" className="w-24 h-auto" />
      </button>

      {/* Menu */}
      <ul className="gap-4 text-white hidden md:flex">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={`cursor-pointer px-3 py-1 rounded-full transition ${
              active === item
                ? "bg-white text-black"
                : "hover:bg-white hover:text-black"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

  <div className="drawer drawer-end justify-end md:hidden">
        <input
          id="my-drawer-5"
          type="checkbox"
          className="drawer-toggle justify-end"
        />
        <div className="drawer-content relative">
          <div className="page-content transition-all duration-500">
            
          </div>
          {/* Page content here */}
          <label
            htmlFor="my-drawer-5"
            className="menu-button fixed top-[13px] right-3 z-50 md:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="6"
                width="18"
                height="2"
                rx="1"
                fill="currentColor"
              />
              <rect
                x="3"
                y="11"
                width="18"
                height="2"
                rx="1"
                fill="currentColor"
              />
              <rect
                x="3"
                y="16"
                width="18"
                height="2"
                rx="1"
                fill="currentColor"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          {/* <label htmlFor="my-drawer-5" className="drawer-overlay"></label> */}
          <ul className="menu bg-base-200 min-h-full w-40 p-4 gap-4 pt-16">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`cursor-pointer px-3 py-1 transition ${
                  active === item
                    ? "bg-white text-black"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
