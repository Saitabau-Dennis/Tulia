import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Hide navbar on form pages
  const hideNavbar = location.pathname === '/register';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  if (hideNavbar) {
    return null;
  }

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'w-[95%] max-w-6xl' 
        : 'w-[90%] max-w-5xl'
    }`}>
      <div className={`bg-white/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-soft transition-all duration-500 ${
        isScrolled ? 'shadow-medium' : 'shadow-soft'
      }`}>
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-primary-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-secondary-800 group-hover:text-primary-600 transition-colors duration-300">
                Tulia
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-secondary-600 hover:text-primary-600 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link to="/about" className="text-secondary-600 hover:text-primary-600 transition-colors duration-300 font-medium">
                About
              </Link>
              <Link to="/contact" className="text-secondary-600 hover:text-primary-600 transition-colors duration-300 font-medium">
                Contact
              </Link>
              <Link to="/crisis" className="text-secondary-600 hover:text-primary-600 transition-colors duration-300 font-medium">
                Crisis Help
              </Link>

              <Link 
                to="/register" 
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-2xl transition-all duration-300 font-semibold shadow-soft hover:shadow-medium transform hover:scale-105"
              >
                Join Tulia
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-xl hover:bg-secondary-100/80 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-secondary-100/50 animate-slide-down">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-secondary-600 hover:text-primary-600 transition-colors duration-300 font-medium px-2 py-1 rounded-xl hover:bg-primary-50/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-secondary-600 hover:text-primary-600 transition-colors duration-300 font-medium px-2 py-1 rounded-xl hover:bg-primary-50/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="text-secondary-600 hover:text-primary-600 transition-colors duration-300 font-medium px-2 py-1 rounded-xl hover:bg-primary-50/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/crisis" 
                  className="text-secondary-600 hover:text-primary-600 transition-colors duration-300 font-medium px-2 py-1 rounded-xl hover:bg-primary-50/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Crisis Help
                </Link>
                
                <Link 
                  to="/register" 
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-2xl text-center font-semibold transition-all duration-300 mt-4 shadow-soft hover:shadow-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Tulia
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;