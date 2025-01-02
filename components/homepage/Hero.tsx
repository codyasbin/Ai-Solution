// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import TypingAnimation component and disable SSR
const TypingAnimation = dynamic(() => import("../animations/TypingAnimation"), {
  ssr: false,
});

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  // Set the client-side state to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Don't render the Hero until after the client has loaded

  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero.jpg')", // Keeping the same background image
      }}
    >
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-800 to-indigo-700 opacity-90">
        {/* Optional: Add animated particles or subtle motion here */}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center text-white md:text-left">
          {/* New Headline with Typing Animation */}
          <TypingAnimation  text="Empowering Your Future with AI" />

          {/* New Tagline */}
          <p className="mt-4 text-md md:text-lg text-gray-200 max-w-lg">
            Harness the power of artificial intelligence to drive innovation and efficiency in your business.
          </p>

          {/* Enhanced Call-to-Action Button */}
          <motion.button
            className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold text-md rounded-full shadow-lg transform transition-transform duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(147, 51, 234, 0.7)", // Enhanced glow effect
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // Scroll to the "main" section on the current page
              const mainSection = document.getElementById("main");
              if (mainSection) {
                mainSection.scrollIntoView({ behavior: "smooth" });
              } else {
                console.error("Element with id 'main' not found.");
              }
            }}
          >
            Discover More
          </motion.button>
        </div>

        {/* Right Side - Decorative Graphic */}
        <div className="mt-10 md:mt-0 md:w-1/2  flex justify-center">
          {/* Example: Add an SVG illustration or animated graphic */}
          <motion.img
            src="/ai-illustration2.png" // Replace with your illustration path
            alt="AI Illustration"
            className="w-3/4 h-96 rounded-full" 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#main" aria-label="Scroll Down">
          <motion.div
            className="w-8 h-8 border-b-2 border-indigo-300 rounded-full animate-bounce"
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          ></motion.div>
        </a>
      </div>
    </div>
  );
}
