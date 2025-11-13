import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Award, RotateCcw, ChevronRight, Brain } from 'lucide-react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      question: 'What is the main goal of the Minimax algorithm?',
      options: [
        'Minimize execution time',
        'Maximize the minimum guaranteed score',
        'Minimize memory usage',
        'Maximize the number of moves',
      ],
      correct: 1,
      explanation: 'Minimax aims to maximize the worst-case scenario (minimum score), ensuring the best possible outcome even when the opponent plays optimally.',
    },
    {
      question: 'Which AI system first defeated a world chess champion?',
      options: [
        'AlphaGo',
        'Watson',
        'Deep Blue',
        'AlphaZero',
      ],
      correct: 2,
      explanation: 'Deep Blue, developed by IBM, defeated world chess champion Garry Kasparov in 1997, marking a historic milestone in AI.',
    },
    {
      question: 'What is the primary advantage of Alpha-Beta Pruning?',
      options: [
        'Finds better moves than minimax',
        'Reduces search space without losing optimality',
        'Works for imperfect information games',
        'Requires less memory',
      ],
      correct: 1,
      explanation: 'Alpha-Beta Pruning eliminates branches that cannot affect the final decision, dramatically reducing computation while still finding the optimal move.',
    },
    {
      question: 'In Reinforcement Learning, what does the "reward signal" represent?',
      options: [
        'The number of moves made',
        'Feedback indicating how good an action was',
        'The difficulty level',
        'The time taken to make a decision',
      ],
      correct: 1,
      explanation: 'The reward signal provides feedback to the agent, indicating whether an action led to a desirable or undesirable outcome, guiding the learning process.',
    },
    {
      question: 'What makes AlphaZero different from previous game AI systems?',
      options: [
        'It uses human expert knowledge',
        'It learns only from self-play with no human data',
        'It only plays one game',
        'It uses brute-force search',
      ],
      correct: 1,
      explanation: 'AlphaZero revolutionized game AI by learning to play at superhuman levels using only self-play, without any human game knowledge or databases.',
    },
    {
      question: 'What is the "exploration vs exploitation" dilemma in RL?',
      options: [
        'Choosing between different games',
        'Balancing trying new actions vs using known good actions',
        'Deciding when to stop training',
        'Choosing between different algorithms',
      ],
      correct: 1,
      explanation: 'Exploration vs exploitation is the tradeoff between trying new actions to discover better strategies (exploration) and using currently known best actions (exploitation).',
    },
    {
      question: 'Which game did AlphaGo master?',
      options: [
        'Chess',
        'Poker',
        'Go',
        'Dota 2',
      ],
      correct: 2,
      explanation: 'AlphaGo, developed by DeepMind, achieved a historic victory by defeating world champion Lee Sedol at Go in 2016.',
    },
    {
      question: 'What type of neural network does DQN use?',
      options: [
        'Recurrent Neural Networks',
        'Convolutional Neural Networks',
        'Deep Neural Networks',
        'Generative Adversarial Networks',
      ],
      correct: 2,
      explanation: 'Deep Q-Networks (DQN) use deep neural networks to approximate Q-values, enabling them to handle high-dimensional state spaces like images.',
    },
    {
      question: 'What is the time complexity of the basic Minimax algorithm?',
      options: [
        'O(n)',
        'O(n²)',
        'O(b^d)',
        'O(log n)',
      ],
      correct: 2,
      explanation: 'Minimax has exponential time complexity O(b^d) where b is the branching factor and d is the depth, as it explores all possible game states.',
    },
    {
      question: 'Which AI system was the first to beat professional poker players?',
      options: [
        'DeepStack',
        'Pluribus',
        'AlphaPoker',
        'PokerBot',
      ],
      correct: 1,
      explanation: 'Pluribus, developed by Facebook AI and Carnegie Mellon, was the first AI to consistently beat professional poker players in 6-player no-limit Texas Hold\'em.',
    },
  ];

  const handleAnswerClick = (index) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    const isCorrect = index === questions[currentQuestion].correct;
    const newAnswers = [...answers, { questionIndex: currentQuestion, isCorrect }];
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return { emoji: '🏆', message: 'Perfect Score! You\'re an AI expert!', color: 'text-yellow-600' };
    if (percentage >= 80) return { emoji: '🌟', message: 'Excellent! You know your AI!', color: 'text-green-600' };
    if (percentage >= 60) return { emoji: '👍', message: 'Good job! Keep learning!', color: 'text-blue-600' };
    if (percentage >= 40) return { emoji: '📚', message: 'Not bad! Review the concepts.', color: 'text-orange-600' };
    return { emoji: '💪', message: 'Keep studying! You\'ll get there!', color: 'text-red-600' };
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Brain className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Test Your Knowledge
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Challenge yourself with questions about AI game playing models and algorithms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          {!quizCompleted ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                    Score: {score}/{questions.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 dark:text-white">
                {questions[currentQuestion].question}
              </h2>

              {/* Options */}
              <div className="space-y-4 mb-8">
                {questions[currentQuestion].options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === questions[currentQuestion].correct;
                  const showCorrect = showResult && isCorrect;
                  const showIncorrect = showResult && isSelected && !isCorrect;

                  return (
                    <motion.button
                      key={index}
                      whileHover={!showResult ? { scale: 1.02 } : {}}
                      whileTap={!showResult ? { scale: 0.98 } : {}}
                      onClick={() => handleAnswerClick(index)}
                      disabled={showResult}
                      className={`
                        w-full p-5 rounded-xl text-left font-semibold transition-all duration-300
                        flex items-center justify-between
                        ${!showResult ? 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border-2 border-gray-200 dark:border-gray-600' : ''}
                        ${showCorrect ? 'bg-green-100 dark:bg-green-900 border-2 border-green-500' : ''}
                        ${showIncorrect ? 'bg-red-100 dark:bg-red-900 border-2 border-red-500' : ''}
                        ${isSelected && !showResult ? 'bg-purple-100 dark:bg-purple-900 border-2 border-purple-500' : ''}
                      `}
                    >
                      <span className="dark:text-white">{option}</span>
                      {showCorrect && <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />}
                      {showIncorrect && <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />}
                    </motion.button>
                  );
                })}
              </div>

              {/* Explanation */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-8"
                  >
                    <div className={`p-6 rounded-xl ${
                      selectedAnswer === questions[currentQuestion].correct
                        ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500'
                        : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-500'
                    }`}>
                      <div className="flex items-start gap-3">
                        {selectedAnswer === questions[currentQuestion].correct ? (
                          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        )}
                        <div>
                          <h3 className="font-bold text-lg mb-2 dark:text-white">
                            {selectedAnswer === questions[currentQuestion].correct ? 'Correct! ✅' : 'Incorrect ❌'}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            {questions[currentQuestion].explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next Button */}
              {showResult && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={handleNext}
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto"
                >
                  {currentQuestion < questions.length - 1 ? (
                    <>
                      Next Question
                      <ChevronRight className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      See Results
                      <Award className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              )}
            </motion.div>
          ) : (
            // Results Screen
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 text-center"
            >
              <div className="text-8xl mb-6">{getScoreMessage().emoji}</div>
              <h2 className="text-4xl font-bold mb-4 dark:text-white">Quiz Complete!</h2>
              <p className={`text-2xl font-semibold mb-8 ${getScoreMessage().color}`}>
                {getScoreMessage().message}
              </p>

              <div className="mb-8">
                <div className="text-6xl font-bold text-purple-600 mb-2">
                  {score}/{questions.length}
                </div>
                <div className="text-xl text-gray-600 dark:text-gray-400">
                  {Math.round((score / questions.length) * 100)}% Correct
                </div>
              </div>

              {/* Score Breakdown */}
              <div className="mb-8 text-left max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4 dark:text-white">Question Breakdown</h3>
                <div className="space-y-2">
                  {answers.map((answer, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        answer.isCorrect
                          ? 'bg-green-50 dark:bg-green-900/20'
                          : 'bg-red-50 dark:bg-red-900/20'
                      }`}
                    >
                      {answer.isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      )}
                      <span className="text-sm dark:text-white">
                        Question {index + 1}: {answer.isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={resetQuiz}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-5 h-5" />
                Try Again
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Quiz;
