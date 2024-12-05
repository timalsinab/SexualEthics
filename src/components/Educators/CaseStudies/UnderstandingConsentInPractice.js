import React from "react";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

const UnderstandingConsentInPractice = () => {
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

      <h1 className="text-3xl font-bold mb-6">Understanding Consent in Practice</h1>
      <p className="text-lg text-gray-700 mb-6">
        Informed consent is a cornerstone of ethical practice. This case study examines challenges in implementing informed consent effectively and ethically.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Case Study Scenario</h2>
      <p className="text-gray-700 mb-6">
        A hospital introduces a new electronic consent form for surgical procedures. During a busy clinic day, patients are asked to sign the form on a tablet without a thorough discussion of the surgery's risks and benefits. Some patients later express confusion about the procedure they consented to.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Discussion Questions</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>What are the ethical implications of obtaining consent through electronic forms without detailed discussions?</li>
        <li>How can healthcare providers ensure patients understand the information before consenting?</li>
        <li>What measures can be taken to improve the informed consent process in a digital environment?</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Further Reading and Resources</h2>
      <ul className="list-disc pl-6 space-y-2 text-blue-600">
        <li><a href="https://trialsjournal.biomedcentral.com/articles/10.1186/s13063-020-04969-w" target="_blank" rel="noopener noreferrer">The Reality of Informed Consent</a></li>
      </ul>
    </div>
  );
};

export default UnderstandingConsentInPractice;
