import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaArrowCircleRight,
} from "react-icons/fa";

const HeroSection = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/10647324/pexels-photo-10647324.jpeg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50 py-5">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          {/* <div className="flex items-center space-x-2 text-xl font-bold text-yellow-400">
            <span>GOLDEN HOMES</span>
          </div> */}
          <img
            src="https://goldenhomesconstructions.com/wp-content/uploads/2024/10/newone.png"
            alt="Logo"
            className="h-12 lg:w-30 mb-4"
          />

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-white font-medium items-center">
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-400">
              About Us
            </a>

            {/* Gallery Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-yellow-400">
                Gallery
                <svg
                  className="w-3 h-3 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.54a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>
              <div className="absolute left-0 mt-1 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 z-40">
                <a
                  href="#gallery-1"
                  className="block px-4 py-2 hover:bg-yellow-100"
                >
                  Interior Gallery
                </a>
                <a
                  href="#gallery-2"
                  className="block px-4 py-2 hover:bg-yellow-100"
                >
                  Exterior Gallery
                </a>
              </div>
            </div>

            <a href="#packages" className="hover:text-yellow-400">
              Packages
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-yellow-400">
                Services
                <svg
                  className="w-3 h-3 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.54a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 z-40">
                <a
                  href="#service-1"
                  className="block px-4 py-2 hover:bg-yellow-100"
                >
                  Design
                </a>
                <a
                  href="#service-2"
                  className="block px-4 py-2 hover:bg-yellow-100"
                >
                  Construction
                </a>
                <a
                  href="#service-3"
                  className="block px-4 py-2 hover:bg-yellow-100"
                >
                  Consulting
                </a>
              </div>
            </div>

            <a href="#affiliates" className="hover:text-yellow-400">
              Affiliates
            </a>
            <a href="#contact" className="hover:text-yellow-400">
              Contact Us
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-white text-2xl relative"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle Menu"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Smooth Slide-In Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-black/50 backdrop-blur-md
 pt-14 space-y-4 text-white z-40 transform transition-transform duration-300 ease-in-out
          ${navOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <a href="#home" className="block hover:text-yellow-400">
          Home
        </a>
        <a href="#about" className="block hover:text-yellow-400">
          About Us
        </a>

        {/* Gallery Dropdown */}
        <div>
          <button
            className="flex justify-center items-center gap-2 hover:text-yellow-400 w-full"
            onClick={() => toggleDropdown("gallery")}
          >
            <span>Gallery</span>
            <FaChevronDown
              className={`transition-transform duration-200 ${
                openDropdown === "gallery" ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openDropdown === "gallery"
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            } ml-4 space-y-2`}
          >
            <a
              href="#gallery-1"
              onClick={() => setNavOpen(false)}
              className="block hover:text-yellow-400"
            >
              Interior Gallery
            </a>
            <a
              href="#gallery-2"
              onClick={() => setNavOpen(false)}
              className="block hover:text-yellow-400"
            >
              Exterior Gallery
            </a>
          </div>
        </div>

        <a href="#packages" className="block hover:text-yellow-400">
          Packages
        </a>
        <a href="#how-we-work" className="block hover:text-yellow-400">
          How We Work
        </a>

        {/* Services Dropdown */}
        <div>
          <button
            className="flex justify-center items-center gap-2 hover:text-yellow-400 w-full"
            onClick={() => toggleDropdown("services")}
          >
            <span>Services</span>
            <FaChevronDown
              className={`transition-transform duration-200 ${
                openDropdown === "services" ? "rotate-180" : ""
              }`}
            />
          </button>
          {openDropdown === "services" && (
            <div className="mt-2 ml-4 space-y-2">
              <a href="#service-1" className="block hover:text-yellow-400">
                Design
              </a>
              <a href="#service-2" className="block hover:text-yellow-400">
                Construction
              </a>
              <a href="#service-3" className="block hover:text-yellow-400">
                Consulting
              </a>
            </div>
          )}
        </div>

        <a href="#affiliates" className="block hover:text-yellow-400">
          Affiliates
        </a>
        <a href="#contact" className="block hover:text-yellow-400">
          Contact Us
        </a>
      </nav>

      {/* Main Content Section */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center px-6 lg:px-16 py-24 lg:py-40 text-white space-y-10 lg:space-y-0">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 max-w-xl space-y-6 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Golden Homes for every budget
            <br />
            experience an unmatched quality
            <br />
            and a timely delivery
          </h1>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition">
            <span className="float-start mt-1 px-2">
              <FaArrowCircleRight />
            </span>{" "}
            Request a call back
          </button>
        </div>

        {/* Right Video Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end">
          <h2 className="text-xl font-semibold mb-4 text-center lg:text-right">
            Golden words by our clients
          </h2>
          <div className="relative w-full sm:w-[500px] md:w-[600px] lg:w-[400px] rounded-lg overflow-hidden shadow-lg border-4 border-white">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/QxKtqMWZbkI?si=ShWVISCvdS7iALEw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
