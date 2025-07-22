'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Twitter, Linkedin } from 'lucide-react';
const logo = '/AN.svg';

// Define types for navigation items
interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Education', href: '/education' },
  { name: 'Experience', href: '/experience' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Volunteer', href: '/volunteer' },
  //{ name: 'Presentations', href: '/presentations' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Contact', href: '/contact' },
 
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* Replace the text link with an image link for the logo */}
              <Link to="/" className="text-lg font-bold text-gray-800 hover:text-gray-600">
                Amy Nguyen
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 transition duration-150 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition duration-150 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 items-center">
          {/* Logo and Social Media Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
              <span className="ml-2 text-gray-400 text-sm"></span>
            </Link>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white cursor-not-allowed" disabled>
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-white cursor-not-allowed" disabled>
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </button>
              <a href="https://www.linkedin.com/in/amynguyensop/" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Centered Navigation Links */}
          <div className="text-center">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <div className="flex flex-wrap justify-center space-x-6 text-gray-400">
              {navItems.map((item) => (
                <Link key={item.name} to={item.href} className="hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <button className="text-base text-gray-400 hover:text-white cursor-not-allowed" disabled>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-base text-gray-400 hover:text-white cursor-not-allowed" disabled>
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-xs text-gray-400">
            &copy; 2024 Amy Nguyen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};