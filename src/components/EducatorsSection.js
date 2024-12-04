import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import {Button} from './ui/button';
import { FileText, Book, Activity, AlertCircle } from 'lucide-react';

const EducatorsSection = ({ onBack }) => {
  const resources = [
    {
      title: "Scholarly Articles",
      icon: <FileText className="h-6 w-6" />,
      description: "Access summaries of key works on ethics and relationships.",
      items: [
        "Understanding Power Dynamics in Relationships",
        "Contemporary Perspectives on Consent",
        "Teaching Ethicsx: A Practical Guide",
      ],
    },
    {
      title: "Case Studies",
      icon: <Book className="h-6 w-6" />,
      description: "Real-world scenarios with discussion guides.",
      items: [
        "Navigating Digital Boundaries",
        "Understanding Consent in Practice",
        "Addressing Power Imbalances",
      ],
    },
    {
      title: "Classroom Activities",
      icon: <Activity className="h-6 w-6" />,
      description: "Interactive exercises for student engagement.",
      items: [
        "Group Discussion Templates: Foster critical thinking through guided questions.",
        "Role-Play Scenarios: Simulate real-world ethical dilemmas for students to solve.",
        "Reflection Exercises: Encourage students to analyze their beliefs and behaviors.",
      ],
    },
  ];

  return (
    <div>
      <Button variant="outline" onClick={onBack} className="mb-6 text-black">
        Back to Home
      </Button>

      <h2 className="text-2xl font-bold mb-6">Resources for Educators</h2>

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
                {resource.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-blue-500" />
                    {item}
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

export default EducatorsSection;
