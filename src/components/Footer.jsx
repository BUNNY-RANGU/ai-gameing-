import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Game Models
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              An interactive learning platform designed to help students visualize and experiment with AI Game Playing Models — combining theory, demos, and fun interactivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/concepts" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Concepts
                </Link>
              </li>
              <li>
                <Link to="/algorithms" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Algorithms
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Interactive Demo
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Take Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all hover:scale-110"
                aria-label="Contact"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © 2025 Game AI Models — Designed for Learning AI Through Games
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
