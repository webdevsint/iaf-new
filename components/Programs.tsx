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
    <img
      alt={`${title} program`}
      className="absolute inset-0 w-full h-full object-cover hover-zoom-img"
      src={image}
    />
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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRxK6-s9ivH31g5To2BeAhHXc4-pv3XZN402tDp8UVo-h-i9bM3tWzdNa9PQUy8XLM2D1b0AjPfQOGcj2YF9AIfQERp0xSbck7TlbmztvWcur_navGw4QnofsUPo21u8kT9bhMEKlR-5why2vP6d22yXvHt_xZ7IMH9cBRb1PHkWNT6OU2xTLeUk3PzW_wpmWEE0WCRvl0SFGXX70oZHihF_38HB0djmck0PzGaXaD6nwfojCnbZ6YFc3FKEG_dHQ5rkyaQ_CApvzD',
      icon: 'school',
    },
    {
      title: 'Infrastructure',
      description: 'Developing essential roads, bridges, and community centers to connect villages and opportunities.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYgzRigJjWAm5F3-fMhlmsj2_9NwVP2xaLQcGyYh_9IDNV7mutp2kqOdGLqvEMDqPWAFaUBJrohGAAo_nzWDznoJfxKOHH7MriuauxMi0Huk6aMgsjLkHgxmTv8xLyVCf5rsvIiO6xDSsFDd_RK0X5sfyRqP1pFYSG30O085aBWKKvj5TR-ecqxzxqzlkzlfxAJBqUY4-vNJ2zJ4judaRQP-usS0EU5TyGOk1uWwpuZmeJdbDIbGLxjxFwCydGICCMb0_ns7U3mocL',
      icon: 'foundation',
    },
    {
      title: 'Healthcare',
      description: 'Organizing free medical camps, supplying medicine, and supporting local clinics for better health.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZM86JEBr-b7uEyp85Bv_KyNxf44vaH1531-wP5nsQd43zDGbFbZwnlHaevanDwhEKO48b2NIFONoj6dXlDOr1GwUECT73pY3aXxiiSyllvAWZpvqxiyvV7q6vW9t0kwGLjFWYX2U6n2Tp8OMjna0wpWB9f93YIxsEx2pEuBTN0i3evJxyqPOzYETZegcp4Ili94noenXEp1rEUULs70YEA7wMF7bWavN0mha4s5L_PftU0D_quqOWViRFY47MxYMwLuX-r6RzjdcS',
      icon: 'medical_services',
    },
    {
      title: 'Empowerment',
      description: 'Micro-loans and vocational training to help families start businesses and achieve financial independence.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyZKxED9S1Iye51yPmzGg2_KLJiK9exwoylYNSnKlsH4WQF2O5RTKmnRpY9gxXIFr9H5kW_pcVf79broNJHTe9JwbufJg1q0VxhJQqg_qbGLVfhZ03hlqxs0xv88m4ImDuBpRvFmEhzTL4tN424WvjQ_9_67OAIluPHwlY6uCOAASKwEAFn4y4TABeA1R5zR5cQALPvHXXGBQUfoAcpnvrtaxexbCSZUcThc7IhlxLrX3lu3Fo-WRZOnJ_vfzS4PA3Jkj9pZxM899r',
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