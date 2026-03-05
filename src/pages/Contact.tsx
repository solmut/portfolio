import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, MapPin, Phone, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
              Let's build <br />
              <span className="text-emerald-400">together.</span>
            </h1>
            <p className="text-lg text-white/50 mb-12 max-w-md leading-relaxed">
              Have a question about our platform? Our team is here to help you scale your next big idea.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-white/40">hello@lumina.ai</p>
                  <p className="text-white/40">support@lumina.ai</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                  <p className="text-white/40">123 Innovation Drive</p>
                  <p className="text-white/40">San Francisco, CA 94103</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-white/40">+1 (555) 000-0000</p>
                  <p className="text-white/40">Mon-Fri, 9am-6pm PST</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-black" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                <p className="text-white/50 mb-8">We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-emerald-400 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-white/30 mb-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-white/30 mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-white/30 mb-2">Message</label>
                  <textarea 
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-emerald-500 text-black font-bold rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
