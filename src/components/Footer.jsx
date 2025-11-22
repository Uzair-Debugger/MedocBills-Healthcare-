import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#fde2e2] w-full mt-auto font-inter">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-12 lg:space-y-0 lg:space-x-12 xl:space-x-24">
          {/* Left Section */}
          <div className="flex-1 max-w-lg lg:max-w-md">
            <h3 className="font-bold text-lg mb-2 text-cyan-900">In Home Wound Care Center.</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              All medical services are provided by licensed physicians and healthcare practitioners who may practice independently but operate collectively as <span className="font-semibold">"Personic Health"</span>.
            </p>
            <div className="w-full">
              <button className="bg-[#8B1538] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#72b07e] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200 shadow-md">
                Refer A Patient
              </button>
            </div>
          </div>

          {/* Right Sections */}
          <div className="flex flex-col sm:flex-row space-y-12 sm:space-y-0 sm:space-x-16 lg:space-x-12 xl:space-x-24">
            {/* Information Section */}
            <div>
              <h4 className="font-medium text-gray-800 text-base mb-4 relative after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-[2px] after:bg-gray-400">Information</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to='/' className='hover:underline'>About Us</Link></li>
                <li><Link to='/contactus' className='hover:underline'>Contact Us</Link></li>
                <li><Link to='/services' className='hover:underline'>Our Services</Link></li>
                <li><Link to='/portfolio' className='hover:underline'>Patient Results</Link></li>
              </ul>
            </div>

            {/* Connect Section */}
            <address>
              <h4 className="font-medium text-gray-800 text-base mb-4 relative after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-[2px] after:bg-gray-400">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="tel:8554794217" className="hover:underline">+1 (929) 621 6059</a></li>
                <li><a href="mailto:woundcare@personichealth.com" className="hover:underline">support@medstates.com</a></li>
                <li><a href="https://www.linkedin.com/in/syed-muhammad-uzair-563562325/" className="hover:underline">LinkedIn</a></li>
              </ul>
            </address>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 w-full h-px bg-gray-300"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-600 flex flex-col sm:flex-row sm:space-x-2 text-center sm:text-left">
            <span>© 2025 Personic Health.</span>
            <span className="hidden sm:inline">||</span>
            <span>All Rights Reserved.</span>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-sm text-gray-600">
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">FAQs</a>
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">Locations</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
