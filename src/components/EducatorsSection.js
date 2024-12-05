import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { FileText, Book, Activity, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const EducatorsSection = () => {
  const navigate = useNavigate();
  const resources = [
    {
      title: "Scholarly Articles",
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      description: "Summaries of key works on ethics and relationships.",
      items: [
        { text: "Pornography by Women for Women, with Love", link: "/educators/articles/russ" },
        { text: "Sex, Carceralism, Capitalism", link: "/educators/articles/srinivasan" },
        { text: "The Trials and Tribulations of Being a ‘Slut’", link: "/educators/articles/klesseeaston" },
      ],
    },
    {
      title: "Classroom Forums",
      icon: <Activity className="h-6 w-6 text-green-600" />,
      description: "Interactive exercises for student engagement.",
      items: [
        { text: "Russ", link: "/educators/classroomactivities/reflection-exercises" },
        { text: "Srinivasan", link: "/educators/classroomactivities/role-play-scenarios" },
        { text: "Klesse and Easton", link: "/educators/classroomactivities/group-discussion-templates" },
      ],
    },
    {
      title: "Case Studies",
      icon: <Book className="h-6 w-6 text-blue-600" />,
      description: "Real-world scenarios with discussion guides.",
      items: [
        { text: "Navigating Digital Boundaries", link: "/educators/casestudies/navigating-digital-boundaries" },
        { text: "Understanding Consent in Practice", link: "/educators/casestudies/understanding-consent-in-practice" },
        { text: "Addressing Power Imbalances", link: "/educators/casestudies/addressing-power-imbalances" },
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
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Resources for Educators</h2>

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
                {resource.items.map((item, idx) =>
                  typeof item === 'string' ? (
                    // Render plain string items
                    <li key={idx} className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-blue-500" />
                      {item}
                    </li>
                  ) : (
                    // Render link items
                    <li key={idx} className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-blue-500" />
                      <Link to={item.link} className="text-blue-600 hover:underline">
                        {item.text}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducatorsSection;
