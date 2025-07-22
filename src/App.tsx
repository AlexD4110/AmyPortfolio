import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/layout-components';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ExperiencePage from './pages/ExperiencePage';
import Information from './pages/Information';
import Education from './pages/Education';
import Certifications from './pages/Certifications';
import Volunteer from './pages/Volunteer';
import TakedaInternship from './pages/experience/takeda';
import MedicineShoppe from './pages/experience/medicine';
import HartfordHospital from './pages/experience/hartford';
import CVSPharmacy from './pages/experience/cvs';
import BoehringerIngelheim from './pages/experience/boehringer';
import Contact from './pages/Contact';
import Leadership from './pages/Leadership';
//import Presentations from './pages/Presentations';
import NflnProgram from './pages/NflnProgram'; 
import Boehringer from './pages/Boehringer';
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
        <AppRoutes />
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;


