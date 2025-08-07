import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white pt-12 pb-6">
      {/* Main Footer */}
      <div className="grid sm:grid-cols-2  max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div className="text-center">
          <img src="https://goldenhomesconstructions.com/wp-content/uploads/2024/10/newone.png" alt="Logo" className="h-12 mb-4" />
          <p className="text-gray-300">
            We, at Golden Homes Constructions, specialise in turning dreams into
            reality. We offer a wide range of construction services tailored to
            meet the unique needs of our clients. Whether you are building a new
            home, renovating an existing one or looking for a custom design, we
            bring unparalleled expertise and craftsmanship to every project.
          </p>
        </div>

        {/* Featured Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 uppercase">
            Featured Links
          </h3>
          <div className="flex justify-center">
            <div className="w-10 h-0.5 bg-yellow-500 mb-4"></div>
          </div>
          <ul className="space-y-2 justify-start">
            <li>
              <a href="#home" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#how-we-work" className="hover:text-yellow-400">
                How We Work
              </a>
            </li>
            <li>
              <a href="#packages" className="hover:text-yellow-400">
                Packages
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-400">
                Our Projects
              </a>
            </li>
            <li>
              <a href="#proprietor" className="hover:text-yellow-400">
                Proprietor Message
              </a>
            </li>
          </ul>
        </div>

        {/* Let's Connect */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 uppercase">
            LET&apos;S CONNECT
          </h3>
          <div className="flex justify-center">
            <div className="w-10 h-0.5 bg-yellow-500 mb-4"></div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-3 hover:text-yellow-400 transition"
            >
              <div className="bg-yellow-600 hover:bg-yellow-500 text-black p-3 rounded-full">
                <FaFacebookF />
              </div>
              <span>Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-3 hover:text-yellow-400 transition"
            >
              <div className="bg-yellow-600 hover:bg-yellow-500 text-black p-3 rounded-full">
                <FaInstagram />
              </div>
              <span>Instagram</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-3 hover:text-yellow-400 transition"
            >
              <div className="bg-yellow-600 hover:bg-yellow-500 text-black p-3 rounded-full">
                <FaTwitter />
              </div>
              <span>Twitter</span>
            </a>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 uppercase">
           GET IN TOUCH
          </h3>
          <div className="flex justify-center">
            <div className="w-10 h-0.5 bg-yellow-500 mb-4"></div>
          </div>
          <div className="space-y-3 text-gray-300">
            <p>
              <FaMapMarkerAlt className="inline mr-2 text-yellow-400" />
              No. D4, 391, 407, SFS,
              <br />
              4th phase, Yelahanka New Town,
              <br />
              Bengaluru North, Bengaluru,
              <br />
              Karnataka 560064
            </p>
            <p>
              <FaPhone className="inline mr-2 text-yellow-400" />
              6362-901-902
            </p>
            <p>
              <FaEnvelope className="inline mr-2 text-yellow-400" />
              info@goldenhomesconstructions.com
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-8 pt-4 px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© All Rights Reserved, Golden Homes</p>
        <p className="text-yellow-400">Designed by Webnsoftware</p>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </footer>
  );
};

export default Footer;
