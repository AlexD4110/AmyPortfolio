// src/pages/experience/boehringer.tsx

import React from 'react';
import CategoryPageTemplate from '../../components/CategoryPageTemplate';

const BoehringerIngelheim: React.FC = () => {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <CategoryPageTemplate
      title="Boehringer Ingelheim Experience"
      date={today}
      author="Amy Nguyen"
      category="Professional Experience"
    >
      <p>
        My experience at Boehringer Ingelheim provided valuable insights into pharmaceutical innovation and global healthcare solutions. This opportunity allowed me to contribute to meaningful projects while developing my professional skills in the pharmaceutical industry.
      </p>

      <div className="space-y-8 mt-6">
        <div>
          <h3 className="text-lg font-semibold">Position Details</h3>
          <ul className="list-none space-y-2 mt-2">
            <li><strong>Company:</strong> Boehringer Ingelheim</li>
            <li><strong>Role:</strong> Pharmaceutical Intern</li>
            <li><strong>Duration:</strong> [Duration to be updated]</li>
            <li><strong>Location:</strong> [Location to be updated]</li>
            <li><strong>Manager:</strong> [Manager to be updated]</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Key Responsibilities</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Contributed to pharmaceutical research and development initiatives</li>
            <li>Collaborated with cross-functional teams on patient-centered solutions</li>
            <li>Supported clinical and regulatory activities</li>
            <li>Participated in data analysis and reporting</li>
            <li>Assisted with market research and competitive analysis</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Skills Developed</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Pharmaceutical industry knowledge and best practices</li>
            <li>Clinical research methodologies</li>
            <li>Regulatory compliance and documentation</li>
            <li>Cross-functional collaboration and communication</li>
            <li>Data analysis and interpretation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Impact and Achievements</h3>
          <p>
            This experience strengthened my understanding of the pharmaceutical industry's role in improving patient outcomes and reinforced my commitment to advancing healthcare through innovative pharmaceutical solutions. The exposure to global healthcare challenges and solutions has been invaluable to my professional development.
          </p>
        </div>
      </div>
    </CategoryPageTemplate>
  );
};

export default BoehringerIngelheim;