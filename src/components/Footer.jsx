import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (email && message) {
      alert('Message sent successfully!');
      setEmail('');
      setMessage('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <footer className="bg-[#fde2e2] text-black py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

        {/* Left Column - Logo & Social */}
        <div className="border-2 border-[#1B7C8C] rounded-lg p-5">
          <img
            src={logo}
            alt="MedocBills Logo"
            className="h-12 w-auto mx-auto mb-4"
          />

          <p className="font-light text-sm text-center mb-5">
            Medocbills has been helping healthcare providers increase collections,
            reduce expenses, and streamline workflows with a highly experienced team.
          </p>

          <div className="flex justify-center gap-3">
            <a className="w-9 h-9 cursor-pointer bg-[#1B7C8C] rounded-full flex items-center justify-center hover:bg-[#176874] transition">
              <Facebook size={18} color="white" />
            </a>
            <a className="w-9 h-9 cursor-pointer bg-[#1B7C8C] rounded-full flex items-center justify-center hover:bg-[#176874] transition">
              <Linkedin size={18} color="white" />
            </a>
            <a className="w-9 h-9 cursor-pointer bg-[#1B7C8C] rounded-full flex items-center justify-center hover:bg-[#176874] transition">
              <Youtube size={18} color="white" />
            </a>
          </div>
        </div>

        {/* Column 2 - Proudly Serving */}
        <div>
          <h3 className="text-xl font-bold mb-4">Proudly Serving</h3>
          <ul className="space-y-2 text-[#8B1538] font-light">
            {[
              'Private Practices',
              'Individual Doctor Office',
              'Clinics & Imaging Centers',
              'Hospitals',
              'Healthcare Systems',
              'Urgent Care Centers',
              'Emergency Rooms',
            ].map((item) => (
              <li
                key={item}
                className="hover:text-[#1B7C8C] transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Business Hours */}
        <div>
          <h3 className="text-xl font-bold mb-4">Business Hours</h3>
          <div className="space-y-4 text-neutral-700">
            <div>
              <p className="font-semibold">Monday – Friday</p>
              <p className="text-[#8B1538]">8:30 AM – 5:00 PM</p>
            </div>
            <div>
              <p className="font-semibold">Saturday & Sunday</p>
              <p className="text-[#8B1538]">Closed</p>
            </div>
          </div>
        </div>

        {/* Column 4 - Quick Contact + Address */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Contact</h3>

          {/* Contact Form */}
          <div className="space-y-4 mb-6">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
            />

            <button
              onClick={handleSubmit}
              className="w-full cursor-pointer bg-[#8B1538] hover:bg-[#19717f] text-white font-semibold py-3 rounded transition"
            >
              Send Message
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-6"></div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Details</h4>

            <div className="space-y-4 text-sm text-neutral-700">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#1B7C8C] mt-1" />
                <a href="tel:571-520-2235" className="hover:text-[#1B7C8C] transition">
                  571-520-2235
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#1B7C8C] mt-1" />
                <a
                  href="mailto:info@medocbills.com"
                  className="hover:text-[#1B7C8C] transition break-all"
                >
                  info@medocbills.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#1B7C8C] mt-1" />
                <address className="not-italic leading-relaxed">
                  835 Wilshire Blvd<br />
                  Ste 500 #513<br />
                  Los Angeles, CA 90017
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
