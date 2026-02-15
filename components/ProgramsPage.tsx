import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const programs = [
  {
    id: "wahedpur-high-school",
    title: "Wahedpur Iftekhar Ahmed High School",
    description: "Empowering local youth with quality secondary education, modern facilities, and a dedicated faculty to shape the leaders of tomorrow.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRxK6-s9ivH31g5To2BeAhHXc4-pv3XZN402tDp8UVo-h-i9bM3tWzdNa9PQUy8XLM2D1b0AjPfQOGcj2YF9AIfQERp0xSbck7TlbmztvWcur_navGw4QnofsUPo21u8kT9bhMEKlR-5why2vP6d22yXvHt_xZ7IMH9cBRb1PHkWNT6OU2xTLeUk3PzW_wpmWEE0WCRvl0SFGXX70oZHihF_38HB0djmck0PzGaXaD6nwfojCnbZ6YFc3FKEG_dHQ5rkyaQ_CApvzD",
  },
  {
    id: "nurun-nahar-library",
    title: "Nurun Nahar Library",
    description: "A community sanctuary for knowledge, offering a vast collection of books and digital resources to foster a culture of lifelong learning.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL1lWT2VasV0xgqnv-mcsr4oBpTA8kEmR062zXoGVAAOQWxBodYxFoaWhCzwAXVeDYV8ZkKdhHd4gnbMXnOOaGH0jzHKvMFMSoE-RimNwPSI4GIqMjSlpwy956hXOn-P9hKfKfLR9SB_hKyzwpYvrzM3tref3Lrsv4NE4cQoRZQ6-UzzTFoPZeRxGzNxOVcfj42sbeex9AxvHfgOSJbWFACeGgujlzY6VPhEqg5qUX-GUzxJuzuVyAO1_73HJjcuZteYjT0sTsgTZJ",
  },
  {
    id: "green-wahedpur",
    title: "Green Wahedpur Initiative",
    description: "Promoting environmental stewardship through tree planting drives, sustainable farming workshops, and eco-friendly community practices.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPpUcPeTzJFJ1slp9CeShd-9ahfElTBWsVm7FdRzLDYhHSOe1mI3I7qiatIsDRz1RCCSIwr1vBQPKT5ITz1kDa8IGyTBZzIX_uKuiBqNOknRC-RiquEX-lzCvx-FG_QpjKMF6_AsWAlytX6xF7BRSCxR8FJpxBHjUZUdzEt5qrwZ_2T1kWezJ0W5MMNZvGBRBEXxMmujnqmyueEMZtLD6TepzFxAzy8H2TZx3x1q8SuZtxoPlZKLphHsVLtSannezyeui1V2YfbNwM",
  },
  {
    id: "village-infrastructure",
    title: "Village Infrastructure Development",
    description: "Enhancing connectivity and safety by paving roads, repairing bridges, and installing solar streetlights throughout the village.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYgzRigJjWAm5F3-fMhlmsj2_9NwVP2xaLQcGyYh_9IDNV7mutp2kqOdGLqvEMDqPWAFaUBJrohGAAo_nzWDznoJfxKOHH7MriuauxMi0Huk6aMgsjLkHgxmTv8xLyVCf5rsvIiO6xDSsFDd_RK0X5sfyRqP1pFYSG30O085aBWKKvj5TR-ecqxzxqzlkzlfxAJBqUY4-vNJ2zJ4judaRQP-usS0EU5TyGOk1uWwpuZmeJdbDIbGLxjxFwCydGICCMb0_ns7U3mocL",
  },
  {
    id: "deep-tubewells",
    title: "Deep Tubewells for Safe Drinking Water",
    description: "Ensuring access to arsenic-free, clean drinking water for every household to combat waterborne diseases and improve public health.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZM86JEBr-b7uEyp85Bv_KyNxf44vaH1531-wP5nsQd43zDGbFbZwnlHaevanDwhEKO48b2NIFONoj6dXlDOr1GwUECT73pY3aXxiiSyllvAWZpvqxiyvV7q6vW9t0kwGLjFWYX2U6n2Tp8OMjna0wpWB9f93YIxsEx2pEuBTN0i3evJxyqPOzYETZegcp4Ili94noenXEp1rEUULs70YEA7wMF7bWavN0mha4s5L_PftU0D_quqOWViRFY47MxYMwLuX-r6RzjdcS",
  },
  {
    id: "c-section-support",
    title: "C-Section Delivery Support Program",
    description: "Providing financial and logistical assistance for expecting mothers requiring C-sections, ensuring safe deliveries and maternal well-being.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZM86JEBr-b7uEyp85Bv_KyNxf44vaH1531-wP5nsQd43zDGbFbZwnlHaevanDwhEKO48b2NIFONoj6dXlDOr1GwUECT73pY3aXxiiSyllvAWZpvqxiyvV7q6vW9t0kwGLjFWYX2U6n2Tp8OMjna0wpWB9f93YIxsEx2pEuBTN0i3evJxyqPOzYETZegcp4Ili94noenXEp1rEUULs70YEA7wMF7bWavN0mha4s5L_PftU0D_quqOWViRFY47MxYMwLuX-r6RzjdcS",
  },
  {
    id: "housing-repair",
    title: "Housing Construction & Repair Program",
    description: "Building safe, resilient homes for the most vulnerable families, protecting them from the elements and restoring dignity.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYgzRigJjWAm5F3-fMhlmsj2_9NwVP2xaLQcGyYh_9IDNV7mutp2kqOdGLqvEMDqPWAFaUBJrohGAAo_nzWDznoJfxKOHH7MriuauxMi0Huk6aMgsjLkHgxmTv8xLyVCf5rsvIiO6xDSsFDd_RK0X5sfyRqP1pFYSG30O085aBWKKvj5TR-ecqxzxqzlkzlfxAJBqUY4-vNJ2zJ4judaRQP-usS0EU5TyGOk1uWwpuZmeJdbDIbGLxjxFwCydGICCMb0_ns7U3mocL",
  },
  {
    id: "auto-rickshaw",
    title: "Auto-Rickshaw Livelihood Program",
    description: "Creating sustainable income opportunities by providing auto-rickshaws to unemployed youth, fostering economic independence.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyZKxED9S1Iye51yPmzGg2_KLJiK9exwoylYNSnKlsH4WQF2O5RTKmnRpY9gxXIFr9H5kW_pcVf79broNJHTe9JwbufJg1q0VxhJQqg_qbGLVfhZ03hlqxs0xv88m4ImDuBpRvFmEhzTL4tN424WvjQ_9_67OAIluPHwlY6uCOAASKwEAFn4y4TABeA1R5zR5cQALPvHXXGBQUfoAcpnvrtaxexbCSZUcThc7IhlxLrX3lu3Fo-WRZOnJ_vfzS4PA3Jkj9pZxM899r",
  }
];

const ProgramsPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      <header className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img alt="Development project in Wahedpur" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2ZocsucTG8lGS3oJjEQ1NwFUBu0tb1dp-f6PgmrLuWR6TN-2yfz_uhEC8jWPNvhnDxL6mT6vgUmML5cbgi5zbmmbdZrkaTc7xO9rEhW5qV4BWZ1kP-rRkXJtMpExGCUQGB-_gB9LVpvZCdKK_Eb4iBJzTptJtmIq9iYglyPu2sJfYMzfFgOduAXG1G0enjpE65rSKWqwr2wjrqrKWUesuN-zIlzeJ9pCjuF149wPP-CIFXVnEcqQYEQgDnhvP2DLtLYJmiC2jxIFY" />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 header-light-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg">
                Our Programs
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
                We take a multi-faceted approach to uplifting Wahedpur, focusing on sustainable education, infrastructure, healthcare, and economic empowerment.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="py-24 bg-surface-light" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-primary-dark font-bold tracking-widest uppercase text-xs">Our Initiatives</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-gray-900">Core Areas of Impact</h2>
                <div className="w-16 h-1.5 bg-primary-dark mx-auto mt-6 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {programs.map((program, index) => (
                    <motion.div 
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row group h-full cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link to={`/programs/${program.id}`} className="flex flex-col md:flex-row w-full h-full">
                            <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                                <img alt={program.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={program.image} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                            </div>
                            <div className="md:w-3/5 p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold font-display text-gray-900 mb-4">{program.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {program.description}
                                    </p>
                                </div>
                                <span className="text-primary-dark font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all text-left">
                                    View Details <span className="material-icons text-base">arrow_forward</span>
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <section className="h-80 w-full relative grayscale hover:grayscale-0 transition-all duration-1000" id="team-wahedpur">
        <img alt="Map context" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPpUcPeTzJFJ1slp9CeShd-9ahfElTBWsVm7FdRzLDYhHSOe1mI3I7qiatIsDRz1RCCSIwr1vBQPKT5ITz1kDa8IGyTBZzIX_uKuiBqNOknRC-RiquEX-lzCvx-FG_QpjKMF6_AsWAlytX6xF7BRSCxR8FJpxBHjUZUdzEt5qrwZ_2T1kWezJ0W5MMNZvGBRBEXxMmujnqmyueEMZtLD6TepzFxAzy8H2TZx3x1q8SuZtxoPlZKLphHsVLtSannezyeui1V2YfbNwM" />
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-rich/30">
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center shadow-2xl">
                <p className="text-primary-dark text-xs uppercase font-bold tracking-widest mb-2">Our Roots</p>
                <h3 className="text-2xl font-display font-bold text-gray-900">Wahedpur, Bangladesh</h3>
            </div>
        </div>
      </section>

      <section className="py-24 bg-background-light relative overflow-hidden" id="contact">
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
    </div>
  );
};

export default ProgramsPage;