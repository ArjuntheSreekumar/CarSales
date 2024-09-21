import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Footer = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleReviewClick = () => {
    navigate('/Carfeedback'); // Redirect to the feedback page
  };

  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto text-center">
        {/* Submit Review Section */}
        <h2 className="text-2xl font-bold mb-4">Submit Your Review</h2>
        <button 
          onClick={handleReviewClick} // Attach click handler
          className="bg-blue-500 text-white px-6 py-2 rounded-full"
        >
          Leave a Review
        </button>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook className="text-white text-3xl hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter className="text-white text-3xl hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram className="text-white text-3xl hover:text-pink-500" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-white text-3xl hover:text-blue-700" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
