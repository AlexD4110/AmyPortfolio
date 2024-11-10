// src/pages/Contact.tsx

import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center relative">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Let’s Connect in the World of Pharmacy!</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Reach out to discuss industry insights, research, or any opportunities in pharmaceutical science. I’m always excited to connect!
        </p>
      </section>

      {/* Contact Icons Section */}
      <section className="flex space-x-12 mb-16">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/amynguyensop/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-blue-600 hover:text-blue-800">
          <img src="/linkedin.svg" alt="LinkedIn Icon" className="h-12 w-12" /> {/* Updated to Favicon */}
          <span className="mt-2 font-semibold">LinkedIn</span>
        </a>

        {/* Email */}
        <a href="mailto:nhung.nguyen@uconn.edu" className="flex flex-col items-center text-gray-800 hover:text-gray-600">
          <img src="/mail.svg" alt="Email Icon" className="h-12 w-12" /> {/* Updated to Favicon */}
          <span className="mt-2 font-semibold">Email</span>
        </a>
      </section>

      {/* Fun Fact Section */}
      <section className="text-center max-w-3xl mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">A Little About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          As a pharmacy student, I'm passionate about the intersection of science and healthcare. I enjoy exploring new advancements in pharmacology and strive to make a difference in the industry. In my free time, I love reading up on the latest research and expanding my knowledge of pharmacotherapy.
        </p>
      </section>

      {/* Background Element with Pharmacy Theme */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-center items-center">
        <svg className="w-2/3 h-2/3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <path d="M25,50 C40,20 60,80 75,50" stroke-width="0.3" /> {/* Capsule-like path */}
          <path d="M15,20 C30,15 70,85 85,80" stroke-width="0.3" /> {/* Another capsule */}
          <rect x="40" y="40" width="20" height="20" rx="2" stroke-width="0.3" /> {/* Small square for a pill box */}
          <circle cx="20" cy="80" r="10" stroke-width="0.3" /> {/* Small pill-like circle */}
        </svg>
      </div>
    </div>
  );
};

export default Contact;
