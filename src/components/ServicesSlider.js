// src/components/ServicesSlider.jsx
import React from "react";
import Slider from "react-slick";
import { FaDraftingCompass, FaBuilding, FaCouch, FaTools, FaUserTie } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    icon: <FaDraftingCompass size={40} />,
    title: "Plan / Elevation",
  },
  {
    icon: <FaBuilding size={40} />,
    title: "Building Construction",
  },
  {
    icon: <FaCouch size={40} />,
    title: "Interior",
  },
  {
    icon: <FaTools size={40} />,
    title: "Renovation",
  },
  {
    icon: <FaUserTie size={40} />,
    title: "Supervising",
  },
];

const ServicesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 3 at once on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-orange-500 mb-6">
        OUR SERVICES
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-3">
              <div className="bg-orange-500 text-white rounded-2xl flex flex-col items-center justify-center p-3  min-h-[150px] hover:bg-orange-400 transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-semibold text-center">{service.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServicesSlider;
