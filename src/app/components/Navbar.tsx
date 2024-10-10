// src/app/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center text-xl">
        <Link href="/" className="text-pink-100 hover:text-white text-sm font-bold underline">
          MUSKAN NISAR
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-pink-100 hover:text-gray-500 font-semibold">Home</Link>
          <Link href="/about" className="text-pink-100 hover:text-gray-500 font-semibold">About</Link>
          <Link href="/projects" className="text-pink-100 hover:text-gray-500 font-semibold">Projects</Link>
          <Link href="/contact" className="text-pink-100 hover:text-gray-500 font-semibold">Contact</Link>

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-pink-100">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4">
          <Link href="/" className="text-pink-100 hover:text-gray-300 font-bold mb-2">Home</Link>
          <Link href="/about" className="text-pink-100 hover:text-gray-300 font-bold mb-2">About</Link>
          <Link href="/projects" className="text-pink-100 hover:text-gray-300 font-bold mb-2">Projects</Link>
          <Link href="/contact" className="text-pink-100 hover:text-gray-300 font-bold">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

