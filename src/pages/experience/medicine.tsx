import React from 'react';

const MedicineShoppe: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      
      {/* Header Section */}
      <header className="bg-gray-200 text-gray-800 w-full py-12 px-6 text-center">
        <h1 className="text-4xl font-bold">Internship at The Medicine Shoppe</h1>
        <p className="mt-4 text-lg text-gray-700">Hands-On Experience in Community Pharmacy Management</p>
        <div className="mt-6 flex justify-center">
          <img 
            src="/MS.png" 
            alt="The Medicine Shoppe Logo" 
            className="h-16 object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-5xl p-6">
        
        {/* Project Overview Section */}
        <section className="my-12 text-gray-800">
          <h2 className="text-3xl font-semibold text-blue-700">Project Overview</h2>
          <p className="mt-4">
            At The Medicine Shoppe in Vernon Rockville, CT, where I interned from June 2023 to May 2024, I gained hands-on experience in community pharmacy management. My role allowed me to become proficient in budgeting, inventory control, and vendor negotiations, all crucial aspects of pharmacy operations. I also saw firsthand how vital community engagement and patient loyalty are to a successful pharmacy, learning to manage vendor relationships and support discussions on strategic business growth.
          </p>
          <div className="mt-8">
            <img 
              src="/medicine-overview.jpg" 
              alt="Community Pharmacy Management" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>

        {/* Achievements Section */}
        <section className="bg-gray-200 py-12 px-6 rounded-lg shadow-md my-12">
          <h2 className="text-3xl font-semibold text-blue-700 text-center">Key Achievements</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="achievement-item bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-blue-600">Budgeting</h3>
              <p className="mt-2 text-gray-700">Developed budgeting skills to manage financial operations efficiently.</p>
              <img 
                src="/medicine-budgeting.jpg" 
                alt="Budgeting" 
                className="mt-4 h-32 w-full object-cover rounded" 
              />
            </div>
            <div className="achievement-item bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-blue-600">Inventory Control</h3>
              <p className="mt-2 text-gray-700">Oversaw inventory control processes to maintain stock levels.</p>
              <img 
                src="/medicine-inventory.jpg" 
                alt="Inventory Control" 
                className="mt-4 h-32 w-full object-cover rounded" 
              />
            </div>
            <div className="achievement-item bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold text-blue-600">Vendor Relations</h3>
              <p className="mt-2 text-gray-700">Managed vendor relationships and supported business growth discussions.</p>
              <img 
                src="/medicine-vendor.jpg" 
                alt="Vendor Relations" 
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

export default MedicineShoppe;
