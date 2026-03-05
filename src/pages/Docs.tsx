/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Book, 
  Code2, 
  Terminal, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ title, items, activeItem, setActiveItem }: { title: string, items: string[], activeItem: string, setActiveItem: (s: string) => void }) => (
  <div className="mb-8">
    <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 ml-4">{title}</h4>
    <div className="space-y-1">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => setActiveItem(item)}
          className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center justify-between group ${activeItem === item ? 'bg-emerald-500/10 text-emerald-400' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
        >
          {item}
          {activeItem === item && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
        </button>
      ))}
    </div>
  </div>
);

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group mb-8">
      <button 
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2 rounded-lg glass opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10"
      >
        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-white/50" />}
      </button>
      <pre className="bg-black/50 border border-white/5 rounded-2xl p-6 overflow-x-auto font-mono text-sm leading-relaxed text-emerald-400/80">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const Docs = () => {
  const [activeItem, setActiveItem] = useState('Introduction');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col md:flex-row">
      <div className="atmosphere opacity-20" />
      
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-6 border-b border-white/5 sticky top-0 bg-[#050505] z-50">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-emerald-400 fill-current" />
          <span className="font-bold tracking-tight">Lumina Docs</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed inset-0 z-40 md:relative md:z-0 md:w-80 bg-[#050505] border-r border-white/5 p-8 overflow-y-auto transition-transform md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="hidden md:flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-emerald-400 fill-current" />
            <span className="text-xl font-bold tracking-tight">Lumina Docs</span>
          </div>
          <Link to="/" className="text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors">
            Back to Site
          </Link>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
          <input 
            type="text" 
            placeholder="Search documentation..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        <SidebarItem 
          title="Getting Started" 
          items={['Introduction', 'Quickstart', 'Installation', 'Authentication']} 
          activeItem={activeItem} 
          setActiveItem={setActiveItem}
        />
        <SidebarItem 
          title="Core Concepts" 
          items={['Neural Engines', 'Edge Deployment', 'Vector Storage', 'Fine-tuning']} 
          activeItem={activeItem} 
          setActiveItem={setActiveItem}
        />
        <SidebarItem 
          title="API Reference" 
          items={['Inference API', 'Management API', 'Webhooks', 'SDKs']} 
          activeItem={activeItem} 
          setActiveItem={setActiveItem}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-20 max-w-4xl mx-auto overflow-y-auto">
        <motion.div
          key={activeItem}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
            <Book className="w-3 h-3" />
            Documentation / {activeItem}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">{activeItem}</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Welcome to the Lumina documentation. This guide will help you understand the core concepts of our platform and get you started with building your first AI-driven application.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-12 tracking-tight">Overview</h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Lumina is a comprehensive platform for building, deploying, and scaling AI applications. We provide the infrastructure, tools, and APIs you need to integrate advanced intelligence into your products seamlessly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-2xl glass border border-white/5 hover:border-emerald-500/30 transition-all group cursor-pointer">
                <Zap className="w-6 h-6 text-emerald-400 mb-4" />
                <h3 className="font-bold mb-2">Fast Integration</h3>
                <p className="text-xs text-white/40">Get up and running in minutes with our universal SDKs.</p>
              </div>
              <div className="p-6 rounded-2xl glass border border-white/5 hover:border-emerald-500/30 transition-all group cursor-pointer">
                <Shield className="w-6 h-6 text-emerald-400 mb-4" />
                <h3 className="font-bold mb-2">Secure Infrastructure</h3>
                <p className="text-xs text-white/40">Enterprise-grade security for your models and data.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-12 tracking-tight">Quickstart</h2>
            <p className="text-white/50 leading-relaxed mb-6">
              To get started, install the Lumina CLI and initialize your first project:
            </p>

            <CodeBlock code={`# Install the Lumina CLI
npm install -g @lumina/cli

# Initialize a new project
lumina init my-ai-app

# Deploy your first model
lumina deploy`} />

            <h2 className="text-2xl font-bold mb-4 mt-12 tracking-tight">Next Steps</h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Once you've initialized your project, explore our API reference to learn more about our inference and management capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2">
                API Reference <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
                Join Discord
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Navigation */}
        <div className="mt-32 pt-12 border-t border-white/5 flex justify-between items-center">
          <div className="text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 block mb-1">Previous</span>
            <a href="#" className="text-sm font-bold text-emerald-400 hover:underline">Introduction</a>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 block mb-1">Next</span>
            <a href="#" className="text-sm font-bold text-emerald-400 hover:underline">Installation</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Docs;
