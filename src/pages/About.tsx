/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Shield, 
  Globe, 
  Heart, 
  Users, 
  Target, 
  Sparkles, 
  ArrowRight,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';

const TeamMember = ({ name, role, image, delay }: { name: string, role: string, image: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group"
  >
    <div className="relative aspect-square rounded-[3rem] overflow-hidden mb-6 glass border border-white/5 group-hover:border-emerald-500/30 transition-all">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <h3 className="text-xl font-bold mb-1 tracking-tight">{name}</h3>
    <p className="text-white/40 text-sm font-medium uppercase tracking-widest">{role}</p>
  </motion.div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      <div className="atmosphere opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
              We're building the <br /> <span className="text-emerald-400">future of AI.</span>
            </h1>
            <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
              Lumina was founded with a single mission: to democratize access to advanced artificial intelligence and empower developers to build the next generation of digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Mission/Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] glass border border-white/5 flex flex-col justify-center"
          >
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8">
              <Target className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Our Mission</h2>
            <p className="text-white/50 leading-relaxed">
              To provide the world's most powerful, secure, and accessible AI infrastructure. We believe that AI should be a tool for everyone, not just a few large corporations. Our platform is designed to be intuitive, scalable, and secure from the ground up.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] glass border border-white/5 flex flex-col justify-center"
          >
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8">
              <Sparkles className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Our Vision</h2>
            <p className="text-white/50 leading-relaxed">
              A world where every digital interaction is enhanced by intelligent, responsive, and ethical AI. We're working towards a future where developers can focus on creativity and innovation, while we handle the complex infrastructure that makes it all possible.
            </p>
          </motion.div>
        </section>

        {/* Values */}
        <section className="py-20 mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Values</h2>
            <p className="text-white/50">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Privacy First", description: "We believe your data is yours. We never use your training data to improve our own models." },
              { icon: Heart, title: "Ethical AI", description: "We are committed to building AI that is fair, transparent, and beneficial to humanity." },
              { icon: Users, title: "Community Driven", description: "We listen to our developers and build the features they need to succeed." },
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-3xl glass border border-white/5 text-center">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The Team</h2>
            <p className="text-white/50">Meet the people behind Lumina.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Alex Rivers" 
              role="CEO & Founder" 
              image="https://picsum.photos/seed/alex/400/400" 
              delay={0.1}
            />
            <TeamMember 
              name="Sarah Chen" 
              role="CTO" 
              image="https://picsum.photos/seed/sarah/400/400" 
              delay={0.2}
            />
            <TeamMember 
              name="Marcus Thorne" 
              role="Head of Design" 
              image="https://picsum.photos/seed/marcus/400/400" 
              delay={0.3}
            />
            <TeamMember 
              name="Elena Vance" 
              role="Lead AI Engineer" 
              image="https://picsum.photos/seed/elena/400/400" 
              delay={0.4}
            />
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20">
          <div className="p-12 md:p-20 rounded-[3rem] glass border border-white/5 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight relative z-10">
              Want to join the <br /> <span className="text-emerald-400">revolution?</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12 relative z-10">
              We're always looking for talented individuals who are passionate about AI and the future of the web.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button className="w-full sm:w-auto px-10 py-5 bg-emerald-500 text-black font-bold rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                View Openings <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
