// src/pages/Boehringer.tsx

import React from 'react';
import CategoryPageTemplate from '../components/CategoryPageTemplate';

const Boehringer: React.FC = () => {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <CategoryPageTemplate
      title="Boehringer Ingelheim"
      date={today}
      author="Amy Nguyen"
      category="Experience"
    >
      <p>
        My experience with Boehringer Ingelheim has provided valuable insights into pharmaceutical innovation and patient care. This opportunity has allowed me to contribute to meaningful projects while developing my professional skills in the pharmaceutical industry.
      </p>

      <div className="space-y-8 mt-6">
        <div>
          <h3 className="text-lg font-semibold">Key Responsibilities</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Contributed to pharmaceutical research and development initiatives</li>
            <li>Collaborated with cross-functional teams on patient-centered solutions</li>
            <li>Supported clinical and regulatory activities</li>
            <li>Participated in data analysis and reporting</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Skills Developed</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Pharmaceutical industry knowledge and best practices</li>
            <li>Clinical research methodologies</li>
            <li>Regulatory compliance and documentation</li>
            <li>Cross-functional collaboration and communication</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Impact</h3>
          <p>
            This experience has strengthened my understanding of the pharmaceutical industry's role in improving patient outcomes and has reinforced my commitment to advancing healthcare through innovative pharmaceutical solutions.
          </p>
        </div>
      </div>
    </CategoryPageTemplate>
  );
};

export default Boehringer;