import React from "react";

const Home = () => {
  return (
    <>
    <section>
        <div className="w-full flex flex justify-center pt-10 pb-10 ">
          <img
            src="https://goldenhomesconstructions.com/wp-content/uploads/2024/10/newone.png"
            alt="Facade"
            height={300}
            width={400}
          />
        </div>
    </section>
    <section className="bg-gradient-to-b from-pink-200 to-orange-200 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg"
            alt="Facade"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            "Adhwaitha Constructions
            <br />
            Building Excellence, One Facade at a Time"
          </h2>
          <p className="text-gray-800 mb-6 font-medium">
            At Adhwaitha Constructions, we understand that precision is key. We
            ensure that every detail—whether it’s a facade, glass fitting, or
            structural element—fits seamlessly into your design vision, delivering a
            flawless and functional result every time.
          </p>
        
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
