"use client";
import { motion } from "framer-motion";
import { FaLightbulb, FaRobot, FaRegHandshake, FaUsers } from "react-icons/fa"; // Icons

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section with New Gradient Background and Icons */}
      <motion.section
        className="relative h-screen bg-gradient-to-r from-blue-900 to-green-700 text-white flex items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <motion.h1
            className="text-6xl md:text-7xl font-extrabold leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Transforming Your Business with <span className="text-yellow-400">AI-Driven Solutions</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Redefining business success by integrating cutting-edge AI technologies.
          </motion.p>
        </div>
      </motion.section>

      {/* Service Section 1 - AI Consulting */}
      <motion.section
        className="relative py-20 bg-gradient-to-b from-blue-800 to-green-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              className="w-24 h-24 bg-yellow-400 text-white rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaLightbulb size={40} />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">AI Consulting</h2>
            <p className="text-lg text-gray-200">
              We offer expert consulting to guide you through the AI adoption process, ensuring smooth integration with your business operations.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <motion.div
              className="w-16 h-16 bg-blue-400 text-white rounded-full flex items-center justify-center mb-4 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaUsers size={30} />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Service Section 2 - Smart Automation */}
      <motion.section
        className="relative py-20 bg-gradient-to-b from-green-600 to-blue-800 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              className="w-24 h-24 bg-yellow-300 text-white rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaRobot size={40} />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">AI Automation</h2>
            <p className="text-lg text-gray-200">
              Harness the power of automation with our AI-driven systems that optimize and streamline your workflows, driving efficiency across the board.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <motion.div
              className="w-16 h-16 bg-blue-400 text-white rounded-full flex items-center justify-center mb-4 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaRegHandshake size={30} />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Service Section 3 - Data Insights */}
      <motion.section
        className="relative py-20 bg-gradient-to-b from-blue-700 to-green-500 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              className="w-24 h-24 bg-yellow-300 text-white rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaRegHandshake size={40} />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">Data Insights</h2>
            <p className="text-lg text-gray-200">
              Unlock actionable insights with our AI-powered analytics, enabling data-driven decision-making and revealing hidden trends for your business.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <motion.div
              className="w-16 h-16 bg-blue-400 text-white rounded-full flex items-center justify-center mb-4 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaLightbulb size={30} />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section - Icons and New Design */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-900 to-green-700 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Process: Simplified</h2>
          <div className="flex justify-center gap-16">
            {/* Step 1 */}
            <motion.div
              className="flex flex-col items-center bg-yellow-500 p-8 rounded-lg shadow-lg w-64"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 mb-4 bg-yellow-400 text-white rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaRegHandshake size={30} />
              </motion.div>
              <h3 className="text-xl font-semibold">Consultation</h3>
              <p className="text-gray-200 mt-2">
                We collaborate with you to understand your needs and challenges.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="flex flex-col items-center bg-yellow-500 p-8 rounded-lg shadow-lg w-64"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 mb-4 bg-yellow-400 text-white rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaRobot size={30} />
              </motion.div>
              <h3 className="text-xl font-semibold">Development</h3>
              <p className="text-gray-200 mt-2">
                We build and tailor AI solutions to suit your unique needs.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="flex flex-col items-center bg-yellow-500 p-8 rounded-lg shadow-lg w-64"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 mb-4 bg-yellow-400 text-white rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaUsers size={30} />
              </motion.div>
              <h3 className="text-xl font-semibold">Integration</h3>
              <p className="text-gray-200 mt-2">
                We seamlessly integrate AI solutions into your operations.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
