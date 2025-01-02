"use client";
import { motion } from "framer-motion";
import { FaRobot, FaHandshake, FaFireAlt, FaRocket, FaRegStar, FaLeaf } from "react-icons/fa"; // Added FaLeaf for sustainability

export default function Vision() {
  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-indigo-800 via-purple-700 to-purple-500 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Vision & Mission Hero Section */}
        <div className="flex flex-col items-center justify-center text-center mb-24 space-y-12">
          <motion.h2
            className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Our Vision & Mission: Shaping the Future of AI
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Our vision is to revolutionize industries worldwide through AI, crafting smarter solutions that power businesses and enrich lives. By focusing on creativity, transparency, and excellence, we aim to redefine the very fabric of technological innovation.
          </motion.p>
        </div>

        {/* Core Values - Dynamic Card Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >

          {/* Value 1: Innovation */}
          <motion.div
            className="relative bg-gradient-to-r from-purple-700 to-indigo-800 text-center text-white p-12 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FaRobot className="text-6xl mb-4 mx-auto text-yellow-400" />
            <h4 className="text-2xl font-semibold mb-4">Innovation</h4>
            <p className="text-lg">
              We’re driven by curiosity and exploration. Our commitment to innovation empowers businesses to leap into the future with groundbreaking AI solutions that enhance productivity.
            </p>
          </motion.div>

          {/* Value 2: Integrity */}
          <motion.div
            className="relative bg-gradient-to-r from-indigo-600 to-blue-800 text-center text-white p-12 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <FaHandshake className="text-6xl mb-4 mx-auto text-green-400" />
            <h4 className="text-2xl font-semibold mb-4">Integrity</h4>
            <p className="text-lg">
              Transparency and honesty are at the core of everything we do. We build lasting relationships based on trust and openness, ensuring that all of our AI solutions are ethical and accountable.
            </p>
          </motion.div>

          {/* Value 3: Excellence */}
          <motion.div
            className="relative bg-gradient-to-r from-red-500 to-orange-600 text-center text-white p-12 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <FaFireAlt className="text-6xl mb-4 mx-auto text-yellow-500" />
            <h4 className="text-2xl font-semibold mb-4">Excellence</h4>
            <p className="text-lg">
              We believe in the relentless pursuit of excellence. Our AI-driven systems deliver superior quality and performance, constantly pushing boundaries and setting new standards in innovation.
            </p>
          </motion.div>

          {/* Value 4: Visionary Thinking */}
          <motion.div
            className="relative bg-gradient-to-r from-teal-600 to-blue-500 text-center text-white p-12 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <FaRocket className="text-6xl mb-4 mx-auto text-indigo-400" />
            <h4 className="text-2xl font-semibold mb-4">Visionary Thinking</h4>
            <p className="text-lg">
              At the forefront of technology, we envision a world where AI empowers and inspires. Our forward-thinking approach guides us as we solve today’s challenges and build tomorrow’s breakthroughs.
            </p>
          </motion.div>

          {/* Value 5: Collaboration */}
          <motion.div
            className="relative bg-gradient-to-r from-green-400 to-blue-500 text-center text-white p-12 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <FaRegStar className="text-6xl mb-4 mx-auto text-pink-500" />
            <h4 className="text-2xl font-semibold mb-4">Collaboration</h4>
            <p className="text-lg">
              We recognize the power of collective effort. Through collaboration, we integrate diverse perspectives to create AI solutions that are robust, inclusive, and impactful across industries.
            </p>
          </motion.div>

          {/* Value 6: Sustainability */}
          <motion.div
            className="relative bg-gradient-to-r from-green-600 to-yellow-500 text-center text-white p-12 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <FaLeaf className="text-6xl mb-4 mx-auto text-lime-400" />
            <h4 className="text-2xl font-semibold mb-4">Sustainability</h4>
            <p className="text-lg">
              We are committed to creating AI solutions that not only drive progress but also contribute to the health of our planet. Sustainability is integral to the way we approach technology, ensuring a greener future for all.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
}
