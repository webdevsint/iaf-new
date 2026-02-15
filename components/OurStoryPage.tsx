import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OurStoryPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Header */}
      <header className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Rural community landscape in Bangladesh" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2ZocsucTG8lGS3oJjEQ1NwFUBu0tb1dp-f6PgmrLuWR6TN-2yfz_uhEC8jWPNvhnDxL6mT6vgUmML5cbgi5zbmmbdZrkaTc7xO9rEhW5qV4BWZ1kP-rRkXJtMpExGCUQGB-_gB9LVpvZCdKK_Eb4iBJzTptJtmIq9iYglyPu2sJfYMzfFgOduAXG1G0enjpE65rSKWqwr2wjrqrKWUesuN-zIlzeJ9pCjuF149wPP-CIFXVnEcqQYEQgDnhvP2DLtLYJmiC2jxIFY"
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
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
              Tracing the journey from a single act of kindness to a movement transforming lives in Wahedpur.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Origin Section */}
      <section className="py-24 bg-background-light relative overflow-hidden" id="story">
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
                <span className="text-primary-dark font-bold tracking-widest uppercase text-xs mb-2 block">The Origins</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
                  Rooted in <span className="text-primary-dark">Compassion</span>
                </h2>
              </div>
              <div className="prose prose-lg text-gray-600 leading-relaxed font-normal">
                <p className="mb-4">
                  The Iftekhar Ahmed Foundation was born from a simple yet profound realization: that true progress begins when we lift up our neighbors. What started as a personal commitment by Iftekhar Ahmed to support struggling families in his hometown of Wahedpur has grown into a comprehensive platform for social change.
                </p>
                <p className="mb-6">
                  Growing up amidst the vibrant culture and challenges of rural Bangladesh, Iftekhar witnessed firsthand the resilience of his community, but also the systemic barriers preventing families from thriving. He vowed that success would not be a journey taken alone, but one shared with the village that raised him.
                </p>
                <p>
                  Since our inception, we have moved beyond simple aid to creating sustainable infrastructure, healthcare access, and educational opportunities, ensuring that Wahedpur isn't just surviving, but flourishing for generations to come.
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
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/5]">
                <img 
                  alt="Historic photo of early foundation work" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL1lWT2VasV0xgqnv-mcsr4oBpTA8kEmR062zXoGVAAOQWxBodYxFoaWhCzwAXVeDYV8ZkKdhHd4gnbMXnOOaGH0jzHKvMFMSoE-RimNwPSI4GIqMjSlpwy956hXOn-P9hKfKfLR9SB_hKyzwpYvrzM3tref3Lrsv4NE4cQoRZQ6-UzzTFoPZeRxGzNxOVcfj42sbeex9AxvHfgOSJbWFACeGgujlzY6VPhEqg5qUX-GUzxJuzuVyAO1_73HJjcuZteYjT0sTsgTZJ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-rich/60 to-transparent opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 vibrant-green-gradient text-white relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div 
              className="flex flex-col justify-center border-r border-white/20 pr-0 md:pr-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="material-icons text-5xl text-primary opacity-80">visibility</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold">Our Vision</h2>
              </div>
              <p className="text-lg md:text-xl text-gray-100 font-light leading-relaxed">
                "To envision a world where every individual in rural Bangladesh has equitable access to the resources needed to build a dignified, self-reliant, and prosperous life, free from the cycle of poverty."
              </p>
            </motion.div>
            <motion.div 
              className="flex flex-col justify-center pl-0 md:pl-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="material-icons text-5xl text-primary opacity-80">flag</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold">Our Mission</h2>
              </div>
              <p className="text-lg md:text-xl text-gray-100 font-light leading-relaxed">
                "Our mission is to empower the Wahedpur community through targeted initiatives in education, healthcare, and infrastructure. We act as a bridge between resources and need, fostering a culture of mutual support and sustainable development."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-surface-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-dark font-bold tracking-widest uppercase text-xs">Guiding Principles</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-gray-900">Our Core Values</h2>
            <div className="w-16 h-1.5 bg-primary-dark mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'favorite', title: 'Compassion', desc: 'We approach every challenge with empathy, understanding that behind every statistic is a human life deserving of care.' },
              { icon: 'verified_user', title: 'Integrity', desc: 'We operate with unwavering honesty, ensuring that our actions always align with our promises to the community.' },
              { icon: 'policy', title: 'Transparency', desc: 'Openness is our foundation. We maintain clear accountability in how resources are utilized for impact.' },
              { icon: 'diversity_3', title: 'Community Engagement', desc: 'We don\'t just work for the community; we work with them, listening to their voices to guide our path.' },
              { icon: 'eco', title: 'Sustainability', desc: 'We build solutions designed to last, creating long-term resilience rather than temporary fixes.' },
              { icon: 'handshake', title: 'Commitment', desc: 'Our dedication to Wahedpur is lifelong. We are steadfast in our promise to uplift every neighbor.' }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark mb-6">
                  <span className="material-icons">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background-light" id="moments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-primary-dark font-bold tracking-widest uppercase text-xs">Gallery</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold text-gray-900">Moments from Wahedpur</h2>
            </div>
            <p className="text-gray-600 max-w-md text-sm">Snapshots of our volunteers, community projects, and the beautiful landscape we call home.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group"
            >
              <img alt="Community gathering" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRxK6-s9ivH31g5To2BeAhHXc4-pv3XZN402tDp8UVo-h-i9bM3tWzdNa9PQUy8XLM2D1b0AjPfQOGcj2YF9AIfQERp0xSbck7TlbmztvWcur_navGw4QnofsUPo21u8kT9bhMEKlR-5why2vP6d22yXvHt_xZ7IMH9cBRb1PHkWNT6OU2xTLeUk3PzW_wpmWEE0WCRvl0SFGXX70oZHihF_38HB0djmck0PzGaXaD6nwfojCnbZ6YFc3FKEG_dHQ5rkyaQ_CApvzD"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-bold text-lg">Community Education</h4>
                  <p className="text-sm opacity-90">Building bright futures together</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img alt="Volunteer team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYgzRigJjWAm5F3-fMhlmsj2_9NwVP2xaLQcGyYh_9IDNV7mutp2kqOdGLqvEMDqPWAFaUBJrohGAAo_nzWDznoJfxKOHH7MriuauxMi0Huk6aMgsjLkHgxmTv8xLyVCf5rsvIiO6xDSsFDd_RK0X5sfyRqP1pFYSG30O085aBWKKvj5TR-ecqxzxqzlkzlfxAJBqUY4-vNJ2zJ4judaRQP-usS0EU5TyGOk1uWwpuZmeJdbDIbGLxjxFwCydGICCMb0_ns7U3mocL"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-base">Infrastructure</h4>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img alt="Medical camp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZM86JEBr-b7uEyp85Bv_KyNxf44vaH1531-wP5nsQd43zDGbFbZwnlHaevanDwhEKO48b2NIFONoj6dXlDOr1GwUECT73pY3aXxiiSyllvAWZpvqxiyvV7q6vW9t0kwGLjFWYX2U6n2Tp8OMjna0wpWB9f93YIxsEx2pEuBTN0i3evJxyqPOzYETZegcp4Ili94noenXEp1rEUULs70YEA7wMF7bWavN0mha4s5L_PftU0D_quqOWViRFY47MxYMwLuX-r6RzjdcS"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-base">Healthcare Access</h4>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img alt="Empowerment workshop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyZKxED9S1Iye51yPmzGg2_KLJiK9exwoylYNSnKlsH4WQF2O5RTKmnRpY9gxXIFr9H5kW_pcVf79broNJHTe9JwbufJg1q0VxhJQqg_qbGLVfhZ03hlqxs0xv88m4ImDuBpRvFmEhzTL4tN424WvjQ_9_67OAIluPHwlY6uCOAASKwEAFn4y4TABeA1R5zR5cQALPvHXXGBQUfoAcpnvrtaxexbCSZUcThc7IhlxLrX3lu3Fo-WRZOnJ_vfzS4PA3Jkj9pZxM899r"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-base">Empowerment</h4>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 relative rounded-2xl overflow-hidden group"
            >
              <img alt="Wahedpur landscape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPpUcPeTzJFJ1slp9CeShd-9ahfElTBWsVm7FdRzLDYhHSOe1mI3I7qiatIsDRz1RCCSIwr1vBQPKT5ITz1kDa8IGyTBZzIX_uKuiBqNOknRC-RiquEX-lzCvx-FG_QpjKMF6_AsWAlytX6xF7BRSCxR8FJpxBHjUZUdzEt5qrwZ_2T1kWezJ0W5MMNZvGBRBEXxMmujnqmyueEMZtLD6TepzFxAzy8H2TZx3x1q8SuZtxoPlZKLphHsVLtSannezyeui1V2YfbNwM"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-bold text-lg">Wahedpur Village</h4>
                  <p className="text-sm opacity-90">The heart of our mission</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-light relative overflow-hidden" id="contact">
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
            <span className="inline-block py-1 px-3 rounded bg-primary text-emerald-rich text-xs font-bold uppercase tracking-wider mb-6 relative z-10">Get Involved</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 relative z-10">
              Be Part of Our Story
            </h2>
            <p className="text-gray-200 mb-10 text-lg font-normal max-w-2xl mx-auto leading-relaxed relative z-10">
              Every chapter of our success is written by people like you. Join Iftekhar Ahmed and our team in building a better tomorrow for Wahedpur.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
                <Link to="/donate" className="px-8 py-4 rounded-xl bg-primary hover:bg-white hover:text-emerald-rich text-surface-dark font-bold text-lg transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
                    Donate Now
                </Link>
                <Link to="/contact" className="px-8 py-4 rounded-xl bg-transparent border-2 border-white/30 hover:bg-white hover:text-emerald-rich text-white font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                    Contact Us
                </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;