import React from "react";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { FaCheckCircle } from "react-icons/fa";

// Define Question Type
type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

// Zustand Store Interface
interface QuizState {
  currentQuestionIndex: number;
  answers: (number | null)[];
  score: number;
  showScore: boolean;
  questions: Question[];
  selectAnswer: (optionIndex: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  resetQuiz: () => void;
}

// Shuffle Questions
const shuffleArray = <T,>(array: T[]): T[] =>
  [...array].sort(() => Math.random() - 0.5);

// Define Quiz Questions
const initialQuestions: Question[] = shuffleArray([
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5"],
    correctAnswer: 1,
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Rome"],
    correctAnswer: 1,
  },
  {
    question: "Which programming language is best for React?",
    options: ["Python", "JavaScript", "C++"],
    correctAnswer: 1,
  },
]);

// Zustand Store Setup
const useQuizState = create<QuizState>()(
  devtools(
    persist(
      (set) => ({
        currentQuestionIndex: 0,
        answers: Array(initialQuestions.length).fill(null),
        score: 0,
        showScore: false,
        questions: initialQuestions,
        selectAnswer: (optionIndex) =>
          set((state) => {
            const newAnswers = [...state.answers];
            newAnswers[state.currentQuestionIndex] = optionIndex;
            return { answers: newAnswers };
          }),
        nextQuestion: () =>
          set((state) => {
            const isLast =
              state.currentQuestionIndex === state.questions.length - 1;
            if (isLast) {
              const score = state.answers.reduce(
                (acc, ans, index) =>
                  acc + (ans === state.questions[index].correctAnswer ? 1 : 0),
                0
              );
              return { showScore: true, score };
            }
            return { currentQuestionIndex: state.currentQuestionIndex + 1 };
          }),
        prevQuestion: () =>
          set((state) => ({
            currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
          })),
        resetQuiz: () =>
          set(() => ({
            currentQuestionIndex: 0,
            answers: Array(initialQuestions.length).fill(null),
            score: 0,
            showScore: false,
          })),
      }),
      { name: "quiz-storage", partialize: (state) => ({ answers: state.answers, score: state.score }) }
    )
  )
);

// Main Quiz Component
const QuizGame = () => {
  const {
    currentQuestionIndex,
    questions,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    resetQuiz,
    showScore,
    score,
    answers,
  } = useQuizState();

  const handleSubmit = () => nextQuestion();

  return (
    <div className="p-6 max-w-xl mx-auto bg-gray-800 text-white rounded-lg shadow-md">
      {showScore ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Your Score</h2>
          <p className="text-3xl my-4">
            {score}/{questions.length}
          </p>
          <button
            onClick={resetQuiz}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold">
            {questions[currentQuestionIndex].question}
          </h2>
          <ul className="mt-4 space-y-2">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li
                key={index}
                onClick={() => selectAnswer(index)}
                className={`p-2 rounded-md cursor-pointer ${
                  answers[currentQuestionIndex] === index
                    ? "bg-green-500"
                    : "bg-gray-700"
                }`}
              >
                {option}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between">
            <button
              onClick={prevQuestion}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Previous
            </button>

            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={nextQuestion}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            )}
          </div>

          {/* Progress */}
          <div className="mt-6">
            <ul className="flex flex-wrap gap-4 justify-center">
              {questions.map((_, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <FaCheckCircle
                    className={
                      answers[index] !== null
                        ? "text-green-500"
                        : "text-gray-500"
                    }
                  />
                  Question {index + 1}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizGame;
