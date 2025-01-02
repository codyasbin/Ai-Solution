"use client";

import { useState } from "react";
import { FaUserAlt, FaStar, FaCamera } from "react-icons/fa";

interface FeedbackData {
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
}

export default function FeedbackForm() {
  const [formData, setFormData] = useState<FeedbackData>({
    name: "",
    role: "",
    image: "",
    feedback: "",
    rating: 5,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/testimonials/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccessMessage("Feedback submitted successfully! 🎉");
        setFormData({
          name: "",
          role: "",
          image: "",
          feedback: "",
          rating: 5,
        });
      } else {
        setErrorMessage(result.error || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setErrorMessage("Oops! Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 p-10 rounded-2xl shadow-2xl transform transition-all hover:scale-105 ease-in-out max-w-2xl mx-auto mt-12 space-y-8 mb-10"
      onSubmit={handleSubmit}
    >
      <h3 className="text-4xl font-extrabold text-center text-white">
        Your Feedback Means the World 🌟
      </h3>
      <p className="text-center text-gray-200">
        Help us improve by sharing your thoughts and experiences!
      </p>

      <div className="space-y-6">
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 pl-12 border-2 border-transparent rounded-xl shadow-lg focus:ring-2 focus:ring-pink-500 focus:outline-none text-gray-800"
            required
          />
          <FaUserAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-500" />
        </div>

        {/* Role Input */}
        <div className="relative">
          <input
            type="text"
            name="role"
            placeholder="Your Role (e.g., Developer)"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-4 pl-12 border-2 border-transparent rounded-xl shadow-lg focus:ring-2 focus:ring-pink-500 focus:outline-none text-gray-800"
            required
          />
          <FaUserAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500" />
        </div>

        {/* Image URL Input */}
        <div className="relative">
          <input
            type="text"
            name="image"
            placeholder="Profile Image URL (Optional)"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-4 pl-12 border-2 border-transparent rounded-xl shadow-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-800"
          />
          <FaCamera className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500" />
        </div>

        {/* Feedback Textarea */}
        <div>
          <textarea
            name="feedback"
            placeholder="Share your experience..."
            value={formData.feedback}
            onChange={handleChange}
            rows={5}
            className="w-full p-4 border-2 border-transparent rounded-xl shadow-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-800"
            required
          ></textarea>
        </div>

        {/* Rating Input */}
        <div>
          <label htmlFor="rating" className="text-white font-semibold">
            Rate Us
          </label>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`cursor-pointer text-2xl ${
                  formData.rating > index ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setFormData({ ...formData, rating: index + 1 })}
              />
            ))}
          </div>
        </div>

        {/* Success or Error Messages */}
        {successMessage && (
          <p className="text-green-500 bg-white text-center text-lg">{successMessage}</p>
        )}
        {errorMessage && <p className="text-red-500 text-center text-lg">{errorMessage}</p>}

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-xl hover:bg-pink-700 transition duration-300 transform hover:scale-105"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Feedback"}
          </button>
        </div>
      </div>
    </form>
  );
}
