import { motion } from "framer-motion";

const MotionWrapper = ({ children, delay = 0 }) => {
  return (
    <motion.div
    //   initial={{ opacity: 0, y: 50 }} // Start slightly down and invisible
    //   whileInView={{ opacity: 1, y: 0 }} // Move up and fade in
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }} // Animate only once when in view
      initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
