import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Zap, CheckCircle, ExternalLink } from 'lucide-react';

const Examples = () => {
  const famousAI = [
    {
      name: 'Deep Blue',
      developer: 'IBM',
      year: '1997',
      game: 'Chess',
      achievement: 'First computer to defeat a reigning world chess champion (Garry Kasparov)',
      color: 'from-blue-600 to-cyan-600',
      icon: '♟️',
      technique: 'Brute-force search with alpha-beta pruning',
      impact: 'Proved that computers could match human intelligence in strategic games',
      stats: [
        'Evaluated 200 million positions per second',
        'Could analyze 12-14 moves ahead',
        'Used specialized chess hardware',
      ],
    },
    {
      name: 'AlphaGo',
      developer: 'DeepMind (Google)',
      year: '2016',
      game: 'Go',
      achievement: 'Defeated world champion Lee Sedol 4-1 in a historic match',
      color: 'from-purple-600 to-pink-600',
      icon: '⚫',
      technique: 'Deep neural networks + Monte Carlo Tree Search + Reinforcement Learning',
      impact: 'Showed AI could master intuitive and creative games previously thought impossible',
      stats: [
        'Trained on 30 million Go positions',
        'Used deep neural networks with 13 layers',
        'Created novel moves never seen before',
      ],
    },
    {
      name: 'AlphaZero',
      developer: 'DeepMind',
      year: '2017',
      game: 'Chess, Shogi, Go',
      achievement: 'Mastered three complex games from scratch using only self-play',
      color: 'from-orange-600 to-red-600',
      icon: '🏆',
      technique: 'Self-play reinforcement learning with zero human knowledge',
      impact: 'Revolutionized game AI by learning superhuman play without human data',
      stats: [
        'Learned in 24 hours what took humans centuries',
        'Beat world champion programs in all three games',
        'Discovered new strategies and opening moves',
      ],
    },
    {
      name: 'OpenAI Five',
      developer: 'OpenAI',
      year: '2018',
      game: 'Dota 2',
      achievement: 'First AI to beat professional human teams in a complex multiplayer game',
      color: 'from-green-600 to-teal-600',
      icon: '🎮',
      technique: 'Deep reinforcement learning with PPO (Proximal Policy Optimization)',
      impact: 'Demonstrated AI capability in real-time team-based strategy games',
      stats: [
        'Trained for 10 months of game time per day',
        'Required 256 GPUs and 128,000 CPU cores',
        'Mastered teamwork and long-term strategy',
      ],
    },
    {
      name: 'MuZero',
      developer: 'DeepMind',
      year: '2020',
      game: 'Multiple (Chess, Go, Atari)',
      achievement: 'Learned to play games without knowing the rules',
      color: 'from-indigo-600 to-purple-600',
      icon: '🧠',
      technique: 'Model-based reinforcement learning with learned dynamics',
      impact: 'First algorithm to master games without being told the rules',
      stats: [
        'Achieved superhuman performance without rules',
        'Learned internal game model through observation',
        'Matched AlphaZero performance on known games',
      ],
    },
    {
      name: 'Pluribus',
      developer: 'Facebook AI & Carnegie Mellon',
      year: '2019',
      game: 'Poker (Texas Hold\'em)',
      achievement: 'First AI to beat top professionals in 6-player no-limit poker',
      color: 'from-pink-600 to-rose-600',
      icon: '🃏',
      technique: 'Game theory + Self-play + Depth-limited search',
      impact: 'Solved imperfect information games with multiple players',
      stats: [
        'Beat professional poker players consistently',
        'Handled hidden information and bluffing',
        'Used less than 128GB of memory',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff)',
            backgroundSize: '40px 70px',
          }}></div>
        </div>

        <div className="relative z-10 section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Trophy className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Real-World Examples
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Famous AI systems that have revolutionized game playing and pushed the boundaries of artificial intelligence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Historic AI Milestones
          </h2>

          <div className="space-y-12">
            {famousAI.map((ai, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${ai.color} p-1 rounded-3xl shadow-2xl`}>
                  <div className="bg-white dark:bg-gray-800 rounded-3xl p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Left: Icon & Basic Info */}
                      <div className="text-center lg:text-left">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl text-5xl mb-4 shadow-lg">
                          {ai.icon}
                        </div>
                        <h3 className="text-3xl font-bold mb-2 dark:text-white">
                          {ai.name}
                        </h3>
                        <div className="space-y-2 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-2 justify-center lg:justify-start">
                            <Users className="w-4 h-4" />
                            <span className="text-sm">{ai.developer}</span>
                          </div>
                          <div className="flex items-center gap-2 justify-center lg:justify-start">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-bold">{ai.year}</span>
                          </div>
                          <div className="flex items-center gap-2 justify-center lg:justify-start">
                            <Zap className="w-4 h-4" />
                            <span className="text-sm font-semibold">{ai.game}</span>
                          </div>
                        </div>
                      </div>

                      {/* Middle: Achievement & Technique */}
                      <div className="lg:col-span-2">
                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                            Achievement
                          </h4>
                          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {ai.achievement}
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                            Technique
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300">
                            {ai.technique}
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                            Key Stats
                          </h4>
                          <div className="space-y-2">
                            {ai.stats.map((stat, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{stat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className={`bg-gradient-to-r ${ai.color} bg-opacity-10 rounded-xl p-4`}>
                          <h4 className="text-sm font-bold uppercase tracking-wide mb-2 bg-gradient-to-r ${ai.color} bg-clip-text text-transparent">
                            Impact
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            {ai.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline connector (except for last item) */}
                {index < famousAI.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 mt-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Lessons */}
      <section className="bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Lessons from AI Game Playing History
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '📈',
                title: 'Exponential Progress',
                description: 'AI capabilities have grown dramatically in just 25 years, from chess to complex multiplayer games',
              },
              {
                icon: '🔄',
                title: 'Self-Learning Power',
                description: 'Modern AI learns through self-play without human knowledge, discovering novel strategies',
              },
              {
                icon: '🎯',
                title: 'Beyond Human Intuition',
                description: 'AI systems discover strategies and moves that surprise even expert human players',
              },
              {
                icon: '⚡',
                title: 'Computational Scale',
                description: 'Success requires massive computational resources and innovative algorithms',
              },
              {
                icon: '🧩',
                title: 'Hybrid Approaches',
                description: 'Combining search algorithms with deep learning produces the best results',
              },
              {
                icon: '🌍',
                title: 'Real-World Impact',
                description: 'Game AI techniques now apply to robotics, healthcare, finance, and more',
              },
            ].map((lesson, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{lesson.icon}</div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{lesson.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{lesson.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Learn More
          </h2>
          <div className="space-y-4">
            {[
              { title: 'DeepMind - AlphaGo Documentary', url: 'https://www.deepmind.com/research/highlighted-research/alphago' },
              { title: 'IBM Deep Blue Overview', url: 'https://www.ibm.com/ibm/history/ibm100/us/en/icons/deepblue/' },
              { title: 'OpenAI Five Blog Post', url: 'https://openai.com/research/openai-five' },
            ].map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-all hover:scale-102 group"
              >
                <span className="font-semibold text-gray-800 dark:text-gray-200">{resource.title}</span>
                <ExternalLink className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Examples;
