'use client'; // Mark this as a client component

import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-md mx-auto p-8 text-gray-50">
      <h1 className="text-5xl font-bold text-center mb-6 underline text-gray-200">HIRE ME</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="p-2 border-2 border-pink-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-black"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border-2 border-pink-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-black"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="p-2 border-2 border-pink-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-black"
          defaultValue=""
          required
        />
        <input
          type="text"
          placeholder="Subject"
          className="p-2 border-2 border-pink-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-black"
          required
        />
        <textarea
          placeholder="Your Message"
          className="p-2 border-2 border-pink-600 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-black"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-black p-2 rounded hover:opacity-90 transition"
        >
          Send
        </button>
      </form>

      <div className="mt-8 text-center underline">
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
        <p className="text-lg">Email: <a href="mailto:nisarmuskan14@gmail.com" className="underline text-pink-400">nisarmuskan14@gmail.com</a></p>
        <p className="text-lg">Contact: +92 000 000 00</p>
      </div>
    </div>
  );
};

export default Contact;
