import React from "react";
import { Link, useNavigate } from "react-router-dom";

const RelationshipSkills = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // Navigate to the previous page
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
      >
        Back
      </button>

      {/* Main Header */}
      <h1 className="text-3xl font-bold mb-6 text-center">Relationship Skills</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
        Friendships make life fun and exciting! Learning how to be a kind friend and solve problems 
        together helps everyone feel safe, happy, and included. Let’s explore some cool ways to 
        make great friends and handle tricky situations like a pro!
      </p>

      {/* Subtopics Section */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-xl font-semibold mb-4">Explore Topics:</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <Link
              to="/students/relationship-skills/effective-communication"
              className="text-blue-600 hover:underline"
            >
              Effective Communication
            </Link>
            <p className="text-sm text-gray-600">
              Learn how to share your thoughts and listen to friends in a kind way.
            </p>
          </li>
          <li>
            <Link
              to="/students/relationship-skills/conflict-resolution"
              className="text-blue-600 hover:underline"
            >
              Conflict Resolution
            </Link>
            <p className="text-sm text-gray-600">
              Find out how to fix arguments and make things better with friends.
            </p>
          </li>
          <li>
            <Link
              to="/students/relationship-skills/building-trust"
              className="text-blue-600 hover:underline"
            >
              Building Trust and Respect
            </Link>
            <p className="text-sm text-gray-600">
              Discover ways to be a trustworthy and caring friend to others.
            </p>
          </li>
        </ul>
      </div>

      {/* Additional Resources Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Extra Fun and Learning:</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <a
              href="https://www.pbs.org/parents/thrive/helping-your-child-navigate-social-situations-with-confidence-and-kindness"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              PBS Kids: Teaching Kindness
            </a>
            <p className="text-sm text-gray-600">
              Fun activities and tips to help kids learn kindness and empathy.
            </p>
          </li>
          <li>
            <a
              href="https://www.stopbullying.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              StopBullying.gov
            </a>
            <p className="text-sm text-gray-600">
              Simple ways for kids to understand and stop bullying at school or online.
            </p>
          </li>
          <li>
            <a
              href="https://kidshelpline.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Kids Helpline
            </a>
            <p className="text-sm text-gray-600">
              Advice and resources for kids to deal with feelings and tough situations.
            </p>
          </li>
          <li>
            <a
              href="https://www.sesamestreet.org/toolkits"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Sesame Street Toolkits
            </a>
            <p className="text-sm text-gray-600">
              Interactive videos and guides for young kids to learn about friendship and emotions.
            </p>
          </li>
        </ul>
      </div>

      {/* Inspirational Section */}
      <div className="mt-12 bg-purple-100 rounded-lg p-6 max-w-3xl mx-auto text-center">
        <p className="text-lg italic text-gray-700">
          "Friendship is the golden thread that ties the heart of all the world."
        </p>
        <p className="text-sm mt-2 text-gray-500">— John Evelyn</p>
      </div>
    </div>
  );
};

export default RelationshipSkills;
