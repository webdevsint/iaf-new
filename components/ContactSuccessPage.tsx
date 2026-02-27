import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const ContactSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { success: boolean; name: string; subject: string; refId: string } | null;

  // Protect the route: if no success state, redirect to contact page
  useEffect(() => {
    if (!state?.success) {
      navigate('/contact', { replace: true });
    }
  }, [state, navigate]);

  // Prevent rendering if validation fails
  if (!state?.success) {
    return null;
  }

  return (
    <div className="bg-background-light flex flex-col min-h-screen">
      <header className="relative w-full h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Community in Wahidpur" 
            className="w-full h-full object-cover" 
            src="https://res.cloudinary.com/dossfwjtw/image/upload/v1772215254/school_4_wosp9g.webp"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 header-light-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-8 shadow-xl"
          >
            <span className="material-icons text-background-dark text-4xl">send</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Message Sent
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white font-medium max-w-2xl mx-auto drop-shadow-md"
          >
            Connecting communities, building futures.
          </motion.p>
        </div>
      </header>

      <main className="relative -mt-20 z-20 pb-24 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-gray-100 text-center">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">We've Received Your Inquiry</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
                Thank you for reaching out to us. We have received your message and our team will get back to you shortly.
              </p>
            </div>
            
            <div className="bg-surface-light rounded-2xl p-6 md:p-8 text-left border border-gray-100">
              <h3 className="text-sm font-bold text-primary-dark uppercase tracking-wider mb-6">Inquiry Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                  <span className="text-gray-500 font-medium">Name</span>
                  <span className="text-gray-900 font-bold">{state.name}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200/50">
                  <span className="text-gray-500 font-medium">Subject</span>
                  <span className="text-gray-900 font-medium">{state.subject}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-500 font-medium">Reference ID</span>
                  <span className="text-gray-900 font-mono text-sm uppercase">{state.refId}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <section className="py-20 bg-surface-light overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-primary-dark font-bold tracking-widest uppercase text-xs mb-3 block">Stay Connected</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">Explore our work while you wait</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            Discover the transformative projects happening right now in Wahidpur and learn about our mission to empower rural communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/programs" className="px-8 py-4 rounded-xl bg-primary hover:bg-primary-dark text-background-dark font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
              Explore Our Programs
            </Link>
            <Link to="/our-story" className="px-8 py-4 rounded-xl bg-white border border-gray-200 hover:border-primary-dark text-gray-900 font-bold text-lg transition-all shadow-sm hover:-translate-y-1">
              Read Our Story
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default ContactSuccessPage;