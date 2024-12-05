import React from "react";
import Forum from "./Forum";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";

const ReflectionExercises = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-red-50 to-pink-50 p-6">
              <Button
        variant="outline"
        onClick={() => navigate("/educators")}
        className="mb-6 px-4 py-2 border border-gray-300 text-gray-800 bg-white hover:text-white hover:bg-gray-800 rounded-lg transition-all"
      >
        Back to Educator's Section
      </Button>
      <Forum topicTitle="Russ" />
    </div>
  );
};

export default ReflectionExercises;
