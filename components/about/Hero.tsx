"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Futuristic arrow icon

export default function HeroSection() {
  const [hover, setHover] = useState(false);

  return (
    <motion.section
      className="relative h-screen bg-gradient-to-b from-purple-900 to-purple-800 text-white flex items-center justify-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Parallax effect container */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
      >
      </div>

      {/* Content Layer */}
      <div className="relative z-10 px-6 md:px-16">
        {/* Typewriter Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          About <span className="text-purple-300">AI-Solution</span>
        </motion.h1>

        {/* Dynamic Subtitle with typewriter effect */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Empowering businesses with cutting-edge AI technologies to unlock their full potential.
        </motion.p>

        {/* Custom Icon-based Call to Action */}
        <motion.button
          className="mt-6 px-6 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-purple-600 flex items-center space-x-2 transform transition-all duration-300 hover:bg-purple-600 hover:border-purple-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
        >
          <span>Discover More</span>
          <FaArrowRight className="text-lg" />
        </motion.button>
      </div>

      {/* Neon Glowing Text Effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        <h2 className="text-9xl font-bold text-white text-opacity-20">AI SOLUTION</h2>
      </motion.div>

      {/* Parallax Scrolling Effect */}
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 bg-fixed z-0"
        style={{
          backgroundImage: "url('/path-to-your-image.jpg')",
          transform: "translateY(-30%)",
        }}
        whileInView={{ transform: "translateY(0)" }}
        transition={{ duration: 3 }}
      />
    </motion.section>
  );
}
