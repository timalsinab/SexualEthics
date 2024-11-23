import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

const RespectingDifferences = () => {
  const [questionPool, setQuestionPool] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [explanation, setExplanation] = useState('');
  const navigate = useNavigate();

  // Full question pool
  const allQuestions = [
    {
      question: "How should you respond if someone disagrees with your opinion?",
      options: [
        { text: "Listen to their perspective and respond calmly.", isCorrect: true, explanation: "Listening shows respect and fosters understanding." },
        { text: "Interrupt them and explain why they’re wrong.", isCorrect: false, explanation: "Interrupting is disrespectful and escalates conflict." },
        { text: "Ignore them and walk away.", isCorrect: false, explanation: "Ignoring them shows you don’t value their opinion." },
      ],
    },
    {
      question: "What is a respectful way to express your disagreement?",
      options: [
        { text: "Say, 'I understand your point, but here’s how I see it.'", isCorrect: true, explanation: "This approach validates their opinion while sharing your perspective." },
        { text: "Raise your voice to make them hear your opinion.", isCorrect: false, explanation: "Raising your voice can make the other person defensive." },
        { text: "Dismiss their opinion and change the subject.", isCorrect: false, explanation: "Dismissing someone’s opinion shows disrespect." },
      ],
    },
    {
      question: "Why is it important to respect different opinions?",
      options: [
        { text: "It helps build mutual understanding and stronger relationships.", isCorrect: true, explanation: "Respecting opinions strengthens relationships and mutual understanding." },
        { text: "Because it’s the easiest way to avoid arguments.", isCorrect: false, explanation: "Avoiding arguments is not the main goal of respect." },
        { text: "It’s not important; only your opinion matters.", isCorrect: false, explanation: "This shows a lack of empathy and respect." },
      ],
    },
    {
      question: "What should you do when someone criticizes your idea?",
      options: [
        { text: "Listen and ask questions to understand their point.", isCorrect: true, explanation: "This approach encourages dialogue and understanding." },
        { text: "Defend your idea aggressively.", isCorrect: false, explanation: "Aggression can escalate the situation and shut down discussion." },
        { text: "Ignore their criticism and change the topic.", isCorrect: false, explanation: "Ignoring criticism misses an opportunity for growth." },
      ],
    },
    {
      question: "How can you show respect during a debate?",
      options: [
        { text: "Let others finish speaking before you respond.", isCorrect: true, explanation: "Allowing others to finish speaking shows patience and respect." },
        { text: "Interrupt them to correct their points immediately.", isCorrect: false, explanation: "Interrupting disrupts the flow and shows disrespect." },
        { text: "Focus only on proving your point.", isCorrect: false, explanation: "Focusing solely on your point can alienate others." },
      ],
    },
    {
      question: "Why should you encourage others to share their views?",
      options: [
        { text: "It promotes mutual respect and understanding.", isCorrect: true, explanation: "Encouraging others fosters a culture of respect and openness." },
        { text: "Because it makes conversations longer.", isCorrect: false, explanation: "Lengthening a conversation isn’t a meaningful goal." },
        { text: "Only to find flaws in their reasoning.", isCorrect: false, explanation: "Focusing on flaws rather than understanding isn’t constructive." },
      ],
    },
  ];

  useEffect(() => {
    // Randomly select 3 questions
    const randomizedQuestions = [...allQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((question) => ({
        ...question,
        options: question.options.sort(() => Math.random() - 0.5), // Shuffle options
      }));
    setQuestionPool(randomizedQuestions);
  }, []);

  const handleAnswerClick = (option) => {
    if (hasAnswered) return; // Prevent multiple clicks

    setHasAnswered(true);
    setExplanation(option.explanation);

    // Increase score for correct answers
    if (option.isCorrect) {
      setScore((prevScore) => prevScore + 10);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000); // Stop confetti after 2 seconds
    }

    // Move to the next question or show completion screen
    setTimeout(() => {
      if (currentQuestionIndex + 1 < 3) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setHasAnswered(false); // Reset for next question
      } else {
        setShowCompletion(true);
        setExplanation('');
      }
    }, 3000);
  };

  const goToStudentsPage = () => {
    navigate("/students");
  };

  const goToNextScenario = () => {
    navigate("/students/interactive-scenarios/using-technology-responsibly");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 p-6">
      {/* Confetti */}
      {showConfetti && <Confetti />}

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-blue-700 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-lg font-bold">Respecting Differences in Opinions</h1>
        <div className="text-lg font-semibold">Score: {score}</div>
      </div>

      <div className="mt-16">
        {!showCompletion ? (
          <div>
            <h2 className="text-3xl font-bold mb-4">{questionPool[currentQuestionIndex]?.question}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questionPool[currentQuestionIndex]?.options.map((option, index) => (
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
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
            <p className="text-lg text-gray-700 mt-4">
              You've completed the quiz. Your final score is: <strong>{score}</strong>
            </p>
            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={goToStudentsPage}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Back to Students Page
              </button>
              <button
                onClick={goToNextScenario}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Next Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RespectingDifferences;
