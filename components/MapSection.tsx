import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section id="team-wahidpur" className="h-80 w-full relative grayscale hover:grayscale-0 transition-all duration-1000 group">
      <img
        alt="Map context"
        className="w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPpUcPeTzJFJ1slp9CeShd-9ahfElTBWsVm7FdRzLDYhHSOe1mI3I7qiatIsDRz1RCCSIwr1vBQPKT5ITz1kDa8IGyTBZzIX_uKuiBqNOknRC-RiquEX-lzCvx-FG_QpjKMF6_AsWAlytX6xF7BRSCxR8FJpxBHjUZUdzEt5qrwZ_2T1kWezJ0W5MMNZvGBRBEXxMmujnqmyueEMZtLD6TepzFxAzy8H2TZx3x1q8SuZtxoPlZKLphHsVLtSannezyeui1V2YfbNwM"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-emerald-rich/30 transition-colors duration-500 group-hover:bg-emerald-rich/10">
        <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center shadow-2xl">
          <p className="text-primary-dark text-xs uppercase font-bold tracking-widest mb-2">Our Roots</p>
          <h3 className="text-2xl font-display font-bold text-gray-900">Wahidpur, Bangladesh</h3>
        </div>
      </div>
    </section>
  );
};

export default MapSection;