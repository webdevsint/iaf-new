import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OurStoryPage from './components/OurStoryPage';
import TeamWahidpurPage from './components/TeamWahidpurPage';
import LeadershipPage from './components/LeadershipPage';
import ContactPage from './components/ContactPage';
import ContactSuccessPage from './components/ContactSuccessPage';
import DonatePage from './components/DonatePage';
import DonationConfirmationPage from './components/DonationConfirmationPage';
import ProgramsPage from './components/ProgramsPage';
import ProgramDetail from './components/ProgramDetail';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer';

// Helper component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If no hash, scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is a hash, attempt to scroll to the element
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Retry for dynamic content
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/programs/:programId" element={<ProgramDetail />} />
            <Route path="/team-wahedpur" element={<TeamWahidpurPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact-success" element={<ContactSuccessPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/donation-confirmation" element={<DonationConfirmationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;