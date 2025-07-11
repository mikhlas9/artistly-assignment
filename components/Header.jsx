'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

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
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border dark:bg-gray-900/95 dark:border-border-dark' 
        : 'bg-white shadow-md dark:bg-gray-900'
    }`}>
      <nav className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-blue-700 transition-colors group dark:text-blue-400 dark:hover:text-blue-500"
        >
          <div className="p-1.5 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors dark:bg-blue-900 dark:group-hover:bg-blue-800">
            <Sparkles className="w-5 h-5 text-primary dark:text-blue-400" />
          </div>
          <span>Artistly</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1">
          <li>
            <Link 
              href="/" 
              className="px-4 py-2 text-text dark:text-text-dark hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium dark:hover:text-blue-400 dark:hover:bg-gray-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/artists" 
              className="px-4 py-2 text-text dark:text-text-dark hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium dark:hover:text-blue-400 dark:hover:bg-gray-700"
            >
              Artists
            </Link>
          </li>
          <li>
            <Link 
              href="/onboarding" 
              className="px-4 py-2 text-text dark:text-text-dark hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium dark:hover:text-blue-400 dark:hover:bg-gray-700"
            >
              Onboard
            </Link>
          </li>
          <li>
            <Link 
              href="/dashboard" 
              className="px-4 py-2 text-text dark:text-text-dark hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium dark:hover:text-blue-400 dark:hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
        </ul>

        {/* Theme Toggle and Hamburger Menu (Mobile) */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-text dark:text-text-dark hover:text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:hover:text-blue-400"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <button
            className="md:hidden p-2 text-text dark:text-text-dark hover:text-primary hover:bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:hover:text-blue-400 dark:hover:bg-gray-700 transition-all duration-200"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                } dark:text-text-dark`} 
              />
              <X 
                className={`w-6 h-6 absolute transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                } dark:text-text-dark`} 
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-border dark:bg-gray-900/95 dark:border-border-dark">
          <ul className="flex flex-col px-4 py-2">
            <li className={`transform transition-all duration-300 delay-75 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}>
              <Link
                href="/"
                className="flex items-center space-x-3 text-text dark:text-text-dark hover:text-primary hover:bg-blue-50 px-3 py-3 rounded-lg transition-all duration-200 font-medium dark:hover:text-blue-400 dark:hover:bg-gray-700"
                onClick={toggleMenu}
              >
                <div className="w-2 h-2 bg-primary rounded-full dark:bg-blue-500"></div>
                <span>Home</span>
              </Link>
            </li>
            <li className={`transform transition-all duration-300 delay-100 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}>
              <Link
                href="/artists"
                className="flex items-center space-x-3 text-text dark:text-text-dark hover:text-primary hover:bg-blue-50 px-3 py-3 rounded-lg transition-all duration-200 font-medium dark:hover:text-blue-400 dark:hover:bg-gray-700"
                onClick={toggleMenu}
              >
                <div className="w-2 h-2 bg-primary rounded-full dark:bg-blue-500"></div>
                <span>Artists</span>
              </Link>
            </li>
            <li className={`transform transition-all duration-300 delay-150 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}>
              <Link
                href="/onboarding"
                className="flex items-center space-x-3 text-text dark:text-text-dark hover:text-primary hover:bg-blue-50 px-3 py-3 rounded-lg transition-all duration-200 font-medium dark:hover:text-blue-400 dark:hover:bg-gray-700"
                onClick={toggleMenu}
              >
                <div className="w-2 h-2 bg-primary rounded-full dark:bg-blue-500"></div>
                <span>Onboard</span>
              </Link>
            </li>
            <li className={`transform transition-all duration-300 delay-200 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}>
              <Link
                href="/dashboard"
                className="flex items-center space-x-3 bg-primary text-white hover:bg-blue-700 px-3 py-3 rounded-lg transition-all duration-200 font-medium shadow-sm mx-0 mt-2 dark:bg-blue-500 dark:hover:bg-blue-600"
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
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] transition-opacity duration-300 dark:bg-gray-900/20"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}