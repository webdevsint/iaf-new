import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const teamGalleryImages = [
    { src: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215211/team_wahedpur_4_md8qcu.webp", title: "Planning Sessions" },
    { src: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215253/school_2_zm1eue.webp", title: "Field Operations" },
    { src: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215232/green_wahedpur_1_fh1urv.webp", title: "Green Initiative" },
    { src: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215253/school_3_hjoigc.webp", title: "Our Canvas" },
    { src: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215240/housing_1_mn5cn2.webp", title: "Strength in Numbers" },
    { src: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215254/school_4_wosp9g.webp", title: "Future Generations" }
];

const TeamWahidpurPage: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  return (
    <div className="bg-background-light">
      {/* Header */}
      <header className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            alt="Large group of smiling volunteers in green vests"
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dossfwjtw/image/upload/v1772215031/team_wahedpur_3_un9obu.jpg"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 header-light-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg">
              Team Wahedpur
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
              The beating heart of our community, driven by passion and united by a desire to serve.
            </p>
          </motion.div>
        </div>
      </header>

      {/* About Team Section */}
      <section className="py-24 bg-background-light relative overflow-hidden" id="about-team">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-light hidden lg:block -skew-x-12 translate-x-32 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary-dark rounded-tl-3xl z-0 opacity-30"></div>
                <span className="text-primary-dark font-bold tracking-widest uppercase text-xs mb-2 block">Our Strength</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
                  Our Volunteer <span className="text-primary-dark">Team</span>
                </h2>
              </div>
              <div className="prose prose-lg text-gray-600 leading-relaxed font-normal">
                <p className="mb-4">
                  Team Wahedpur is more than just a group of individuals; it is a movement. Comprising over 100 passionate members from diverse backgrounds—students, teachers, professionals, and local artisans—we are united by a single purpose: to uplift our village.
                </p>
                <p className="mb-6">
                  Each member brings unique skills and perspectives, yet all share the same commitment to service. Whether it's organizing health camps, distributing educational materials, or building essential infrastructure, our volunteers are on the ground, making a tangible difference every single day.
                </p>
                <p>
                  They are the ambassadors of hope, embodying the spirit of selflessness. Their tireless dedication ensures that no call for help goes unanswered and that the vision of the Iftekhar Ahmed Foundation is translated into real-world impact.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2 relative group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-primary-dark rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/5] bg-gray-100">
                <img
                  alt="Volunteer helping a child"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  src="https://res.cloudinary.com/dossfwjtw/image/upload/v1772215208/iftekhar_ahmed_and_lamima_g1pwde.jpg"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-rich/60 to-transparent opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spirit of Service Section */}
      <section className="py-24 vibrant-green-gradient text-white relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">The Spirit of Service</h2>
            <div className="w-16 h-1.5 bg-white/30 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-center">
             {[
               { icon: 'groups', title: 'Unity', text: 'Working together as one family, putting collective good above individual interest to achieve extraordinary results.' },
               { icon: 'volunteer_activism', title: 'Compassion', text: 'Driven by deep empathy, we listen to the silent struggles of our neighbors and respond with open hearts.' },
               { icon: 'psychology_alt', title: 'Dedication', text: 'Unwavering commitment to the cause, ensuring consistency and reliability in every project we undertake.' }
             ].map((item, index) => (
                <motion.div 
                    key={index}
                    className="flex flex-col items-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                        <span className="material-icons text-4xl text-white">{item.icon}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                    <p className="text-lg text-gray-100 font-light leading-relaxed">{item.text}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-surface-light" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-primary-dark font-bold tracking-widest uppercase text-xs">Gallery</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-gray-900">Volunteers in Action</h2>
            </div>
            <p className="text-gray-600 max-w-md text-sm">Snapshots of our dedicated team during community work, meetings, and awareness campaigns.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamGalleryImages.map((img, i) => (
                <div 
                    key={i}
                    className="relative rounded-2xl overflow-hidden cursor-pointer bg-gray-100 aspect-[4/3] group"
                    onClick={() => setLightboxIndex(i)}
                >
                    <img 
                        alt={img.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        src={img.src} 
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          >
            {/* Exit Button */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
            >
              <span className="material-icons text-4xl">close</span>
            </button>

            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center w-full max-h-[80vh] relative">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={lightboxIndex}
                        src={teamGalleryImages[lightboxIndex].src}
                        alt={teamGalleryImages[lightboxIndex].title}
                        className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </AnimatePresence>
            </div>

            {/* Thumbnails */}
            <div className="h-24 w-full max-w-4xl mt-6 flex items-center justify-center gap-3 overflow-x-auto px-4 py-2">
                {teamGalleryImages.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex(idx);
                        }}
                        className={`relative h-16 w-24 flex-shrink-0 rounded-md overflow-hidden transition-all duration-300 ${
                            lightboxIndex === idx ? 'ring-2 ring-primary scale-110 opacity-100' : 'opacity-50 hover:opacity-80'
                        }`}
                    >
                        <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Join Us Section */}
      <section className="py-24 bg-surface-light relative overflow-hidden" id="join-us">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-dark via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="bg-emerald-rich rounded-3xl p-10 md:p-16 shadow-2xl text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            <span className="inline-block py-1 px-3 rounded bg-primary text-emerald-rich text-xs font-bold uppercase tracking-wider mb-6 relative z-10">Join the Movement</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 relative z-10">
              Become a Volunteer
            </h2>
            <p className="text-gray-200 mb-8 text-lg font-normal max-w-2xl mx-auto relative z-10">
              Every project completed and every life touched is a testament to the dedication of Team Wahedpur. Join our movement today.
            </p>
            <div className="bg-emerald-800/50 border border-emerald-700/50 rounded-xl p-6 max-w-md mx-auto mb-8 relative z-10 backdrop-blur-sm">
              <p className="text-gray-300 text-sm font-medium mb-2">Send your CV to</p>
              <p className="text-xl font-bold text-white">example@gmail.com</p>
            </div>
            <div className="flex justify-center relative z-10">
              <a className="px-10 py-4 rounded-xl bg-primary hover:bg-white hover:text-emerald-rich text-surface-dark font-bold text-lg transition-all shadow-lg active:scale-95 flex items-center gap-2" href="mailto:example@gmail.com">
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamWahidpurPage;