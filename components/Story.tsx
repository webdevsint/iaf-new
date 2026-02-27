import React from 'react';
import { motion } from 'framer-motion';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-background-light relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-light hidden lg:block -skew-x-12 translate-x-32 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary-dark rounded-tl-3xl z-0 opacity-30"></div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
                The Vision of <br />
                <span className="text-primary-dark">Iftekhar Ahmed</span>
              </h2>
            </div>
            <div className="prose prose-lg text-gray-600 leading-relaxed font-normal">
              <p className="mb-4">
                Driven by a lifelong dedication to the soil that raised him, Iftekhar Ahmed established this foundation to channel his continuous generosity and active community service into sustainable impact.
              </p>
              <p className="mb-6">
                As our Founder, Iftekhar Ahmed remains deeply involved in the daily life of Wahedpur. He continues to work alongside neighbors, ensuring that education and opportunity reach every corner of the community he loves.
              </p>
              <p>
                Today, he leads our mission with active engagement—not just as a leader, but as a community advocate building a self-sustaining ecosystem where every individual has the tools to craft their own destiny.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px bg-gray-200 w-16"></div>
              <span className="font-display italic text-gray-400">Founder</span>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="order-1 lg:order-2 relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-primary-dark rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/5] lg:aspect-square bg-gray-100">
              <img
                alt="Portrait of Iftekhar Ahmed"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src="https://res.cloudinary.com/dossfwjtw/image/upload/v1772215205/iftekhar_ahmed_xo91kl.jpg"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-rich/80 to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-display text-xl font-bold">Iftekhar Ahmed: Founder</p>
                <p className="text-sm opacity-80 font-medium">Actively Leading Our Mission</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;