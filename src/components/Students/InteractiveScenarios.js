import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

const InteractiveScenarios = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false); // Track if an option has been clicked
  const navigate = useNavigate();

  const scenarios = [
    {
      question: "Your friend seems upset but says they're fine. What should you do?",
      options: [
        { text: "Give them space and let them talk when they're ready.", isCorrect: true },
        { text: "Keep asking them what's wrong until they answer.", isCorrect: false },
        { text: "Ignore it; it's probably nothing.", isCorrect: false },
      ],
    },
    {
      question: "You're at a party, and someone doesn't want to dance. What should you do?",
      options: [
        { text: "Respect their choice and find someone else to dance with.", isCorrect: true },
        { text: "Try to convince them to join you.", isCorrect: false },
        { text: "Ignore them and grab their hand to pull them onto the dance floor.", isCorrect: false },
      ],
    },
  ];

  const handleAnswerClick = (isCorrect) => {
    if (hasAnswered) return; // Prevent multiple clicks

    setHasAnswered(true); // Set that the user has answered this question
    if (isCorrect) {
      setScore(score + 10); // Increase score for correct answers
      setShowConfetti(true); // Show confetti
      setTimeout(() => setShowConfetti(false), 2000); // Stop confetti after 2 seconds
    }

    // Move to the next question or finish the quiz
    setTimeout(() => {
      if (currentQuestion + 1 < scenarios.length) {
        setCurrentQuestion(currentQuestion + 1); // Go to the next question
      } else {
        setShowCompletion(true); // Show completion screen
      }
      setHasAnswered(false); // Reset answered state for the next question
    }, 2000); // Delay for transition effect
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowCompletion(false);
  };

  const navigateToNextScenario = () => {
    navigate("/students/interactive-scenarios/respecting-differences"); // Navigate to the next scenario
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 p-6">
      {/* Confetti Celebration */}
      {showConfetti && <Confetti />}

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-blue-700 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-lg font-bold">Interactive Scenarios</h1>
        <div className="text-lg font-semibold">Score: {score}</div>
      </div>

      <div className="mt-16">
        {showCompletion ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
            <p className="text-lg text-gray-700 mt-4">
              You've completed this scenario. Your final score is: <strong>{score}</strong>
            </p>
            <button
              onClick={resetQuiz}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Try Again
            </button>
            <button
              onClick={navigateToNextScenario}
              className="mt-6 ml-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Next Scenario
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-4">{scenarios[currentQuestion].question}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scenarios[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option.isCorrect)}
                  disabled={hasAnswered} // Disable the button if already answered
                  className={`px-4 py-2 border rounded-md shadow-sm hover:bg-gray-100 ${
                    hasAnswered
                      ? option.isCorrect
                        ? "bg-green-500 text-white" // Highlight correct answer in green
                        : "bg-red-500 text-white" // Highlight wrong answers in red
                      : "bg-white"
                  }`}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveScenarios;
