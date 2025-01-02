"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations

interface Feedback {
  _id: string;
  name: string;
  role: string;
  feedback: string;
  rating: number;
}

export default function FeedbackSection() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch feedback from the API
  const fetchFeedback = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/testimonials");
      const data = await response.json();
      if (response.ok) {
        setFeedbacks(data); // Set the fetched feedback
      } else {
        console.error("Failed to fetch feedback:", data.error);
      }
    } catch (error) {
      console.error("Error fetching feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to delete feedback
  const handleDeleteFeedback = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this feedback?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/testimonials/delete?id=${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (response.ok) {
        alert("Feedback deleted successfully!");
        fetchFeedback(); // Reload the feedback list after deleting
      } else {
        alert(result.error || "Error deleting feedback");
      }
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  // Fetch feedback when component mounts
  useEffect(() => {
    fetchFeedback();
  }, []);

  // Helper to render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
        {halfStar && <span className="text-yellow-300">★</span>}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <span key={i + fullStars + (halfStar ? 1 : 0)} className="text-gray-300">★</span>
        ))}
      </>
    );
  };

  return (
    <motion.div
      className="p-8 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Feedbacks</h2>

      {loading ? (
        <div className="text-center text-xl">Loading feedback...</div>
      ) : (
        <div className="overflow-x-auto">
          {/* Feedback Table */}
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Role</th>
                <th scope="col" className="px-6 py-3">Feedback</th>
                <th scope="col" className="px-6 py-3">Rating</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.length > 0 ? (
                feedbacks.map((feedback) => (
                  <motion.tr
                    key={feedback._id}
                    className="border-b bg-white hover:bg-gray-50 transition duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <td className="px-6 py-4">{feedback.name}</td>
                    <td className="px-6 py-4">{feedback.role}</td>
                    <td className="px-6 py-4">{feedback.feedback}</td>
                    <td className="px-6 py-4">{renderStars(feedback.rating)}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDeleteFeedback(feedback._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center px-6 py-4">No feedback available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
}
