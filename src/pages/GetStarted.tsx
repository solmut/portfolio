/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  ArrowLeft, 
  ArrowRight,
  Github, 
  Mail, 
  Lock, 
  User, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const GetStarted = () => {
  const location = useLocation();
  const oauthSuccess = location.state?.oauthSuccess;
  const provider = location.state?.provider;

  const [step, setStep] = useState(oauthSuccess ? 3 : 1);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(step + 1);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col md:flex-row overflow-hidden">
      {/* Left Side: Brand/Visual */}
      <div className="hidden md:flex md:w-1/2 relative bg-emerald-500 overflow-hidden items-center justify-center p-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-600 opacity-50"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-black"
        >
          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 shadow-2xl">
            <Zap className="w-10 h-10 text-emerald-400 fill-current" />
          </div>
          <h2 className="text-6xl font-bold tracking-tighter mb-6 leading-tight">
            Join the <br /> intelligence <br /> revolution.
          </h2>
          <div className="space-y-6">
            {[
              "Unlimited access to neural engines",
              "Global edge deployment",
              "Enterprise-grade security",
              "24/7 priority support"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 font-semibold">
                <CheckCircle2 className="w-6 h-6" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-10 w-32 h-32 glass rounded-3xl border-white/20"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-10 w-24 h-24 glass rounded-full border-white/20"
        ></motion.div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex flex-col p-8 md:p-20 relative">
        <div className="atmosphere opacity-30" />
        
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>

        <div className="max-w-md w-full mx-auto my-auto">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {step === 1 ? (
              <>
                <h1 className="text-4xl font-bold tracking-tight mb-2">Create your account</h1>
                <p className="text-white/50 mb-8">Start your 14-day free trial. No credit card required.</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Link to="/auth/github" className="flex items-center justify-center gap-2 py-3 glass rounded-xl hover:bg-white/10 transition-colors font-medium">
                    <Github className="w-5 h-5" /> GitHub
                  </Link>
                  <Link to="/auth/google" className="flex items-center justify-center gap-2 py-3 glass rounded-xl hover:bg-white/10 transition-colors font-medium">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg> Google
                  </Link>
                </div>

                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase tracking-widest">
                    <span className="bg-[#050505] px-4 text-white/30">Or continue with email</span>
                  </div>
                </div>

                <form onSubmit={handleNext} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                      <input 
                        type="email" 
                        required
                        placeholder="name@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                    ) : (
                      <>Continue <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              </>
            ) : step === 2 ? (
              <>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-emerald-400" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">Set your password</h1>
                <p className="text-white/50 mb-8">Make it strong and memorable.</p>

                <form onSubmit={handleNext} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Password</label>
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Confirm Password</label>
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                    ) : (
                      <>Create Account <Sparkles className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
                <button 
                  onClick={() => setStep(1)}
                  className="w-full mt-4 text-sm text-white/40 hover:text-white transition-colors"
                >
                  Change email address
                </button>
              </>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-10 h-10 text-black" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-4">You're all set!</h1>
                <p className="text-white/50 mb-10 leading-relaxed">
                  {oauthSuccess 
                    ? `Successfully connected with ${provider}. Welcome to the future of digital intelligence.`
                    : "Welcome to the future of digital intelligence. We've sent a verification link to your email."}
                </p>
                <Link to="/" className="inline-block w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-emerald-400 transition-all">
                  Go to Dashboard
                </Link>
              </div>
            )}
          </motion.div>
        </div>

        <div className="mt-auto pt-12 text-center text-xs text-white/20">
          <p>By signing up, you agree to our <a href="#" className="underline hover:text-white">Terms of Service</a> and <a href="#" className="underline hover:text-white">Privacy Policy</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
