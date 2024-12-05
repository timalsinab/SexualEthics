import React from "react";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

const AddressingPowerImbalances = () => {
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

      <h1 className="text-3xl font-bold mb-6">Addressing Power Imbalances</h1>
      <p className="text-lg text-gray-700 mb-6">
        Power imbalances in organizations can lead to ethical conflicts. This case study explores strategies to address and resolve such dynamics effectively.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Case Study Scenario</h2>
      <p className="text-gray-700 mb-6">
        In a corporate setting, a junior employee, Alex, feels uncomfortable with the way their manager, Pat, assigns tasks. Pat often delegates menial tasks to Alex that are outside their job description, implying that refusal could affect Alex's career progression.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Discussion Questions</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>What are the ethical concerns related to the manager's behavior towards Alex?</li>
        <li>How can Alex address this power imbalance without jeopardizing their position?</li>
        <li>What organizational policies can help prevent such power dynamics?</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Further Reading and Resources</h2>
      <ul className="list-disc pl-6 space-y-2 text-blue-600">
        <li><a href="https://theworkplacemediator.co.uk/addressing-power-imbalances-in-workplace-conflicts/" target="_blank" rel="noopener noreferrer">Addressing Power Imbalances</a></li>
      </ul>
    </div>
  );
};

export default AddressingPowerImbalances;
