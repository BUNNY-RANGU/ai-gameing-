import { motion } from 'framer-motion';
import { Book, Cpu, Network, Boxes, CheckCircle } from 'lucide-react';

const Concepts = () => {
  const modelTypes = [
    {
      icon: Book,
      title: 'Rule-Based Models',
      color: 'from-blue-500 to-cyan-500',
      description: 'Pre-defined strategies coded by humans',
      examples: ['Simple board game AI', 'Chess opening books', 'Fixed strategy patterns'],
      pros: ['Fast and predictable', 'Easy to understand', 'No training needed'],
      cons: ['Limited adaptability', 'Cannot learn from mistakes', 'Fixed strategies'],
    },
    {
      icon: Network,
      title: 'Search-Based Models',
      color: 'from-purple-500 to-pink-500',
      description: 'Explore possible moves and outcomes',
      examples: ['Minimax algorithm', 'Monte Carlo Tree Search', 'Alpha-Beta pruning'],
      pros: ['Optimal decision making', 'Works for complex games', 'Systematic exploration'],
      cons: ['Computationally expensive', 'Requires perfect information', 'Can be slow'],
    },
    {
      icon: Cpu,
      title: 'Learning-Based Models',
      color: 'from-orange-500 to-red-500',
      description: 'AI agents that learn from experience',
      examples: ['Q-Learning', 'Deep Q-Networks', 'Policy Gradients', 'AlphaGo'],
      pros: ['Adaptive behavior', 'Improves over time', 'Handles complex patterns'],
      cons: ['Requires training data', 'Can be unpredictable', 'Training time needed'],
    },
    {
      icon: Boxes,
      title: 'Hybrid Models',
      color: 'from-green-500 to-teal-500',
      description: 'Combining multiple approaches for better results',
      examples: ['AlphaZero', 'OpenAI Five', 'Modern game AI systems'],
      pros: ['Best of all approaches', 'Robust performance', 'State-of-the-art results'],
      cons: ['Complex implementation', 'Resource intensive', 'Harder to debug'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Book className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Core Concepts
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Understanding the fundamental types of game-playing AI models and how they approach decision-making
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is a Game Playing Model Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 shadow-xl mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What is a Game Playing Model?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            A <span className="font-semibold text-purple-600 dark:text-purple-400">Game Playing Model</span> is an AI system designed to make decisions in game environments. 
            These models analyze the current game state, predict future outcomes, and select optimal actions to maximize their chances of winning.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">👁️</div>
              <h3 className="font-bold mb-2 dark:text-white">Perception</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Observe and understand the game state</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-bold mb-2 dark:text-white">Decision</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Analyze options and choose best move</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold mb-2 dark:text-white">Action</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Execute the chosen move</p>
            </div>
          </div>
        </motion.div>

        {/* Model Types */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Four Types of Game Playing Models
          </h2>

          <div className="space-y-8">
            {modelTypes.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className={`h-2 bg-gradient-to-r ${model.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${model.color} group-hover:scale-110 transition-transform`}>
                        <model.icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold mb-3 dark:text-white">
                          {model.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                          {model.description}
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                          {/* Examples */}
                          <div>
                            <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                              Examples
                            </h4>
                            <ul className="space-y-2">
                              {model.examples.map((example, i) => (
                                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                                  <span className="text-blue-500 mt-1">▸</span>
                                  {example}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Pros */}
                          <div>
                            <h4 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-3 uppercase tracking-wide">
                              ✓ Advantages
                            </h4>
                            <ul className="space-y-2">
                              {model.pros.map((pro, i) => (
                                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Cons */}
                          <div>
                            <h4 className="font-semibold text-sm text-red-600 dark:text-red-400 mb-3 uppercase tracking-wide">
                              ✗ Limitations
                            </h4>
                            <ul className="space-y-2">
                              {model.cons.map((con, i) => (
                                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                                  <span className="text-red-500 mt-0.5">•</span>
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Key Takeaways
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Each model type has unique strengths for different game scenarios',
                'Modern AI often combines multiple approaches (hybrid models)',
                'Learning-based models have revolutionized game AI in recent years',
                'The choice of model depends on game complexity and requirements',
              ].map((takeaway, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">{takeaway}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Concepts;
