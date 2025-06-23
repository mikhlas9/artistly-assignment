'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('header')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-100' 
        : 'bg-white shadow-md'
    }`}>
      <nav className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors group"
        >
          <div className="p-1.5 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
            <Sparkles className="w-5 h-5 text-blue-600" />
          </div>
          <span>Artistly</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1">
          <li>
            <Link 
              href="/" 
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/artists" 
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              Artists
            </Link>
          </li>
          <li>
            <Link 
              href="/onboarding" 
              className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
            >
              Onboard
            </Link>
          </li>
          <li>
            <Link 
              href="/dashboard" 
              className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md"
            >
              Dashboard
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="relative w-6 h-6">
            <Menu 
              className={`w-6 h-6 absolute transition-all duration-300 ${
                isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
              }`} 
            />
            <X 
              className={`w-6 h-6 absolute transition-all duration-300 ${
                isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
              }`} 
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-blue-100">
          <ul className="flex flex-col px-4 py-2">
            <li className={`transform transition-all duration-300 delay-75 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}>
              <Link
                href="/"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-3 rounded-lg transition-all duration-200 font-medium"
                onClick={toggleMenu}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Home</span>
              </Link>
            </li>
            <li className={`transform transition-all duration-300 delay-100 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}>
              <Link
                href="/artists"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-3 rounded-lg transition-all duration-200 font-medium"
                onClick={toggleMenu}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Artists</span>
              </Link>
            </li>
            <li className={`transform transition-all duration-300 delay-150 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}>
              <Link
                href="/onboarding"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-3 rounded-lg transition-all duration-200 font-medium"
                onClick={toggleMenu}
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Onboard</span>
              </Link>
            </li>
            <li className={`transform transition-all duration-300 delay-200 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}>
              <Link
                href="/dashboard"
                className="flex items-center space-x-3 bg-blue-600 text-white hover:bg-blue-700 px-3 py-3 rounded-lg transition-all duration-200 font-medium shadow-sm mx-0 mt-2"
                onClick={toggleMenu}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Dashboard</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}