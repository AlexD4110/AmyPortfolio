import React from 'react';
import { Briefcase, GraduationCap, Award, LibraryBig, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-50 text-black py-12 relative">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          {/* UConn School of Pharmacy Image */}
          <img 
            src="SOPblue.png" 
            alt="UConn School of Pharmacy" 
            className="w-full max-w-md rounded-md mb-6"  // Add margin-bottom
            style={{ marginBottom: 10, paddingBottom: 2, boxShadow: 'none' }}
          />
          <h1 className="text-4xl font mb-2">Amy Nguyen</h1>
          <p className="text-xl mb-2">Doctor of Pharmacy Candidate</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-3">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Professional Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold">Professional Summary</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A dedicated pharmacy professional with extensive experience across various healthcare settings, 
              including roles at Takeda Pharmaceuticals, Hartford Hospital, and community pharmacies. 
              Committed to improving patient care through innovative pharmaceutical practices and research.
            </p>
          </div>

          {/* Education */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold">Doctor of Pharmacy</h3>
                <p className="text-gray-600">University of Connecticut School of Pharmacy</p>
                <p className="text-gray-500">Anticipated 2026</p>
              </div>
              <div>
                <h3 className="font-semibold">Bachelor of Science, Pharmacy Studies</h3>
                <p className="text-gray-600">University of Connecticut</p>
                <p className="text-gray-500">May 2024</p>
              </div>
            </div>
          </div>

          {/* Research */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <LibraryBig className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold">Research Focus</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Systematic review of Mipomersen in patients with homozygous familial hypercholesterolemia</li>
              <li>Embedded Pharmacists in Primary Care research</li>
              <li>Culturally Competent Medication Therapy Management</li>
            </ul>
          </div>

          {/* Leadership */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold">Leadership</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>President/Producer of ListenPRN</li>
              <li>Inclusion Chair of Diversity Committee</li>
              <li>President of No Friend Left nALOxoNE (NFLN)</li>
              <li>Student Coordinator at South Park Clinic Board</li>
            </ul>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Award className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-semibold">Awards & Recognition</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="font-semibold">Pharmacy Class of 1978 Scholarship Award</h3>
              <p className="text-gray-600">2024</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="font-semibold">Joseph R. D'Alessio Award</h3>
              <p className="text-gray-600">2023</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <h3 className="font-semibold">CSHP Meritorious Team Achievement Award</h3>
              <p className="text-gray-600">2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;