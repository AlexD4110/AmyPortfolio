// pages/Information.tsx
import React from 'react';
import CategoryPageTemplate from '@/components/CategoryPageTemplate';
import TimelineComponent from '@/components/timeline'; // Adjust the import path as neededsrc/components/timeline.tsx

const Information: React.FC = () => {
  return (
    <CategoryPageTemplate
      title="Professional Experience"
      date="October 12, 2024"
      author="Amy Nguyen"
    >
      <div className="max-w-4xl mx-auto py-8">
        <TimelineComponent />
      </div>
    </CategoryPageTemplate>
  );
};

export default Information;
