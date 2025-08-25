'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function T9Project() {
  const techStack = ['Go', 'Gin', 'SvelteKit', 'TypeScript', 'WebSocket'];
  
  const features = [
    'Real-time multiplayer gameplay with WebSocket communication',
    'Complex Ultimate Tic-Tac-Toe game logic and state management',
    'High-performance Go backend with Gin web framework',
    'Responsive SvelteKit frontend with TypeScript for type safety'
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              T-9 Ultimate Tic-Tac-Toe
            </h1>
            <span className="px-3 py-1 text-sm bg-green-500/10 text-green-500 rounded-full border border-green-500/20">
              Live
            </span>
          </div>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Real-time multiplayer Ultimate Tic-Tac-Toe game with WebSocket communication, complex game logic, and responsive design
          </p>
        </div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
          <div className="prose prose-lg max-w-none text-foreground/80">
            <p className="mb-4">
              Ultimate Tic-Tac-Toe takes the classic game to the next level with a 3x3 grid of traditional tic-tac-toe boards. 
              The twist? Your opponent&apos;s move determines which board you must play on next, creating layers of strategy 
              that transform simple gameplay into complex tactical decision-making.
            </p>
            <p>
              Built with Go and SvelteKit, T-9 delivers real-time multiplayer gameplay through WebSocket connections, 
              ensuring instant move synchronization and smooth game state management. The system handles complex game logic 
              including board transitions, win conditions across multiple levels, and player matchmaking.
            </p>
          </div>
        </motion.div>

        {/* Visual Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Demo</h2>
          <div className="bg-muted/50 border border-border rounded-lg p-8 text-center">
            <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent-hover/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-30">⭕</div>
                <p className="text-foreground/60 text-lg">Ultimate Tic-Tac-Toe Gameplay</p>
                <p className="text-foreground/40 text-sm mt-2">Real-time multiplayer game interface</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-accent/10 text-accent rounded-lg border border-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border border-border">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-foreground/80">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/DukeofWaterloo/T-9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View Code
            </a>
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-border hover:border-accent text-foreground hover:text-accent font-medium py-3 px-6 rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              See It Live
            </a>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="border-t border-border pt-8"
        >
          <div className="flex justify-between items-center">
            <Link 
              href="/projects/educated-misfits"
              className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ← Educated Misfits
            </Link>
            <Link 
              href="/projects/pigeon"
              className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors"
            >
              Pigeon →
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}