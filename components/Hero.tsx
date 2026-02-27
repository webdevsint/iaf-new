import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-[calc(100vh-6rem)] min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Rural community landscape in Bangladesh at sunset"
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dossfwjtw/image/upload/v1772215254/school_4_wosp9g.webp"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 header-light-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg">
            Transforming Lives, <br />
            <span className="text-primary">Building Futures</span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
            Empowering the community through sustainable development, education, and unwavering compassion led by Iftekhar Ahmed.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/our-story"
              className="px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-background-dark font-bold transition-all duration-300 text-lg backdrop-blur-sm"
            >
              Our Story
            </Link>
            <Link
              to="/programs"
              className="px-8 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-bold transition-all duration-300 text-lg flex items-center justify-center gap-2 group"
            >
              View Programs
              <span className="material-icons text-sm transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;