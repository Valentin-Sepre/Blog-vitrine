"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaEnvelope, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-concrete-nude p-4 shadow-lg w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-2xl font-bold text-black">
          <Link href="/">Blog</Link>
        </div>

        {/* Menu Hamburger Icon */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-black">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8 text-black">
          <Link href="/" className="flex items-center hover:text-gray-600 transition duration-300">
            <FaHome />
            <span className="ml-2 text-lg font-medium">Accueil</span>
          </Link>
          <Link href="/a-propos" className="flex items-center hover:text-gray-600 transition duration-300">
            <FaInfoCircle />
            <span className="ml-2 text-lg font-medium">À propos</span>
          </Link>
          <Link href="/contact" className="flex items-center hover:text-gray-600 transition duration-300">
            <FaEnvelope />
            <span className="ml-2 text-lg font-medium">Contact</span>
          </Link>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-concrete-light text-black p-6 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
      >
        <button onClick={toggleMenu} className="text-black mb-6">
          <FaTimes size={24} />
        </button>
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center hover:text-gray-600 transition duration-300">
            <FaHome />
            <span className="ml-2 text-lg font-medium">Accueil</span>
          </Link>
          <Link href="/a-propos" className="flex items-center hover:text-gray-600 transition duration-300">
            <FaInfoCircle />
            <span className="ml-2 text-lg font-medium">À propos</span>
          </Link>
          <Link href="/contact" className="flex items-center hover:text-gray-600 transition duration-300">
            <FaEnvelope />
            <span className="ml-2 text-lg font-medium">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
