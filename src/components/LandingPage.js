import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Book, Users } from 'lucide-react';

const LandingPage = ({ onSelect }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-6 w-6" />
            For Educators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Access research-based materials and resources to support classroom discussions on ethics and relationships.</p>
          <Button 
            className="w-full"
            onClick={() => onSelect('educators')}
          >
            Enter Educators Section
          </Button>
        </CardContent>
      </Card>
      
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6" />
            For Students
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Explore age-appropriate resources about respect, relationships, and making ethical decisions.</p>
          <Button 
            className="w-full"
            onClick={() => onSelect('students')}
          >
            Enter Students Section
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingPage;
