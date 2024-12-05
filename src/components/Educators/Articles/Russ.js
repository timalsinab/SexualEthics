import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
const PornographyForWomen = () => {
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
      <h1 className="text-3xl font-bold mb-6">Pornography by Women for Women, with Love</h1>
      <p className="text-lg text-gray-700 mb-6">
        Joanna Russ explores the transformative role of female-centric sexual fantasies in challenging traditional notions of erotica. The article emphasizes autonomy, desire, and the creative empowerment of women in reimagining narratives typically dominated by male perspectives.
      </p>

      {/* Key Themes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Themes</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-gray-700">
            <strong>Autonomy in Sexual Narratives:</strong> The power of women crafting their own fantasies free from societal constraints.
          </li>
          <li className="text-gray-700">
            <strong>Challenging Gender Norms:</strong> How female perspectives redefine traditional concepts of erotica and desire.
          </li>
          <li className="text-gray-700">
            <strong>Empowerment through Creativity:</strong> Using fan fiction and media to explore and express female desire.
          </li>
        </ul>
      </div>

      {/* Educational Value */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Educational Value</h2>
        <p className="text-gray-700">
          This article can be a valuable resource for educators exploring topics such as:
        </p>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-gray-700">
            The role of media in shaping sexual ethics and societal norms.
          </li>
          <li className="text-gray-700">
            Understanding the intersection of creativity and empowerment in marginalized groups.
          </li>
          <li className="text-gray-700">
            Challenging and redefining the boundaries of sexual narratives.
          </li>
        </ul>
      </div>

      {/* Reflection Activity */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Reflection Activity</h2>
        <p className="text-gray-700 mb-4">
          Reflect on how media and creative expression influence societal views on sexual ethics:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li className="text-gray-700">
            Identify a piece of media or literature that challenges traditional gender roles. How does it empower marginalized voices?
          </li>
          <li className="text-gray-700">
            Consider how creative outlets like fan fiction allow individuals to explore autonomy and desire. Share examples in a discussion group.
          </li>
          <li className="text-gray-700">
            Write a short reflection on how this article changes your understanding of sexual empowerment through media.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PornographyForWomen;
