import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to get correct href based on current page
  const getLinkHref = (path: string, hash: string) => {
    if (location.pathname === path) {
      return hash;
    }
    return `${path}${hash}`;
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-gray-200 shadow-sm py-0'
          : 'bg-white/90 backdrop-blur-md border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-background-dark font-bold text-xl font-display">
              IA
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-gray-900">
              Iftekhar Ahmed <span className="hidden sm:inline font-normal text-primary-dark">Foundation</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              to="/our-story" 
              className={`text-sm font-medium transition-colors ${location.pathname === '/our-story' ? 'text-primary-dark' : 'text-gray-600 hover:text-primary-dark'}`}
            >
              Our Story
            </Link>
            
            <Link
              to="/programs"
              className={`text-sm font-medium transition-colors ${location.pathname === '/programs' ? 'text-primary-dark' : 'text-gray-600 hover:text-primary-dark'}`}
            >
              Programs
            </Link>

            <Link
              to="/team-wahidpur"
              className={`text-sm font-medium transition-colors ${location.pathname === '/team-wahidpur' ? 'text-primary-dark' : 'text-gray-600 hover:text-primary-dark'}`}
            >
              Team Wahidpur
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-primary-dark' : 'text-gray-600 hover:text-primary-dark'}`}
            >
              Contact
            </Link>

            <Link
              to="/donate"
              className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-background-dark font-bold text-sm transition-all shadow-md transform hover:scale-105"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-primary-dark focus:outline-none p-2"
            >
              <span className="material-icons text-3xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
              <Link
                to="/our-story"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary-dark hover:bg-gray-50 transition-colors"
              >
                Our Story
              </Link>
              <Link
                to="/programs"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary-dark hover:bg-gray-50 transition-colors"
              >
                Programs
              </Link>
              <Link
                to="/team-wahidpur"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary-dark hover:bg-gray-50 transition-colors"
              >
                Team Wahidpur
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary-dark hover:bg-gray-50 transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 mt-4 text-center rounded-lg bg-primary text-background-dark font-bold hover:bg-primary-dark transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;