// src/pages/Certifications.tsx

import React from 'react';
import { Award } from 'lucide-react'; // Import Lucide's Award icon
import CategoryPageTemplate from '@/components/CategoryPageTemplate';

const certifications = [
  {
    title: "Pharmacy Intern License",
    details: "September 2022 – September 2024",
    id: "#PCI.0010131",
  },
  {
    title: "Basic Life Support Certification",
    details: "September 2024 – September 2026",
  },
  {
    title: "Basic Life Support Certification",
    details: "September 2022 – September 2024",
  },
  {
    title: "Narcan Training Certification",
    details: "October 2023",
    issuer: "Issued by CT Harm Reduction Alliance",
  },
  {
    title: "Narcan Training Certification",
    details: "January 2023",
    issuer: "Issued by Southeastern Regional Action Council CT",
  },
  {
    title: "Registered Pharmacy Technician",
    issuer: "Issued by CT Department of Consumer Protection",
  },
];

const Certifications: React.FC = () => {
  return (
    <CategoryPageTemplate title="Certifications" date="October 13, 2024" author="Amy Nguyen">
      <div className="grid grid-cols-1 gap-6 mt-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white border border-gray-200 shadow-md rounded-lg p-4 flex items-start gap-4">
            <Award className="text-black h-6 w-6 mt-1" /> {/* Icon set to black */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{cert.title}</h2>
              <p className="text-sm text-gray-600">{cert.details}</p>
              {cert.id && <p className="text-sm text-gray-500">ID: {cert.id}</p>}
              {cert.issuer && <p className="text-sm text-gray-500">{cert.issuer}</p>}
            </div>
          </div>
        ))}
      </div>
    </CategoryPageTemplate>
  );
};

export default Certifications;
