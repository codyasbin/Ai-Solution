"use client";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaRegClock, FaLocationArrow } from "react-icons/fa"; // Importing icons
import Link from "next/link"; // Import Link

const events = [
  {
    title: "AI Summit 2024",
    date: "Jan 15, 2024",
    location: "San Francisco, CA",
    description: "Join us to delve into the future of AI with top experts.",
    icon: <FaCalendarAlt size={50} className="text-teal-500" />, // Calendar icon
  },
  {
    title: "AI in Healthcare Webinar",
    date: "Feb 20, 2024",
    location: "Online Event",
    description: "Learn how AI is transforming healthcare from industry leaders.",
    icon: <FaRegClock size={50} className="text-yellow-500" />, // Clock icon
  },
  {
    title: "Innovative Tech Expo 2024",
    date: "March 5, 2024",
    location: "New York, NY",
    description: "Discover the latest tech innovations at this year's expo.",
    icon: <FaLocationArrow size={50} className="text-blue-500" />, // Location icon
  },
];

export default function EventsSection() {
  return (
    <motion.section
      className="py-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } },
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-white mb-16">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-xl bg-white text-gray-800 transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {/* Icon Container */}
              <div className="flex justify-center items-center bg-gradient-to-t from-teal-400 to-teal-500 text-white rounded-full w-24 h-24 mx-auto mt-8">
                {event.icon}
              </div>

              {/* Event Details */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-teal-700">{event.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{event.date} - {event.location}</p>
                <p className="mt-4 text-gray-600">{event.description}</p>

                {/* Register Button with Link */}
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link href="/contact">
                    <button className="mt-6 px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-md shadow-md transition-all duration-300">
                      Sign Up
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
