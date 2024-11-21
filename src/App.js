import EducatorsSection from './components/EducatorsSection';
import StudentsSection from './components/StudentsSection';
import LandingPage from './components/LandingPage';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';

import { AlertCircle, Book, Users, Play, FileText, Activity } from 'lucide-react';

// Main App Component
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
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow-sm">
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
