// src/components/ExperienceCard.tsx

import React from 'react';
import { Link } from 'react-router-dom';

interface ExperienceCardProps {
  title: string;
  role: string;
  duration: string;
  location: string;
  manager: string;
  responsibilities: string[];
  link: string;
  image: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  role,
  duration,
  location,
  manager,
  responsibilities,
  link,
  image,
}) => (
  <Link to={link} className="group">
    <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-white">
      <div className="flex justify-center items-center p-4">
        <img
          src={image}
          alt={title}
          className="w-32 h-32 object-contain"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-1">{role}</p>
        <p className="text-gray-500 mb-1">{duration}</p>
        <p className="text-gray-500 mb-1">{location}</p>
        <p className="text-gray-500 mb-3">{manager}</p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
          {responsibilities.slice(0, 3).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
          {responsibilities.length > 3 && <li>...and more</li>}
        </ul>
        <div className="flex items-center text-blue-600 font-medium">
          Learn More
        </div>
      </div>
    </div>
  </Link>
);

export default ExperienceCard;
