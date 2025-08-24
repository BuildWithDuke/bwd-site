'use client';

import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker'] },
    { category: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'LangChain'] },
    { category: 'Tools', items: ['Git', 'AWS', 'Vercel', 'Linux', 'CI/CD'] },
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Self-Directed Projects',
      period: '2023 - Present',
      description: 'Building innovative web applications and AI-powered tools that solve real-world problems.',
    },
    {
      title: 'AI/ML Explorer',
      company: 'Personal Research',
      period: '2022 - Present',
      description: 'Experimenting with cutting-edge ML models and integrating AI capabilities into web applications.',
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
            👋
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hey, I&apos;m Duke!
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            A passionate full-stack developer who loves building things that matter. 
            I&apos;m constantly exploring the intersection of web development and AI/ML to create 
            innovative solutions.
          </p>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">My Story</h2>
          <div className="prose prose-lg max-w-none text-foreground/80">
            <p className="mb-4">
              I started my journey in tech with a curiosity about how things work and a drive to build 
              solutions that make a difference. What began as tinkering with code has evolved into a 
              passion for creating full-stack applications that leverage the power of modern AI/ML.
            </p>
            <p className="mb-4">
              I believe in learning by doing, which is why I focus on building real projects that solve 
              actual problems. Whether it&apos;s automating daily tasks, creating intelligent tools, or 
              exploring new technologies, I&apos;m always working on something that pushes my boundaries.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, 
              or thinking about the next project that could make someone&apos;s life a little bit easier.
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
              Let&apos;s build something amazing together
            </h3>
            <p className="text-foreground/70 mb-6">
              I&apos;m always open to discussing new opportunities, collaborations, or just chatting about tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent hover:bg-accent-hover text-white font-medium py-2 px-6 rounded-lg transition-colors">
                Get In Touch
              </button>
              <button className="border border-border hover:border-accent text-foreground hover:text-accent font-medium py-2 px-6 rounded-lg transition-all">
                View My Work
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}