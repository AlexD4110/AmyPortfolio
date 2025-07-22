// src/pages/ExperiencePage.tsx

'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import ExperienceCard from '../components/ExperienceCard';
import { ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: 'Boehringer Ingelheim',
    role: 'APPE Rotation',
    duration: 'June 2025 - August 2025',
    image: '/BI.png',
    link: '/experience/boehringer',
    location: 'Boehringer Ingeleheim US Headquarters',
    manager: 'Manager: Roy Walton',
    responsibilities: [
      'Contributed to pharmaceutical research and development initiatives',
      'Collaborated with cross-functional teams on patient-centered solutions',
      'Supported clinical and regulatory activities',
      'Participated in data analysis and reporting',
      'Assisted with market research and competitive analysis',
    ],
  },
  {
    title: 'Takeda Pharmaceuticals',
    role: 'Intern, Global Medical/Marketed Products Development',
    duration: 'May 2024 – August 2024',
    image: '/takeda.svg',
    link: '/experience/takeda',
    location: 'Boston, MA',
    manager: 'Manager: Vivek Deore',
    responsibilities: [
      'Conducted analyses of FDA databases',
      'Developed strategies for post-marketing studies',
      'Reviewed MEDIVA templates',
      'Collaborated with cross-functional teams',
      'Compiled drug lists for competitive analysis',
    ],
  },
  {
    title: 'The Medicine Shoppe',
    role: 'Intern, Community Pharmacy',
    duration: 'June 2023 – May 2024',
    image: '/MS.png',
    link: '/experience/medicine',
    location: 'Vernon Rockville, CT',
    manager: 'Manager: Heraquido (Andrew) DaSilva, PharmD, RPh',
    responsibilities: [
      'Managed budgeting and inventory control',
      'Engaged in community outreach activities',
      'Maintained vendor and supplier relationships',
      'Negotiated favorable terms with suppliers',
      'Supported business growth strategies',
    ],
  },
  {
    title: 'Hartford Hospital',
    role: 'Intern, Health Systems Pharmacy',
    duration: 'April 2023 – July 2024',
    image: '/HC.webp',
    link: '/experience/hartford',
    location: 'Hartford, CT',
    manager: 'Manager: Khalilah Burgin, PharmD, RPh',
    responsibilities: [
      'Maintained patient profiles and medication charges',
      'Conducted patient care unit inspections',
      'Handled drug purchasing and distribution',
      'Prepackaged medications for in-patient dispensing',
      'Ensured pharmaceutical quality standards',
    ],
  },
  {
    title: 'CVS Pharmacy',
    role: 'Intern, Community Pharmacy',
    duration: 'September 2020 – September 2021',
    image: '/cvs.svg',
    link: '/experience/cvs',
    location: 'Stafford Springs, CT',
    manager: 'Manager: Gifty Oteng, PharmD, RPh',
    responsibilities: [
      'Managed inventory and rotated stock',
      'Dispensed medications to patients',
      'Inspected drug storage sites',
      'Monitored drug expiration dates',
      'Maintained safety and sanitation standards',
    ],
  },
];

const ExperiencePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-64 w-full object-cover md:h-96 md:w-64"
                  src="/headshot.webp"
                  alt="Amy Nguyen"
                />
              </div>
              <div className="p-8">
                <h1 className="text-2xl font-normal tracking-tight lg:text-5xl mb-4">
                  Professional Experience
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-gray-500">
                  A journey through my internships and professional engagements
                  in the pharmaceutical field, showcasing my growth and dedication.
                </p>
                <div className="mt-6">
                <Link
                  to="/Information"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 transition-colors duration-300"
                >
                  View All Experiences
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((card, index) => (
              <ExperienceCard key={index} {...card} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExperiencePage;
