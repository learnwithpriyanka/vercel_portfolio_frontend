import React, { useState } from 'react';
import './Header.css'; // Assuming you have a CSS file for styling

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container flex justify-between items-center py-4">
        <div className="logo text-xl font-bold"><a href="/">Portfolio</a></div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden h-8 w-8 flex items-center justify-center cursor-pointer"
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mobile-menu flex flex-col space-y-4 px-4 pb-4 md:hidden">
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}