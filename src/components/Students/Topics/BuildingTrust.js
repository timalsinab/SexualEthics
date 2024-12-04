import React from "react";

const BuildingTrust = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Building Trust and Respect</h1>
      <p className="text-lg text-gray-700 mb-6">
        Build trust in relationships by being reliable and showing respect for others' feelings and boundaries. Trust is the foundation of any healthy relationship.
      </p>

      {/* Key Principles of Building Trust */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Principles of Building Trust</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-gray-700">
            <strong>Be Honest:</strong> Always tell the truth, even when it’s difficult.
          </li>
          <li className="text-gray-700">
            <strong>Keep Promises:</strong> Follow through on your commitments to show reliability.
          </li>
          <li className="text-gray-700">
            <strong>Respect Boundaries:</strong> Understand and honor the personal limits of others.
          </li>
          <li className="text-gray-700">
            <strong>Be Consistent:</strong> Act in a predictable and stable manner to build reliability.
          </li>
          <li className="text-gray-700">
            <strong>Communicate Openly:</strong> Share your thoughts and feelings honestly and encourage others to do the same.
          </li>
        </ul>
      </div>

      {/* Examples of Trust-Building Behaviors */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Examples of Trust-Building Behaviors</h2>
        <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
          <div>
            <p className="text-gray-800 font-medium">Scenario: Sharing a Secret</p>
            <p className="text-gray-700">
              When a friend shares a secret with you, keep it private. Avoid sharing it with others to prove you're trustworthy.
            </p>
          </div>
          <div>
            <p className="text-gray-800 font-medium">Scenario: Being Punctual</p>
            <p className="text-gray-700">
              If you agree to meet someone at a specific time, show up on time to demonstrate reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Steps to Foster Respect */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Steps to Foster Respect</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li className="text-gray-700">
            <strong>Listen Actively:</strong> Show that you value others’ opinions by listening without interrupting.
          </li>
          <li className="text-gray-700">
            <strong>Acknowledge Feelings:</strong> Recognize and validate others’ emotions, even if you don’t fully agree.
          </li>
          <li className="text-gray-700">
            <strong>Speak Kindly:</strong> Use polite language and avoid harsh criticism or insults.
          </li>
          <li className="text-gray-700">
            <strong>Celebrate Differences:</strong> Respect others' unique backgrounds, beliefs, and preferences.
          </li>
        </ol>
      </div>

      {/* Activity Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Practice Activity</h2>
        <p className="text-gray-700 mb-4">
          Reflect on how you can build trust and show respect in your relationships. Try these steps:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-gray-700">
            Think of a time when someone trusted you. Write down what you did to earn that trust.
          </li>
          <li className="text-gray-700">
            Identify a situation where you could show more respect. Plan one action to improve.
          </li>
          <li className="text-gray-700">
            Share with a friend or family member what trust and respect mean to you.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default BuildingTrust;
