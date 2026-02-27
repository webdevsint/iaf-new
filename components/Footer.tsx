import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="vibrant-green-gradient pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src="https://res.cloudinary.com/dossfwjtw/image/upload/v1772215268/logo_rqaymx.png" 
                alt="Iftekhar Ahmed Foundation" 
                className="h-24 w-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-gray-100 text-base leading-relaxed font-normal max-w-md">
              Under the active leadership of Iftekhar Ahmed, we are dedicated to the sustainable development of communities in Bangladesh, building a brighter future for all.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide text-lg">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-4 text-sm text-gray-200 font-medium">
              <li><Link className="hover:text-primary transition-colors" to="/">Home</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/our-story">Our Story</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/leadership">Leadership</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/#programs">Programs</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/team-wahedpur">Team Wahedpur</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/contact">Contact Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/donate">Donate</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
            <p className="text-gray-300 text-xs font-medium">
              © 2026 Iftekhar Ahmed Foundation.
            </p>
            <span className="hidden md:inline text-gray-500 text-xs">•</span>
             <p className="text-gray-300 text-xs font-medium">
              Developed by <a href="https://cursorstudios.net/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-primary/50 hover:decoration-primary">Cursor Studios</a>
            </p>
          </div>
          <div className="flex gap-6">
            <a className="text-gray-200 hover:text-white transition-colors" href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;