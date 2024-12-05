import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";

const SexCarceralism = () => {
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
      <h1 className="text-3xl font-bold mb-6">Sex, Carceralism, Capitalism</h1>
      <p className="text-lg text-gray-700 mb-6">
        This work critiques the reliance on state power to address gendered violence, exposing the shortcomings of carceral feminism and its disproportionate impact on marginalized women. It advocates for systemic change beyond punitive measures.
      </p>

      {/* Key Themes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Themes</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-gray-700">
            <strong>Critique of Carceral Feminism:</strong> Challenges the belief that incarceration is an effective solution to gendered violence.
          </li>
          <li className="text-gray-700">
            <strong>Intersectionality and Justice:</strong> Explores how systemic oppression affects marginalized communities.
          </li>
          <li className="text-gray-700">
            <strong>Alternatives to Punitive Measures:</strong> Proposes restorative and transformative justice as paths to equity.
          </li>
        </ul>
      </div>

      {/* Educational Value */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Educational Value</h2>
        <p className="text-gray-700">
          This article serves as an essential resource for educators exploring:
        </p>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-gray-700">
            The limitations of punitive approaches in addressing systemic inequality.
          </li>
          <li className="text-gray-700">
            The role of capitalism and state power in perpetuating oppression.
          </li>
          <li className="text-gray-700">
            Intersectionality as a framework for understanding social justice issues.
          </li>
        </ul>
      </div>

      {/* Reflection Activity */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Reflection Activity</h2>
        <p className="text-gray-700 mb-4">
          Consider how systemic changes could address gendered violence more effectively:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-gray-700">
            Research a case where restorative justice was applied to address violence. Discuss its outcomes compared to traditional punitive measures.
          </li>
          <li className="text-gray-700">
            Write a reflection on how carceral feminism might overlook the needs of marginalized communities.
          </li>
          <li className="text-gray-700">
            Discuss how societal structures, such as capitalism, intersect with issues of gender justice in a group setting.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SexCarceralism;
