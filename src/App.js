import EducatorsSection from './components/EducatorsSection';
import StudentsSection from './components/StudentsSection';
import LandingPage from './components/LandingPage';
import VideoLessons from './components/Students/VideoLessons';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InteractiveScenarios from './components/Students/InteractiveScenarios';
import RespectingDifferences from './components/Students/Topics/RespectingDifferences';
import UsingTechnologyResponsibly from './components/Students/Topics/UsingTechnologyResponsibly';
import RelationshipSkills from "./components/Students/RelationshipSkills";
import EffectiveCommunication from "./components/Students/Topics/EffectiveCommunication";
import ConflictResolution from "./components/Students/Topics/ConflictResolution";
import BuildingTrust from "./components/Students/Topics/BuildingTrust";
import ThankYouPage from './components/Students/ThankyouPage';

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
    <Router>
      <div className="min-h-screen bg-slate-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <h1 className="text-2xl font-bold text-gray-800">
              Navigating Sexual Ethics: A Resource Hub
            </h1>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            <Route
              path="/"
              element={<div>{renderContent()}</div>} // Preserving the existing navigation
            />
            <Route path="/educators" element={<EducatorsSection />} />
            <Route path="/students" element={<StudentsSection />} />
            <Route path="/students/video-lessons" element={<VideoLessons />} />
            <Route path="/students/interactive-scenarios" element={<InteractiveScenarios />} />
            < Route path="/students/interactive-scenarios/respecting-differences" element={<RespectingDifferences />} /> 
            <Route  path="/students/interactive-scenarios/using-technology-responsibly" element={<UsingTechnologyResponsibly />} />
            <Route path="/students/relationship-skills" element={<RelationshipSkills />} />
            <Route
              path="/students/relationship-skills/effective-communication"
              element={<EffectiveCommunication />}
            />
            <Route
              path="/students/relationship-skills/conflict-resolution"
              element={<ConflictResolution />}
            />
            <Route
              path="/students/relationship-skills/building-trust"
              element={<BuildingTrust />}
            />
            <Route path="/students/thank-you" element={<ThankYouPage />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default EducationalHub;
