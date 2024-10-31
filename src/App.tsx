import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Contact from './pages/Contact';
import Leadership from './pages/Leadership';
import Presentations from './pages/Presentations';
import './App.css';
import './assets/fonts.css';


const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/experience/takeda" element={<TakedaInternship />} />
            <Route path="/experience/medicine" element={<MedicineShoppe />} />
            <Route path="/experience/hartford" element={<HartfordHospital />} />
            <Route path="/experience/cvs" element={<CVSPharmacy />} />
            <Route path="/information" element={<Information />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/presentations" element={<Presentations />} />
            <Route path="/leadership" element={<Leadership />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
