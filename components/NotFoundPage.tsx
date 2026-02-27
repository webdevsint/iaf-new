import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img 
            alt="Background Pattern" 
            className="w-full h-full object-cover grayscale" 
            src="https://res.cloudinary.com/dossfwjtw/image/upload/v1772215232/green_wahedpur_1_fh1urv.webp"
            loading="lazy"
            decoding="async"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 text-center">
        <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-display font-black text-primary leading-none tracking-tighter opacity-90">404</h1>
        </div>
        <div className="space-y-6 max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Page Not Found</h2>
            <p className="text-gray-500 text-lg font-normal leading-relaxed">
                The page you are looking for might have been moved or is temporarily unavailable. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Link to="/" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-background-dark font-bold text-base transition-all shadow-md hover:shadow-xl active:scale-95 text-center">
                    Back to Home
                </Link>
                <Link to="/programs" className="w-full sm:w-auto px-8 py-3.5 rounded-xl border-2 border-primary-dark/20 text-primary-dark hover:border-primary-dark hover:bg-primary-dark/5 font-bold text-base transition-all active:scale-95 text-center">
                    Explore Programs
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;