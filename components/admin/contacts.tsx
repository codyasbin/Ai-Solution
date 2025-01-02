"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations

// Type definition for the Contact data
interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  jobTitle: string;
  jobDetails: string;
}

const ContactInfo = () => {
  const [contacts, setContacts] = useState<Contact[]>([]); // State to store contact data
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading status

  // Function to fetch contacts from the API
  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/admin/contacts");
      const data = await response.json();
      if (response.ok) {
        setContacts(data);
      } else {
        console.error("Failed to fetch contacts:", data.error);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to delete a contact
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/admin/delete?id=${id}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (response.ok) {
        alert("Contact deleted successfully");
        fetchContacts(); // Reload contacts after deletion
      } else {
        alert(result.error || "Error deleting contact");
      }
    } catch (error) {
      alert("An error occurred while deleting the contact.");
    }
  };

  // Fetch contacts when the component mounts
  useEffect(() => {
    fetchContacts();
  }, []); // Empty dependency array ensures this runs only once, when the component mounts

  return (
    <motion.div
      className="overflow-x-auto shadow-lg rounded-lg bg-gradient-to-br from-indigo-400 to-purple-500 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <table className="min-w-full text-sm text-left text-gray-600">
        <thead className="text-xs text-gray-800 uppercase bg-indigo-100 rounded-md shadow-md">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Phone
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Company
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Country
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Job Title
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Job Details
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <motion.tr
              key={contact._id}
              className="border-b bg-white hover:bg-indigo-50 transition duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <td className="px-6 py-4">{contact.name}</td>
              <td className="px-6 py-4">{contact.email}</td>
              <td className="px-6 py-4">{contact.phone}</td>
              <td className="px-6 py-4">{contact.company}</td>
              <td className="px-6 py-4">{contact.country}</td>
              <td className="px-6 py-4">{contact.jobTitle}</td>
              <td className="px-6 py-4">{contact.jobDetails}</td>
              <td className="px-6 py-4 text-center">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                  onClick={() => handleDelete(contact._id)}
                >
                  Delete
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      {loading && (
        <div className="text-center py-4 text-gray-600">Loading contacts...</div>
      )}
    </motion.div>
  );
};

export default ContactInfo;
