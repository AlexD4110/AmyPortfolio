import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/layout-components';
import HomePage from './pages/HomePage';
// Lazy load other pages for better performance
const About = React.lazy(() => import('./pages/About'));
const ExperiencePage = React.lazy(() => import('./pages/ExperiencePage'));
const Information = React.lazy(() => import('./pages/Information'));
const Education = React.lazy(() => import('./pages/Education'));
const Certifications = React.lazy(() => import('./pages/Certifications'));
const Volunteer = React.lazy(() => import('./pages/Volunteer'));
const TakedaInternship = React.lazy(() => import('./pages/experience/takeda'));
const MedicineShoppe = React.lazy(() => import('./pages/experience/medicine'));
const HartfordHospital = React.lazy(() => import('./pages/experience/hartford'));
const CVSPharmacy = React.lazy(() => import('./pages/experience/cvs'));
const BoehringerIngelheim = React.lazy(() => import('./pages/experience/boehringer'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Leadership = React.lazy(() => import('./pages/Leadership'));
const NflnProgram = React.lazy(() => import('./pages/NflnProgram'));
const Boehringer = React.lazy(() => import('./pages/Boehringer'));
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition"
import './App.css';
import './assets/fonts.css';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/experience" element={<PageTransition><ExperiencePage /></PageTransition>} />
        <Route path="/experience/takeda" element={<PageTransition><TakedaInternship /></PageTransition>} />
        <Route path="/experience/medicine" element={<PageTransition><MedicineShoppe /></PageTransition>} />
        <Route path="/experience/hartford" element={<PageTransition><HartfordHospital /></PageTransition>} />
        <Route path="/experience/cvs" element={<PageTransition><CVSPharmacy /></PageTransition>} />
        <Route path="/experience/boehringer" element={<PageTransition><BoehringerIngelheim /></PageTransition>} />
        <Route path="/information" element={<PageTransition><Information /></PageTransition>} />
        <Route path="/education" element={<PageTransition><Education /></PageTransition>} />
        <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
        <Route path="/volunteer" element={<PageTransition><Volunteer /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/leadership" element={<PageTransition><Leadership /></PageTransition>} />
        <Route path="/nfln-program" element={<PageTransition><NflnProgram /></PageTransition>} />
        <Route path="/boehringer" element={<PageTransition><Boehringer /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <AppRoutes />
        </React.Suspense>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;


