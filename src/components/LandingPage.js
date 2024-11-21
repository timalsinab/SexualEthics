import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Book, Users } from 'lucide-react';

const LandingPage = ({ onSelect }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Educators Section Card */}
        <Card className="hover:shadow-lg transition-shadow bg-white rounded-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-bold text-purple-700">
              <Book className="h-6 w-6 text-purple-700" />
              For Educators
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-600">
              Explore a rich library of resources to guide discussions on ethics, relationships, and consent.
            </p>
            <Button 
              onClick={() => onSelect('educators')} 
              className="w-full bg-purple-700 hover:bg-purple-600 text-white"
            >
              Enter Educators Section
            </Button>
          </CardContent>
        </Card>

        {/* Students Section Card */}
        <Card className="hover:shadow-lg transition-shadow bg-white rounded-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-bold text-blue-700">
              <Users className="h-6 w-6 text-blue-700" />
              For Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-600">
              Discover engaging resources to build respect, relationships, and ethical decision-making skills.
            </p>
            <Button 
              onClick={() => onSelect('students')} 
              className="w-full bg-blue-700 hover:bg-blue-600 text-white"
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
