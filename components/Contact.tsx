import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-surface-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-dark via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-emerald-rich rounded-3xl p-10 md:p-16 shadow-2xl text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
          <span className="inline-block py-1 px-3 rounded bg-primary text-emerald-rich text-xs font-bold uppercase tracking-wider mb-6 relative z-10">Get Involved</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 relative z-10">
            Be the Change You Wish to See
          </h2>
          <p className="text-gray-200 mb-10 text-lg font-normal max-w-2xl mx-auto leading-relaxed relative z-10">
            Your contribution can light up a home, educate a child, or save a life. Join Iftekhar Ahmed and our team in building a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
            <Link to="/donate" className="px-8 py-4 rounded-xl bg-primary hover:bg-white hover:text-emerald-rich text-surface-dark font-bold text-lg transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
              Donate Now
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-transparent border-2 border-white/30 hover:bg-white hover:text-emerald-rich text-white font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2">
              Become a Volunteer
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;