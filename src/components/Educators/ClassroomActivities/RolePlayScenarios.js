import React from "react";
import Forum from "./Forum";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

const RolePlayScenarios = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 via-yellow-50 to-green-50 p-6">
        <Button
        variant="outline"
        onClick={() => navigate("/educators")}
        className="mb-6 px-4 py-2 border border-gray-300 text-gray-800 bg-white hover:text-white hover:bg-gray-800 rounded-lg transition-all"
      >
        Back to Educator's Section
      </Button>
      <Forum topicTitle="Srinivasan" />
    </div>
  );
};

export default RolePlayScenarios;
