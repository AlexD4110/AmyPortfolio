import React from 'react';

const HartfordHospital: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      
      {/* Header Section */}
      <header className="bg-gray-200 text-gray-800 w-full py-12 px-6 text-center">
        <h1 className="text-4xl font-bold">Internship at Hartford Hospital</h1>
        <p className="mt-4 text-lg text-gray-700">Expanded Expertise in Pharmaceutical Supply Chain Management</p>
        <div className="mt-6 flex justify-center">
          <img 
            src="/HC.webp" 
            alt="Hartford Hospital Logo" 
            className="h-16 object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-5xl p-6">
        
        {/* Project Overview Section */}
        <section className="my-12 text-gray-800">
          <h2 className="text-3xl font-semibold text-black-700">Project Overview</h2>
          <p className="mt-4">
            As an intern at Hartford Hospital from April 2023 to July 2024, I expanded my expertise in managing patient profiles, medication charges, and unit dose cart preparation. Conducting inspections across patient care units taught me to uphold quality standards, while my work overseeing drug purchasing, receiving, and distribution gave me a thorough understanding of the pharmaceutical supply chain.
          </p>
          <div className="mt-8">
            <img 
              src="/hartford-overview.jpg" 
              alt="Pharmaceutical Supply Chain Management" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>

        {/* Achievements Section */}
        <section className="bg-gray-200 py-12 px-6 rounded-lg shadow-md my-12">
          <h2 className="text-3xl font-semibold text-black-700 text-center">Key Achievements</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="achievement-item bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-black-600">Patient Care</h3>
              <p className="mt-2 text-gray-700">Managed patient profiles and prepared unit dose carts.</p>
              <img 
                src="/hartford-patient-care.jpg" 
                alt="Patient Care" 
                className="mt-4 h-32 w-full object-cover rounded" 
              />
            </div>
            <div className="achievement-item bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-black-600">Quality Standards</h3>
              <p className="mt-2 text-gray-700">Conducted inspections to uphold quality standards.</p>
              <img 
                src="/hartford-quality.jpg" 
                alt="Quality Standards" 
                className="mt-4 h-32 w-full object-cover rounded" 
              />
            </div>
            <div className="achievement-item bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-black-600">Supply Chain</h3>
              <p className="mt-2 text-gray-700">Oversaw drug purchasing, receiving, and distribution.</p>
              <img 
                src="/hartford-supply-chain.jpg" 
                alt="Supply Chain" 
                className="mt-4 h-32 w-full object-cover rounded" 
              />
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer Section */}
      <footer className="bg-gray-200 text-gray-800 py-6 text-center w-full">
        <p>For more projects and experiences, explore my full portfolio.</p>
      </footer>
    </div>
  );
};

export default HartfordHospital;
