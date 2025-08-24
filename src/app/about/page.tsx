'use client';

import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { category: 'AI/ML', items: ['PyTorch', 'FastAI', 'LangChain', 'OpenAI', 'Ollama', 'Computer Vision'] },
    { category: 'Backend', items: ['Python', 'Node.js', 'Go', 'Flask', 'FastAPI', 'Express'] },
    { category: 'Frontend', items: ['React', 'TypeScript', 'SvelteKit', 'HTML5', 'CSS3'] },
    { category: 'Engineering', items: ['Power Systems', 'Data Engineering', 'Automation', 'Linux', 'Docker'] },
  ];

  const experiences = [
    {
      title: 'Nuclear Systems Engineer (AI Ambassador)',
      company: 'Ontario Power Generation',
      period: 'Jun 2025 - Present',
      description: 'Exploring AI pilot projects for RAG-based equipment preventative maintenance program scheduling. Automated workflows saving 10+ hours weekly across departments. Responsible for safe operation and maintenance of critical systems during nuclear refurbishment.',
    },
    {
      title: 'Work Optimization Analyst',
      company: 'Ontario Power Generation',
      period: 'Sep 2024 - Dec 2024',
      description: 'Built Python/SQL automation tools saving 200+ hours annually. Created PowerBI dashboards for data-driven decision making.',
    },
    {
      title: 'Engineering Society President',
      company: 'University of Waterloo',
      period: 'Apr 2022 - Aug 2023',
      description: 'Led 8,000+ engineering students. Pioneered Iron Pin Ceremony tradition and organized Tesla Career Drive attracting 200+ students/hour.',
    },
    {
      title: 'Fullstack Software Developer',
      company: 'Hifi (Co-op)',
      period: 'May 2022 - Aug 2022',
      description: 'Re-engineered Flask dashboard for 30+ engineers. Built analytics platform processing 73 million database entries.',
    },
    {
      title: 'Automation & Data Engineering',
      company: 'IESO (Co-op)',
      period: 'Jan 2024 - Apr 2024',
      description: 'Developed automated workflows for 25+ staff. Applied statistical analysis to optimize energy demand forecasting.',
    },
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
          <div className="w-32 h-32 bg-gradient-to-br from-accent to-accent-hover rounded-full mx-auto mb-8 flex items-center justify-center text-4xl">
            ⚡
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hey, I&apos;m Duke!
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            From leading 8,000+ engineering students to building automated systems for nuclear power plants. 
            I&apos;m constantly creating intelligent solutions that bridge physical and digital worlds.
          </p>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">My Journey</h2>
          <div className="prose prose-lg max-w-none text-foreground/80">
            <p className="mb-4">
              A curious spark that started with Lego sets soon led to nuclear reactors, neural networks, and everything in-between. My engineering foundation was built in the critical infrastructure 
              world: power plants, transmission systems, energy markets, the backbone that powers modern society. Through co-op roles at 
              Ontario Power Generation, IESO, and BC Hydro, I saw firsthand how technology transforms complex problems 
              into elegant solutions.
            </p>
            <p className="mb-4">
              Leading 8,000+ engineering students as the University of Waterloo Engineering Society&apos;s President taught me that breakthrough innovation happens 
              at the intersection of deep technical knowledge and bold vision, and sometimes just being in the right place at the right time talking to the right person. That&apos;s where I found my calling - 
              building intelligent systems that understand both people and purpose.
            </p>
            <p>
              These days, I&apos;m focused on building AI that actually ships. While most of the buzz is about the potential of AI, 
              I&apos;m more interested in what it can do right now for real problems. Power grid monitoring with computer vision? 
              Built it. Intelligent business automation? Shipped it. Making course selection less terrible for students? Done. 
              Turns out, there&apos;s a lot of interesting work when you cross a critical path with smart software.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="bg-muted/50 rounded-lg p-6 border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="bg-muted/50 rounded-lg p-6 border border-border"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                  <span className="text-sm text-accent font-medium">{exp.period}</span>
                </div>
                <p className="text-foreground/70 mb-2">{exp.company}</p>
                <p className="text-foreground/80">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-muted/50 rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready to climb the next mountain together?
            </h3>
            <p className="text-foreground/70 mb-6">
              I&apos;m actively seeking AI/ML and software engineering opportunities where I can apply my unique blend 
              of engineering fundamentals and modern technology skills. Let&apos;s build intelligent solutions that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-accent hover:bg-accent-hover text-white font-medium py-2 px-6 rounded-lg transition-colors inline-block text-center">
                Let&apos;s Connect
              </a>
              <a href="/" className="border border-border hover:border-accent text-foreground hover:text-accent font-medium py-2 px-6 rounded-lg transition-all inline-block text-center">
                See My Projects
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
