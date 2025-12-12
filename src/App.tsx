import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProgressBar from "./components/ProgressBar.jsx";
import QuestionCard from "./components/QuestionCard";
import NavigationButtons from "./components/NavigationButtons";
import FinalScore from "./components/FinalScore";
import { quizQuestions } from "./data/questions";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex];

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers(new Array(quizQuestions.length).fill(null));
    setShowResults(false);
  };

  const calculateScore = () => {
    const correctAnswers = answers.filter(
      (answer, index) => answer === quizQuestions[index].correctAnswer
    ).length;
    return Math.round((correctAnswers / quizQuestions.length) * 100);
  };

  const canGoNext = selectedAnswer !== null;
  const canGoBack = currentQuestionIndex > 0;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-100 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl border border-white/70 bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-100 shadow-sm rounded-[48px] p-14">
        <div className="bg-white rounded-[36px] px-20 py-20 min-h-[720px] relative">
          {!showResults ? (
            <>
              <div className="text-center mt-6 mb-16">
                <h1 className="text-6xl font-heading italic font-bold bg-gradient-to-r from-[#1a4152] via-[#2b7696] to-[#369ac4] bg-clip-text text-transparent leading-tight">
                  Test Your Knowledge
                </h1>
                <p className="text-gray-600 text-sm">
                  Answer all questions to see your results
                </p>
              </div>

              <div className="mt-10 mb-20">
                <ProgressBar
                  currentQuestion={currentQuestionIndex + 1}
                  totalQuestions={quizQuestions.length}
                />
              </div>

              <AnimatePresence mode="wait">
                <QuestionCard
                  key={currentQuestionIndex}
                  question={currentQuestion}
                  questionNumber={currentQuestionIndex + 1}
                  selectedAnswer={selectedAnswer}
                  onSelectAnswer={handleSelectAnswer}
                />
              </AnimatePresence>

              <div className="mt-20">
                <NavigationButtons
                  onBack={handleBack}
                  onNext={handleNext}
                  canGoBack={canGoBack}
                  canGoNext={canGoNext}
                />
              </div>

              {!showResults && currentQuestionIndex === 0 && (
                <div className="absolute bottom-0 left-8">
                  <div className="relative w-40 h-40">
                    <div className="absolute -top-10 -left-20 bg-white px-4 py-2 rounded-xl shadow-md border-2 border-[#77c7e3]">
                      <span className="text-sm font-medium text-gray-800">
                        Best of luck!
                      </span>
                      <div className="absolute right-6 -bottom-2 w-3 h-3 bg-white rotate-45 border-2 border-t-0 border-l-0 border-[#77c7e3]" />
                    </div>

                    <img src="/paw.gif" alt="paw" className="w-40 h-40" />
                  </div>
                </div>
              )}
            </>
          ) : (
            <FinalScore score={calculateScore()} onRestart={handleRestart} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
