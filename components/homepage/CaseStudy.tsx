'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { FaChartLine, FaHeartbeat, FaStoreAlt } from 'react-icons/fa';

export default function CaseStudy() {
  return (
    <>
      {/* Case Studies Section for the Homepage */}
      <motion.section
        className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Section Heading */}
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-800">
              Real-World Impact
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              See how our AI solutions are shaping the future for diverse industries.
            </p>
          </div>

          {/* Case Study Cards */}
          <div className="mt-12 flex flex-col lg:flex-row lg:justify-between gap-8">
            {/* Card 1 */}
            <motion.div
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center h-48 bg-purple-200">
                <FaStoreAlt className="text-6xl text-purple-600" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Revolutionizing E-Commerce
                </h3>
                <p className="text-gray-700 mt-3">
                  Implemented AI-driven recommendation engines, boosting online
                  store sales by 45%.
                </p>
                <Link
                  href="/about"
                  className="inline-block mt-4 text-purple-600 hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center h-48 bg-indigo-200">
                <FaChartLine className="text-6xl text-indigo-600" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Financial Revolution
                </h3>
                <p className="text-gray-700 mt-3">
                  Empowered investors with predictive analytics for smarter,
                  data-driven decisions.
                </p>
                <Link
                  href="/about"
                  className="inline-block mt-4 text-indigo-600 hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center h-48 bg-teal-200">
                <FaHeartbeat className="text-6xl text-teal-600" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Smarter Healthcare
                </h3>
                <p className="text-gray-700 mt-3">
                  Reduced hospital wait times by 50% through AI-assisted scheduling.
                </p>
                <Link
                  href="/about"
                  className="inline-block mt-4 text-teal-600 hover:underline"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
