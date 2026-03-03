/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Shield, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingCard = ({ 
  tier, 
  price, 
  description, 
  features, 
  isPopular, 
  isAnnual 
}: { 
  tier: string, 
  price: string, 
  description: string, 
  features: string[], 
  isPopular?: boolean,
  isAnnual: boolean
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`p-8 rounded-[3rem] glass flex flex-col relative ${isPopular ? 'border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.1)]' : 'border-white/5'}`}
  >
    {isPopular && (
      <div className="absolute top-0 right-12 -translate-y-1/2 px-4 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full uppercase tracking-widest">
        Most Popular
      </div>
    )}
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-2 tracking-tight">{tier}</h3>
      <p className="text-white/50 text-sm">{description}</p>
    </div>
    <div className="mb-8">
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-bold tracking-tighter">${price}</span>
        <span className="text-white/40 text-sm font-medium">/ {isAnnual ? 'year' : 'month'}</span>
      </div>
    </div>
    <div className="space-y-4 mb-10 flex-1">
      {features.map((feature, i) => (
        <div key={i} className="flex items-center gap-3 text-sm text-white/70">
          <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
            <Check className="w-3 h-3 text-emerald-400" />
          </div>
          <span>{feature}</span>
        </div>
      ))}
    </div>
    <Link 
      to="/get-started"
      className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${isPopular ? 'bg-emerald-500 text-black hover:bg-emerald-400' : 'bg-white/5 text-white hover:bg-white/10'}`}
    >
      Get Started
    </Link>
  </motion.div>
);

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      <div className="atmosphere opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
              Simple, transparent <br /> <span className="text-emerald-400">pricing.</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12">
              Choose the plan that's right for you and start building with Lumina today.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-white/40'}`}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-14 h-8 bg-white/10 rounded-full p-1 relative transition-colors"
              >
                <motion.div 
                  animate={{ x: isAnnual ? 24 : 0 }}
                  className="w-6 h-6 bg-emerald-500 rounded-full shadow-lg"
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-white/40'}`}>Yearly</span>
              <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full uppercase tracking-widest">
                Save 20%
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            tier="Starter"
            price={isAnnual ? "0" : "0"}
            description="Perfect for hobbyists and side projects."
            isAnnual={isAnnual}
            features={[
              "1,000 requests per month",
              "Standard neural engine",
              "Community support",
              "Basic edge deployment",
              "Public API access"
            ]}
          />
          <PricingCard 
            tier="Pro"
            price={isAnnual ? "390" : "39"}
            description="Ideal for growing startups and developers."
            isPopular={true}
            isAnnual={isAnnual}
            features={[
              "Unlimited requests",
              "Advanced neural engine",
              "Priority email support",
              "Global edge deployment",
              "Private API access",
              "Custom fine-tuning",
              "Advanced analytics"
            ]}
          />
          <PricingCard 
            tier="Enterprise"
            price={isAnnual ? "990" : "99"}
            description="For large organizations with heavy workloads."
            isAnnual={isAnnual}
            features={[
              "Everything in Pro",
              "Dedicated account manager",
              "24/7 phone support",
              "Custom SLA guarantees",
              "On-premise deployment",
              "Advanced security vault",
              "Custom neural architecture"
            ]}
          />
        </div>

        {/* Comparison Table Mock */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Compare Features</h2>
            <p className="text-white/50">A detailed breakdown of what's included in each plan.</p>
          </div>
          <div className="glass rounded-[3rem] overflow-hidden border border-white/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="p-8 text-sm font-bold uppercase tracking-widest text-white/40">Feature</th>
                  <th className="p-8 text-sm font-bold uppercase tracking-widest text-white/40">Starter</th>
                  <th className="p-8 text-sm font-bold uppercase tracking-widest text-white/40">Pro</th>
                  <th className="p-8 text-sm font-bold uppercase tracking-widest text-white/40">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { name: "Neural Engine", starter: "Standard", pro: "Advanced", enterprise: "Custom" },
                  { name: "Requests", starter: "1,000/mo", pro: "Unlimited", enterprise: "Unlimited" },
                  { name: "Support", starter: "Community", pro: "Priority", enterprise: "Dedicated" },
                  { name: "SLA", starter: "-", pro: "99.9%", enterprise: "99.99%" },
                  { name: "Fine-tuning", starter: "-", pro: "Included", enterprise: "Unlimited" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-8 font-medium">{row.name}</td>
                    <td className="p-8 text-white/50">{row.starter}</td>
                    <td className="p-8 text-white/50">{row.pro}</td>
                    <td className="p-8 text-white/50">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Mock */}
        <section className="mt-32 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade your plan at any time from your dashboard." },
              { q: "What happens if I exceed my request limit?", a: "On the Starter plan, requests will be throttled. Pro and Enterprise plans have unlimited requests." },
              { q: "Do you offer a free trial?", a: "Yes, all paid plans come with a 14-day free trial. No credit card required." },
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl glass border border-white/5">
                <h4 className="font-bold mb-3 text-lg">{faq.q}</h4>
                <p className="text-white/50 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
