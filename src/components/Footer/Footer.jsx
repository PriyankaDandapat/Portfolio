import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-6 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-gradient-to-b from-transparent to-[#130f23]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">
          Priyanka Dandapat
        </h2>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-2">
          © 2025 Priyanka Dandapat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
