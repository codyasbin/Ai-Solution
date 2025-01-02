'use client';
import { motion } from 'framer-motion';
import { FaBrain, FaRocket, FaCogs } from 'react-icons/fa';
import Link from 'next/link';

export default function Main() {
  return (
    <section
      id="main"
      className="relative h-auto bg-gradient-to-bl from-indigo-800 via-purple-700 to-black py-20"
    >
      {/* Content Wrapper */}
      <div className="container mx-auto px-6 lg:px-12">
        {/* Headline Section */}
        <div className="text-center space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white tracking-wide leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Reimagine Your Potential with Intelligent AI
          </motion.h1>
          <motion.p
            className="text-md md:text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From groundbreaking automation to cutting-edge analytics, we provide
            innovative solutions tailored to your needs.
          </motion.p>
        </div>

        {/* Feature Cards Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">
              <FaBrain className="text-5xl text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              Cognitive AI Solutions
            </h3>
            <p className="text-gray-600 mt-3 text-center">
              Empower your operations with AI that thinks, learns, and adapts
              to deliver unparalleled intelligence.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">
              <FaRocket className="text-5xl text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              Accelerated Growth
            </h3>
            <p className="text-gray-600 mt-3 text-center">
              Drive growth with scalable AI-powered tools that enhance
              productivity and amplify business potential.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-4">
              <FaCogs className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              Adaptive Integration
            </h3>
            <p className="text-gray-600 mt-3 text-center">
              Seamlessly integrate AI into your ecosystem for smooth
              transitions and robust performance.
            </p>
          </motion.div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 flex justify-center">
          <Link href="/contact">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform transition-all"
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 0px 30px rgba(128, 90, 213, 0.8)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let’s Innovate Together
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
