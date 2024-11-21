import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Play, Activity, Users, AlertCircle } from 'lucide-react';

const StudentsSection = ({ onBack }) => {
  const resources = [
    {
      title: "Video Lessons",
      icon: <Play className="h-6 w-6" />,
      description: "Learn through friendly and informative videos about respect and relationships.",
      topics: [
        "Respecting Personal Boundaries",
        "Understanding Consent and Communication",
        "How to Be a Good Friend",
      ],
    },
    {
      title: "Interactive Scenarios",
      icon: <Activity className="h-6 w-6" />,
      description: "Practice making good decisions in different situations.",
      topics: [
        "Standing Up for Friends in Difficult Situations",
        "Respecting Differences in Opinions",
        "Using Technology Responsibly in Relationships",
      ],
    },
    {
      title: "Relationship Skills",
      icon: <Users className="h-6 w-6" />,
      description: "Understand and develop essential skills for maintaining positive relationships.",
      topics: [
        "Effective Communication",
        "Conflict Resolution",
        "Building Trust and Respect",
      ],
    },
  ];

  return (
    <div>
      <Button variant="outline" onClick={onBack} className="mb-6">
        Back to Home
      </Button>

      <h2 className="text-2xl font-bold mb-6">Resources for Students</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
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
                    {topic}
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
