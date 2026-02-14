import React from 'react';
import Hero from './Hero';
import Story from './Story';
import Stats from './Stats';
import Programs from './Programs';
import Values from './Values';
import MapSection from './MapSection';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Story />
      <Stats />
      <Programs />
      <Values />
      <MapSection />
      <Contact />
    </>
  );
};

export default Home;