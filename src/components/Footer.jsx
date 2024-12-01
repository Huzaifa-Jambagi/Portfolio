import React from 'react';
import { github1, linkedin } from "../assets";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-6 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center space-x-4 mb-4">
          <h1 className="text-3xl font-bold underline">Huzaifa</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="https://www.linkedin.com/in/huzaifa-jambagi-807556249/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a 
            href="https://github.com/Huzaifa-Jambagi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <img src={github1} alt="GitHub" className="h-8 w-8" />
          </a>
        </div>
        <p className="text-center text-gray-400 mt-4">&copy; 2024</p>
      </div>
    </div>
  );
};

export default Footer;