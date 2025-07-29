import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="footer bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Description */}
        <div>
          <h2 className="text-xl font-bold mb-2"><a href="/">Portfolio</a></h2>
          <p>
            Creating digital experiences that make a difference.<br />
            Let's build something amazing together.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* Connect & Social */}
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <div className="flex flex-row space-x-3 mb-2" style={{flexDirection:"column"}}>
            <span className="icon">
              <a href="https://www.linkedin.com/in/priyanka-kumari-b91791341/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin color="#fff" />
              </a>
            </span>
            <span className="icon">
              <a href="https://github.com/learnwithpriyanka" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub color="#fff" />
              </a>
            </span>
            <span className="icon">
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter color="#fff" />
              </a>
            </span>
            <span className="icon">
              <a href="mailto:priyankakumari80921@gmail.com" aria-label="Email">
                <FaEnvelope color="#fff" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        © 2024 Portfolio. All rights reserved. Built with passion and modern technology.
      </div>
    </footer>
  );
}