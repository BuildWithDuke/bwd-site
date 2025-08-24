'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { getFeaturedProjects } from '@/data/projects';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          From <span className="text-accent">Power Systems</span> to <span className="text-accent">AI</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
          Electrical Engineer transitioning to AI/ML and Software Development. 
          Combining engineering rigor with cutting-edge technology to build intelligent solutions 
          that bridge the physical and digital worlds.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="/about" className="bg-accent hover:bg-accent-hover text-white font-medium py-3 px-6 rounded-lg transition-colors inline-block">
            See My Journey
          </a>
          <a href="/contact" className="border border-border hover:border-accent text-foreground hover:text-accent font-medium py-3 px-6 rounded-lg transition-all inline-block">
            Let&apos;s Connect
          </a>
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          Engineering → AI/ML Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-16"
      >
        <div className="bg-muted/50 rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Ready to build intelligent solutions together?
          </h3>
          <p className="text-foreground/70 mb-6">
            I&apos;m actively seeking AI/ML and software engineering opportunities where I can apply 
            my engineering foundation to solve complex problems with cutting-edge technology.
          </p>
          <a href="/contact" className="bg-accent hover:bg-accent-hover text-white font-medium py-2 px-6 rounded-lg transition-colors inline-block">
            Get In Touch
          </a>
        </div>
      </motion.div>
    </div>
  );
}
