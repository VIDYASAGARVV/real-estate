// src/components/BottomSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/654289190/photo/four-poster-bed-with-mosquito-net-in-bright-hotel-room.jpg?b=1&s=612x612&w=0&k=20&c=8FncAh2GeszNiG5CJwcncsAYoTt4JwaopWxQs05nmOw=",
    alt: "Partner 1",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    alt: "Partner 2",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/33314764/pexels-photo-33314764.png",
    alt: "Partner 3",
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/654289190/photo/four-poster-bed-with-mosquito-net-in-bright-hotel-room.jpg?b=1&s=612x612&w=0&k=20&c=8FncAh2GeszNiG5CJwcncsAYoTt4JwaopWxQs05nmOw=",
    alt: "Partner 4",
  },
  {
    id: 5,
    image:
      "https://media.istockphoto.com/id/654289190/photo/four-poster-bed-with-mosquito-net-in-bright-hotel-room.jpg?b=1&s=612x612&w=0&k=20&c=8FncAh2GeszNiG5CJwcncsAYoTt4JwaopWxQs05nmOw=",
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
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="px-2">
              <div className="bg-white p-4 shadow rounded flex items-center justify-center min-h-[150px]">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-40 w-auto object-contain"
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
