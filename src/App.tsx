/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight, 
  ChevronRight, 
  Menu, 
  X, 
  Github, 
  Twitter, 
  Layers,
  Cpu,
  Sparkles,
  Check
} from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import GitHubLogin from './pages/GitHubLogin';
import GoogleLogin from './pages/GoogleLogin';
import FeaturesPage from './pages/Features';
import PricingPage from './pages/Pricing';
import AboutPage from './pages/About';
import DocsPage from './pages/Docs';
import ContactPage from './pages/Contact';
import BlogPage from './pages/Blog';
import { Privacy, Terms } from './pages/Legal';
import LuminaAI from './pages/LuminaAI';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-black fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight">Lumina</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Features</Link>
          <Link to="/pricing" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Pricing</Link>
          <Link to="/blog" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Blog</Link>
          <Link to="/contact" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Contact</Link>
          <Link to="/docs" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Docs</Link>
          <Link to="/ai" className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest hover:bg-emerald-500/20 transition-all">
            <Sparkles className="w-3 h-3" /> Lumina AI
          </Link>
          <button 
            onClick={() => navigate('/get-started')}
            className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-emerald-400 transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass mt-2 mx-4 rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <Link to="/features" className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
              <Link to="/pricing" className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
              <Link to="/blog" className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              <Link to="/about" className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/docs" className="text-lg font-medium text-white/70" onClick={() => setIsMobileMenuOpen(false)}>Docs</Link>
              <Link to="/ai" className="text-lg font-medium text-emerald-400 flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Sparkles className="w-4 h-4" /> Lumina AI
              </Link>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('/get-started');
                }}
                className="w-full py-3 bg-white text-black font-bold rounded-xl mt-4"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            The future of <br />
            <span className="text-emerald-400">digital intelligence.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-10 font-light leading-relaxed">
            Lumina is the world's most advanced platform for building, deploying, and scaling AI-driven applications. Built for speed, designed for precision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate('/get-started')}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 text-black font-bold rounded-2xl hover:bg-emerald-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Building <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/docs')}
              className="w-full sm:w-auto px-8 py-4 glass text-white font-semibold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              View Documentation
            </button>
          </div>
        </motion.div>

        {/* Hero Image/Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass rounded-3xl overflow-hidden aspect-video md:aspect-[21/9] border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-8 w-full max-w-4xl">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-32 md:h-48 rounded-xl bg-white/5 border border-white/10 animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen selection:bg-emerald-500/30 selection:text-emerald-400">
    <div className="atmosphere" />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

const LandingPage = () => (
  <>
    <Hero />
    <Stats />
    <Features />
    
    {/* CTA Section */}
    <section className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <CTASection />
      </div>
    </section>
  </>
);

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <div className="p-12 md:p-20 rounded-[3rem] bg-emerald-500 relative overflow-hidden group">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-all duration-700"></div>
      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tighter mb-8 leading-tight">
          Ready to build the <br className="hidden md:block" /> next big thing?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => navigate('/get-started')}
            className="w-full sm:w-auto px-10 py-5 bg-black text-white font-bold rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            Get Started Now <ChevronRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto px-10 py-5 bg-black/10 text-black font-bold rounded-2xl hover:bg-black/20 transition-all"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};
const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="p-8 rounded-3xl glass border border-white/5 hover:border-emerald-500/30 transition-all group"
  >
    <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
      <Icon className="w-6 h-6 text-emerald-400 group-hover:text-black transition-colors" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-white/50 leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Built for the modern web.</h2>
          <p className="text-white/50 max-w-xl mx-auto">Everything you need to ship high-performance applications at scale.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Zap} 
            title="Lightning Fast" 
            description="Optimized for sub-second response times across the globe. Your users won't wait."
            delay={0.1}
          />
          <FeatureCard 
            icon={Shield} 
            title="Secure by Default" 
            description="Enterprise-grade security protocols baked into every layer of our infrastructure."
            delay={0.2}
          />
          <FeatureCard 
            icon={Globe} 
            title="Global Scale" 
            description="Deploy to 100+ edge locations with a single click. Reach everyone, everywhere."
            delay={0.3}
          />
          <FeatureCard 
            icon={Cpu} 
            title="Neural Engine" 
            description="Advanced processing units designed specifically for heavy AI workloads."
            delay={0.4}
          />
          <FeatureCard 
            icon={Layers} 
            title="Modular Design" 
            description="Plug and play components that fit perfectly into your existing tech stack."
            delay={0.5}
          />
          <FeatureCard 
            icon={Sparkles} 
            title="Magic UX" 
            description="Delight your users with interfaces that feel intuitive and responsive."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Active Users', value: '250K+' },
            { label: 'Uptime', value: '99.99%' },
            { label: 'Requests/sec', value: '1.2M' },
            { label: 'Countries', value: '180+' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-5xl font-bold mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/40 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-emerald-400 fill-current" />
              <span className="text-xl font-bold tracking-tight">Lumina</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Building the infrastructure for the next generation of digital experiences.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Product</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/docs" className="hover:text-white transition-colors">Integrations</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/ai" className="hover:text-white transition-colors">Lumina AI</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-white/30">
          <p>© 2024 Lumina Technologies Inc. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/auth/github" element={<GitHubLogin />} />
        <Route path="/auth/google" element={<GoogleLogin />} />
        <Route path="/features" element={<Layout><FeaturesPage /></Layout>} />
        <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
        <Route path="/terms" element={<Layout><Terms /></Layout>} />
        <Route path="/ai" element={<LuminaAI />} />
      </Routes>
    </BrowserRouter>
  );
}
