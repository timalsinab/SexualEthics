import React from "react";
import { Link } from "react-router-dom";

const RelationshipSkills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Relationship Skills</h1>
      <p className="text-lg text-gray-700 mb-6">
        Understand and develop essential skills for maintaining positive relationships. Explore the subtopics below:
      </p>
      <ul className="list-disc pl-6">
        <li className="mb-4">
          <Link
            to="/students/relationship-skills/effective-communication"
            className="text-blue-600 hover:underline"
          >
            Effective Communication
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/students/relationship-skills/conflict-resolution"
            className="text-blue-600 hover:underline"
          >
            Conflict Resolution
          </Link>
        </li>
        <li>
          <Link
            to="/students/relationship-skills/building-trust"
            className="text-blue-600 hover:underline"
          >
            Building Trust and Respect
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default RelationshipSkills;
