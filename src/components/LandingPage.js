import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Book, Users } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 p-6">
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl w-full">
        {/* Educators Section Card */}
        <Card className="hover:shadow-lg transition-shadow bg-white rounded-lg p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl font-bold text-purple-700">
              <Book className="h-8 w-8 text-purple-700" />
              For Educators
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Explore a rich library of resources to guide discussions on ethics, relationships, and consent.
            </p>
            <Button
              onClick={() => navigate('/educators')}
              className="w-full bg-purple-700 hover:bg-purple-600 text-white py-3"
            >
              Enter Educators Section
            </Button>
          </CardContent>
        </Card>

        {/* Students Section Card */}
        <Card className="hover:shadow-lg transition-shadow bg-white rounded-lg p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl font-bold text-blue-700">
              <Users className="h-8 w-8 text-blue-700" />
              For Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Discover engaging resources to build respect, relationships, and ethical decision-making skills.
            </p>
            <Button
              onClick={() => navigate('/students')}
              className="w-full bg-blue-700 hover:bg-blue-600 text-white py-3"
            >
              Enter Students Section
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
