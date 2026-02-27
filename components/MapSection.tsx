import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section id="team-wahedpur" className="h-80 w-full relative grayscale hover:grayscale-0 transition-all duration-1000 group">
      <img
        alt="Map context"
        className="w-full h-full object-cover"
        src="https://res.cloudinary.com/dossfwjtw/image/upload/v1772215230/green_wahedpur_4_zmx6kp.webp"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-emerald-rich/30 transition-colors duration-500 group-hover:bg-emerald-rich/10">
        <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center shadow-2xl">
          <p className="text-primary-dark text-xs uppercase font-bold tracking-widest mb-2">Our Roots</p>
          <h3 className="text-2xl font-display font-bold text-gray-900">Wahedpur, Bangladesh</h3>
        </div>
      </div>
    </section>
  );
};

export default MapSection;