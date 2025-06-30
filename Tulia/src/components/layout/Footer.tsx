import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Tulia</span>
            </div>
            <p className="text-secondary-300 mb-8 max-w-md leading-relaxed">
              A safe space to share, be heard, and heal — all through WhatsApp. 
              Supporting young people's mental health journey with our intelligent bot and compassionate care.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-secondary-300">
                <Mail className="w-5 h-5" />
                <span>support@tuliaapp.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-secondary-300 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-secondary-300 hover:text-white transition-colors duration-300">Contact Us</Link></li>
              <li><Link to="/crisis" className="text-secondary-300 hover:text-white transition-colors duration-300">Crisis Resources</Link></li>
              <li><a href="https://wa.me/254700000000" className="text-secondary-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Support</span>
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © 2024 Tulia. All rights reserved. Made with care for mental health.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-secondary-400 text-sm">
                If you're in crisis, please contact local emergency services or visit our <Link to="/crisis" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">crisis resources</Link> page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;