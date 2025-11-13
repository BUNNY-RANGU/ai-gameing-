import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X as XIcon, Circle, RotateCcw, Brain, Trophy, AlertCircle } from 'lucide-react';

const Demo = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [aiThinking, setAiThinking] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [draws, setDraws] = useState(0);

  // Winning combinations
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  // Check for winner
  const checkWinner = (squares) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: combination };
      }
    }
    return null;
  };

  // Check if board is full
  const isBoardFull = (squares) => {
    return squares.every(square => square !== null);
  };

  // Minimax algorithm for AI
  const minimax = (squares, depth, isMaximizing) => {
    const result = checkWinner(squares);
    
    if (result && result.winner === 'O') return 10 - depth;
    if (result && result.winner === 'X') return depth - 10;
    if (isBoardFull(squares)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (squares[i] === null) {
          squares[i] = 'O';
          let score = minimax(squares, depth + 1, false);
          squares[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (squares[i] === null) {
          squares[i] = 'X';
          let score = minimax(squares, depth + 1, true);
          squares[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  // Get best AI move
  const getAiMove = (squares) => {
    let bestScore = -Infinity;
    let bestMove = null;

    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        squares[i] = 'O';
        let score = minimax(squares, 0, false);
        squares[i] = null;
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    return bestMove;
  };

  // Handle player move
  const handleClick = (index) => {
    if (board[index] || !isPlayerTurn || gameOver || aiThinking) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner('X');
      setWinningLine(result.line);
      setGameOver(true);
      setPlayerScore(prev => prev + 1);
      return;
    }

    if (isBoardFull(newBoard)) {
      setGameOver(true);
      setDraws(prev => prev + 1);
      return;
    }

    setIsPlayerTurn(false);
  };

  // AI makes move
  useEffect(() => {
    if (!isPlayerTurn && !gameOver) {
      setAiThinking(true);
      setTimeout(() => {
        const aiMove = getAiMove([...board]);
        const newBoard = [...board];
        newBoard[aiMove] = 'O';
        setBoard(newBoard);
        setAiThinking(false);

        const result = checkWinner(newBoard);
        if (result) {
          setWinner('O');
          setWinningLine(result.line);
          setGameOver(true);
          setAiScore(prev => prev + 1);
          return;
        }

        if (isBoardFull(newBoard)) {
          setGameOver(true);
          setDraws(prev => prev + 1);
          return;
        }

        setIsPlayerTurn(true);
      }, 800);
    }
  }, [isPlayerTurn, gameOver, board]);

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setWinner(null);
    setWinningLine([]);
    setGameOver(false);
    setAiThinking(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Brain className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Interactive Demo
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Play Tic-Tac-Toe against an AI using the Minimax algorithm — Watch it think and make optimal moves!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Game Section */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Score Board */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white text-center shadow-lg">
              <div className="text-sm font-semibold mb-2 opacity-90">You (X)</div>
              <div className="text-4xl font-bold">{playerScore}</div>
            </div>
            <div className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl p-6 text-white text-center shadow-lg">
              <div className="text-sm font-semibold mb-2 opacity-90">Draws</div>
              <div className="text-4xl font-bold">{draws}</div>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-xl p-6 text-white text-center shadow-lg">
              <div className="text-sm font-semibold mb-2 opacity-90">AI (O)</div>
              <div className="text-4xl font-bold">{aiScore}</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Game Board */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="text-xl font-bold dark:text-white">
                  {aiThinking ? (
                    <span className="flex items-center gap-2 text-orange-600">
                      <Brain className="w-6 h-6 animate-pulse" />
                      AI Thinking...
                    </span>
                  ) : gameOver ? (
                    winner ? (
                      winner === 'X' ? (
                        <span className="flex items-center gap-2 text-green-600">
                          <Trophy className="w-6 h-6" />
                          You Win! 🎉
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 text-red-600">
                          <AlertCircle className="w-6 h-6" />
                          AI Wins!
                        </span>
                      )
                    ) : (
                      <span className="text-gray-600">It's a Draw!</span>
                    )
                  ) : isPlayerTurn ? (
                    <span className="text-blue-600">Your Turn</span>
                  ) : (
                    <span className="text-red-600">AI's Turn</span>
                  )}
                </div>
                <button
                  onClick={resetGame}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <RotateCcw className="w-4 h-4" />
                  New Game
                </button>
              </div>

              {/* Board */}
              <div className="grid grid-cols-3 gap-3 aspect-square max-w-md mx-auto">
                {board.map((cell, index) => (
                  <motion.button
                    key={index}
                    whileHover={!cell && isPlayerTurn && !gameOver ? { scale: 1.05 } : {}}
                    whileTap={!cell && isPlayerTurn && !gameOver ? { scale: 0.95 } : {}}
                    onClick={() => handleClick(index)}
                    className={`
                      relative aspect-square rounded-2xl font-bold text-5xl
                      transition-all duration-300 shadow-lg
                      ${winningLine.includes(index) 
                        ? 'bg-gradient-to-br from-yellow-400 to-orange-400 ring-4 ring-yellow-300' 
                        : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:shadow-xl'
                      }
                      ${!cell && isPlayerTurn && !gameOver ? 'cursor-pointer' : 'cursor-not-allowed'}
                    `}
                    disabled={!!cell || !isPlayerTurn || gameOver || aiThinking}
                  >
                    <AnimatePresence>
                      {cell === 'X' && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <XIcon className="w-16 h-16 text-blue-600 stroke-[3]" />
                        </motion.div>
                      )}
                      {cell === 'O' && (
                        <motion.div
                          initial={{ scale: 0, rotate: 180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <Circle className="w-16 h-16 text-red-600 stroke-[3]" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                  How the AI Works
                </h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">1.</span>
                    The AI uses the <strong>Minimax algorithm</strong> to evaluate all possible moves
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">2.</span>
                    It simulates future game states for each move option
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">3.</span>
                    Assigns scores: +10 for AI win, -10 for player win, 0 for draw
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">4.</span>
                    Chooses the move with the <strong>maximum guaranteed score</strong>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  💡 Pro Tips
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    The AI plays perfectly — it's impossible to win, only draw!
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Try to go first and aim for the center square
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    Watch how the AI blocks your winning moves
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    The AI evaluates every possible future outcome
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-orange-600 dark:text-orange-400">
                  🎯 Algorithm Complexity
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Time Complexity:</strong> O(b^d) where b=3 (avg branching), d=9 (max depth)
                  <br />
                  <strong>Space Complexity:</strong> O(d) for recursion stack
                  <br />
                  <strong>States Evaluated:</strong> Up to 255,168 game states!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Explanation */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Understanding Minimax Strategy
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Maximizing Player',
                emoji: '🤖',
                description: 'AI tries to maximize its score by choosing moves that lead to the best outcome',
              },
              {
                title: 'Minimizing Player',
                emoji: '👤',
                description: 'Assumes opponent (you) will minimize the AI\'s score by playing optimally',
              },
              {
                title: 'Game Tree',
                emoji: '🌳',
                description: 'Explores all possible game paths and picks the one with guaranteed best result',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
