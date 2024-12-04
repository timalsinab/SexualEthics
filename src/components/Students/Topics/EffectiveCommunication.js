import React from "react";

const EffectiveCommunication = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-yellow-50 to-green-50 p-6">
      <h1 className="text-3xl font-bold mb-4">Effective Communication</h1>
      <p className="text-lg text-gray-700 mb-6">
        Learn how to communicate effectively in relationships by expressing your feelings clearly and listening actively. 
        Good communication strengthens friendships and helps solve problems.
      </p>

      {/* Tips Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tips for Effective Communication</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-gray-700">
            Use "I" Statements: Share your emotions without blaming others. For example, say 
            <em> "I feel sad when you interrupt me."</em>
          </li>
          <li className="text-gray-700">
            Practice Active Listening: Focus fully on the speaker, make eye contact, and nod to show you’re listening.
          </li>
          <li className="text-gray-700">
            Stay Calm: Take a deep breath before speaking, especially if you're upset. Calm tones help prevent arguments.
          </li>
          <li className="text-gray-700">
            Ask Clarifying Questions: If you don’t understand, ask politely. For example, say <em>"Can you explain what you mean?"</em>
          </li>
          <li className="text-gray-700">
            Avoid Interrupting: Let others finish speaking before you respond.
          </li>
        </ul>
      </div>

      {/* Examples Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Examples of Effective Communication</h2>
        <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
          <div>
            <p className="text-gray-800 font-medium">Scenario: A Friend is Late</p>
            <p className="text-gray-700">
              Instead of saying, <em>"You're always late. You don’t care about my time!"</em>
            </p>
            <p className="text-gray-700">
              Say, <em>"I feel frustrated when you arrive late because it makes me feel like my time isn’t valued."</em>
            </p>
          </div>
          <div>
            <p className="text-gray-800 font-medium">Scenario: Sharing an Idea</p>
            <p className="text-gray-700">
              Instead of saying, <em>"Your idea doesn’t make sense."</em>
            </p>
            <p className="text-gray-700">
              Say, <em>"I think I see it differently. Can we explore both ideas to find the best solution?"</em>
            </p>
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Try It Out!</h2>
        <p className="text-gray-700 mb-4">
          Practice communication with a friend or family member using these steps:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-gray-700">
            Think of a situation where you want to share your feelings.
          </li>
          <li className="text-gray-700">
            Start with an "I" statement to express yourself.
          </li>
          <li className="text-gray-700">
            Listen to their response without interrupting.
          </li>
          <li className="text-gray-700">
            Ask a follow-up question to show you understand, like <em>"Did I get that right?"</em>
          </li>
        </ol>
      </div>

      {/* Additional Resources Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <a
              href="https://www.verywellmind.com/what-is-effective-communication-2794977"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Verywell Mind: Effective Communication Skills
            </a>
          </li>
          <li>
            <a
              href="https://kidshealth.org/en/parents/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              KidsHealth: Tips for Talking to Kids
            </a>
          </li>
          <li>
            <a
              href="https://www.skillsyouneed.com/ips/communication-skills.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              SkillsYouNeed: Effective Communication
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EffectiveCommunication;
