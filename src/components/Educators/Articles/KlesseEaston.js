import React from "react";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
const PolyamoryArticle = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 p-6">
                  {/* Back Button */}
                  <Button
        variant="outline"
        onClick={() => navigate("/educators")}
        className="mb-6 px-4 py-2 border border-gray-300 text-gray-800 bg-white hover:text-white hover:bg-gray-800 rounded-lg transition-all"
      >
        Back to Educators Section
      </Button>

      <h1 className="text-3xl font-bold mb-6">The Trials and Tribulations of Being a ‘Slut’</h1>
      <p className="text-lg text-gray-700 mb-6">
        This article explores the stigmatization of non-monogamous identities, addressing the societal prejudices faced by individuals in polyamorous relationships. It examines cultural narratives and challenges the conventional norms surrounding love and relationships.
      </p>

      {/* Key Themes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Themes</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-gray-700">
            <strong>Stigma and Non-Monogamy:</strong> Discusses the societal challenges faced by individuals in non-traditional relationships.
          </li>
          <li className="text-gray-700">
            <strong>Cultural Narratives:</strong> Examines how media and culture influence perceptions of polyamory.
          </li>
          <li className="text-gray-700">
            <strong>Challenging Relationship Norms:</strong> Advocates for a more inclusive understanding of love and commitment.
          </li>
        </ul>
      </div>

      {/* Educational Value */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Educational Value</h2>
        <p className="text-gray-700">
          Educators can use this piece to facilitate discussions on:
        </p>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-gray-700">
            The impact of societal norms on personal identity and relationships.
          </li>
          <li className="text-gray-700">
            How cultural narratives shape the acceptance of diverse lifestyles.
          </li>
          <li className="text-gray-700">
            Strategies to foster inclusivity and challenge prejudice in the classroom.
          </li>
        </ul>
      </div>

      {/* Reflection Activity */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Reflection Activity</h2>
        <p className="text-gray-700 mb-4">
          Reflect on the societal challenges faced by individuals in non-monogamous relationships:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-gray-700">
            Research a real-life story of someone in a polyamorous relationship and their experiences with societal stigma. Present your findings to a group.
          </li>
          <li className="text-gray-700">
            Write a reflection on how traditional relationship norms influence societal attitudes toward polyamory.
          </li>
          <li className="text-gray-700">
            Discuss how educational spaces can create inclusive environments for discussing diverse relationship models.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PolyamoryArticle;
