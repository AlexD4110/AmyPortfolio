// src/pages/Education.tsx

import React from 'react';
import CategoryPageTemplate from '../components/CategoryPageTemplate';

const Education: React.FC = () => {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <CategoryPageTemplate
      title="Education"
      date={today}
      author="Amy Nguyen"
      imageSrc="/SOPblue.png" // Directly reference the image in the public folder
    >
      <p>
        I am currently pursuing a Doctor of Pharmacy (PharmD) degree at the University of Connecticut, expecting to graduate in May 2026. Under the guidance of Dr. Fei Wang, I have developed a strong foundation in clinical and patient care. In 2024, I completed my Bachelor of Science in Pharmacy Studies at UConn, where I deepened my knowledge in pharmacology, patient safety, and medication management.
      </p>

      <div className="space-y-8 mt-6">
        <div>
          <h3 className="text-lg font-semibold">University of Connecticut, Storrs Mansfield, CT</h3>
          <p>PharmD., Pharmacy, Expected Graduation: May 2026</p>
          <p>Advisor: Fei Wang, PharmD</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">University of Connecticut, Storrs Mansfield, CT</h3>
          <p>B.S., Pharmacy Studies, Graduation: May 2024</p>
          <p>Advisor: Fei Wang</p>
        </div>
      </div>
    </CategoryPageTemplate>
  );
};

export default Education;
