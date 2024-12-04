import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UsingTechnologyResponsibly = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [explanation, setExplanation] = useState("");
  const navigate = useNavigate();

  const allQuestions = [
    {
      question: "What should you do before sharing someone’s photo online?",
      options: [
        {
          text: "Ask for their permission.",
          isCorrect: true,
          explanation: "Asking for permission shows respect for others' privacy.",
        },
        {
          text: "Assume they’ll be okay with it.",
          isCorrect: false,
          explanation: "You should never assume; always seek consent.",
        },
        {
          text: "Share it and apologize later if they mind.",
          isCorrect: false,
          explanation: "Apologizing later doesn't undo the harm caused.",
        },
      ],
    },
    {
      question: "If a friend overshares private details online, what is the best response?",
      options: [
        {
          text: "Tell them how they might feel later.",
          isCorrect: true,
          explanation: "Helping them reflect encourages better decisions.",
        },
        {
          text: "Encourage them to share more for engagement.",
          isCorrect: false,
          explanation: "This could worsen the situation and harm their privacy.",
        },
        {
          text: "Ignore it; it’s their choice.",
          isCorrect: false,
          explanation: "Ignoring it doesn’t support your friend or guide them.",
        },
      ],
    },
    {
      question: "What’s the best way to respond if you receive an inappropriate message?",
      options: [
        {
          text: "Politely set boundaries and ask them to stop.",
          isCorrect: true,
          explanation: "Setting boundaries helps maintain respect in communication.",
        },
        {
          text: "Forward the message to someone else.",
          isCorrect: false,
          explanation: "Sharing inappropriate messages spreads the problem further.",
        },
        {
          text: "Respond with a similar message.",
          isCorrect: false,
          explanation: "Responding similarly escalates inappropriate behavior.",
        },
      ],
    },
  ];

  useEffect(() => {
    const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 3);
    setQuizQuestions(
      shuffledQuestions.map((q) => ({
        ...q,
        options: q.options.sort(() => Math.random() - 0.5),
      }))
    );
  }, []);

  const handleAnswerClick = (option) => {
    if (hasAnswered) return; // Prevent multiple clicks

    setHasAnswered(true);
    setExplanation(option.explanation);

    if (option.isCorrect) {
      setScore((prevScore) => prevScore + 10); // Increment score for correct answers
    }

    // Proceed to the next question or show completion after a delay
    setTimeout(() => {
      if (currentQuestionIndex + 1 < quizQuestions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setHasAnswered(false); // Reset for the next question
        setExplanation(""); // Clear the explanation
      } else {
        setShowCompletion(true); // Show the completion screen
      }
    }, 3000);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowCompletion(false);
    setHasAnswered(false);
    setExplanation("");
    const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 3);
    setQuizQuestions(
      shuffledQuestions.map((q) => ({
        ...q,
        options: q.options.sort(() => Math.random() - 0.5),
      }))
    );
  };

  const goBackToStudents = () => {
    navigate("/students");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 p-6">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-blue-700 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-lg font-bold">Using Technology Responsibly</h1>
        <div className="text-lg font-semibold">Score: {score}</div>
      </div>

      <div className="mt-16">
        {showCompletion ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
            <p className="text-lg text-gray-700 mt-4">
              You've completed the quiz. Your final score is: <strong>{score}</strong>
            </p>
            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={resetQuiz}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Try Again
              </button>
              <button
                onClick={goBackToStudents}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Go Back to Student Resources
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold mb-4">{quizQuestions[currentQuestionIndex]?.question}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quizQuestions[currentQuestionIndex]?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  disabled={hasAnswered} // Disable buttons after selection
                  className={`px-4 py-2 border rounded-md shadow-sm ${
                    hasAnswered
                      ? option.isCorrect
                        ? "bg-green-500 text-white" // Highlight correct answers in green
                        : "bg-red-500 text-white" // Highlight incorrect answers in red
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {option.text}
                </button>
              ))}
            </div>
            {hasAnswered && (
              <p className="mt-4 text-gray-700 font-medium">{explanation}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UsingTechnologyResponsibly;
