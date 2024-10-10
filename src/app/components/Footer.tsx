// src/app/components/Footer.tsx
import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white p-4 mt-8">
      <div className="container mx-auto flex justify-center space-x-6">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-2xl hover:text-pink-500 transition" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook className="text-2xl hover:text-blue-600 transition" />
        </a>
        <a href="https://www.linkedin.com/in/muskan-nisar-3135a42b3" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl hover:text-blue-500 transition" />
        </a>
        <a href="https://github.com/muskann12" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-2xl hover:text-gray-400 transition" />
        </a>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Muskan Nisar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
