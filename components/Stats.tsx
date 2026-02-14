import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '12+', label: 'Years Active' },
    { value: '5k+', label: 'Lives Impacted' },
    { value: '150+', label: 'Volunteers' },
    { value: '10+', label: 'Schools Built' },
  ];

  return (
    <section className="py-20 vibrant-green-gradient border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-display">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/70 font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;