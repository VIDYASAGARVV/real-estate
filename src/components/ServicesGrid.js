import React, { useState } from "react";
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
    icon: <FaDraftingCompass size={34} />,
    title: "Plan & Elevation",
    desc: "Architectural plans and elevations tailored to your plot and budget.",
    bg: "/images/house-skel-1.png",
    type: "Design",
  },
  {
    id: 2,
    icon: <FaBuilding size={34} />,
    title: "Building Construction",
    desc: "Complete building construction from foundation to finishing.",
    bg: "/images/house-skel-2.png",
    type: "Construction",
  },
  {
    id: 3,
    icon: <FaCouch size={34} />,
    title: "Interior Design",
    desc: "Stylish interiors that balance function and aesthetics.",
    bg: "/images/house-skel-3.png",
    type: "Interior",
  },
  {
    id: 4,
    icon: <FaTools size={34} />,
    title: "Renovation Works",
    desc: "Renovation and remodeling with minimum disruption.",
    bg: "/images/house-skel-4.png",
    type: "Renovation",
  },
  {
    id: 5,
    icon: <FaUserTie size={34} />,
    title: "Site Supervision",
    desc: "Professional supervising to ensure quality & schedule.",
    bg: "/images/house-skel-5.png",
    type: "Supervision",
  },
  {
    id: 6,
    icon: <FaPaintRoller size={34} />,
    title: "Painting & Finishes",
    desc: "High-quality painting and surface finishes for lasting beauty.",
    bg: "/images/house-skel-6.png",
    type: "Finishes",
  },
];

const allTypes = ["All", ...Array.from(new Set(services.map((s) => s.type)))];

const ServicesGridWithTypes = () => {
  const [activeType, setActiveType] = useState("All");

  const filtered =
    activeType === "All"
      ? services
      : services.filter((s) => s.type === activeType);

  return (
    <section className="py-14 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Golden Steps to Build Your Home
        </motion.h2>

        {/* Type filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {allTypes.map((t) => (
            <motion.button
              key={t}
              onClick={() => setActiveType(t)}
              className={`${
                activeType === t
                  ? "bg-yellow-500 text-black shadow-lg"
                  : "bg-white text-gray-700"
              } px-5 py-2 rounded-full border border-gray-200 hover:shadow-md transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {t}
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filtered.map((s, index) => (
            <motion.div
              key={s.id}
              className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group"
              style={{ minHeight: 240 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 15px 25px rgba(0,0,0,0.12)",
              }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              {/* Background image with smooth zoom */}
              <img
                src={s.bg}
                alt=""
                className="pointer-events-none absolute inset-0 w-full h-full object-contain opacity-10 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-white/40" />

              {/* Content */}
              <div className="relative p-6 flex flex-col h-full">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="bg-yellow-500 text-black p-3 rounded-lg inline-flex shadow-md"
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {s.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mt-4">
                    {s.title}
                  </h3>
                  <span className="text-sm text-gray-500">{s.type}</span>
                </div>
                <p className="text-gray-600 mt-4 flex-1 text-center">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGridWithTypes;
