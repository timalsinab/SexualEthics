import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Play, Activity, Users } from 'lucide-react';

const StudentsSection = ({ onBack }) => {
  const resources = [
    {
      title: "Video Lessons",
      icon: <Play className="h-6 w-6" />,
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
      icon: <Activity className="h-6 w-6" />,
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
      icon: <Users className="h-6 w-6" />,
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
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={onBack}
          style={{
            border: '1px solid #ccc',
            backgroundColor: '#f9f9f9',
            color: '#333',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-gray-800">Resources for Students</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-800">
                {resource.icon}
                {resource.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <ul className="list-disc ml-5">
                {resource.topics.map((topic, idx) => (
                  <li key={idx}>
                    <Link to={topic.link} className="text-blue-600 hover:underline">
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
