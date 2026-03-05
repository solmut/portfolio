import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const LegalLayout = ({ title, lastUpdated, children }: { title: string, lastUpdated: string, children: React.ReactNode }) => (
  <div className="pt-32 pb-20">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-emerald-400" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Legal Center</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">{title}</h1>
        <p className="text-white/40 text-sm mb-16 uppercase tracking-widest font-bold">Last Updated: {lastUpdated}</p>
        
        <div className="prose prose-invert prose-emerald max-w-none">
          {children}
        </div>
      </motion.div>
    </div>
  </div>
);

export const Privacy = () => (
  <LegalLayout title="Privacy Policy" lastUpdated="March 01, 2024">
    <div className="space-y-12 text-white/70 leading-relaxed">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
        <p>
          At Lumina Technologies Inc. ("Lumina", "we", "us", or "our"), we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website lumina.ai and our practices for collecting, using, maintaining, protecting, and disclosing that information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
        <p>We collect several types of information from and about users of our Website, including:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Technical data (IP address, browser type, operating system)</li>
          <li>Usage data (how you interact with our platform and services)</li>
          <li>AI training data (only with explicit consent and for specific enterprise plans)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
        <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>To present our Website and its contents to you.</li>
          <li>To provide you with information, products, or services that you request from us.</li>
          <li>To fulfill any other purpose for which you provide it.</li>
          <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
        <p>
          We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. Any payment transactions will be encrypted using SSL technology.
        </p>
      </section>
    </div>
  </LegalLayout>
);

export const Terms = () => (
  <LegalLayout title="Terms of Service" lastUpdated="March 01, 2024">
    <div className="space-y-12 text-white/70 leading-relaxed">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Lumina's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on Lumina's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>Attempt to decompile or reverse engineer any software contained on Lumina's website;</li>
          <li>Remove any copyright or other proprietary notations from the materials.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
        <p>
          The materials on Lumina's website are provided on an 'as is' basis. Lumina makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
        <p>
          In no event shall Lumina or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Lumina's website, even if Lumina or a Lumina authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>
      </section>
    </div>
  </LegalLayout>
);
