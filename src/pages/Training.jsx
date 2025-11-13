import { motion } from 'framer-motion';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Play, Pause, RotateCcw, TrendingUp, Activity, Award } from 'lucide-react';

const Training = () => {
  const [isTraining, setIsTraining] = useState(false);
  const [episode, setEpisode] = useState(0);

  // Simulated training data
  const generateTrainingData = (episodes) => {
    const data = [];
    for (let i = 0; i <= episodes; i++) {
      // Simulate learning curve with noise
      const base = 100 * (1 - Math.exp(-i / 20));
      const noise = (Math.random() - 0.5) * 15;
      data.push({
        episode: i,
        reward: Math.max(0, base + noise),
      });
    }
    return data;
  };

  const [trainingData, setTrainingData] = useState(generateTrainingData(0));

  const startTraining = () => {
    setIsTraining(true);
    const interval = setInterval(() => {
      setEpisode((prev) => {
        const newEpisode = prev + 1;
        if (newEpisode >= 100) {
          clearInterval(interval);
          setIsTraining(false);
        }
        setTrainingData(generateTrainingData(newEpisode));
        return newEpisode;
      });
    }, 100);
  };

  const resetTraining = () => {
    setIsTraining(false);
    setEpisode(0);
    setTrainingData(generateTrainingData(0));
  };

  const trainingSteps = [
    {
      number: '01',
      title: 'Initialize Agent',
      description: 'Set up the AI agent with random weights or parameters',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      title: 'Observe Environment',
      description: 'Agent perceives the current state of the game',
      icon: '👁️',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      title: 'Take Action',
      description: 'Agent selects and executes an action based on current policy',
      icon: '⚡',
      color: 'from-orange-500 to-red-500',
    },
    {
      number: '04',
      title: 'Receive Reward',
      description: 'Environment provides feedback (reward/penalty) for the action',
      icon: '🎁',
      color: 'from-green-500 to-teal-500',
    },
    {
      number: '05',
      title: 'Update Knowledge',
      description: 'Agent learns from experience and updates its strategy',
      icon: '📚',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      number: '06',
      title: 'Repeat & Improve',
      description: 'Continue the cycle until performance converges',
      icon: '🔄',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}></div>
        </div>

        <div className="relative z-10 section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Training Process
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Understanding how AI agents learn to play games through reinforcement learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Loop Explanation */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            The Training Loop
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            AI agents learn through continuous interaction with the game environment, improving their strategy over thousands of episodes
          </p>
        </div>

        {/* Training Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trainingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color} rounded-t-2xl`}></div>
                
                <div className="flex items-start gap-4 mt-2">
                  <div className="text-4xl">{step.icon}</div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                      <h3 className="text-xl font-bold dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Training Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold dark:text-white flex items-center gap-3">
              <Activity className="w-8 h-8 text-blue-600" />
              Live Training Simulation
            </h3>
            <div className="flex gap-3">
              <button
                onClick={isTraining ? () => setIsTraining(false) : startTraining}
                disabled={episode >= 100 && !isTraining}
                className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all ${
                  isTraining
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isTraining ? (
                  <>
                    <Pause className="w-5 h-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Start Training
                  </>
                )}
              </button>
              <button
                onClick={resetTraining}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg font-semibold flex items-center gap-2 transition-all"
              >
                <RotateCcw className="w-5 h-5" />
                Reset
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Episode</div>
              <div className="text-3xl font-bold text-blue-600">{episode}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Current Reward</div>
              <div className="text-3xl font-bold text-green-600">
                {trainingData.length > 0 ? trainingData[trainingData.length - 1].reward.toFixed(1) : '0.0'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Status</div>
              <div className="text-3xl font-bold">
                {isTraining ? (
                  <span className="text-orange-600 flex items-center gap-2">
                    <span className="w-3 h-3 bg-orange-600 rounded-full animate-pulse"></span>
                    Training
                  </span>
                ) : episode >= 100 ? (
                  <span className="text-green-600 flex items-center gap-2">
                    <Award className="w-6 h-6" />
                    Complete
                  </span>
                ) : (
                  <span className="text-gray-400">Ready</span>
                )}
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h4 className="text-lg font-bold mb-4 dark:text-white">Reward Over Episodes</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trainingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  dataKey="episode"
                  label={{ value: 'Episode', position: 'insideBottom', offset: -5 }}
                  stroke="#9CA3AF"
                />
                <YAxis
                  label={{ value: 'Reward', angle: -90, position: 'insideLeft' }}
                  stroke="#9CA3AF"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="reward"
                  stroke="url(#colorGradient)"
                  strokeWidth={3}
                  dot={false}
                  animationDuration={300}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 text-center">
            💡 Notice how the reward increases over time as the agent learns the optimal strategy
          </p>
        </motion.div>
      </section>

      {/* Key Concepts */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Important Training Concepts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Exploration vs Exploitation',
                description: 'Balance between trying new actions (exploration) and using known good actions (exploitation)',
                emoji: '🔍',
              },
              {
                title: 'Learning Rate',
                description: 'Controls how quickly the agent updates its knowledge from new experiences',
                emoji: '📊',
              },
              {
                title: 'Discount Factor',
                description: 'Determines how much the agent values future rewards vs immediate rewards',
                emoji: '⏰',
              },
              {
                title: 'Convergence',
                description: 'The point where the agent\'s performance stabilizes and stops improving significantly',
                emoji: '🎯',
              },
            ].map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{concept.emoji}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{concept.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{concept.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
