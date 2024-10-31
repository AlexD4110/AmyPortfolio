// src/components/CategoryPageTemplate.tsx

import React from 'react';

interface CategoryPageTemplateProps {
  title: string;
  date: string;
  author: string;
  category?: string;
  imageSrc?: string; // Optional image
  children: React.ReactNode;
}

const CategoryPageTemplate: React.FC<CategoryPageTemplateProps> = ({ title, date, author, category, imageSrc, children }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg my-8">
      <div className="mb-6 border-b pb-4">
        <p className="text-sm text-gray-500">
          {category && <span className="uppercase text-indigo-600">{category}</span>} By {author} · {date}
        </p>
        <h1 className="text-4xl font-normal text-gray-900">{title}</h1>
      </div>
      {imageSrc && (
        <div className="mb-6">
          <img src={imageSrc} alt={title} className="w-full rounded-md object-cover" />
        </div>
      )}
      <div className="text-gray-700 space-y-4">{children}</div>
    </div>
  );
};

export default CategoryPageTemplate;
