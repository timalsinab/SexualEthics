import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import EducatorsSection from './components/EducatorsSection';
import StudentsSection from './components/StudentsSection';
import LandingPage from './components/LandingPage';
import VideoLessons from './components/Students/VideoLessons';
import InteractiveScenarios from './components/Students/InteractiveScenarios';
import RespectingDifferences from './components/Students/Topics/RespectingDifferences';
import UsingTechnologyResponsibly from './components/Students/Topics/UsingTechnologyResponsibly';
import RelationshipSkills from './components/Students/RelationshipSkills';
import EffectiveCommunication from './components/Students/Topics/EffectiveCommunication';
import ConflictResolution from './components/Students/Topics/ConflictResolution';
import BuildingTrust from './components/Students/Topics/BuildingTrust';
import ThankYouPage from './components/Students/ThankyouPage';
import PornographyForWomen from './components/Educators/Articles/Russ';
import SexCarceralism from './components/Educators/Articles/Srinivasan';
import PolyamoryArticle from './components/Educators/Articles/KlesseEaston';
import NavigatingDigitalBoundaries from './components/Educators/CaseStudies/NavigatingDigitalBoundaries';
import UnderstandingConsentInPractice from './components/Educators/CaseStudies/UnderstandingConsentInPractice';
import AddressingPowerImbalances from './components/Educators/CaseStudies/AddressingPowerImbalances';
import GroupDiscussionTemplates from './components/Educators/ClassroomActivities/GroupDiscussionTemplates';
import ReflectionExercises from './components/Educators/ClassroomActivities/ReflectionExercises';
import RolePlayScenarios from './components/Educators/ClassroomActivities/RolePlayScenarios';
// Main App Component
const EducationalHub = () => {

  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <h1 className="text-2xl font-bold text-gray-800">
              Navigating Sexual Ethics: A Resource Hub
            </h1>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<LandingPage />} />

            {/* Educators Section */}
            <Route path="/educators" element={<EducatorsSection />} />
            <Route path="/educators/articles/russ" element={<PornographyForWomen />} />
            <Route path="/educators/articles/srinivasan" element={<SexCarceralism />} />
            <Route path="/educators/articles/klesseeaston" element={<PolyamoryArticle />} />
                        {/* Case Studies */}
                        <Route
              path="/educators/casestudies/navigating-digital-boundaries"
              element={<NavigatingDigitalBoundaries />}
            />
            <Route
              path="/educators/casestudies/understanding-consent-in-practice"
              element={<UnderstandingConsentInPractice />}
            />
            <Route
              path="/educators/casestudies/addressing-power-imbalances"
              element={<AddressingPowerImbalances />}
            />
            <Route
  path="/educators/classroomactivities/group-discussion-templates"
  element={<GroupDiscussionTemplates />}
/>
<Route
  path="/educators/classroomactivities/role-play-scenarios"
  element={<RolePlayScenarios />}
/>
<Route
  path="/educators/classroomactivities/reflection-exercises"
  element={<ReflectionExercises />}
/>



            {/* Students Section */}
            <Route path="/students" element={<StudentsSection />} />
            <Route path="/students/video-lessons" element={<VideoLessons />} />
            <Route path="/students/interactive-scenarios" element={<InteractiveScenarios />} />
            <Route
              path="/students/interactive-scenarios/respecting-differences"
              element={<RespectingDifferences />}
            />
            <Route
              path="/students/interactive-scenarios/using-technology-responsibly"
              element={<UsingTechnologyResponsibly />}
            />
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

            {/* Thank You Page */}
            <Route path="/students/thank-you" element={<ThankYouPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default EducationalHub;
