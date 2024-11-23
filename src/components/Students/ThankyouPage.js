import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
      <h1 className="text-4xl font-bold text-green-600 mb-6">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Congratulations on completing all the video lessons! We hope you enjoyed learning about respect, consent, and building positive relationships.
      </p>
      <button
        onClick={() => navigate('/students')}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Student Resources
      </button>
    </div>
  );
};

export default ThankYouPage;
