import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const programs = [
  {
    id: "wahedpur-high-school",
    title: "Wahedpur Iftekhar Ahmed High School",
    description:
      "Empowering local youth with quality secondary education, modern facilities, and a dedicated faculty to shape the leaders of tomorrow.",
    image: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215250/school_1_wkwgxh.webp",
  },
  {
    id: "nurun-nahar-library",
    title: "Nurun Nahar Library",
    description:
      "A community sanctuary for knowledge, offering a vast collection of books and digital resources to foster a culture of lifelong learning.",
    image: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215213/library_1_nvtmxf.webp",
  },
  {
    id: "green-wahedpur",
    title: "Green Wahedpur Initiative",
    description:
      "Promoting environmental stewardship through tree planting drives, sustainable farming workshops, and eco-friendly community practices.",
    image: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215232/green_wahedpur_1_fh1urv.webp",
  },
  {
    id: "village-infrastructure",
    title: "Village Infrastructure Development",
    description:
      "Enhancing connectivity and safety by paving roads, repairing bridges, and installing solar streetlights throughout the village.",
    image: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215224/infrastructure_1_jsdlbo.webp",
  },
  {
    id: "deep-tubewells",
    title: "Deep Tubewells for Safe Drinking Water",
    description:
      "Ensuring access to arsenic-free, clean drinking water for every household to combat waterborne diseases and improve public health.",
    image: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215234/rikshaw_and_tubewell_1_jweuta.webp",
  },
  {
    id: "c-section-support",
    title: "C-Section Delivery Support Program",
    description:
      "Providing financial and logistical assistance for expecting mothers requiring C-sections, ensuring safe deliveries and maternal well-being.",
    image: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215256/c_section_1_lnuiby.jpg",
  },
  {
    id: "housing-repair",
    title: "Housing Construction & Repair Program",
    description:
      "Building safe, resilient homes for the most vulnerable families, protecting them from the elements and restoring dignity.",
    image: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215240/housing_1_mn5cn2.webp",
  },
  {
    id: "auto-rickshaw",
    title: "Auto-Rickshaw Livelihood Program",
    description:
      "Creating sustainable income opportunities by providing auto-rickshaws to unemployed youth, fostering economic independence.",
    image: "https://res.cloudinary.com/dossfwjtw/image/upload/v1772215238/rikshaw_and_tubewell_2_c6vyph.webp",
  },
];

const ProgramsPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      <header className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img alt="Development project in Wahedpur" className="w-full h-full object-cover" src="https://res.cloudinary.com/dossfwjtw/image/upload/v1772215235/team_wahedpur_2_a5q6je.webp" loading="lazy" decoding="async" />
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
              We take a multi-faceted approach to uplifting Wahedpur, focusing
              on sustainable education, infrastructure, healthcare, and economic
              empowerment.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="py-24 bg-surface-light" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-dark font-bold tracking-widest uppercase text-xs">
              Our Initiatives
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-gray-900">
              Core Areas of Impact
            </h2>
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
                <Link
                  to={`/programs/${program.id}`}
                  className="flex flex-col md:flex-row w-full h-full"
                >
                  <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden bg-gray-100">
                    <img alt={program.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={program.image} loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold font-display text-gray-900 mb-4">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                    <span className="text-primary-dark font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all text-left">
                      View Details{" "}
                      <span className="material-icons text-base">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="h-80 w-full relative grayscale hover:grayscale-0 transition-all duration-1000 bg-gray-100"
        id="team-wahedpur"
      >
        <img alt="Map context" className="w-full h-full object-cover" src="https://res.cloudinary.com/dossfwjtw/image/upload/v1772215229/green_wahedpur_3_ootnpd.webp" loading="lazy" decoding="async" />
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-rich/30">
          <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center shadow-2xl">
            <p className="text-primary-dark text-xs uppercase font-bold tracking-widest mb-2">
              Our Roots
            </p>
            <h3 className="text-2xl font-display font-bold text-gray-900">
              Wahedpur, Bangladesh
            </h3>
          </div>
        </div>
      </section>

      <section
        className="py-24 bg-background-light relative overflow-hidden"
        id="contact"
      >
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
            <span className="inline-block py-1 px-3 rounded bg-primary text-emerald-rich text-xs font-bold uppercase tracking-wider mb-6 relative z-10">
              Get Involved
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 relative z-10">
              Be the Change You Wish to See
            </h2>
            <p className="text-gray-200 mb-10 text-lg font-normal max-w-2xl mx-auto leading-relaxed relative z-10">
              Your contribution can light up a home, educate a child, or save a
              life. Join Iftekhar Ahmed and our team in building a better
              tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
              <Link
                to="/donate"
                className="px-8 py-4 rounded-xl bg-primary hover:bg-white hover:text-emerald-rich text-surface-dark font-bold text-lg transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                Donate Now
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-transparent border-2 border-white/30 hover:bg-white hover:text-emerald-rich text-white font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-2"
              >
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
