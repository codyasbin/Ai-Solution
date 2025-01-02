"use client";
import { motion } from "framer-motion";
import { FaRocket, FaTrophy, FaRegCalendarAlt } from "react-icons/fa"; // Importing icons

export default function HistorySection() {
  const galleryImages = [
    { src: "https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2021/06/ai-conferences-fb.png", caption: "Conference 2015" },
    { src: "https://dqliving.com/wp-content/uploads/2022/10/FAHA4273-copy.jpg", caption: "AI Summit 2018" },
    { src: "https://www.centuroglobal.com/wp-content/uploads/2023/07/gimage_0_1654673710-1-400x284.jpeg", caption: "Global Expansion 2022" },
    { src: "https://classe-export.com/wp-content/uploads/2022/06/ba-toshi-ok.jpg", caption: "Innovation Award" },
    { src: "https://pollthepeople.app/wp-content/uploads/2023/11/image3-49.png", caption: "Product Launch" },
    { src: "https://www.ai-expo.net/wp-content/uploads/2023/07/The-Future-of-enterprise-technology-24-1024x682-1.webp", caption: "Tech Expo" },
  ];

  return (
    <motion.section
      className="py-20 bg-gray-800 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } },
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center text-green-300 mb-16">Milestones in AI Evolution</h2>

        {/* Timeline with icons */}
        <div className="space-y-20">
          {[ 
            { year: "2015", detail: "AI Conference held in 2015, shaping future innovations.", icon: <FaRocket size={40} className="text-yellow-500" /> },
            { year: "2018", detail: "AI Summit 2018 witnessed global AI leaders gather for innovations.", icon: <FaTrophy size={40} className="text-blue-500" /> },
            { year: "2022", detail: "Global expansion to offer services worldwide in 2022.", icon: <FaRegCalendarAlt size={40} className="text-red-500" /> },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center gap-10 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              whileHover={{ scale: 1.05 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              {/* Year and Detail */}
              <div className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-lg">
                <p className="text-lg font-semibold text-gray-400">{item.year}</p>
                <p className="text-xl font-medium text-white mt-2">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center text-teal-300 mb-12">Photo Moments</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full rounded-full h-96 object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-xl font-bold text-white">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
