import React from 'react';
import { FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray py-8 mt-20 h-auto">
        {/* Title */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-2 px-8">
        <h2 className="font-semibold text-gray-700 md:col-span-1 col-span-5 whitespace-nowrap text-center sm:text-center">Your Gateway to Success Start</h2>
        <div className="flex justify-center md:justify-start col-span-5 md:col-span-1">
          <h2 className="text-gray-600 font-semibold ml-0 md:ml-24">Pages</h2>
        </div>
        <div className="flex justify-center md:justify-start col-span-5 md:col-span-1">
          <h2 className="text-gray-600 font-semibold ml-0 md:ml-24">Other</h2>
        </div>
        <div className="flex justify-center md:justify-start col-span-5 md:col-span-1">
          <h2 className="text-gray-600 font-semibold ml-0 md:ml-24">Utility</h2>
        </div>
        <div className="flex justify-center md:justify-start col-span-5 md:col-span-1">
          <h2 className="text-gray-600 font-semibold ml-0 md:ml-24">Help</h2>
        </div>
      </div>
      

        <hr className="h-px mt-4 bg-white border-0" />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-2 mt-6 px-8 gap-y-6">
          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <h3 className="text-gray-600 font-semibold mb-2">Here!</h3>
            <a href="mailto:hello@helloflow.com" className="flex items-center text-gray-600">
              <span className="text-orange-500 mr-2">➔</span>
              hello@hellotechor.com
            </a>
          </div>

          {/* Pages Section */}
          <div className="mb-4 md:mb-0">
            <ul className="text-gray-600 space-y-1 text-center md:text-left md:ml-24">
              <li>Demo (Sales)</li>
              <li className="text-orange-500">Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Blog</li>
              <li>Work</li>
              <li>Shop</li>
            </ul>
          </div>

          {/* Other Section */}
          <div className="mb-4 md:mb-0">
            <ul className="text-gray-600 space-y-1 text-center md:text-left md:ml-24">
              <li>404</li>
              <li>Password</li>
              <li>Checkout</li>
              <li>Blog Details</li>
              <li>Work Details</li>
              <li>Shop Details</li>
            </ul>
          </div>

          {/* Utility Section */}
          <div className="mb-4 md:mb-0">
            <ul className="text-gray-600 space-y-1 text-center md:text-left md:ml-24">
              <li>Style Guide</li>
              <li>Licencing</li>
              <li>Change log</li>
              <li>Instructions</li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="mb-4 md:mb-0">
            <ul className="text-gray-600 space-y-1 text-center md:text-left md:ml-24">
              <li>All Templates</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 px-8 mt-8 relative md:-bottom-14">
          <FaYoutube className="h-6 w-6" />
          <FaLinkedin className="h-6 w-6" />
          <FaSquareXTwitter className="h-6 w-6" />
          <FaFacebook className="h-6 w-6" />
        </div>

        {/* Bottom Section */}
        <hr className="h-px mt-20 bg-white border-0" />
        <div className="flex flex-col md:flex-row justify-between items-center px-8 mt-6">
          <img 
            src="/src/assets/logo.svg" 
            alt="Techor Logo" 
            className="h-12 w-48 mb-4 md:mb-0"  
          />
          <p className="text-xs text-gray-400 text-center mx-auto px-2 sm:px-0">
          © 2024 - Powered by Webflow With By A{' '}
          <a href="#" className="text-blue-500 border border-stone-500 px-2 py-1 rounded shadow-lg">
            Buy this template for $69 USD
          </a>
        </p>
        
        </div>
    </footer>
  );
};

export default Footer;


