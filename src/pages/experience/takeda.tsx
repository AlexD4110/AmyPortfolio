import React from 'react';

const TakedaInternship: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">

      {/* Header Section */}
      <header className="bg-red-600 text-white w-full py-12 px-6 text-center">
        <h1 className="text-4xl font-bold">Internship at Takeda Pharmaceuticals</h1>
        <p className="mt-4 text-lg">Analyzing FDA Databases & Enhancing Product Safety for MOTEGRITY®</p>
        <div className="mt-6 flex justify-center">
          <img
            src="/takeda.svg"
            alt="Takeda Pharmaceuticals Logo"
            className="h-16 object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-5xl p-6">

        {/* Project Overview Section */}
        <section className="my-12 text-gray-800">
          <h2 className="text-3xl font-semibold text-red-600">Project Overview</h2>
          <p className="mt-4">
            During my internship at Takeda Pharmaceuticals in Boston from May to August 2024, I worked in Global Medical/Marketed Products Development under the supervision of Vivek Deore. I conducted in-depth analyses of FDA databases, identifying 227 critical pregnancy-related studies from a dataset of over 2,600, which directly supported regulatory submissions for MOTEGRITY®. This experience allowed me to play a strategic role in improving the product's market position. I also developed responses to the FDA regarding post-marketing pregnancy safety studies, which enhanced our documentation practices.
          </p>
          <div className="mt-8">
            <img
              src="/dinner.webp"
              alt="Data analysis visualization"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>


        {/* Achievements Section */}
        <section className="bg-gray-200 py-12 px-6 rounded-lg shadow-md my-12">
          <h2 className="text-3xl font-semibold text-red-600 text-center">Key Achievements</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="achievement-item bg-gray-100 p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-red-600">Data Analysis</h3>
              <p className="mt-2 text-gray-700">Identified 227 critical studies supporting regulatory submissions.</p>
              <img
                src="/path-to-your-image2.jpg"
                alt="Data Analysis"
                className="mt-4 h-32 w-full object-cover rounded"
              />
            </div>
            <div className="achievement-item bg-gray-100 p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-red-600">Documentation</h3>
              <p className="mt-2 text-gray-700">Developed FDA responses, improving post-marketing study documentation.</p>
              <img
                src="/path-to-your-image3.jpg"
                alt="Documentation"
                className="mt-4 h-32 w-full object-cover rounded"
              />
            </div>
            <div className="achievement-item bg-gray-100 p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-red-600">Cross-Functional Collaboration</h3>
              <p className="mt-2 text-gray-700">Reduced project turnaround by 10% through enhanced team communication.</p>
              <img
                src="/path-to-your-image4.jpg"
                alt="Collaboration"
                className="mt-4 h-32 w-full object-cover rounded"
              />
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="text-gray-800 my-12">
          <h2 className="text-3xl font-semibold text-red-600 text-center">Impact</h2>
          <p className="mt-4 max-w-3xl mx-auto text-center">
            By implementing strategic documentation practices and collaborating effectively with the Center for Post Authorization Safety Studies and Clinical Science Teams, I contributed to improved cross-functional communication, helping reduce project turnaround times by 10%.
          </p>
          <div className="mt-8 flex justify-center">
            <img
              src="/diagram.png"
              alt="Impact Visualization"
              className="rounded-lg shadow-lg w-full max-w-3xl"
            />
          </div>
        </section>

      </main>

      {/* Footer Section */}
      <footer className="bg-red-600 text-white py-6 text-center w-full">
        <p>For more projects and experiences, explore my full portfolio.</p>
      </footer>
    </div>
  );
};

export default TakedaInternship;
