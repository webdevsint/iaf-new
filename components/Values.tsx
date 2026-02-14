import React from 'react';
import { motion } from 'framer-motion';

const ValueItem: React.FC<{ icon: string; title: string; text: string; rotateClass: string; delay: number }> = ({ icon, title, text, rotateClass, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col items-center text-center p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20"
  >
    <div className={`w-16 h-16 rounded-2xl bg-white/10 border border-primary/30 flex items-center justify-center mb-8 text-primary ${rotateClass} hover:rotate-0 transition-transform`}>
      <span className="material-icons text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold text-white mb-4 font-display">{title}</h3>
    <p className="text-gray-200 text-sm leading-relaxed font-normal">
      {text}
    </p>
  </motion.div>
);

const Values: React.FC = () => {
  return (
    <section className="py-24 vibrant-green-gradient relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Driven by Values</h2>
          <p className="text-gray-100 text-lg font-normal">
            Under Iftekhar Ahmed's current leadership, our work is guided by principles that ensure every effort goes exactly where it is needed most.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ValueItem
            icon="volunteer_activism"
            title="Compassion"
            text="We believe that empathy is the root of all change. We treat every individual with dignity and respect as guided by our Chairman."
            rotateClass="rotate-3"
            delay={0}
          />
          <ValueItem
            icon="verified"
            title="Integrity"
            text="We hold ourselves to the highest ethical standards, ensuring that our actions match the promises made by our founder."
            rotateClass="-rotate-3"
            delay={0.1}
          />
          <ValueItem
            icon="visibility"
            title="Transparency"
            text="Trust is earned through action. We maintain open communication about how our community programs are run."
            rotateClass="rotate-3"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default Values;