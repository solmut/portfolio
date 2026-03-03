/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, ChevronRight, User, Shield, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
  const navigate = useNavigate();
  const [isAuthorizing, setIsAuthorizing] = useState(false);

  const handleAuthorize = () => {
    setIsAuthorizing(true);
    setTimeout(() => {
      navigate('/get-started', { state: { oauthSuccess: true, provider: 'Google' } });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-[#3c4043] font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-[450px] bg-white rounded-lg shadow-sm border border-[#dadce0] overflow-hidden">
        <div className="p-8">
          {/* Google Logo */}
          <div className="flex justify-center mb-4">
            <svg className="w-20 h-8" viewBox="0 0 74 24" fill="currentColor">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.344-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0 5.48 0 0 5.48 0 12.24s5.48 12.24 12.24 12.24c7.055 0 11.727-4.97 11.727-11.946 0-.807-.087-1.427-.193-2.251h-11.533z" fill="#4285F4" />
              <path d="M41.02 12.24c0 3.78-2.88 6.48-6.48 6.48s-6.48-2.7-6.48-6.48 2.88-6.48 6.48-6.48 6.48 2.7 6.48 6.48zm-10.38 0c0 2.61 1.89 4.41 3.9 4.41s3.9-1.8 3.9-4.41-1.89-4.41-3.9-4.41-3.9 1.8-3.9 4.41z" fill="#EA4335" />
              <path d="M55.02 12.24c0 3.78-2.88 6.48-6.48 6.48s-6.48-2.7-6.48-6.48 2.88-6.48 6.48-6.48 6.48 2.7 6.48 6.48zm-10.38 0c0 2.61 1.89 4.41 3.9 4.41s3.9-1.8 3.9-4.41-1.89-4.41-3.9-4.41-3.9 1.8-3.9 4.41z" fill="#FBBC05" />
              <path d="M68.52 6.12v17.28c0 7.11-4.18 10.03-9.13 10.03-4.63 0-7.42-3.11-8.47-5.63l2.25-.94c.4.95 1.39 2.25 3.22 2.25 2.1 0 3.44-1.3 3.44-3.74v-1.44h-.08c-.64.79-1.87 1.48-3.41 1.48-3.2 0-6.12-2.79-6.12-6.44s2.92-6.48 6.12-6.48c1.54 0 2.77.69 3.41 1.44h.08V6.12h2.52zm-7.65 6.12c0 2.57 1.73 4.41 3.74 4.41s3.74-1.84 3.74-4.41-1.73-4.41-3.74-4.41-3.74 1.84-3.74 4.41z" fill="#4285F4" />
              <path d="M73.52 1v22h-2.52V1h2.52z" fill="#34A853" />
              <path d="M85.02 14.4l2.02 1.35c-.66.98-2.27 2.61-5.13 2.61-3.33 0-5.85-2.57-5.85-6.12s2.52-6.12 5.54-6.12c3.06 0 4.63 2.61 5.13 3.87l.27.68-7.92 3.28c.61 1.2 1.55 1.8 2.88 1.8s2.27-.6 3.01-1.35zm-6.39-2.34l5.27-2.18c-.3-.76-1.19-1.3-2.25-1.3-1.39 0-3.06 1.24-3.02 3.48z" fill="#EA4335" />
            </svg>
          </div>

          <h1 className="text-2xl font-medium text-center mb-2">Sign in</h1>
          <p className="text-center text-base mb-8">to continue to <span className="font-medium">Lumina</span></p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 border border-[#dadce0] rounded-md hover:bg-[#f8f9fa] cursor-pointer transition-colors group">
              <div className="w-8 h-8 bg-[#4285f4] rounded-full flex items-center justify-center text-white font-medium">
                S
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">solmut00@gmail.com</p>
                <p className="text-xs text-[#5f6368]">Signed in</p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#5f6368]" />
            </div>

            <div className="flex items-center gap-3 p-3 border border-[#dadce0] rounded-md hover:bg-[#f8f9fa] cursor-pointer transition-colors">
              <div className="w-8 h-8 rounded-full flex items-center justify-center border border-[#dadce0]">
                <User className="w-5 h-5 text-[#5f6368]" />
              </div>
              <p className="text-sm font-medium">Use another account</p>
            </div>
          </div>

          <div className="mt-10 text-xs text-[#5f6368] leading-relaxed">
            <p>
              To continue, Google will share your name, email address, language preference, and profile picture with Lumina. Before using this app, you can review Lumina's <a href="#" className="text-[#1a73e8] hover:underline">privacy policy</a> and <a href="#" className="text-[#1a73e8] hover:underline">terms of service</a>.
            </p>
          </div>

          <div className="mt-10 flex justify-between items-center">
            <button 
              onClick={() => navigate('/get-started')}
              className="text-[#1a73e8] font-medium text-sm hover:bg-[#f1f3f4] px-4 py-2 rounded transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleAuthorize}
              disabled={isAuthorizing}
              className="bg-[#1a73e8] text-white font-medium text-sm px-6 py-2 rounded hover:bg-[#1b66c9] shadow-sm transition-all disabled:opacity-50"
            >
              {isAuthorizing ? 'Signing in...' : 'Next'}
            </button>
          </div>
        </div>

        <div className="bg-[#f8f9fa] p-4 flex justify-center gap-6 text-xs text-[#5f6368]">
          <a href="#" className="hover:underline">English (United States)</a>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleLogin;
