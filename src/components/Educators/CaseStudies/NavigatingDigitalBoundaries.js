import React from "react";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

const NavigatingDigitalBoundaries = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 p-6">
      <Button
        variant="outline"
        onClick={() => navigate("/educators")}
        className="mb-6 px-4 py-2 border border-gray-300 text-gray-800 bg-white hover:text-white hover:bg-gray-800 rounded-lg transition-all"
      >
        Back to Educator's Section
      </Button>

      <h1 className="text-3xl font-bold mb-6">Navigating Digital Boundaries</h1>
      <p className="text-lg text-gray-700 mb-6">
        In the digital age, maintaining professional boundaries is increasingly complex. This case study explores ethical dilemmas and strategies for navigating digital interactions while upholding professional standards.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Case Study Scenario</h2>
      <p className="text-gray-700 mb-6">
        Dr. Smith, a clinical psychologist, receives a Facebook friend request from a current client, Jane. Jane also follows Dr. Smith on Twitter and occasionally comments on her posts. Dr. Smith is unsure how to handle these online interactions without compromising professional boundaries.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Discussion Questions</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>What are the potential ethical issues arising from accepting a client's friend request on social media?</li>
        <li>How should Dr. Smith address Jane's online engagement with her posts?</li>
        <li>What policies can be implemented to manage digital boundaries with clients?</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Further Reading and Resources</h2>
      <ul className="list-disc pl-6 space-y-2 text-blue-600">
        <li><a href="https://personcenteredtech.com/boundaries-and-self-disclosure-in-the-digital-age-top-ethical-challenges/" target="_blank" rel="noopener noreferrer">Boundaries and Self-Disclosure in the Digital Age</a></li>
      </ul>
    </div>
  );
};

export default NavigatingDigitalBoundaries;
