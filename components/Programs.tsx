import React from 'react';
import { motion } from 'framer-motion';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  icon: string;
  delay: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, image, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-xl"
  >
    <div className="absolute inset-0 bg-gray-100">
      <img
        alt={`${title} program`}
        className="absolute inset-0 w-full h-full object-cover hover-zoom-img"
        src={image}
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-emerald-rich via-emerald-rich/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-85"></div>
    <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center mb-4 text-primary">
        <span className="material-icons">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 font-display">{title}</h3>
      <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-normal">
        {description}
      </p>
      <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
    </div>
  </motion.div>
);

const Programs: React.FC = () => {
  const programs = [
    {
      title: 'Education',
      description: 'Providing scholarships, school supplies, and building safe learning environments for the next generation.',
      image: 'https://res.cloudinary.com/dossfwjtw/image/upload/v1772215250/school_1_wkwgxh.webp',
      icon: 'school',
    },
    {
      title: 'Infrastructure',
      description: 'Developing essential roads, bridges, and community centers to connect villages and opportunities.',
      image: 'https://res.cloudinary.com/dossfwjtw/image/upload/v1772215224/infrastructure_1_jsdlbo.webp',
      icon: 'foundation',
    },
    {
      title: 'Healthcare',
      description: 'Organizing free medical camps, supplying medicine, and supporting local clinics for better health.',
      image: 'https://res.cloudinary.com/dossfwjtw/image/upload/v1772215256/c_section_1_lnuiby.jpg',
      icon: 'medical_services',
    },
    {
      title: 'Empowerment',
      description: 'Micro-loans and vocational training to help families start businesses and achieve financial independence.',
      image: 'https://res.cloudinary.com/dossfwjtw/image/upload/v1772215234/rikshaw_and_tubewell_1_jweuta.webp',
      icon: 'trending_up',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-dark font-bold tracking-widest uppercase text-xs">What We Do</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-gray-900">Our Core Programs</h2>
          <div className="w-16 h-1.5 bg-primary-dark mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;