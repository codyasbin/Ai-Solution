"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaRegCommentDots, FaTimes } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    jobTitle: "",
    jobDetails: "",
  });

  const [formStatus, setFormStatus] = useState<string>("");

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate the form fields before submission
  const validateForm = () => {
    const { name, email, country, jobDetails } = formData;
    if (!name || !email || !country || !jobDetails) {
      setFormStatus("All required fields must be filled out.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormStatus("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form data
    if (!validateForm()) return;

    setFormStatus("Submitting...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          jobTitle: "",
          jobDetails: "",
        });
      } else {
        setFormStatus(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("Failed to submit form. Please check your connection and try again.");
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="relative">
      {/* Hero Section with Fluid Background */}
      <motion.section
        className="absolute inset-0 bg-gradient-to-r from-green-500 via-teal-500 to-blue-600 bg-cover bg-center text-white flex flex-col justify-center items-center text-center p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold tracking-wide leading-tight text-shadow-lg"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Let’s <span className="text-yellow-300">Connect</span>!
        </motion.h1>
        <motion.p
          className="mt-4 text-xl font-light text-gray-300"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          Share your thoughts or get support. We’re eager to help!
        </motion.p>
      </motion.section>

      {/* Floating Contact Form Section */}
      <motion.section
        className="py-16 mt-24 bg-white shadow-xl rounded-t-xl relative z-10 transform transition-all duration-300 ease-in-out"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center pb-6">
            <h2 className="text-3xl font-semibold text-gray-800">Get In Touch</h2>
            <FaTimes
              className="text-gray-600 hover:text-gray-800 cursor-pointer"
              size={24}
              onClick={() => setFormStatus("")}
            />
          </div>

          <motion.form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
              <FaUser className="text-blue-600 mr-4 text-xl" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="flex-1 py-2 px-4 text-lg placeholder-gray-400 focus:outline-none"
                placeholder="Full Name"
              />
            </div>

            {/* Email Field */}
            <div className="relative flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
              <FaEnvelope className="text-blue-600 mr-4 text-xl" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-1 py-2 px-4 text-lg placeholder-gray-400 focus:outline-none"
                placeholder="Email Address"
              />
            </div>

            {/* Phone Field */}
            <div className="relative flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
              <FaPhoneAlt className="text-blue-600 mr-4 text-xl" />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 py-2 px-4 text-lg placeholder-gray-400 focus:outline-none"
                placeholder="Phone (Optional)"
              />
            </div>

            {/* Company Field */}
            <div className="relative flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="flex-1 py-2 px-4 text-lg placeholder-gray-400 focus:outline-none"
                placeholder="Company (Optional)"
              />
            </div>

            {/* Country Field */}
            <div className="relative flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
              <FaMapMarkerAlt className="text-blue-600 mr-4 text-xl" />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="flex-1 py-2 px-4 text-lg placeholder-gray-400 focus:outline-none"
              >
                <option value="">Select Your Country</option>
                <option value="Nepal">Nepal</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
              </select>
            </div>

            {/* Job Title Field */}
            <div className="relative flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
              <FaRegCommentDots className="text-blue-600 mr-4 text-xl" />
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="flex-1 py-2 px-4 text-lg placeholder-gray-400 focus:outline-none"
                placeholder="Job Title (Optional)"
              />
            </div>

            {/* Job Details Field */}
            <div className="relative flex items-center border-b-2 border-gray-300 focus-within:border-blue-500">
              <textarea
                name="jobDetails"
                value={formData.jobDetails}
                onChange={handleChange}
                required
                className="w-full py-2 px-4 text-lg placeholder-gray-400 focus:outline-none"
                rows={6}
                placeholder="Tell us more about your needs"
              />
            </div>

            {/* Submit Button with Hover Effects */}
            <motion.div className="flex justify-center pt-6">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-md shadow-md hover:bg-gradient-to-l hover:from-teal-400 hover:to-blue-500 transition-all"
              >
                <FaPaperPlane className="mr-2 inline-block" />
                {formStatus === "Submitting..." ? "Sending..." : "Send Message"}
              </button>
            </motion.div>
          </motion.form>

          {/* Success/Error Feedback */}
          {formStatus && (
            <motion.div
              className={`mt-6 text-center font-semibold text-lg ${formStatus.includes("success") ? "text-green-500" : "text-red-500"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {formStatus === "Form submitted successfully!"
                ? "Thank you for reaching out! We'll get back to you soon."
                : formStatus}
            </motion.div>
          )}
        </div>
      </motion.section>
    </div>
  );
}
