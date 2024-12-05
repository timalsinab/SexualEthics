import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Play, Activity, Users, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';

const StudentsSection = () => {
  const navigate = useNavigate(); // Use navigate for routing

  const resources = [
    {
      title: "Video Lessons",
      icon: <Play className="h-6 w-6 text-purple-600" />,
      description: "Learn through friendly and informative videos about respect and relationships.",
      topics: [
        {
          text: "Respecting Personal Boundaries",
          link: "/students/video-lessons",
        },
        {
          text: "Understanding Consent and Communication",
          link: "/students/video-lessons",
        },
        {
          text: "How to Be a Good Friend",
          link: "/students/video-lessons",
        },
      ],
    },
    {
      title: "Interactive Scenarios",
      icon: <Activity className="h-6 w-6 text-green-600" />,
      description: "Practice making good decisions in different situations.",
      topics: [
        {
          text: "Standing Up for Friends in Difficult Situations",
          link: "/students/interactive-scenarios",
        },
        {
          text: "Respecting Differences in Opinions",
          link: "/students/interactive-scenarios/respecting-differences",
        },
        {
          text: "Using Technology Responsibly in Relationships",
          link: "/students/interactive-scenarios/using-technology-responsibly",
        },
      ],
    },
    {
      title: "Relationship Skills",
      icon: <Users className="h-6 w-6 text-blue-600" />,
      description: "Understand and develop essential skills for maintaining positive relationships.",
      topics: [
        {
          text: "Effective Communication",
          link: "/students/relationship-skills",
        },
        {
          text: "Conflict Resolution",
          link: "/students/relationship-skills",
        },
        {
          text: "Building Trust and Respect",
          link: "/students/relationship-skills",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Back Button */}
      <Button
        variant="outline"
        onClick={() => navigate('/')}
        className="mb-6 px-4 py-2 border border-gray-300 text-gray-800 bg-white hover:text-white hover:bg-gray-800 rounded-lg transition-all"
      >
        Back to Home
      </Button>

      {/* Page Title */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Resources for Students</h2>

      {/* Resources Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                {resource.icon}
                {resource.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">{resource.description}</p>
              <ul className="space-y-2">
                {resource.topics.map((topic, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-blue-500" />
                    <Link 
                      to={topic.link} 
                      className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                    >
                      {topic.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudentsSection;
