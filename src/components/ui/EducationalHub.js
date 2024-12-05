import React, { useState } from 'react';
import LandingPage from './LandingPage';
import EducatorsSection from './EducatorsSection';
import StudentsSection from './StudentsSection';

const EducationalHub = () => {
  const [selectedSection, setSelectedSection] = useState('landing');

  const renderContent = () => {
    switch (selectedSection) {
      case 'educators':
        return <EducatorsSection onBack={() => setSelectedSection('landing')} />;
      case 'students':
        return <StudentsSection onBack={() => setSelectedSection('landing')} />;
      default:
        return <LandingPage onSelect={setSelectedSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <h1 className="text-2xl font-bold text-gray-800">
            Navigating Sexual Ethics: A Resource Hub
          </h1>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-6">{renderContent()}</main>
    </div>
  );
};

export default EducationalHub;
