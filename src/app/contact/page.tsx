'use client'; // Mark this as a client component

import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-8 text-gray-50">
      <h1 className="text-5xl font-bold text-center mb-6 underline text-gray-200">HIRE ME</h1>

      <div className="mt-4 text-center">
        <p className="text-lg">If you'd like to get in touch, feel free to email me at:</p>
        <p className="text-lg underline text-pink-400">nisarmuskan14@gmail.com</p>
      </div>
      <br />
      <br />

      <div className="mt-8 text-center underline">
        <br />
        <br />
        <br />
        <h2 className="text-xl font-semibold">Follow Me</h2>
        <div className="flex justify-center space-x-4 mt-2 underline">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.linkedin.com/in/muskan-nisar-3135a42b3/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/muskann12" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-lg">Contact: +92 000 000 00</p>
      </div>
    </div>
  );
};

export default Contact;
