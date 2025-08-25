'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Hi Duke,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n\n---\nSent from buildwithduke.com contact form`
    );
    
    const mailtoLink = `mailto:hello@buildwithduke.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email',
      value: 'duke.gand@uwaterloo.ca',
      link: 'mailto:duke.gand@uwaterloo.ca',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: '/in/duke-of-waterloo',
      link: 'https://www.linkedin.com/in/duke-of-waterloo/',
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: '@BuildWithDuke',
      link: 'https://github.com/BuildWithDuke',
    },
    {
      icon: '𝕏',
      title: 'X',
      value: '@BuildWithDuke',
      link: 'https://x.com/BuildWithDuke',
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let&apos;s <span className="text-accent">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi? 
            I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-foreground"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-foreground resize-none"
                  placeholder="Tell me about your project, idea, or just say hello..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Other Ways to Reach Me</h2>
            
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-muted/50 border border-border rounded-lg hover:border-accent transition-all group hover:translate-x-1 fade-in-roll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl">{method.icon}</div>
                  <div>
                    <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-sm text-foreground/70">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-muted/50 border border-border rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="font-semibold text-foreground">Currently Available</h3>
              </div>
              <p className="text-foreground/70 text-sm">
                I&apos;m currently open to new projects and collaborations. 
                Whether you need a full-stack developer, want to explore AI/ML integrations, 
                or just want to discuss an idea, I&apos;d love to hear from you!
              </p>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="mt-6 text-center"
            >
              <p className="text-sm text-foreground/60">
                I typically respond within 24 hours ⚡
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}