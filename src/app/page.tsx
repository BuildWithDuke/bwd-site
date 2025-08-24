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
          Building the <span className="text-accent">Future</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
          Full-stack developer passionate about AI/ML, creating tools that matter, 
          and pushing the boundaries of what&apos;s possible with modern technology.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-accent hover:bg-accent-hover text-white font-medium py-3 px-6 rounded-lg transition-colors">
            View Projects
          </button>
          <button className="border border-border hover:border-accent text-foreground hover:text-accent font-medium py-3 px-6 rounded-lg transition-all">
            Get In Touch
          </button>
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
          Featured Projects
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
            Want to collaborate?
          </h3>
          <p className="text-foreground/70 mb-6">
            I&apos;m always interested in working on innovative projects that push boundaries 
            and create meaningful impact.
          </p>
          <button className="bg-accent hover:bg-accent-hover text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Let&apos;s Talk
          </button>
        </div>
      </motion.div>
    </div>
  );
}
