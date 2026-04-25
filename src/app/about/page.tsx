'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  const skills = [
    { category: 'AI/ML', items: ['PyTorch', 'FastAI', 'LangChain', 'OpenAI', 'Ollama', 'Deep RL', 'Computer Vision'] },
    { category: 'Backend', items: ['Python', 'Node.js', 'Go', 'Flask', 'FastAPI', 'Express', 'PostgreSQL'] },
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'SvelteKit', 'Tailwind'] },
    { category: 'Engineering', items: ['Power Systems', 'Data Engineering', 'Automation', 'Linux', 'Docker', 'Nginx'] },
  ];

  const experiences = [
    {
      title: 'Nuclear Systems Engineer (AI Ambassador)',
      company: 'Ontario Power Generation',
      period: 'Jun 2025 - Present',
      description: 'Training ML pilots on a $26.8B nuclear refurbishment. Built dashboards used by VPs and teams of 200+. Saved 520 hours of monthly work through automation.',
    },
    {
      title: 'Co-Founder/CTO',
      company: 'Stealth AI Startup',
      period: 'Oct 2025 - Dec 2025',
      description: 'Building the future of A → Z routing. Deep Reinforcement Learning & multi-objective optimization algorithms. Multi-objective routing engine for pipeline projects with adversarial agent validation.',
    },
    {
      title: 'Founder/CEO',
      company: 'Patched Up',
      period: 'Oct 2023 - Present',
      description: 'Uber for Merch. Built the brand, managed ops, grew the client base from scratch.',
    },
    {
      title: 'Work Optimization Analyst',
      company: 'Ontario Power Generation (Co-op)',
      period: 'Sep 2024 - Dec 2024',
      description: 'Saw broken reporting. Made a Python pipeline. Gave the team 200 hours back in 2 days.',
    },
    {
      title: 'Automation & Data Engineering',
      company: 'IESO (Co-op)',
      period: 'Jan 2024 - Apr 2024',
      description: 'Automated workflows for 25+ staff. Found new forecasting insights. Led technical workshops week 3 onwards.',
    },
    {
      title: 'Field Data Engineering',
      company: 'BC Hydro (Co-op)',
      period: 'Jan 2023 - Apr 2023',
      description: 'Built skills tracking for 250 electricians. Learned how the grid actually works from the field.',
    },
    {
      title: 'Engineering Society President',
      company: 'University of Waterloo',
      period: 'Apr 2022 - Aug 2023',
      description: 'Ran a 10k student org. Launched the Waterloo Engineering Iron Pin. Brought Tesla+ to campus for recruiting.',
    },
    {
      title: 'Fullstack Software Developer',
      company: 'Hifi (Co-op)',
      period: 'May 2022 - Aug 2022',
      description: 'Dashboard was breaking under 73M records. Rebuilt it, made it 14% faster, helped ship SOC2.',
    },
    {
      title: 'Software Test Engineering',
      company: 'Electrovaya (Co-op)',
      period: 'Sep 2021 - Dec 2021',
      description: 'Tested battery firmware. Optimized the tests. Learned embedded systems and CAN bus.',
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
              A curious spark that started with Lego sets soon led to nuclear reactors, neural networks, and everything in-between.
              My engineering foundation was built in the critical infrastructure world: BC Hydro, IESO, Ontario Power Generation.
              automating workflows, building data pipelines to process billions of records, and saving 100,000+ hours/year of manual work.
              Through co-op placements across the grid, I saw firsthand how technology transforms the backbone that powers modern society.
            </p>
            <p className="mb-4">
              Leading 10,000+ engineering students as the University of Waterloo Engineering Society&apos;s President taught me that
              breakthrough innovation happens at the intersection of deep technical knowledge and bold vision. And sometimes just
              being in the right place at the right time talking to the right person. I created new traditions, put out literal fires,
              and learned how to ship under pressure. Give me a messy manual process and I&apos;ll come back with an automated system that just works.
            </p>
            <p>
              Now I&apos;m an AI Ambassador on Ontario&apos;s $26.8B Nuclear Refurbishment, exploring AI pilots that help complete
              the project early and under budget. Looking ahead, I&apos;m drawn to Forward Deployed roles. The kind of work where
              you&apos;re not just building software but embedding directly with customers to solve their hardest challenges.
              Where technical excellence meets real-world urgency, and where every solution makes a measurable difference
              in how critical systems operate. Hard problems, fast teams. Let&apos;s change the world.
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
              <Link href="/contact" className="bg-accent hover:bg-accent-hover text-white font-medium py-2 px-6 rounded-lg transition-colors inline-block text-center">
                Let&apos;s Connect
              </Link>
              <Link href="/" className="border border-border hover:border-accent text-foreground hover:text-accent font-medium py-2 px-6 rounded-lg transition-all inline-block text-center">
                See My Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
