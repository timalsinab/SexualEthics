import React from "react";

const ConflictResolution = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Conflict Resolution</h1>
      <p className="text-lg text-gray-700 mb-6">
        Learn how to handle disagreements constructively. Focus on finding a solution rather than winning an argument. 
        Resolving conflicts peacefully strengthens relationships and builds trust.
      </p>

      {/* Steps to Resolve Conflicts */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Steps to Resolve Conflicts</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li className="text-gray-700">
            Stay Calm: Take a deep breath and try to remain composed. Emotions can escalate conflicts.
          </li>
          <li className="text-gray-700">
            Listen Actively: Pay attention to what the other person is saying without interrupting. Use phrases like 
            "I hear you saying..." to show understanding.
          </li>
          <li className="text-gray-700">
            Express Your Feelings: Use "I" statements to share your perspective. For example, "I feel upset because..."
          </li>
          <li className="text-gray-700">
            Find Common Ground: Identify points you both agree on. These can be the foundation for a solution.
          </li>
          <li className="text-gray-700">
            Collaborate on Solutions: Brainstorm together to find a resolution that works for both parties.
          </li>
          <li className="text-gray-700">
            Agree and Move Forward: Once you agree on a solution, let go of lingering resentment and move forward.
          </li>
        </ol>
      </div>

      {/* Common Conflict Scenarios */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Conflict Scenarios</h2>
        <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
          <div>
            <p className="text-gray-800 font-medium">Scenario: Sharing Resources</p>
            <p className="text-gray-700">
              Instead of saying, "You always take more than your share!"
            </p>
            <p className="text-gray-700">
              Say, "I feel it's unfair when I don’t get to use this equally. Can we come up with a way to share better?"
            </p>
          </div>
          <div>
            <p className="text-gray-800 font-medium">Scenario: Misunderstandings</p>
            <p className="text-gray-700">
              Instead of saying, "You don’t understand what I mean!"
            </p>
            <p className="text-gray-700">
              Say, "I think we’re seeing this differently. Can I explain my perspective again?"
            </p>
          </div>
        </div>
      </div>

      {/* Conflict Resolution Tips */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Tips for Conflict Resolution</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-gray-700">
            Stay focused on the current issue and avoid bringing up past conflicts.
          </li>
          <li className="text-gray-700">
            Use neutral language and avoid blaming or criticizing.
          </li>
          <li className="text-gray-700">
            Take a short break if emotions are too high and revisit the discussion when calmer.
          </li>
        </ul>
      </div>

      {/* Activity Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Practice Activity</h2>
        <p className="text-gray-700 mb-4">
          Think about a recent conflict you’ve had. Follow these steps to practice resolving it:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-gray-700">
            Write down what happened from your perspective.
          </li>
          <li className="text-gray-700">
            Write down how you think the other person saw the situation.
          </li>
          <li className="text-gray-700">
            Identify at least one point of agreement or shared interest.
          </li>
          <li className="text-gray-700">
            Propose a solution you both might find fair.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ConflictResolution;
