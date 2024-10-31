import React, { useState } from 'react';

const CVSPharmacy: React.FC = () => {
  const [clickedImage, setClickedImage] = useState<string | null>(null); // State to track clicked image

  // Handle card click to show the full image
  const handleCardClick = (imageSrc: string) => {
    setClickedImage(imageSrc); // Set clicked image
  };

  // Close the modal
  const closeModal = () => {
    setClickedImage(null); // Clear clicked image
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      
      {/* Header Section */}
      <header className="bg-red-600 text-white w-full py-12 px-6 text-center">
        <h1 className="text-4xl font-bold">Internship at CVS Pharmacy</h1>
        <p className="mt-4 text-lg">Foundation in Pharmacy Operations and Patient Care</p>
        <div className="mt-6 flex justify-center">
          <img 
            src="/cvs.svg" 
            alt="CVS Pharmacy Logo" 
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
            At CVS Pharmacy in Stafford Springs, CT, I interned from September 2020 to September 2021, where I was responsible for managing inventory and dispensing medications to patients. I regularly inspected and rotated stock, ensuring that all medications met quality and compliance standards. This experience helped me develop a strong foundation in pharmacy operations and patient care.
          </p>
          <div className="mt-8">
            <img 
              src="/pharmacist.jpg" 
              alt="Pharmacy Operations and Patient Care" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>

        {/* Achievements Section */}
        <section className="bg-gray-200 py-12 px-6 rounded-lg shadow-md my-12 relative">
          <h2 className="text-3xl font-semibold text-red-600 text-center">Key Achievements</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Inventory Management */}
            <div 
              className="achievement-item bg-white p-6 rounded-lg shadow-sm text-center cursor-pointer"
              onClick={() => handleCardClick('/cvs-inventory.webp')} // Show full image on click
            >
              <h3 className="text-xl font-semibold text-red-600">Inventory Management</h3>
              <p className="mt-2 text-gray-700">Ensured stock quality and compliance standards.</p>
              <img 
                src="/cvs-inventory.webp" 
                alt="Inventory Management" 
                className="mt-4 h-32 w-full object-cover rounded" 
              />
            </div>

            {/* Card 2: Patient Care */}
            <div 
              className="achievement-item bg-white p-6 rounded-lg shadow-sm text-center cursor-pointer"
              onClick={() => handleCardClick('/cvs-patient-care.jpg')}
            >
              <h3 className="text-xl font-semibold text-red-600">Patient Care</h3>
              <p className="mt-2 text-gray-700">Dispensed medications and provided patient support.</p>
              <img 
                src="/cvs-patient-care.jpg" 
                alt="Patient Care" 
                className="mt-4 h-32 w-full object-cover rounded" 
              />
            </div>

            {/* Card 3: Compliance */}
            <div 
              className="achievement-item bg-white p-6 rounded-lg shadow-sm text-center cursor-pointer"
              onClick={() => handleCardClick('/cvs-compliance.jpg')}
            >
              <h3 className="text-xl font-semibold text-red-600">Compliance</h3>
              <p className="mt-2 text-gray-700">Upheld high standards in medication compliance.</p>
              <img 
                src="/cvs-compliance.jpg" 
                alt="Compliance" 
                className="mt-4 h-32 w-full object-cover rounded" 
              />
            </div>
          </div>

          {/* Modal for Full Image View */}
          {clickedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
              onClick={closeModal} // Close modal when clicking outside
            >
              <div className="relative" onClick={(e) => e.stopPropagation()}> 
                {/* Prevent modal from closing when clicking inside the image */}
                <button 
                  onClick={closeModal} 
                  className="absolute top-2 right-2 text-white text-3xl font-bold"
                >
                  &times; {/* Close button */}
                </button>
                <img 
                  src={clickedImage} 
                  alt="Full View" 
                  className="w-auto h-auto max-w-full max-h-screen object-contain rounded-lg shadow-lg" 
                />
              </div>
            </div>
          )}
        </section>
      </main>
      
      {/* Footer Section */}
      <footer className="bg-red-600 text-white py-6 text-center w-full">
        <p>For more projects and experiences, explore my full portfolio.</p>
      </footer>
    </div>
  );
};

export default CVSPharmacy;
