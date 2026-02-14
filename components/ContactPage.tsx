import React from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-background-light flex flex-col min-h-screen">
      {/* Header */}
      <header className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 blur-[2px]">
          <img
            alt="Soft focus landscape of Wahidpur"
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2ZocsucTG8lGS3oJjEQ1NwFUBu0tb1dp-f6PgmrLuWR6TN-2yfz_uhEC8jWPNvhnDxL6mT6vgUmML5cbgi5zbmmbdZrkaTc7xO9rEhW5qV4BWZ1kP-rRkXJtMpExGCUQGB-_gB9LVpvZCdKK_Eb4iBJzTptJtmIq9iYglyPu2sJfYMzfFgOduAXG1G0enjpE65rSKWqwr2wjrqrKWUesuN-zIlzeJ9pCjuF149wPP-CIFXVnEcqQYEQgDnhvP2DLtLYJmiC2jxIFY"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 header-light-gradient"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-lg">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-md">
              We'd love to hear from you. Whether you have a question about our programs, want to volunteer, or just want to say hello.
            </p>
          </motion.div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-24 bg-background-light relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary-dark font-bold tracking-widest uppercase text-xs mb-2 block">Connect With Us</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  Reach <span className="text-primary-dark">Out</span>
                </h2>
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface-light border border-gray-100 flex items-center justify-center text-primary-dark shrink-0">
                      <span className="material-icons">location_on</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-gray-900 mb-2">Our Headquarters</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Wahidpur Village,<br />
                        Debidwar Upazila,<br />
                        Cumilla District, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface-light border border-gray-100 flex items-center justify-center text-primary-dark shrink-0">
                      <span className="material-icons">mail</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-gray-900 mb-2">Email Us</h3>
                      <p className="text-gray-600 leading-relaxed mb-1">General Inquiries:</p>
                      <a className="text-primary-dark font-medium hover:underline text-lg" href="mailto:info@iftekharahmedfoundation.org">info@iftekharahmedfoundation.org</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface-light border border-gray-100 flex items-center justify-center text-primary-dark shrink-0">
                      <span className="material-icons">call</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Mon-Fri from 9am to 5pm (BST)<br />
                        <span className="font-medium text-gray-900">+880 1712 345678</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-16 p-8 bg-surface-light rounded-2xl border border-gray-100">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                    <span className="material-icons text-primary-dark">volunteer_activism</span> Direct Support
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Interested in making a donation or volunteering for a specific project? Please reach out directly to our coordination team.
                  </p>
                  <a className="inline-flex items-center text-primary-dark font-bold text-sm hover:text-emerald-rich transition-colors" href="mailto:support@iftekharahmedfoundation.org">
                    Contact Support Team <span className="material-icons text-sm ml-1">arrow_forward</span>
                  </a>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-100 border border-gray-50"
              >
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Full Name</label>
                      <input className="w-full px-4 py-3 rounded-lg bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary focus:bg-white transition-colors placeholder-gray-400 text-gray-900" id="name" placeholder="John Doe" type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email Address</label>
                      <input className="w-full px-4 py-3 rounded-lg bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary focus:bg-white transition-colors placeholder-gray-400 text-gray-900" id="email" placeholder="john@example.com" type="email" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="subject">Subject</label>
                    <input className="w-full px-4 py-3 rounded-lg bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary focus:bg-white transition-colors placeholder-gray-400 text-gray-900" id="subject" placeholder="How can we help?" type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
                    <textarea className="w-full px-4 py-3 rounded-lg bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary focus:bg-white transition-colors placeholder-gray-400 text-gray-900 resize-none" id="message" placeholder="Write your message here..." rows={5}></textarea>
                  </div>
                  <button className="w-full py-4 rounded-xl bg-primary hover:bg-primary-dark text-background-dark font-bold text-lg transition-all hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 group" type="button">
                    Send Message
                    <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">send</span>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full h-[450px] bg-gray-200 relative map-container border-t border-gray-200">
          <iframe
            allowFullScreen
            height="100%"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.823907722744!2d90.9856543153597!3d23.60539198466105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37546f3333333333%3A0x1234567890abcdef!2sDebidwar%2C%20Comilla!5e0!3m2!1sen!2sbd!4v1625641258452!5m2!1sen!2sbd"
            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
            width="100%"
            title="Location Map"
          >
          </iframe>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 flex items-center gap-2">
            <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-gray-800">Located in Wahidpur, Debidwar</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;