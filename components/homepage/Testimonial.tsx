'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
}

export default function UniqueTestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials');
      const data = await response.json();
      if (response.ok) {
        setTestimonials(data);
      } else {
        console.error('Failed to fetch testimonials:', data.error);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <motion.section
      className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center">Hear From Our Clients</h2>
        <p className="text-gray-300 text-center mt-4">
          See what they have to say about working with us.
        </p>

        {/* Carousel Wrapper */}
        <div className="relative mt-16 h-[450px]">
          {testimonials.length > 0 && (
            <div className="relative h-full perspective-1000">
              <div
                className="carousel relative h-full flex items-center justify-center"
                style={{
                  transform: `rotateY(${-activeIndex * (360 / testimonials.length)}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 1s',
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial._id}
                    className={`absolute h-[300px] w-[280px] bg-white text-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-between p-6 ${
                      index === activeIndex ? 'z-10' : 'z-0 opacity-50'
                    }`}
                    style={{
                      transform: `rotateY(${(360 / testimonials.length) * index}deg) translateZ(450px)`,
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <FaQuoteLeft className="text-indigo-500 text-3xl" />
                    <p className="mt-4 text-center italic">"{testimonial.feedback}"</p>
                    <div className="mt-4 flex justify-center text-yellow-400">
                      {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                      {testimonial.rating % 1 !== 0 && <FaStar className="text-yellow-200" />}
                    </div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-4 border-indigo-500 mt-4"
                    />
                    <h3 className="text-lg font-bold mt-2">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="absolute inset-x-0 bottom-8 flex justify-center gap-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-indigo-500 hover:bg-indigo-600 rounded-full shadow-md flex items-center justify-center"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-indigo-500 hover:bg-indigo-600 rounded-full shadow-md flex items-center justify-center"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
