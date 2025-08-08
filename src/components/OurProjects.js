// src/components/BottomSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/6489112/pexels-photo-6489112.jpeg",
    alt: "Partner 1",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/6489112/pexels-photo-6489112.jpeg",
    alt: "Partner 2",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/6489112/pexels-photo-6489112.jpeg",
    alt: "Partner 3",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/6489112/pexels-photo-6489112.jpeg",
    alt: "Partner 4",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/6489112/pexels-photo-6489112.jpeg",
    alt: "Partner 5",
  },
];

const OurProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-6">
        OUR RECENTS PROJECTS
      </h2>
      <div className="max-w-5xl mx-auto px-0">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="px-2 pt-4">
              <div className="h-[220px] w-full flex items-center justify-center ">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-[230px] w-auto  rounded-xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurProjects;
