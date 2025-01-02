"use client";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <motion.section
      className="py-16 bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-800 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl text-white font-bold mb-12">Meet Our Creative Team</h2>

        {/* Marquee Container */}
        <div className="overflow-hidden py-4">
          <div className="whitespace-nowrap animate-marquee flex justify-center items-center space-x-8">

            {/* Team Member 1 (Jharna) */}
            <motion.div
              className="inline-block text-center transform hover:scale-110 transition-all duration-300 rounded-xl shadow-lg bg-gradient-to-r from-teal-400 to-teal-600 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img
                src="/jharna.png"
                alt="Jharna Kunwar"
                className="w-40 h-40 rounded-full border-4 border-teal-500 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-teal-100">Jharna Kunwar</h3>
              <p className="text-gray-200">CEO</p>
            </motion.div>

            {/* Team Member 2 (Alexis) */}
            <motion.div
              className="inline-block text-center transform hover:scale-110 transition-all duration-300 rounded-xl shadow-lg bg-gradient-to-r from-pink-400 to-pink-600 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Alexis Carter"
                className="w-40 h-40 rounded-full border-4 border-pink-500 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-pink-100">Alexis Carter</h3>
              <p className="text-gray-200">CTO</p>
            </motion.div>

            {/* Team Member 3 (Maya) */}
            <motion.div
              className="inline-block text-center transform hover:scale-110 transition-all duration-300 rounded-xl shadow-lg bg-gradient-to-r from-yellow-400 to-yellow-600 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <img
                src="https://randomuser.me/api/portraits/women/57.jpg"
                alt="Maya Singh"
                className="w-40 h-40 rounded-full border-4 border-yellow-500 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-yellow-100">Maya Singh</h3>
              <p className="text-gray-200">Lead AI Engineer</p>
            </motion.div>

            {/* Team Member 4 (Ethan) */}
            <motion.div
              className="inline-block text-center transform hover:scale-110 transition-all duration-300 rounded-xl shadow-lg bg-gradient-to-r from-green-400 to-green-600 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <img
                src="https://randomuser.me/api/portraits/men/34.jpg"
                alt="Ethan Brooks"
                className="w-40 h-40 rounded-full border-4 border-green-500 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-green-100">Ethan Brooks</h3>
              <p className="text-gray-200">Marketing Director</p>
            </motion.div>

            {/* Team Member 5 (Sophia) */}
            <motion.div
              className="inline-block text-center transform hover:scale-110 transition-all duration-300 rounded-xl shadow-lg bg-gradient-to-r from-indigo-400 to-indigo-600 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <img
                src="https://randomuser.me/api/portraits/women/73.jpg"
                alt="Sophia Turner"
                className="w-40 h-40 rounded-full border-4 border-indigo-500 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-indigo-100">Sophia Turner</h3>
              <p className="text-gray-200">UX/UI Designer</p>
            </motion.div>

            {/* Team Member 6 (Liam) */}
            <motion.div
              className="inline-block text-center transform hover:scale-110 transition-all duration-300 rounded-xl shadow-lg bg-gradient-to-r from-purple-400 to-purple-600 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <img
                src="https://randomuser.me/api/portraits/men/61.jpg"
                alt="Liam Scott"
                className="w-40 h-40 rounded-full border-4 border-purple-500 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-purple-100">Liam Scott</h3>
              <p className="text-gray-200">Product Manager</p>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
