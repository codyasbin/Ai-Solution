"use client";

import { useState, useEffect } from "react";
import { useAuth, RedirectToSignIn, SignOutButton } from "@clerk/nextjs"; // Clerk hooks
import { motion } from "framer-motion"; // For animations
import ContactInfo from "@/components/admin/contacts"; // Contact Info component
import Stats from "@/components/admin/stats";
import FeedbackSection from "@/components/admin/feedback";

const AdminDashboard = () => {
  const { isSignedIn, isLoaded } = useAuth(); // Use Clerk's useAuth hook
  const [activeTab, setActiveTab] = useState("contacts"); // Manage active tab
  const [contacts, setContacts] = useState<any[]>([]); // Contacts data
  const [stats, setStats] = useState<any | null>(null); // Stats state for the pie chart

  // Function to change active tab
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // Function to fetch contacts and calculate stats
  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/admin/contacts"); // Fetch contacts
      const data = await response.json();
      if (response.ok) {
        setContacts(data); // Set the contacts data
        calculateStats(data); // Calculate the stats after fetching data
      } else {
        console.error("Failed to fetch contacts:", data.error);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // Function to calculate stats from the contacts data
  const calculateStats = (data: any[]) => {
    const countryStats: Record<string, number> = {};
    const jobTitleStats: Record<string, number> = {};

    data.forEach((contact) => {
      countryStats[contact.country] = (countryStats[contact.country] || 0) + 1;
      jobTitleStats[contact.jobTitle] =
        (jobTitleStats[contact.jobTitle] || 0) + 1;
    });

    const countryData = {
      labels: Object.keys(countryStats),
      datasets: [
        {
          data: Object.values(countryStats),
          backgroundColor: ["#F9C74F", "#90BE6D", "#F94144", "#577590"],
        },
      ],
    };

    setStats({
      totalContacts: data.length,
      countryStats: countryData,
      jobTitleStats: jobTitleStats,
    });
  };

  // Fetch contacts when the component loads or when activeTab is changed to "stats"
  useEffect(() => {
    if (isSignedIn && activeTab === "stats") {
      fetchContacts(); // Fetch contacts only when the "Stats" tab is active
    }
  }, [isSignedIn, activeTab]);

  if (!isLoaded) return <div>Loading...</div>;

  // Redirect to sign-in if the user is not signed in
  if (!isSignedIn) return <RedirectToSignIn />;

  return (
    <motion.div
      className="flex bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-br from-indigo-500 to-purple-700 text-white min-h-screen p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-8">Admin Dashboard</h2>
        <div className="space-y-6">
          <ul className="space-y-4 text-lg">
            <li
              onClick={() => handleTabChange("contacts")}
              className="cursor-pointer p-3 rounded-lg hover:bg-indigo-400 transition-all"
            >
              Contact Information
            </li>
            <li
              onClick={() => handleTabChange("stats")}
              className="cursor-pointer p-3 rounded-lg hover:bg-indigo-400 transition-all"
            >
              Statistics
            </li>
            <li
              onClick={() => handleTabChange("feedback")}
              className="cursor-pointer p-3 rounded-lg hover:bg-indigo-400 transition-all"
            >
              Feedback Information
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-50">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome Jharna Kunwar</h1>

          {/* Sign-out Button */}
          <div className="mb-4 flex justify-center">
            <div className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all">
              <SignOutButton>Sign Out</SignOutButton>
            </div>
          </div>
        </div>

        {activeTab === "contacts" && <ContactInfo />} {/* Show Contact Info tab content */}
        
        {activeTab === "stats" && stats && <Stats stats={stats} />} {/* Show Stats component */}

        {activeTab === "feedback" && (
          <div>
            <h2 className="text-3xl mb-6 text-gray-800">Feedback Section</h2>
            <FeedbackSection />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
