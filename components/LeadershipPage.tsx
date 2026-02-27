import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LeadershipPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Iftekhar Ahmed",
      role: "Founder",
      description: "The driving force behind the foundation's mission, dedicated to uplifting his hometown through sustainable development and compassion.",
      image: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215205/iftekhar_ahmed_xo91kl.jpg"
    },
    {
      name: "Lamima Anzum",
      role: "Co-founder & Lead Strategist",
      description: "Architecting the strategic roadmap for the foundation's programs, ensuring impactful and efficient execution of our vision.",
      image: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215208/iftekhar_ahmed_and_lamima_g1pwde.jpg"
    },
    {
      name: "Aanika Nawar",
      role: "Advisor",
      description: "Coordinating events and mobilizing resources to bring the foundation's programs to life within the community.",
      image: "https://placehold.co/400x400/064e3b/ffffff?text=AN"
    },
    {
      name: "Sadia Afrose Okasha",
      role: "Advisor",
      description: "Managing organizational logistics and ensuring seamless communication between team members and volunteers.",
      image: "https://placehold.co/400x400/064e3b/ffffff?text=SA"
    },
    {
      name: "Kazi Khorshed Alam",
      role: "Chief Operating Officer",
      description: "Overseeing daily operations and ensuring that our initiatives run smoothly and effectively on the ground in Wahedpur.",
      image: "https://placehold.co/400x400/064e3b/ffffff?text=KA"
    },
    {
      name: "Nakib Ahmed",
      role: "Business Development Manager",
      description: "Fostering partnerships and identifying growth opportunities to expand the foundation's reach and sustainability.",
      image: "https://placehold.co/400x400/064e3b/ffffff?text=NA"
    },
    {
      name: "Ridoy Khan",
      role: "Supervisor",
      description: "Directing field operations and ensuring project quality and adherence to our core values.",
      image: "https://placehold.co/400x400/064e3b/ffffff?text=RK"
    }
  ];

  return (
    <div className="bg-background-light">
      {/* Header */}
      <header className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Leadership discussion background" 
            className="w-full h-full object-cover" 
            src="https://res.cloudinary.com/dossfwjtw/image/upload/v1772215254/school_4_wosp9g.webp"
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
                Our Leadership
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
                The visionaries and strategists driving sustainable change and empowering the community of Wahedpur.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="py-24 bg-surface-light relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-gray-900">Meet the Team</h2>
                <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                {teamMembers.map((member, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group flex flex-col items-center p-8 text-center relative hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${index === teamMembers.length - 1 ? 'lg:col-start-2' : ''}`}
                    >
                        <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300 bg-gray-100">
                            <img alt={member.name} className="w-full h-full object-cover" src={member.image} loading="lazy" decoding="async" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-primary-dark font-display font-medium text-sm uppercase tracking-wide mb-4">{member.role}</p>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            {member.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-light relative overflow-hidden" id="join-mission">
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
                    Join Our Mission
                </h2>
                <p className="text-gray-200 mb-10 text-lg font-normal max-w-2xl mx-auto leading-relaxed relative z-10">
                    Our team is growing, and so is our impact. Help us write the next chapter for Wahedpur.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
                    <Link to="/contact" className="px-8 py-4 rounded-xl bg-primary hover:bg-white hover:text-emerald-rich text-surface-dark font-bold text-lg transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
                        Volunteer With Us
                    </Link>
                    <Link to="/contact" className="px-8 py-4 rounded-xl bg-transparent border-2 border-white/30 hover:bg-white hover:text-emerald-rich text-white font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                        Contact Leadership
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipPage;
