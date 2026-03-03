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
  Cpu, 
  Layers, 
  Sparkles, 
  Code2, 
  Terminal, 
  Database, 
  Workflow,
  BarChart3,
  Cloud
} from 'lucide-react';

const FeatureSection = ({ title, subtitle, items }: { title: string, subtitle: string, items: any[] }) => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
        <p className="text-white/50 max-w-2xl">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-3xl glass border border-white/5 hover:border-emerald-500/30 transition-all group"
          >
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
              <item.icon className="w-6 h-6 text-emerald-400 group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32">
      <div className="atmosphere opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
            Engineered for <br /> <span className="text-emerald-400">performance.</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Explore the powerful suite of tools designed to help you build the next generation of AI-driven applications.
          </p>
        </motion.div>
      </div>

      <FeatureSection 
        title="Core Infrastructure"
        subtitle="The foundation of your AI applications, built for speed and reliability."
        items={[
          { icon: Cpu, title: "Neural Processing", description: "Proprietary hardware acceleration for large language model inference." },
          { icon: Globe, title: "Edge Deployment", description: "Deploy your models to over 100 edge locations worldwide instantly." },
          { icon: Shield, title: "Secure Vault", description: "Enterprise-grade encryption for your sensitive training data and API keys." }
        ]}
      />

      <FeatureSection 
        title="Developer Tools"
        subtitle="Everything you need to integrate Lumina into your existing workflow."
        items={[
          { icon: Code2, title: "Universal SDK", description: "Support for Python, JavaScript, Go, and Rust with native type safety." },
          { icon: Terminal, title: "Lumina CLI", description: "Manage your deployments and monitor performance from your terminal." },
          { icon: Database, title: "Vector Storage", description: "Built-in high-performance vector database for RAG implementations." }
        ]}
      />

      <FeatureSection 
        title="Analytics & Insights"
        subtitle="Monitor, optimize, and scale your applications with real-time data."
        items={[
          { icon: BarChart3, title: "Real-time Metrics", description: "Track latency, token usage, and cost in real-time with granular detail." },
          { icon: Workflow, title: "Auto-Scaling", description: "Automatically adjust resources based on demand to optimize performance and cost." },
          { icon: Cloud, title: "Multi-Cloud Sync", description: "Sync your data across AWS, Azure, and Google Cloud seamlessly." }
        ]}
      />

      {/* Bento Grid Highlight */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[800px] md:h-[600px]">
            <div className="md:col-span-2 glass rounded-[3rem] p-12 flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12">
                <Sparkles className="w-12 h-12 text-emerald-400 animate-pulse" />
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-4">Advanced Model Fine-tuning</h3>
                <p className="text-white/50 max-w-md">Train custom models on your own data with our intuitive fine-tuning interface. No PhD required.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="glass rounded-[3rem] p-12 flex flex-col justify-end bg-emerald-500 text-black">
              <Layers className="w-12 h-12 mb-8" />
              <h3 className="text-3xl font-bold mb-4">Modular Architecture</h3>
              <p className="text-black/70">Pick and choose the components you need. Scale as you grow.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
