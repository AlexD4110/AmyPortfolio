// src/pages/Volunteer.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import VolunteerCarouselComponent from '@/components/volunteer-carousel';

// Carousel slides data
const slides = [
  {
    title: "Medical Mission",
    description: "Vaccinating underserved patients at Windham event.",
    imageUrl: "windhamMedical.jpg", // Replace with actual image paths
  },
  {
    title: "Narcan Training",
    description: "Conducting life-saving Narcan training sessions.",
    imageUrl: "narcanTraining.jpg",
  },
  {
    title: "Community Outreach",
    description: "Engaging with the community to raise awareness.",
    imageUrl: "communityOutreach.jpg",
  },
  // Add more slides as needed
];

const Volunteer: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Volunteer Work</h1>
        <p className="text-gray-600 text-lg">
          Making a positive impact in our community.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        {/* Image Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="windhamFour.jpg" // Replace with your image path
            alt="Amy Nguyen at Hartford HealthCare Medical Mission"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">
            Hartford HealthCare Medical Mission (November 2023)
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            I participated in the Hartford HealthCare Medical Mission at Home event in Windham, CT,
            where I individually vaccinated over 50 underserved patients as a pharmacy intern, working alongside a team of over 50 pharmacists and interns. This mission provided essential healthcare services, medications, and vaccinations to underserved communities in Connecticut.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Additionally, I founded a program called <strong>No Friend Left nALOxoNE (NFLN)</strong>, focusing on opioid overdose awareness and prevention. Through NFLN, we organized Narcan training sessions and collaborated with community members to combat the opioid crisis.
          </p>
          <div className="flex space-x-4">
            {/* Link to the Program */}
            <Link
              to="/nfln-program" // Ensure this route exists
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Learn About NFLN
            </Link>
            {/* External Link */}
            <a
              href="https://www.example.com/story" // Replace with the actual URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition duration-200"
            >
              Read the Full Story
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-8 text-center">Gallery</h3>
        <VolunteerCarouselComponent slides={slides} className="w-full lg:w-3/4 mx-auto" />
      </div>
    </div>
  );
};

export default Volunteer;
