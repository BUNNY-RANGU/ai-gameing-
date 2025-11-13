import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, ChevronDown, ChevronUp, GitBranch, Zap, Brain, Target } from 'lucide-react';

const Algorithms = () => {
  const [expandedAlgo, setExpandedAlgo] = useState(null);

  const algorithms = [
    {
      id: 1,
      icon: GitBranch,
      title: 'Minimax Algorithm',
      color: 'from-blue-500 to-cyan-500',
      tagline: 'Optimal decision making for two-player games',
      description: 'Minimax is a decision-making algorithm that assumes both players play optimally. It explores the game tree to find the best move by minimizing the maximum possible loss.',
      keyPoints: [
        'Used in zero-sum games like chess, tic-tac-toe',
        'Explores all possible moves to find optimal strategy',
        'Assumes opponent plays perfectly',
        'Guarantees best possible outcome',
      ],
      complexity: 'Time: O(b^d) where b=branching factor, d=depth',
      pseudocode: `function minimax(node, depth, maximizingPlayer):
    if depth = 0 or node is terminal:
        return evaluation of node
    
    if maximizingPlayer:
        maxEval = -infinity
        for each child of node:
            eval = minimax(child, depth-1, FALSE)
            maxEval = max(maxEval, eval)
        return maxEval
    else:
        minEval = +infinity
        for each child of node:
            eval = minimax(child, depth-1, TRUE)
            minEval = min(minEval, eval)
        return minEval`,
    },
    {
      id: 2,
      icon: Zap,
      title: 'Alpha-Beta Pruning',
      color: 'from-purple-500 to-pink-500',
      tagline: 'Optimized minimax for faster search',
      description: 'An optimization technique for minimax that eliminates branches that cannot influence the final decision, significantly reducing computation time.',
      keyPoints: [
        'Reduces search space without affecting result',
        'Can cut search time by up to 50% or more',
        'Uses alpha (max lower bound) and beta (min upper bound)',
        'Essential for deep game tree searches',
      ],
      complexity: 'Best case: O(b^(d/2)), still finds optimal move',
      pseudocode: `function alphabeta(node, depth, α, β, maximizingPlayer):
    if depth = 0 or node is terminal:
        return evaluation of node
    
    if maximizingPlayer:
        value = -infinity
        for each child of node:
            value = max(value, alphabeta(child, depth-1, α, β, FALSE))
            α = max(α, value)
            if value ≥ β:
                break  // β cutoff
        return value
    else:
        value = +infinity
        for each child of node:
            value = min(value, alphabeta(child, depth-1, α, β, TRUE))
            β = min(β, value)
            if value ≤ α:
                break  // α cutoff
        return value`,
    },
    {
      id: 3,
      icon: Brain,
      title: 'Q-Learning (Reinforcement Learning)',
      color: 'from-orange-500 to-red-500',
      tagline: 'Learning optimal actions through trial and error',
      description: 'Q-Learning is a model-free reinforcement learning algorithm that learns the value of actions in states, building a Q-table to guide future decisions.',
      keyPoints: [
        'Learns optimal policy without knowing game rules',
        'Uses reward signals to improve over time',
        'Exploration vs exploitation tradeoff',
        'Works for both deterministic and stochastic environments',
      ],
      complexity: 'Converges to optimal policy with sufficient exploration',
      pseudocode: `Initialize Q(s, a) arbitrarily
For each episode:
    Initialize state s
    For each step:
        Choose action a using ε-greedy policy
        Take action a, observe reward r and next state s'
        
        Q(s, a) ← Q(s, a) + α[r + γ·max(Q(s', a')) - Q(s, a)]
        
        s ← s'
    Until s is terminal
    
Where:
    α = learning rate
    γ = discount factor
    ε = exploration rate`,
    },
    {
      id: 4,
      icon: Target,
      title: 'Deep Q-Networks (DQN)',
      color: 'from-green-500 to-teal-500',
      tagline: 'Neural networks meet reinforcement learning',
      description: 'DQN combines Q-Learning with deep neural networks to handle high-dimensional state spaces like images, enabling AI to master complex games from raw pixels.',
      keyPoints: [
        'Uses neural networks to approximate Q-values',
        'Experience replay for stable learning',
        'Target network to reduce correlations',
        'Can learn from raw visual input (pixels)',
      ],
      complexity: 'Scales to large state spaces (e.g., Atari games)',
      pseudocode: `Initialize replay memory D
Initialize Q-network with random weights θ
Initialize target network with weights θ⁻ = θ

For each episode:
    For each step:
        Select action a:
            with probability ε: random action
            otherwise: a = argmax Q(s, a; θ)
        
        Execute action a, observe r and s'
        Store transition (s, a, r, s') in D
        
        Sample random minibatch from D
        For each transition:
            y = r + γ·max Q(s', a'; θ⁻)
            
        Update θ using gradient descent on:
            Loss = (y - Q(s, a; θ))²
        
        Every C steps: θ⁻ ← θ`,
    },
  ];

  const toggleExpand = (id) => {
    setExpandedAlgo(expandedAlgo === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Code className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Key Algorithms
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Deep dive into the algorithms that power game-playing AI, from classic search to modern deep learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Algorithms Section */}
      <section className="section-container">
        <div className="space-y-6">
          {algorithms.map((algo, index) => (
            <motion.div
              key={algo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${algo.color} p-1 cursor-pointer`}
                onClick={() => toggleExpand(algo.id)}
              >
                <div className="bg-white dark:bg-gray-800 p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-grow">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${algo.color}`}>
                      <algo.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold dark:text-white mb-1">
                        {algo.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {algo.tagline}
                      </p>
                    </div>
                  </div>
                  <button
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label={expandedAlgo === algo.id ? 'Collapse' : 'Expand'}
                  >
                    {expandedAlgo === algo.id ? (
                      <ChevronUp className="w-6 h-6 dark:text-white" />
                    ) : (
                      <ChevronDown className="w-6 h-6 dark:text-white" />
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedAlgo === algo.id ? 'auto' : 0,
                  opacity: expandedAlgo === algo.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-8 border-t border-gray-200 dark:border-gray-700">
                  {/* Description */}
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {algo.description}
                  </p>

                  {/* Key Points */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-4 dark:text-white flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded"></span>
                      Key Points
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {algo.keyPoints.map((point, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-gray-50 dark:bg-gray-900 rounded-lg p-4"
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">{i + 1}</span>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Complexity */}
                  <div className="mb-6 bg-blue-50 dark:bg-gray-900 rounded-xl p-4 border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">
                      Complexity
                    </h4>
                    <code className="text-sm text-gray-700 dark:text-gray-300">
                      {algo.complexity}
                    </code>
                  </div>

                  {/* Pseudocode */}
                  <div>
                    <h4 className="text-lg font-bold mb-4 dark:text-white flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Pseudocode
                    </h4>
                    <pre className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto border border-gray-700">
                      <code className="text-sm font-mono leading-relaxed whitespace-pre">
                        {algo.pseudocode}
                      </code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Algorithm Comparison */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            When to Use Each Algorithm
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { algo: 'Minimax', useCase: 'Perfect information games with small state space', games: 'Tic-Tac-Toe, Connect Four' },
              { algo: 'Alpha-Beta', useCase: 'Complex perfect information games', games: 'Chess, Checkers' },
              { algo: 'Q-Learning', useCase: 'Simple environments with discrete states', games: 'Grid World, Simple Mazes' },
              { algo: 'DQN', useCase: 'Complex environments with visual input', games: 'Atari Games, Video Games' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">
                  {item.algo}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {item.useCase}
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-500">
                  <span className="font-semibold">Examples:</span> {item.games}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Algorithms;
