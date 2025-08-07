import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GallerySlider = () => {
 const images = [
    "https://media.istockphoto.com/id/654289190/photo/four-poster-bed-with-mosquito-net-in-bright-hotel-room.jpg?b=1&s=612x612&w=0&k=20&c=8FncAh2GeszNiG5CJwcncsAYoTt4JwaopWxQs05nmOw=",
    "https://media.istockphoto.com/id/909423306/photo/modern-multilevel-house-exterior-with-pool.jpg?b=1&s=612x612&w=0&k=20&c=H6N_2YVYfYt_M8XlZlPHyr5sNCjHhJMK6YwkMY9Vrzk=",
    "https://media.istockphoto.com/id/654289190/photo/four-poster-bed-with-mosquito-net-in-bright-hotel-room.jpg?b=1&s=612x612&w=0&k=20&c=8FncAh2GeszNiG5CJwcncsAYoTt4JwaopWxQs05nmOw=",
    "https://media.istockphoto.com/id/1424381465/photo/modern-villa-with-two-floors-overlooking-sea.jpg?s=612x612&w=0&k=20&c=jS_FxKBp-7tx2hSkYwvrqRyPk9pqKQwH8GvE9ZTYNx0=",
    "https://media.istockphoto.com/id/503044702/photo/illuminated-sky-and-outside-of-waterfront-buiding.jpg?s=612x612&w=0&k=20&c=xkDBkqmCVvhR4idfybXRb-yFS0KqOjqtikg_LtO4pzs=",
  ];

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false, // keep autoplay after user interaction
          pauseOnMouseEnter: true, // pause when mouse over
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[350px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
