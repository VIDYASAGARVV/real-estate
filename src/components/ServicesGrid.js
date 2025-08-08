import React from "react";
import { motion } from "framer-motion";
import {
  FaDraftingCompass,
  FaBuilding,
  FaCouch,
  FaTools,
  FaUserTie,
  FaPaintRoller,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaDraftingCompass size={36} />,
    title: "Plan & Elevation",
    desc: "Architectural plans and elevations tailored to your plot and budget.",
    bg: "/images/house-skel-1.png",
  },
  {
    id: 2,
    icon: <FaBuilding size={36} />,
    title: "Building Construction",
    desc: "Complete building construction from foundation to finishing.",
    bg: "/images/house-skel-2.png",
  },
  {
    id: 3,
    icon: <FaCouch size={36} />,
    title: "Interior Design",
    desc: "Stylish interiors that balance function and aesthetics.",
    bg: "/images/house-skel-3.png",
  },
  {
    id: 4,
    icon: <FaTools size={36} />,
    title: "Renovation Works",
    desc: "Renovation and remodeling with minimum disruption.",
    bg: "/images/house-skel-4.png",
  },
  {
    id: 5,
    icon: <FaUserTie size={36} />,
    title: "Site Supervision",
    desc: "Professional supervising to ensure quality & schedule.",
    bg: "/images/house-skel-5.png",
  },
  {
    id: 6,
    icon: <FaPaintRoller size={36} />,
    title: "Painting & Finishes",
    desc: "High-quality painting and surface finishes for lasting beauty.",
    bg: "/images/house-skel-6.png",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Golden Steps to Build Your Home
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, index) => (
            <motion.div
              key={s.id}
              className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transform transition"
              style={{ minHeight: 220 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* faint background skeleton/house image */}
              <img
                src={s.bg}
                alt=""
                className="pointer-events-none absolute inset-0 w-full h-full object-contain opacity-10 mix-blend-multiply"
              />

              {/* overlay to ensure text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/40" />

              {/* content */}
              <div className="relative p-6 flex flex-col h-full">
                <div className="flex items-center justify-start space-x-4">
                  <div className="bg-yellow-500 text-black p-3 rounded-lg inline-flex">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                </div>

                <p className="text-gray-600 mt-4 flex-1">{s.desc}</p>

                <div className="mt-4">
                  <button className="inline-block bg-transparent text-yellow-600 border border-yellow-600 px-4 py-2 rounded-lg font-medium hover:bg-yellow-50 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
